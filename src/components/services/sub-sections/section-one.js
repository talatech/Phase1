import React from "react";
import "./section-one.css"; // CSS file for styles
import Image from "next/image";

export default function SectionOne() {
  return (
    <div className="flex flex-col items-center relative gap-36 py-20 overflow-hidden bg-gradient-to-l from-gray-900 to-blue-800">
      {/* Section 1: Full-stack web development */}
      <div className="relative w-full h-[350px] my-36">
        <Image width={400} height={400} src='/logos/mongoDB.png' alt="MongoDB Logo" className="absolute w-1/6 h-auto mongoDB" />
        <Image width={500} height={500} src='/logos/react.png' alt="React Logo" className="absolute w-1/6 h-auto react" />
        <Image width={500} height={500} src='/logos/html-css-js.png' alt="HTML/CSS Logo" className="absolute w-1/4 h-auto html-css" />
        <Image width={500} height={500} src='/logos/ladderStraight.png' alt="Ladder" className="absolute -translate-x-1/2 w-1/6 h-auto top-[145%] left-1/2" />
        <div className="bg-purple-600 text-white rounded-full w-72 sm:w-[550px] aspect-square flex flex-col justify-center items-center mx-auto shadow-lg shadow-purple-500/70 p-5 text-center z-10">
          <div className="w-[390px] flex flex-col gap-5">
            <h2 className="text-4xl font-bold">Full-stack web development</h2>
            <p className="text-2xl font-bold">
              Dynamic, responsive websites to take your business online or upgrade
              your current platform.
            </p>
          </div>
        </div>
      </div>

      {/* Section 2: Professional video editing */}
      <div className="relative flex flex-col w-full h-[350px] my-36">
        <div className="bg-purple-600 text-white rounded-full w-72 sm:w-[550px] aspect-square flex flex-col justify-center items-center mx-auto shadow-lg shadow-purple-500/70 p-5 text-center ">
          <div className="relative w-[390px] flex flex-col gap-5">
            <h2 className="text-4xl font-bold">Professional video editing</h2>
            <p className="text-2xl font-bold">
              High-quality edits for commercials, product videos, social media,
              and more.
            </p>
          </div>
        </div>
        <Image width={500} height={500}
          src='/logos/premiere.png'
          alt="Adobe Premiere Logo"
          className="absolute w-1/6 h-auto premiere"
        />
        <Image width={500} height={500}
          src='/logos/davinci.png'
          alt="DaVinci Resolve Logo"
          className="absolute w-1/6 h-auto davinci"
        />
        <Image width={500} height={500} src='/logos/ladderInclinedLeft.png' alt="Ladder" className="absolute translate-x-[85%] w-[15%] h-auto top-[100%] left-1/2" />

      </div>

      {/* Section 3: Cybersecurity */}
      <div className="relative w-full h-[350px] my-36">
        <Image width={500} height={500} src='/logos/security.png' alt="Shield Icon" className="absolute w-1/6 h-auto shield" />
        <Image width={500} height={500}
          src='/logos/bitdefender.png'
          alt="Bitdefender Logo"
          className="absolute w-1/6 h-auto bitdefender"
        />
        <Image width={500} height={500} src='/logos/ladderStraight.png' alt="Ladder" className="absolute -translate-x-1/2 w-1/6 h-auto top-[145%] left-1/2" />
        <div className="bg-purple-600 text-white rounded-full w-72 sm:w-[550px] aspect-square flex flex-col justify-center items-center mx-auto shadow-lg shadow-purple-500/70 p-5 text-center z-10">
          <h2 className="text-4xl font-bold">Cybersecurity audits and solutions</h2>
          <p className="text-2xl font-bold">
            Keep your business safe with a complete assessment of your digital
            assets.
          </p>
        </div>
      </div>

      {/* Section 4: AWS Cloud Solutions */}
      <div className="relative w-full h-[350px] my-36">
        <Image width={500} height={500} src='/logos/aws.png' alt="AWS Logo" className="absolute w-1/6 h-auto aws" />
        <Image width={500} height={500} src='/logos/devops.png' alt="DevOps Logo" className="absolute w-1/3 h-auto devops" />
        <Image width={500} height={500} src='/logos/ladderInclinedLeft.png' alt="Ladder" className="absolute translate-x-[85%] w-[15%] h-auto top-[120%] left-1/2" />
        <div className="bg-purple-600 text-white rounded-full w-72 sm:w-[550px] aspect-square flex flex-col justify-center items-center mx-auto shadow-lg shadow-purple-500/70 p-5 text-center z-10">
          <h2 className="text-4xl font-bold">AWS cloud solutions</h2>
          <p className="text-2xl font-bold">
            Scale your operations with secure, cost-efficient cloud technology.
          </p>
        </div>
      </div>

      {/* Section 5: SEO and Digital Marketing */}
      <div className="relative w-full h-[350px] my-36 pb-36">
        <Image width={500} height={500} src='/logos/seo.png' alt="SEO Icon" className="absolute w-1/6 h-auto seo" />
        <Image width={500} height={500} src='/logos/man-running.png' alt="man Icon" className="absolute w-1/6 h-auto man" />
        <div className="bg-purple-600 text-white rounded-full w-72 sm:w-[550px] aspect-square flex flex-col justify-center items-center mx-auto shadow-lg shadow-purple-500/70 p-5 text-center z-10">
          <h2 className="text-4xl font-bold">SEO and digital marketing</h2>
          <p className="text-2xl font-bold">
            Optimize your web presence to rank higher on search engines and
            boost traffic.
          </p>
        </div>
      </div>
    </div>
  );
};
