import { Inter } from 'next/font/google';
import { Montserrat  } from 'next/font/google';
import { Mulish  } from 'next/font/google';
import { Orbitron } from "next/font/google";

export const orbitron = Orbitron({ subsets: ["latin"] });
export const inter = Inter({ subsets: ['latin'] });
export const montserrat = Montserrat({subsets: ['latin'], weight:'400'});
export const mulish = Mulish({subsets: ['latin'], weight:'700'});