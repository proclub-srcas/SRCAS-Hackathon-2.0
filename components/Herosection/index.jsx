import Image from "next/image";
import linkedIn from "@/public/FooterLogo/linkedin.svg";
import instagram from "@/public/FooterLogo/instagram.svg";
import twitter from "@/public/FooterLogo/twitter.svg";
import discord from "@/public/FooterLogo/discord.svg";
import milaap from "@/public/FooterLogo/milaap.svg";

import bannerSvg from "@/public/assets/banner.svg";

import Link from "next/link";
import BannerAnim from "@/components/BannerAnim";
import { PulsatingButton } from "@/components/ui/pulsating-button";

const HeroSection = () => {
  {
    return (
      <>
      <div className="flex flex-col lg:px-16 md:px-8 px-4 pb-12 pt-4 md:pt-12 absolute w-full">
        <div className="w-full flex justify-between items-start">
        <div className="hidden sm:block">
          <div className="text-3xl md:text-4xl xl:text-5xl monitor:text-6xl font-bold text-supporting-lightGray">
          Break the blue tape
          </div>
          <div className="text-supporting-darkGray text-xl xl:text-2xl monitor:text-3xl font-bold leading-7">
          Our Theme
          </div>
        </div>
        
        </div>
      </div>
      <div className="relative md:my-32 lg:my-0 monitor:my-16">
        <div className="max-md:hidden">
        <BannerAnim />
        </div>
        <div className="md:hidden">
        <Image
          src={bannerSvg}
          alt="Banner"
          className="md:w-full md:pt-16    lg:scale-100 md:scale-[1.3] scale-[2] pt-32 md:-mt-8 lg:-mt-0 w-full transform -rotate-12 -translate-x-12"
          priority
        />
     
        </div>
      </div>
      {/* This btn is for the Desktop view */}
      <div className="hidden sm:flex justify-center md:justify-end md:mr-8 lg:mr-16 md:-mt-24 lg:-mt-12 xl:-mt-16 mb-8">
        <PulsatingButton className="px-6 xl:px-8 py-2 xl:py-3 bg-white text-[#007acc] font-bold text-[28px] xl:text-[32px] hover:bg-black hover:text-white z-10 hover:cursor-pointer transition-colors ease-in-out duration-700">
        <a href="">Register Now!</a>
        </PulsatingButton>
      </div>
      <div className="flex flex-col gap-8 justify-center md:gap-0 md:flex-row md:justify-between lg:px-16 px-2 xs:px-8 md:pb-16 md: pb-4 sm:mt-0 mt-40">
        {/* This is the btn for the Mobile view */}
        <div className="sm:hidden flex justify-center md:justify-end md:mr-8 lg:mr-16 md:-mt-24 lg:-mt-12 xl:-mt-20 mb-8 z-10">
        <PulsatingButton className="px-6 xl:px-8 py-2 xl:py-3 bg-white text-[#007acc] font-bold text-[28px] xl:text-[32px] hover:bg-black hover:text-white z-10 hover:cursor-pointer">
          <a href=" ">Register Now!</a>
        </PulsatingButton>
        </div>
        <div className="flex justify-evenly md:justify-center gap-4 md:pt-4 z-20">
        <Link href="https://www.linkedin.com/company/bitbyte-tpc">
          <Image
          src={linkedIn}
          alt="linkedIn"
          className="w-6 md:w-7 xl:w-8 hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer"
          />
        </Link>
        <Link href="https://www.instagram.com/hackbyte.tpc">
          <Image
          src={instagram}
          alt="Instagram"
          className="w-6 md:w-7 xl:w-8 hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer"
          />
        </Link>
        <Link href="https://x.com/HackbyteTPC">
          <Image
          src={twitter}
          alt="Twitter"
          className="w-6 md:w-7 xl:w-8 hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer"
          />
        </Link>
        <Link href="https://discord.gg/6RDuTPnAME">
          <Image
          src={discord}
          alt="Discord"
          className="w-6 md:w-7 xl:w-8 hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer"
          />
        </Link>
        <Link href="https://milaap.org/fundraisers/support-hackbyte-3-0">
          <Image
          src={milaap}
          alt="Milaap"
          className="w-6 md:w-7 xl:w-8 hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer rounded-md"
          />
        </Link>
        </div>

      </div>
      </>
    );
  }
};

export default HeroSection;
