"use client";
import Image from "next/image";
import Link from "next/link";

// Import logos
import srcasLogo from "@/public/assets/srcas.svg";
import proClubLogo from "@/public/assets/ProClubLogo.png";

const NewHero = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 py-20">
      {/* Content Container */}
      <div className="text-center max-w-5xl mx-auto">
        

        <div className="mb-10">

          <h1 className="text-4xl md:text-6xl lg:text-9xl font-black text-white mb-8 leading-[0.9] tracking-tight">
            SRCAS Hackathon 2.0
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-6xl mx-auto">
            Join us for an incredible 48-hour hackathon experience at SRCAS Campus, Coimbatore. 
            This prestigious event brings together talented students from across Tamil Nadu to 
            innovate, collaborate, and build solutions that break barriers and shape the future.
          </p>
        </div>
        <div className="mb-10">
          <button className="group relative px-12 py-5 bg-white text-[#007acc] font-bold text-xl md:text-2xl hover:bg-gray-50 transition-all duration-300 rounded-2xl border-2 border-[#007acc] hover:border-[#005a9c] hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1">
            <Link href="#register" className="flex items-center gap-3">
              Register Now
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </button>
        </div>

        {/* Event Information */} 
        <div className="mb-12">
        <p className="text-gray-500 text-sm md:text-base mb-2 font-medium tracking-wide uppercase">Powered by</p>
          <div className="flex justify-center items-center gap-2">
            <div className="">
              <Image
                src={srcasLogo}
                alt="SRCAS Logo"
                width={260}
                height={260}
                className=" object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="">
              <Image
                src={proClubLogo}
                alt="ProClub Logo"
                width={260}
                height={260}
                className="object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHero;