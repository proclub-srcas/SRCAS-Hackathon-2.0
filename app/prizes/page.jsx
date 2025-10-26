import PrizeSection from "@/components/PrizeSection";
import Image from "next/image";
import medal from "@/public/HomePageLogo/medal.webp";
import { Download } from "lucide-react";


export default function Prizes() {
  return (
    <div className="overflow-x-hidden">
      <div className="flex flex-col min-h-screen md:pt-16 pb-40 pt-[32px] xl:pt-[48px]">
        <div className="w-full flex flex-col gap-10 md:gap-0">
          <div className="flex justify-between px-4 md:px-16 lg:px-28 monitor:px-32">
            <div className="flex flex-col items-start gap-2">
              <p className="text-supporting-lightGray text-[36px] xs:text-[3rem] md:text-[3.5rem] lg:text-[5rem] xl:text-[6rem] leading-tight font-black max-w-[95%]">
                SRCAS Hackathon 2.0 Prizes
              </p>
              <div className="flex flex-col items-start gap-3 md:gap-4">
                <p
                  className="w-full xl:max-w-[85%] text-supporting-mediumGray
                md:text-xl lg:text-2xl text-lg xs:text-md font-medium"
                >
                  Showcase your coding skills and innovative ideas at SRCAS! 
                  Build amazing projects and compete for exciting prizes. All
                  monetary prizes will be split equally among the winning team
                  members.
                </p>
                <div className="rounded-full border bg-[#007acc] border-[#007acc] px-4 py-1">
                  <p
                    className="w-full text-white
                  text-center text-[1rem] md:text-[1.5rem] font-semibold"
                  >
                    Join the biggest hackathon in Tamil Nadu! 🚀
                  </p>
                </div>
              </div>
            </div>
            <Image
              src={medal}
              alt="Medal"
              className="w-[300px] h-[300px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px] hidden md:block"
            />
          </div>

          <div className="flex flex-col gap-6 md:gap-8 sm:mt-14">
            <PrizeSection />
            
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
              download="SRCAS-Hackathon-2024-Event-Guide.pptx"
              className="bg-white/5 hover:bg-white/10 border-2 border-white/30 rounded-lg text-white font-normal py-4 px-8 text-lg transition-colors duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl"
            >
              <Download className="w-5 h-5" />
              Download PPT
            </a>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
}
