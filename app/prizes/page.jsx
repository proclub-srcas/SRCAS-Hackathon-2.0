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
                  Build amazing projects and compete for exciting prizes worth INR 75,000.
                </p>
                <div className="rounded-full border bg-[#007acc] border-[#007acc] px-4 py-1">
                  <p
                    className="w-full text-white
                  text-center text-[1rem] md:text-[1.5rem] font-semibold"
                  >
                    Join the National hackathon in Tamil Nadu! 🚀
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
            
            {/* Problem Statement Wise Prize Distribution */}
            <div className="w-full px-4 md:px-16 lg:px-28 py-12 md:py-16">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-12 text-center">
                  Prize Distribution
                </h2>
                
                {/* Main Prize Card */}
                <div className="relative bg-gradient-to-br from-[#2a2a2a] to-[#1f1f1f] border border-white/20 rounded-3xl p-8 md:p-12 overflow-hidden">
                  {/* Background decorations */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#3B82F6]/10 to-transparent rounded-bl-full"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-yellow-500/10 to-transparent rounded-tr-full"></div>
                  
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="text-center mb-10">
                      <div className="inline-block px-6 py-2 bg-white/5 rounded-full border border-white/15 mb-4">
                        <span className="text-white font-semibold text-sm md:text-base tracking-wider">
                          Per Problem Statement
                        </span>
                      </div>
                    </div>
                    
                    {/* Prize Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto mb-10">
                      {/* First Place */}
                      <div className="relative bg-gradient-to-br from-yellow-500/10 to-transparent border-2 border-yellow-500/30 rounded-2xl p-8 hover:border-yellow-500/50 hover:shadow-xl hover:shadow-yellow-500/20 transition-all duration-300">
                        <div className="absolute top-4 right-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/40">
                            <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </div>
                        </div>
                        
                        <div className="text-center pt-4">
                          <h3 className="text-2xl md:text-3xl font-black text-yellow-400 mb-3">1st Place</h3>
                          <div className="mb-4">
                            <span className="text-5xl md:text-6xl font-black text-white">₹10,000</span>
                          </div>
                          <p className="text-sm md:text-base text-white/50 uppercase tracking-wider">Winner</p>
                        </div>
                      </div>
                      
                      {/* Second Place */}
                      <div className="relative bg-gradient-to-br from-gray-400/10 to-transparent border-2 border-gray-400/30 rounded-2xl p-8 hover:border-gray-400/50 hover:shadow-xl hover:shadow-gray-400/20 transition-all duration-300">
                        <div className="absolute top-4 right-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center shadow-lg shadow-gray-400/40">
                            <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </div>
                        </div>
                        
                        <div className="text-center pt-4">
                          <h3 className="text-2xl md:text-3xl font-black text-gray-300 mb-3">2nd Place</h3>
                          <div className="mb-4">
                            <span className="text-5xl md:text-6xl font-black text-white">₹5,000</span>
                          </div>
                          <p className="text-sm md:text-base text-white/50 uppercase tracking-wider">Runner Up</p>
                        </div>
                      </div>
                    </div>

                    <p className="text-center text-sm md:text-base text-white/70 tracking-wide">
                      5 Problem Statements · 2 Winners · ₹75,000 Total
                    </p>
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
       
      </div>
    </div>
  );
}
