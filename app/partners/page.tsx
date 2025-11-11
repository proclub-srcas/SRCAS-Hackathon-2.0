import SponsorCard from "@/components/SponsorCard";
import srcas from "@/public/assets/srcas-bg.png";
import proclub from "@/public/partnersPage/ProClub.png";
import { normalSponsorsData } from "@/data/sponsorData";
import TitleSponsorCard from "@/components/TitleSponsorCard";
import MentorCard from "@/components/MentorCard";
import { Download } from "lucide-react";
import Image from "next/image";
import srcasHackLogo from "@/public/assets/srcashack-logo.png";
import ranjith from "@/public/assets/mentors/ranjith.jpeg";
import aswinram from "@/public/assets/mentors/aswinram.png";
import sriram from "@/public/assets/mentors/sriram.jpeg";
import dinesh from "@/public/assets/mentors/dinesh.jpeg";


const PartnersPage = () => {
  const TitleSponsors = [
    {
      title: "Sri Ramakrishna College of Arts and Science ",
        description:
          "Sri Ramakrishna College of Arts and Science (SRCAS), Coimbatore, ranked 76th in NIRF 2025, excels in teaching, research, and learning resources. Accredited with NAAC 'A+' grade and affiliated to Bharathiar University, SRCAS offers diverse programs and empowers students through innovation and quality education."
        ,imageSrc: srcas,
      link: "https://www.srcas.ac.in/",
    },
    {
      title: "Programming Club",
      description:
        "Programming club of SRCAS, dedicated to fostering innovation and technical excellence among students. We organize coding competitions, workshops, and hackathons to build a strong developer community.",
      imageSrc: proclub,
      link: "https://srcasprogrammingclub.vercel.app/",
    },
   
  ];

  const MentorsData = [
    {
      name: "Dr. Ranjithkumar Rajamani",
      role: "Vice President",
      company: "Einstein Research Academy",
      profilepic: ranjith,
      linkedin: "https://www.linkedin.com/in/dr-ranjithkumar-rajamani-b626059a/",
    },
    {
      name: "Aswin Ram",
      role: "Product Owner",
      company: "BOSCH",
      profilepic: aswinram,
      linkedin: "https://www.linkedin.com/in/aswin-ram-07/",
    },
    {
      name: "Sriram M",
      role: "Data Architect",
      company: "Deloitte",
      profilepic: sriram,
      linkedin: "https://www.linkedin.com/in/sriram-m-a07b95161",
    },
    {
      name: "Dinesh Paranthagan",
      role: "CEO & Founder",
      company: "Hackup Technology",
      profilepic: dinesh,
      linkedin: "https://www.linkedin.com/in/dineshparanthagan/",
    },
  ];
  return (
    <>
      <div
        className="flex flex-col min-h-screen lg:gap-[20px] 3xl:gap-[88px]
          lg:px-16 xl:px-28 lg:pb-[92px] pt-[32px] md:pt-[48px] px-4"
      >
        <div className="flex flex-col gap-8 md:gap-12">
          <div className="flex items-start justify-between gap-8">
            <div className="text-left flex-1">
              <div className="text-white font-gotham font-black text-[36px] xs:text-[42px] md:text-5xl lg:text-[4.2rem] xl:text-[96px] xl:leading-tight mb-6">
                Our Partners
                <br /> who Supported
              </div>
              <p className="text-supporting-mediumGray text-left font-medium md:text-xl lg:text-2xl text-lg xs:text-md max-w-[600px]">
                We are proud to collaborate with visionary organizations that
                share our passion for innovation and technology.
              </p>
            </div>
            <div className="hidden md:block flex-shrink-0">
              <Image 
                src={srcasHackLogo} 
                alt="SRCAS Hackathon 2.0 Logo" 
                className="w-48 h-24 lg:w-40  lg:h-40 xl:w-[430px] xl:h-[430px] -mt-16 object-cover rotate-12"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center mt-4 md:mt-12">
          <div className="w-full flex flex-col items-center gap-12 xl:gap-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full max-w-6xl">
              {TitleSponsors.map((sponsor, index) => (
                <TitleSponsorCard key={index} {...sponsor} />
              ))}
            </div>

            <div className="w-full">
              <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
                Our Partners

              </h3>
              <div
                className="w-full xl:max-w-[95%] monitor:max-w-[90%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 
                gap-8 lg:gap-[44px] place-items-center"
              >
                {normalSponsorsData.map((sponsor, index) => {
                  return <SponsorCard key={index} index={index} {...sponsor} />;
                })}
              </div>
            </div>

            {/* Mentors Section */}
            <div className="w-full mt-16 md:mt-24 lg:mt-32">
              <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12 md:mb-16">
                Our Mentors
              </h3>
              <div className="w-full flex justify-center">
                <div
                  className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
                  gap-8 lg:gap-6 place-items-center"
                >
                  {MentorsData.map((mentor, index) => (
                    <MentorCard key={index} index={index} {...mentor} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PPT Download CTA Section */}
      <div className="flex flex-col items-center justify-center py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Download Our Official PPT Template
          </h2>
          <p className="text-lg md:text-xl text-supporting-mediumGray mb-8 max-w-4xl mx-auto">
            All participants must use this official PPT template for their submissions. This ensures uniformity and fairness in presentation across all teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
              href="/assets/srcas-hackathon.pptx"
              download="SRCAS-Hackathon.pptx"
              className="bg-white/5 hover:bg-white/10 border-2 border-white/30 rounded-lg text-white font-normal py-4 px-8 text-lg transition-colors duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl"
            >
              <Download className="w-5 h-5" />
              Download PPT
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnersPage;
