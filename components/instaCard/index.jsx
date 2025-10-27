import Image from "next/image";
import srcasHackLogo from "@/public/assets/srcashack-logo.png";
import instagram from "@/public/FooterLogo/instagram.svg";
import * as motion from "motion/react-client";
import Link from "next/link";

export default function InstagramCard() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-16 relative px-4">
      {/* Blue Background Card */}
      <motion.div
        initial={{ y: 200 }}
        viewport={{ once: true }}
        whileInView={{
          y: [200, 0, 0, 0],
          rotate: [0, 0, 3, 3],
          transition: {
            ease: [0, 0.71, 0.2, 1.01],
            times: [0, 0, 1.8, 2],
            duration: 2,
            type: "spring",
            bounce: 0.5,
          },
        }}
        className="bg-[#007acc] rounded-[32px] w-[90%] sm:w-[80%] h-[340px] xs:h-[360px] md:h-[500px] lg:h-[560px] -z-10"
      ></motion.div>

      {/* White Foreground Card */}
      <motion.div
        initial={{ y: 200 }}
        viewport={{ once: true }}
        whileInView={{
          y: [200, 0, 0, 0],
          rotate: [0, 0, -5, -5],
          transition: {
            ease: [0, 0.71, 0.2, 1.01],
            times: [0, 0, 1.8, 2],
            duration: 2,
            type: "spring",
            bounce: 0.5,
          },
        }}
        className="bg-white rounded-[32px] absolute top-0 w-[90%] sm:w-[80%] flex flex-col gap-3 sm:gap-4 md:gap-8 px-4 sm:px-6 md:px-8 lg:px-12 py-4 lg:pt-8"
      >
        {/* Header */}
        <div className="text-lg sm:text-xl md:text-4xl xl:text-5xl font-bold mb-2 flex gap-2 items-center text-black">
          Follow us on <span className="hidden md:block">Instagram!</span>
        </div>

        {/* Description */}
        <p className="text-[#161616] mb-4 md:mb-0 text-sm sm:text-base md:text-xl lg:text-2xl leading-[140%] font-normal max-w-full md:max-w-[90%]">
          Stay connected with{" "}
          <span className="font-bold">SRCAS Hackathon 2.0</span> on Instagram for
          tech insights and updates.
          <span className="hidden lg:inline">
            {" "}
            Follow us for the latest tech trends, coding tips, and hackathon highlights!
          </span>
        </p>

        {/* List + Follow Button + Logo */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <ul className="space-y-2 md:space-y-4 lg:space-y-6 text-[#007acc] font-bold text-sm sm:text-base md:text-lg xl:text-xl leading-[140%]">
            <li className="flex items-center">
              <span className="mr-2 text-xl text-black">o</span>
              Tech-related posts and coding tutorials.
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-xl text-black">o</span>
              Hackathon highlights and success stories.
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-xl text-black">o</span>
              Programming tips and tech insights.
            </li>

            {/* Instagram Button */}
            <Link
              className="max-w-[200px] h-10 sm:h-12 md:h-[64px] flex gap-3 justify-center items-center bg-[#007acc] rounded-[55px] hover:scale-110 transition-all duration-300 cursor-pointer"
              href="https://www.instagram.com/proclub_srcas"
              target="_blank"
            >
              <div className="text-white text-lg sm:text-xl md:text-2xl font-bold font-gotham">
                Follow
              </div>
              <Image
                src={instagram}
                alt="Instagram"
                className="w-5 sm:w-6 md:w-7 xl:w-8 hover:animate-shrug transition-all duration-300"
              />
            </Link>
          </ul>

          {/* Logo (Hidden on Mobile) */}
          <Image
            src={srcasHackLogo}
            alt="SRCAS Hackathon 2.0 Logo"
            width={200}
            height={200}
            className="hidden sm:block w-48 sm:w-64 lg:w-96 object-contain -mr-4 md:-mr-12 -rotate-6 md:-rotate-12"
          />
        </div>
      </motion.div>
    </div>
  );
}
