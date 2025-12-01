import banner from "@/public/ImageGallery/srcas2.0-img/6.png";
import { GridImage, BannerImage } from "@/components/ImageGrid";
import Image from "next/image";
import AnimatedTitle from "@/components/AnimatedTitle";
import { Download } from "lucide-react";
import srcasHackLogo from "@/public/assets/srcashack-1.0.png";


const Gallery = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen p-4 px-2 md:px-16 lg:px-24 xl:px-28 lg:pb-40 md:pb-28 pb-12 pt-[32px] xl:pt-[48px]">
        <div className="flex flex-col items-start gap-5 ">
          <div className="flex justify-between items-start w-full gap-8">
            <div className="flex-1">
              <div className=" text-white xl:text-[6rem] lg:text-[4.2rem] text-[36px] xs:text-[48px] font-black xl:leading-tight">
                SRCAS Hackathon 2024<br />
                Highlights
              </div>
              <div className=" max-w-[600px] lg:max-w-[650px] xl:max-w-[800px] text-supporting-mediumGray xl:text-2xl lg:text-xl text-lg font-medium leading-[33.60px] mt-5">
                Explore our gallery of memorable moments from SRCAS Hackathon 2024
              </div>
            </div>
            <div className="hidden md:block flex-shrink-0 -mt-16">
              <Image 
                src={srcasHackLogo} 
                alt="SRCAS Hackathon 1.0 Logo" 
                className="w-48 h-24 lg:w-40 lg:h-40 xl:w-[480px] xl:h-[480px] -ml-10 object-contain rotate-12"
                />
            </div>
          </div>
        </div>

        <GridImage />

        {/* Video Section */}
        <div className="flex flex-col justify-center items-center my-8 xl:my-12">
          <div className="text-center mb-6">
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
              SRCAS Hackathon 1.0
            </h2>
            <p className="text-supporting-mediumGray text-lg md:text-xl lg:text-2xl font-medium">
              Relive the memories from our first hackathon
            </p>
          </div>
          <div className="w-full h-full max-w-4xl mx-auto">
            <video
              src="/ImageGallery/srcas-1.0.mp4"
              controls
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto rounded-lg shadow-2xl"
              
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center my-4 xl:my-8">
          <div
            className="text-[#FAF8ED] text-center font-bold text-[2.375rem]
              leading-[1.2] lg:leading-[1.1] lg:text-[3rem]"
          >
            <AnimatedTitle viewport={true}>COMMITTEE <span>CREW</span></AnimatedTitle>
          </div>
        </div>

        <div className="mt-4 xl:mt-8">
          <div className="flex justify-center items-center">
            <div className="w-full xl:w-[80%] h-full flex justify-center items-center">
              <BannerImage imgsrc={banner} />
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
              href="https://1drv.ms/p/c/ee26bfeaf9ec4963/ESZ_AjZI9t5HinELNXd6dpUBXVgB4lqo1Fi1_PylfmntbQ?e=GucJl1"
              target="_blank"
              rel="noopener noreferrer"
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
export default Gallery;
