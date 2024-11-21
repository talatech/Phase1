# syntax=docker.io/docker/dockerfile:1

# Usa la versión específica de Node.js 18.18.0
FROM node:18.18.0-alpine AS base

# Instalar dependencias solo cuando sea necesario
FROM base AS deps
# Requerir libc6-compat en Alpine para algunas bibliotecas nativas
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Instalar dependencias basándose en el gestor de paquetes disponible
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* .npmrc* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Recompilar el código fuente solo cuando sea necesario
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . ./

# Desactivar telemetría de Next.js durante la compilación (opcional)
# ENV NEXT_TELEMETRY_DISABLED=1

RUN \
  if [ -f yarn.lock ]; then yarn run build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Imagen para producción: copia los archivos necesarios y ejecuta Next.js
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
# Desactivar telemetría de Next.js en tiempo de ejecución (opcional)
# ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copia los archivos públicos y el resultado de compilación
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Cambiar al usuario `nextjs` para mayor seguridad
USER nextjs

# Exponer el puerto 3000 y definir variables de entorno necesarias
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Ejecutar el servidor generado por Next.js
CMD ["node", "server.js"]
