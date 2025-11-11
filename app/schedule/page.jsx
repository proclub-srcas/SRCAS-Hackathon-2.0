import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import schedule from "@/public/schedule.png";
import { Download, Clock } from "lucide-react";


const Schedule = () => {
  const EventFlowBox = ({ h, bgColor, title, description, time, snacks }) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-4 font-gotham font-black">
        <div className="font-bold text-xl sm:text-2xl text-supporting-lightGray min-w-[116px]">
          {time}
        </div>
        <div className="flex items-center gap-4 sm:mt-8 h-auto">
          <div
            className="min-w-[100px] rounded-3xl"
            style={{ height: h, backgroundColor: bgColor }}
          ></div>
          <div>
            <div className="text-[18px] xs:text-[20px] sm:text-[28px] lg:text-[32px] text-white text-wrap">
              {title}
            </div>
            <div
              className={`${
                snacks ? "block" : "hidden"
              } text-[#FFA4AD] text-xl`}
            >
              + SNACKS TIME!
            </div>
            {description && (
              <p className="text-sm xs:text-base sm:text-lg lg:text-xl text-supporting-mediumGray text-wrap">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  };

  const ComingSoonBanner = () => {
    return (
      <div className="w-full flex flex-col items-center justify-center py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Clock className="w-16 h-16 text-secondary-blue animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Schedule Coming Soon
          </h2>
          <p className="text-lg md:text-xl text-supporting-mediumGray max-w-3xl mx-auto">
            We're finalizing the exact schedule for SRCAS Hackathon 2.0. Stay tuned for detailed timings and event flow for both days!
          </p>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="flex flex-col min-h-screen px-4 md:px-16 lg:px-20 xl:px-28 pt-[32px] md:pt-16 xl:pt-12 pb-40">
        <div className="w-full flex flex-col gap-10 md:gap-16">
          <div className="flex justify-between items-center md:items-start">
            <div className="flex flex-col items-start gap-2">
              <div className="text-supporting-lightGray text-[36px] xs:text-[42px] lg:text-[4rem] xl:text-[6rem] leading-tight font-black max-w-[95%] md:max-w-[85%] lg:max-w-[95%] xl:max-w-[90%]">
                Run of show for the Event
              </div>
              <p
                className="w-full lg:max-w-[85%] text-supporting-mediumGray
                text-lg lg:text-[1.5rem] font-medium"
              >
                Join us for days packed with coding challenges and workshops.
                Elevate your skills and collaborate with fellow hackers!
              </p>
            </div>
            <Image
              src={schedule}
              alt="schedule"
              className="lg:w-[250px] lg:h-[250px] w-32 h-32 md:w-48 md:h-48 hidden md:block"
            />
          </div>
          <Tabs
            defaultValue="Day 1"
            className="flex flex-col justify-center mt-4 md:mt-12"
          >
            <TabsList className="bg-transparent mb-5 md:mb-11 flex gap-4 justify-start">
              <TabsTrigger
                value="Day 1"
                className="sm:text-xl text-md font-bold text-supporting-mediumGray
                         sm:py-2 sm:px-5 p-2 rounded-[8px]"
              >
                Day 1 - 13 Dec
              </TabsTrigger>
              <TabsTrigger
                value="Day 2"
                className="sm:text-xl text-md font-bold text-supporting-mediumGray 
                         sm:py-2 sm:px-5 p-2 rounded-[8px]"
              >
                Day 2 - 14 Dec
              </TabsTrigger>
            </TabsList>
            <TabsContent value="Day 1">
              <div className="w-full flex flex-col sm:flex-row justify-between sm:items-center py-8 font-gotham font-black text-white">
                <div className="text-[28px] xs:text-[32px] sm:text-[48px] lg:text-[64px] text-nowrap lg:pl-6 xl:pl-12">
                  13th December
                </div>
              </div>
              <div className="lg:pl-6 xl:pl-12">
                <ComingSoonBanner />
              </div>
            </TabsContent>
            <TabsContent value="Day 2">
              <div className="w-full flex flex-col sm:flex-row justify-between sm:items-center py-8 font-gotham font-black text-white">
                <div className="text-[28px] xs:text-[32px] sm:text-[48px] lg:text-[64px] text-nowrap lg:pl-6 xl:pl-12">
                  14th December
                </div>
              </div>
              <div className="lg:pl-6 xl:pl-12">
                <ComingSoonBanner />
              </div>
            </TabsContent>
          </Tabs>
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

export default Schedule;
