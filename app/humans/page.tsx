import HumansCard from "@/components/HumansCard";
import Image from "next/image";
import { MagicCard } from "@/components/ui/magic-card";

import humansSticker from "@/public/humansPage/humansSticker.svg";
import pravin from "@/public/assets/pravin.jpg";
import sarath from "@/public/assets/sarath.jpg";
import dhanjay from "@/public/assets/dhanjay.jpg";
import girl from "@/public/assets/girl.jpg";
import satheshwaran from "@/public/assets/Satheshwaran-V.jpg";
import vikaas from "@/public/assets/vikaas.webp";
import velan from "@/public/assets/velan.jpeg";
import kanishka from "@/public/assets/kanishka.jpg";


const Humans = () => {
  const membersData = [
    {
      name: "Pravin",
      profilepic: pravin,
      linkedin: "#",
      github: "#",
      twitter: "#",
      role: "Chairman of Pro Club",
    },
    {
      name: "Sarath",
      profilepic: sarath,
      linkedin: "#",
      github: "#",
      twitter: "#",
      role: "Vice Chairman",
    },
    {
      name: "Dhanjay",
      profilepic: dhanjay,
      linkedin: "#",
      github: "#",
      twitter: "#",
      role: "Secretary",
    },
    {
      name: "Vaishnavi",
      profilepic: girl,
      linkedin: "#",
      github: "#",
      twitter: "#",
      role: "Secretary",
    },
    {
      name: "Satheshwaran V",
      profilepic: satheshwaran,
      linkedin: "#",
      github: "#",
      twitter: "#",
      role: "Web & App Developer",
    },
    {
      name: "Vikaas",
      profilepic: vikaas,
      linkedin: "#",
      github: "#",
      twitter: "#",
      role: "Ethical Hacker",
    },
    {
      name: "Velan",
      profilepic: velan,
      linkedin: "#",
      github: "#",
      twitter: "#",
      role: "UI/UX Designer",
    },
    {
      name: "Kanishka",
      profilepic: kanishka,
      linkedin: "#",
      github: "#",
      twitter: "#",
      role: "Organizer",
    },
  ];

  return (
    <>
      <div
        className="flex flex-col min-h-screen lg:gap-[20px] 3xl:gap-[88px]
          md:px-16 xl:px-28 lg:pb-[92px] md:pt-16 xl:pt-12 pt-[32px] px-4"
      >
        <div className="flex lg:gap-[40px]">
          <div>
            <div className="text-white font-black text-[36px] xs:text-[42px] md:text-[2.9rem] lg:text-[3.9rem] xl:text-[80px] xl:leading-[6rem] mb-5">
              Meet the Humans
              <br /> of SRCAS Hackathon
            </div>
            <p className="text-supporting-mediumGray font-medium lg:text-2xl md:text-xl text-lg">
              Hacker Experience is what we prioritize! Have questions, need
              assistance, or just want to connect? Feel free to reach out!
            </p>
          </div>
          <Image
            src={humansSticker}
            alt="Humans Sticker"
            className="lg:w-auto md:w-56 w-32 hidden md:block hover:rotate-6 hover:scale-105 transition-all ease-in-out duration-500"
          />
        </div>

        <div className="flex flex-col justify-center mt-4 md:mt-12">
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
                place-content-center place-items-center gap-10"
            >
            {membersData.map((human, index) => (
                <MagicCard
                  key={index}
                  className="cursor-pointer flex-col items-center justify-center whitespace-nowrap"
                  gradientColor="#D9D9D955"
                >
                  <HumansCard index={index} {...human} />
                </MagicCard>
              ))}
            </div>
            </div>
      </div>
    </>
  );
};

export default Humans;
