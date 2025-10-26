import Image from "next/image";
import srcasHackLogo from "@/public/assets/srcashack-logo.png";
import instagram from "@/public/FooterLogo/instagram.svg";
import * as motion from "motion/react-client";
import Link from "next/link";

export default function InstagramCard() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-16 relative">
      <motion.div
        initial={{
          y: 200,
        }}
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
        className=" bg-[#007acc] rounded-[32px] w-[80%] h-[360px] xs:h-[385px] min-[410px]:h-[370px] md:h-[500px] lg:h-[560px] transform -z-10"
      ></motion.div>
      <motion.div
        initial={{
          y: 200,
        }}
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
        className="bg-white rounded-[32px] absolute top-0 w-[80%] md:h-[500px] lg:h-[560px] flex flex-col gap-2 md:gap-8 px-4 md:px-8 lg:px-12 py-4 lg:pt-8"
      >
        <div className="text-xl text-black xs:text-2xl md:text-4xl monitor:text-6xl xl:text-5xl font-bold mb-2 flex gap-2 items-center">
          Follow us on <span className="hidden md:block">Instagram!</span>
        </div>
        <p className="text-[#161616] mb-4 md:mb-0 text-sm xs:text-base md:text-xl lg:text-2xl monitor:text-3xl font-normal max-w-full md:max-w-[90%] leading-[140%]">
          Stay connected with{" "}
          <span className="font-bold">SRCAS Hackathon 2.0</span> on Instagram for
          tech insights and updates.
          <span className="hidden lg:inline">
            {" "}
            Follow us for the latest tech trends, coding tips, and hackathon highlights!
          </span>
        </p>

        <div className="flex justify-between items-start">
          <ul className="space-y-2 md:space-y-4 lg:space-y-6 text-[#007acc] font-bold text-sm xs:text-base md:text-lg monitor:text-2xl xl:text-xl leading-[140%]">
            <li className="flex items-center">
              <span className="mr-2 text-xl text-black">O</span>
              Tech-related posts and coding tutorials.
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-xl text-black">O</span> Hackathon highlights and success stories.
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-xl text-black">O </span> Programming tips and tech insights.
            </li>
            <Link
              className="max-w-[214px] h-12 md:h-[64px] flex gap-4 justify-center items-center bg-[#007acc] rounded-[55px] hover:scale-110 transition-all duration-300 cursor-pointer"
              href="https://www.instagram.com/proclub_srcas"
            >
              <div className="text-white text-[32px] font-bold font-gotham">
                Follow
              </div>
              <Image
                src={instagram}
                alt="Instagram"
                className="w-6 md:w-7 xl:w-8 hover:animate-shrug transition-all duration-300 cursor-pointer"
              />
            </Link>
          </ul>

          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="-mt-12 -mr-12 monitor:mt-0 hidden md:block"
          >
            <Image
              src={srcasHackLogo}
              alt="SRCAS Hackathon 2.0 Logo"
              width={200}
              height={200}
              className="w-80 lg:w-96 monitor:w-72 xl:w-96 object-contain"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
