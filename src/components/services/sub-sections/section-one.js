import React from "react";
import "./section-one.css";
import Image from "next/image";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";

export default function SectionOne() {
  return (
    <div className="flex flex-col items-center relative gap-36 p-5 lg:py-20  overflow-hidden bg-gradient-to-l from-gray-900 to-blue-800">
      {/* Section 1: Full-stack web development */}
      <div className="relative w-full h-[350px] my-10 lg:my-36">
        <Image width={400} height={400} src='/logos/mongoDB.png' alt="MongoDB Logo" className="absolute hidden lg:block w-1/6 h-auto mongoDB" />
        <Image width={500} height={500} src='/logos/react.png' alt="React Logo" className="absolute hidden lg:block w-1/6 h-auto react" />
        <Image width={500} height={500} src='/logos/html-css-js.png' alt="HTML/CSS Logo" className="absolute hidden lg:block w-1/4 h-auto html-css" />
        <div className="bg-white text-secondary rounded-full w-full sm:w-[550px] aspect-square flex flex-col justify-center items-center mx-auto shadow-lg shadow-purple-500/70 p-5 text-center z-10 ">
          <div className="lg:w-[390px] flex flex-col gap-1 lg:gap-10">
            <h2 className="lg:text-4xl font-bold text-shadow">Full-stack web development</h2>
            <p className="lg:text-2xl font-bold">
              Dynamic, responsive websites to take your business online or upgrade
              your current platform.
            </p>
            <div className="flex justify-center mt-10">
              <Link href='/service/portfolio' className="flex flex-row gap-5 px-5 py-3 items-center justify-center bg-primary rounded-md">
                <span className="lg:text-2xl">Learn more</span>
                <MoveUpRight size={32} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Professional video editing */}
      <div className="relative flex flex-col w-full h-[350px] my-10 lg:my-36">
        <div className="bg-white text-white rounded-full w-full sm:w-[550px] aspect-square flex flex-col justify-center items-center mx-auto shadow-lg shadow-purple-500/70 p-5 text-center ">
          <div className="relative text-secondary w-full lg:w-[390px] flex flex-col gap-1 lg:gap-5">
            <h2 className="lg:text-4xl font-bold px-5 text-shadow">Professional video editing</h2>
            <p className="lg:text-2xl font-bold">
              High-quality edits for commercials, product videos, social media,
              and more.
            </p>
            <div className="flex justify-center mt-10">
              <Link href='/service/portfolio' className="flex flex-row gap-5 px-5 py-3 items-center justify-center bg-primary rounded-md">
                <span className="lg:text-2xl">Learn more</span>
                <MoveUpRight size={32} />
              </Link>
            </div>
          </div>
        </div>
        <Image width={500} height={500}
          src='/logos/premiere.png'
          alt="Adobe Premiere Logo"
          className="absolute hidden lg:block w-1/6 h-auto premiere"
        />
        <Image width={500} height={500}
          src='/logos/davinci.png'
          alt="DaVinci Resolve Logo"
          className="absolute hidden lg:block w-1/6 h-auto davinci"
        />
      </div>
      {/* 
      <div className="relative w-full h-[350px] my-36">
        <Image width={500} height={500} src='/logos/security.png' alt="Shield Icon" className="absolute w-1/6 h-auto shield" />
        <Image width={500} height={500}
          src='/logos/bitdefender.png'
          alt="Bitdefender Logo"
          className="absolute w-1/6 h-auto bitdefender"
        />
        <div className="bg-white text-secondary rounded-full w-72 sm:w-[550px] aspect-square flex flex-col justify-center items-center mx-auto shadow-lg shadow-purple-500/70 p-5 text-center z-10">
          <h2 className="text-4xl font-bold text-shadow">Cybersecurity audits and solutions</h2>
          <p className="text-2xl font-bold">
            Keep your business safe with a complete assessment of your digital
            assets.
          </p>
          <div className="flex justify-center mt-10">
              <Link href='/service/portfolio' className="flex flex-row gap-5 px-5 py-3 items-center justify-center bg-primary rounded-md">
                <span className="text-2xl">Learn more</span>
                <MoveUpRight size={32} />
              </Link>
            </div>
        </div>
      </div> */}

      {/* Section 4: AWS Cloud Solutions */}
      <div className="relative w-full h-[350px] my-10 lg:my-36">
        <Image width={500} height={500} src='/logos/aws.png' alt="AWS Logo" className="absolute hidden lg:block w-1/6 h-auto aws" />
        <Image width={500} height={500} src='/logos/devops.png' alt="DevOps Logo" className="absolute hidden lg:block w-1/3 h-auto devops" />
        <div className="bg-white text-white rounded-full w-full sm:w-[550px] aspect-square flex flex-col justify-center items-center mx-auto shadow-lg shadow-purple-500/70 p-5 text-center ">
          <div className="relative text-secondary lg:w-[390px] flex flex-col gap-1 lg:gap-5">
            <h2 className="lg:text-4xl font-bold text-shadow">AWS cloud solutions</h2>
            <p className="lg:text-2xl font-bold">
              Scale your operations with secure, cost-efficient cloud technology.
            </p>
            <div className="flex justify-center mt-10">
              <Link href='/service/portfolio' className="flex flex-row gap-5 px-5 py-3 items-center justify-center bg-primary rounded-md">
                <span className="lg:text-2xl">Learn more</span>
                <MoveUpRight size={32} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Section 5: SEO and Digital Marketing */}
      <div className="relative w-full h-[350px] my-10 lg:my-36 lg:pb-36">
        <Image width={500} height={500} src='/logos/seo.png' alt="SEO Icon" className="absolute hidden lg:block w-1/6 h-auto seo" />
        <Image width={500} height={500} src='/logos/man-running.png' alt="man Icon" className="absolute hidden lg:block w-1/6 h-auto man" />
        <div className="bg-white text-white rounded-full w-full sm:w-[550px] aspect-square flex flex-col justify-center items-center mx-auto shadow-lg shadow-purple-500/70 p-5 text-center ">
          <div className="relative text-secondary lg:w-[390px] flex flex-col gap-1 lg:gap-5">
            <h2 className="lg:text-4xl font-bold text-shadow">SEO</h2>
            <p className="lg:text-2xl font-bold">
              Optimize your web presence to rank higher on search engines and
              boost traffic.
            </p>
            <div className="flex justify-center mt-10">
              <Link href='/service/portfolio' className="flex flex-row gap-5 px-5 py-3 items-center justify-center bg-primary rounded-md">
                <span className="lg:text-2xl">Learn more</span>
                <MoveUpRight size={32} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
