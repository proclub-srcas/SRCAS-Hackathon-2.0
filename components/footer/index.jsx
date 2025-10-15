import Image from "next/image";
import proclub from "../../public/assets/ProClubLogo.png";
import srcas from "../../public/assets/srcas.svg";
import linkedIn from "../../public/FooterLogo/linkedin.svg";
import instagram from "../../public/FooterLogo/instagram.svg";
import twitter from "../../public/FooterLogo/twitter.svg";
import discord from "../../public/FooterLogo/discord.svg";
import Link from "next/link";
import AnimatedTitle from "../AnimatedTitle";

const sidebarLinks = [
  { name: "Home", href: "/" },
  { name: "Gallery", href: "/gallery" },
  { name: "Partners", href: "/partners" },
  { name: "Prizes", href: "/prizes" },
  { name: "Schedule", href: "/schedule" },
  { name: "Humans", href: "/humans" },
  { name: "FAQs", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

const Footer = () => {
  return (
    <div className="overflow-hidden bg-[#161616]">
      <div className="flex flex-col lg:flex-row lg:justify-between items-center xl:mx-32 lg:mx-20 md:mx-12 mx-4 gap-8 lg:gap-0 mt-12 mb-20">
        {/* Logo Section */}
        <div className="flex flex-col items-center gap-4 lg:items-start">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="flex flex-col items-center gap-2">
              <Image
                src={srcas}
                alt="SRCAS"
                className="h-24 sm:h-28 md:h-32 lg:h-36 xl:h-40 w-auto"
              />
            </div>
            <div className="flex flex-col items-center gap-2">
              <Image
                src={proclub}
                alt="ProClub"
                className="h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36 w-auto"
              />
            </div>
          </div>
        </div>
        
        {/* Tagline Section */}
        <div className="flex flex-col gap-2 justify-center items-center lg:items-end pt-4 lg:pt-8 w-full lg:w-auto">
          <div className="text-center lg:text-right text-supporting-lightGray text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
            <AnimatedTitle viewport={true}>Code to Innovate</AnimatedTitle>
          </div>
          <div className="text-center lg:text-right text-supporting-mediumGray text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-normal">
            <AnimatedTitle viewport={true}>Build the Future</AnimatedTitle>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center xl:px-32 lg:px-10 md:px-4 px-4 mt-8 bg-[#007acc] rotate-2 py-4 lg:py-6">
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-4 lg:gap-6 xl:gap-8 text-supporting-lightGray">
          {sidebarLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs sm:text-sm md:text-base lg:text-lg p-2 sm:p-3 rounded-full font-bold leading-snug hover:-rotate-6 transition-all duration-300 hover:bg-white/10"
            >
              <span>{link.name}</span>
            </Link>
          ))}
        </div>
        
        {/* Social Media Links */}
        <div className="flex gap-4 sm:gap-6 lg:gap-4 xl:gap-6 items-center mt-4 lg:mt-0">
          <Link href="https://www.linkedin.com/company/srcas-programming-club">
            <Image
              src={linkedIn}
              alt="linkedIn"
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 xl:w-8 xl:h-8 hover:scale-110 transition-all duration-300 cursor-pointer"
            />
          </Link>
          <Link href="https://www.instagram.com/proclub_srcas">
            <Image
              src={instagram}
              alt="Instagram"
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 xl:w-8 xl:h-8 hover:scale-110 transition-all duration-300 cursor-pointer"
            />
          </Link>
        </div>
      </div>
      <div className="text-supporting-darkGray font-bold text-xs sm:text-sm md:text-base lg:text-lg py-3 lg:py-4 text-center lg:text-left xl:pl-32 lg:pl-10 md:pl-4 px-4">
        © 2025 SRCAS Programming Club, All rights reserved
      </div>
    </div>
  );
};

export default Footer;
