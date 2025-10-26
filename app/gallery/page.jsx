import banner from "@/public/ImageGallery/srcas hack memory/banner srcas hack.png";
import { GridImage, BannerImage } from "@/components/ImageGrid";
import Image from "next/image";
import AnimatedTitle from "@/components/AnimatedTitle";
import { Download } from "lucide-react";


const Gallery = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen p-4 px-2 md:px-16 lg:px-24 xl:px-28 lg:pb-40 md:pb-28 pb-12 pt-[32px] xl:pt-[48px]">
        <div className="flex flex-col items-start gap-5 ">
          <div className="flex justify-between items-center w-full">
            <div className=" text-white xl:text-[6rem] lg:text-[4.2rem] text-[36px] xs:text-[48px] font-black xl:leading-tight">
              SRCAS Hackathon 2024<br />
              Highlights
            </div>
          
          </div>
          <div className=" max-w-[600px] lg:max-w-[650px] xl:max-w-[800px] text-supporting-mediumGray xl:text-2xl lg:text-xl text-lg font-medium leading-[33.60px]">
            Explore our gallery of memorable moments from SRCAS Hackathon 2024
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
    </>
  );
};
export default Gallery;
