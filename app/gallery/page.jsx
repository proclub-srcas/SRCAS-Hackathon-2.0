import banner from "@/public/ImageGallery/srcas hack memory/banner srcas hack.png";
import HB2Logo from "@/public/ImageGallery/HB2Logo.svg";
import { GridImage, BannerImage } from "@/components/ImageGrid";
import Image from "next/image";
import AnimatedTitle from "@/components/AnimatedTitle";


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
    </>
  );
};
export default Gallery;
