import SponsorCard from "@/components/SponsorCard";
import srcas from "@/public/assets/srcas.png";
import proclub from "@/public/assets/ProClub.png";

import { normalSponsorsData } from "@/data/sponsorData";
import TitleSponsorCard from "@/components/TitleSponsorCard";


const PartnersPage = () => {
  const TitleSponsors = [
    {
      title: "SRCAS",
      description:
        "Sri Ramakrishna College of Arts and Science (SRCAS) is a premier educational institution committed to providing quality education and fostering innovation. The college supports student initiatives and technological advancement through various programs and events.",
      imageSrc: srcas,
      link: "#",
    },
    {
      title: "Programming Club",
      description:
        "Programming club of SRCAS, dedicated to fostering innovation and technical excellence among students. We organize coding competitions, workshops, and hackathons to build a strong developer community.",
      imageSrc: proclub,
      link: "#",
    },
   
  ];
  return (
    <>
      <div
        className="flex flex-col min-h-screen lg:gap-[20px] 3xl:gap-[88px]
          lg:px-16 xl:px-28 lg:pb-[92px] pt-[32px] md:pt-[48px] px-4"
      >
        <div className="flex flex-col gap-8 md:gap-12">
          <div className="text-left">
            <div className="text-white font-gotham font-black text-[36px] xs:text-[42px] md:text-5xl lg:text-[4.2rem] xl:text-[96px] xl:leading-tight mb-6">
              Our Partners
              <br /> who Supported
            </div>
            <p className="text-supporting-mediumGray text-left font-medium md:text-xl lg:text-2xl text-lg xs:text-md max-w-[600px]">
              We are proud to collaborate with visionary organizations that
              share our passion for innovation and technology.
            </p>
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
                Our Sponsors
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
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnersPage;
