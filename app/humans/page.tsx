import HumansCard from "@/components/HumansCard";
import Image from "next/image";
import { MagicCard } from "@/components/ui/magic-card";

import humansSticker from "@/public/humansPage/humansSticker.svg";
import pravin from "@/public/humansPage/pravin.jpg";
import sarath from "@/public/humansPage/sarath.jpg";
import dhanjay from "@/public/humansPage/dhanjay.jpg";
import girl from "@/public/humansPage/girl.jpg";
import satheshwaran from "@/public/humansPage/Satheshwaran-V.jpg";
import vikaas from "@/public/humansPage/vikaas.webp";
import velan from "@/public/humansPage/velan.jpeg";
import kanishka from "@/public/humansPage/kanishka.jpg";
import sumathi from "@/public/humansPage/mentor/sumathi.png";
import praneesh from "@/public/humansPage/mentor/praneesh.png";
import manoj from "@/public/humansPage/mentor/manoj.png";


const Humans = () => {
  const membersData = [
    {
      name: "Pravin",
      profilepic: pravin,
      linkedin: "#",
      github: "#",
      twitter: "#",
      role: "Chairman",
      
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
      name: "Vaishnavi",
      profilepic: girl,
      linkedin: "#",
      github: "#",
      twitter: "#",
      role: "Secretary",  

    },
    {
      name: "Dhanjay",
      profilepic: dhanjay,
      linkedin: "#",
      github: "#",
      twitter: "#",
      role: "Joint Secretary",
      role2:"Organizer"
    },
  
    {
      name: "Satheshwaran V",
      profilepic: satheshwaran,
      linkedin: "#",
      github: "#",
      twitter: "#",
      role: "Web Developer",
    },
    {
      name: "Vikaas",
      profilepic: vikaas,
      linkedin: "#",
      github: "#",
      twitter: "#",
      role: "Organizer",
    },
    {
      name: "Velan",
      profilepic: velan,
      linkedin: "#",
      github: "#",
      twitter: "#",
      role: "Organizer",
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

  const staffCoordinatorsData = [
    {
      name: "Dr.N.Sumathi",
      profilepic: sumathi,
      linkedin: "#",
      github: "#",
      twitter: "#",
      role: "Programming Club Staff Coordinator"
    },
    {
      name: "Dr.M.Praneesh",
      profilepic: praneesh,
      linkedin: "#",
      github: "#",
      twitter: "#",
      role: "Programming Club Staff Coordinator"
    },
    {
      name: "Mr.S.Manoj",
      profilepic: manoj,
      linkedin: "#",
      github: "#",
      twitter: "#",
      role: "Programming Club Staff Coordinator"
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

        {/* Staff Coordinators Section */}
        <div className="mt-16 mb-8">
          <div className="text-center mb-12">
            <h2 className="text-white font-black text-[28px] xs:text-[32px] md:text-[2.5rem] lg:text-[3rem] xl:text-[60px] xl:leading-[4rem] mb-4">
              Staff Coordinators
            </h2>
            <p className="text-supporting-mediumGray font-medium lg:text-xl md:text-lg text-base">
              Meet our dedicated faculty members who guide and support our hackathon
            </p>
          </div>
          
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
              place-content-center place-items-center gap-10 max-w-6xl mx-auto"
          >
            {staffCoordinatorsData.map((staff, index) => (
              <MagicCard
                key={`staff-${index}`}
                className="cursor-pointer flex-col items-center justify-center whitespace-nowrap"
                gradientColor="#D9D9D955"
              >
                <HumansCard index={index} {...staff} showSocialLinks={false} />
              </MagicCard>
            ))}
          </div>
        </div>

        {/* Student Organizers Section */}
        <div className="mt-16 mb-8">
          <div className="text-center mb-12">
            <h2 className="text-white font-black text-[28px] xs:text-[32px] md:text-[2.5rem] lg:text-[3rem] xl:text-[60px] xl:leading-[4rem] mb-4">
              Student Organizers
            </h2>
            <p className="text-supporting-mediumGray font-medium lg:text-xl md:text-lg text-base">
              Meet the passionate students who make this hackathon possible
            </p>
          </div>
          
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
