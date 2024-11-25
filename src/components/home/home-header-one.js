"use client";
import { useEffect, useRef, useState } from "react";

export default function HomeHeader() {
  const videoRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState({ days: "00", hours: "00", minutes: "00", seconds: "00" });

  useEffect(() => {
    // Video speed
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.2;
    }

    // Offer Date
    const offerDeadline = new Date("2024-12-01T23:59:59").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = offerDeadline - now;

      if (distance > 0) {
        setTimeLeft({
          days: String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, "0"),
          hours: String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0"),
          minutes: String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0"),
          seconds: String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, "0"),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer); 
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center text-white">
      {/* Video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src="/videos/hero-blackfriday.mp4"
        autoPlay
        loop
        muted
      ></video>

      {/* Content */}
      <div className="relative z-10">
        {/* Title */}
        <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Unlock Your Website's Potential: Black Friday & Cyber Monday Deals!
        </h1>
        <p className="text-xl mb-8">
          Mini Audits for $40 (Save 50%) — Reserve Free Audits for Cyber Monday or Black Friday!
        </p>
        <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 p-2 px-4 rounded-xl">
          Reserve Your Audit Now
        </button>

        {/* Counter */}
        <div className="mt-10">
          <h2 className="text-3xl font-bold text-pink-600 mb-4 animate-pulse">Hurry Up!</h2>
          <div className="flex justify-center gap-10 text-2xl font-semibold">
            <div>
              <span className="block text-7xl">{timeLeft.days}</span>
              <span className="text-sm uppercase">Days</span>
            </div>
            <div>
              <span className="block text-7xl">{timeLeft.hours}</span>
              <span className="text-sm uppercase">Hours</span>
            </div>
            <div>
              <span className="block text-7xl">{timeLeft.minutes}</span>
              <span className="text-sm uppercase">Minutes</span>
            </div>
            <div>
              <span className="block text-7xl">{timeLeft.seconds}</span>
              <span className="text-sm uppercase">Seconds</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-10"></div>
    </section>
  );
}
