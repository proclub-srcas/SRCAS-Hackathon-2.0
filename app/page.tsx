"use client";

import Image from "next/image";
import HeroSection from "@/components/Herosection";
import InstagramCard from "@/components/instaCard";
import g1 from "@/public/HomePageLogo/g1.svg";
import g2 from "@/public/HomePageLogo/g2.svg";
import g3 from "@/public/HomePageLogo/g3.svg";
import g4 from "@/public/HomePageLogo/g4.svg";
import g5 from "@/public/HomePageLogo/g5.svg";
import g6 from "@/public/HomePageLogo/g6.svg";
import g7 from "@/public/HomePageLogo/g7.svg";
import g8 from "@/public/HomePageLogo/g8.svg";
import g9 from "@/public/HomePageLogo/g9.svg";
import g10 from "@/public/HomePageLogo/g10.svg";
import downloadSvg from "@/public/assets/download-svg.svg";
import timerSvg from "@/public/HomePageLogo/timer.svg";
import * as motion from "motion/react-client";
import AnimatedTitle from "@/components/AnimatedTitle";
import Link from "next/link";
import { useState } from "react";
import { Download } from "lucide-react";

interface GuidlinesCard {
  title: string;
  description: string;
  icon: string;
  index: number;
  className?: string;
}

function GuidelinesCard({ title, description, icon, index, className }: GuidlinesCard) {
  // Define animation variants based on index
  const animationVariants = {
    hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className={`card flex gap-4 items-start ${className || ''}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      variants={animationVariants}
    >
      <Image src={icon} alt="Icon" className="xl:w-20 md:w-16 pt-1" />
      <div className="flex flex-col justify-center gap-2">
        <div className="monitor:text-4xl xl:text-3xl lg:text-2xl text-xl text-white font-bold">
          {title}
        </div>
        <div className="text-base lg:text-base xl:text-lg monitor:text-xl font-normal text-supporting-darkGray md:max-w-64 lg:max-w-[500px] leading-[1.5rem]">
          {description}
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [expandedProblem, setExpandedProblem] = useState<string | null>(null);

  const toggleProblem = (problemId: string) => {
    setExpandedProblem(prev => {
      // If clicking the same problem, close it
      if (prev === problemId) {
        return null;
      }
      // Otherwise, open the new problem (this automatically closes the previous one)
      return problemId;
    });
  };

  const themes = [
    {
      title: "Theme 1: Education and Empowerment",
      description: "Explore innovative solutions for education and empowerment.",
      problems: [
        {
          title: "T1PS01: Develop a Voice-Based Data Entry System for Accessibility",
          description: "Create a system enabling individuals with limited typing abilities or visual impairments to input data using natural language commands, promoting accessibility in digital interactions.",
          expectedOutcome: "Creation of a voice-based data entry system that enables individuals with limited typing abilities or visual impairments to interact with digital platforms using natural language. This system will promote digital inclusion, aiming to increase digital accessibility for 1 million users globally.",
          note: "The idea/solution is not limited to this expected outcome. We encourage you to think outside the box and come up with your own innovative solutions and ideas as well!",
          SDG: "SDG 10 - Reduced Inequalities",
          type: "Software"
        },
        {
          title: "T1PS02: Create a Microfinance Platform for Women Entrepreneurs",
          description: "Establish a blockchain-powered platform to provide women entrepreneurs in underserved communities with access to credit, financial literacy resources, and mentorship, empowering gender equality and economic growth.",
          expectedOutcome: "Establishment of a blockchain-powered microfinance platform providing women entrepreneurs in underserved communities with access to credit, financial literacy resources, and mentorship. This platform will empower gender equality and economic growth, with a target of supporting 100,000 women entrepreneurs and increasing their business success rates by 40%.",
          note: "The idea/solution is not limited to this expected outcome. We encourage you to think outside the box and come up with your own innovative solutions and ideas as well!",
          SDG: "SDG 5 - Gender Equality, SDG 8 - Decent Work and Economic Growth",
          type: "Software"
        },
        {
          title: "T1PS03: Digital Reputation Management",
          description: "Offer tools and services to monitor and manage online reputation across social media and search engine results, protecting brand integrity and promoting responsible digital citizenship.",
          expectedOutcome: "Development of tools and services for monitoring and managing online reputations across social media and search engines. This service will protect brand integrity and promote responsible digital citizenship, aiming to reduce negative online incidents and improve reputation scores for 5,000 individuals and businesses by 30%.",
          note: "The idea/solution is not limited to this expected outcome. We encourage you to think outside the box and come up with your own innovative solutions and ideas as well!",
          SDG: "SDG 16 - Peace, Justice, and Strong Institutions",
          type: "Software"
        }
      ]
    },
    {
      title: "Theme 2: Sustainable Agriculture and Environmental Conservation",
      description: "Explore innovative solutions for sustainable agriculture and environmental conservation.",
      problems: [
        {
          title: "T2PS01: Precision Agriculture for Sustainable Food Production",
          description: "Implement AI-driven solutions to optimize resource allocation, monitor crop health, and manage pests and diseases, promoting sustainable farming practices and enhancing food security.",
          expectedOutcome: "Implementation of AI-driven tools to optimize resource use, monitor crop health, and manage pests in real-time. This approach will enhance sustainable farming practices, increase crop yields by 15%, and contribute to food security and conservation goals.",
          note: "The idea/solution is not limited to this expected outcome. We encourage you to think outside the box and come up with your own innovative solutions and ideas as well!",
          SDG: "SDG 2 - Zero Hunger, SDG 15 - Life on Land",
          type: "Hardware and Software (any one of the solution is enough)"
        },
        {
          title: "T2PS02: NFT-Based Conservation Funding Platform",
          description: "Establish a platform using NFTs to fund environmental conservation projects, such as wildlife protection and habitat restoration, by tokenizing digital artworks and experiences.",
          expectedOutcome: "Establishment of a platform leveraging NFTs to raise funds for environmental conservation projects. By tokenizing digital artworks and experiences, this platform will generate substantial funding for wildlife protection and habitat restoration, targeting an annual increase of $10 million in conservation investments.",
          note: "The idea/solution is not limited to this expected outcome. We encourage you to think outside the box and come up with your own innovative solutions and ideas as well!",
          SDG: "SDG 14 - Life Below Water, SDG 15 - Life on Land",
          type: "Software"
        },
        {
          title: "T2PS03: Augmented Reality Farming Simulator",
          description: "Design an AR application to simulate farming scenarios, allowing farmers to test crop management strategies virtually before implementation, improving agricultural efficiency and productivity.",
          expectedOutcome: "Development of an AR application allowing farmers to simulate and test crop management strategies virtually. This tool will improve agricultural efficiency and productivity, reducing trial-and-error in actual farming and increasing crop yields by 10% through better planning and resource management.",
          note: "The idea/solution is not limited to this expected outcome. We encourage you to think outside the box and come up with your own innovative solutions and ideas as well!",
          SDG: "SDG 2 - Zero Hunger, SDG 9 - Industry, Innovation, and Infrastructure",
          type: "Software"
        }
      ]
    },
    {
      title: "Theme 3: Renewable Energy and solutions",
      description: "Explore innovative solutions for integrating renewable energy sources into smart grids to promote sustainable and efficient energy management.",
      problems: [
        {
          title: "T3PS01: Decentralized Renewable Energy Systems",
          description: "Develop a decentralized renewable energy system that integrates solar, wind, and other renewable sources into local energy grids. This system should optimize energy distribution and storage at the community level.",
          expectedOutcome: "Creation of a decentralized energy system that integrates various renewable sources, reducing dependency on centralized power plants and fossil fuels. This system will increase the adoption of renewable energy by 30% in targeted communities and decrease energy costs by 20%.",
          note: "The idea/solution is not limited to this expected outcome. We encourage you to think outside the box and come up with your own innovative solutions and ideas as well!",
          SDG: "SDG 7 - Affordable and Clean Energy, SDG 11 - Sustainable Cities and Communities",
          type: "Hardware and Software (any one of the solution is enough)",
        },
        {
          title: "T3PS02: AI-Driven Energy Management Platforms",
          description: "Create an AI-driven platform for smart energy management that monitors and optimizes energy usage in real-time for residential and commercial buildings. The platform should also predict and manage peak loads to enhance grid stability.",
          expectedOutcome: "Development of an AI-driven energy management platform that reduces energy consumption by 15% and enhances grid stability by predicting and managing peak loads. This platform will contribute to more efficient energy use and lower energy bills for users.",
          note: "The idea/solution is not limited to this expected outcome. We encourage you to think outside the box and come up with your own innovative solutions and ideas as well!",
          SDG: "SDG 7 - Affordable and Clean Energy, SDG 9 - Industry, Innovation, and Infrastructure",
          type: "Software",
        },
        {
          title: "T3PS03: Blockchain for Renewable Energy Trading",
          description: "Implement a blockchain-based platform for peer-to-peer renewable energy trading. This platform will allow individuals and businesses to buy, sell, and trade excess renewable energy directly, promoting decentralized energy markets.",
          expectedOutcome: "Establishment of a blockchain-based energy trading platform that facilitates peer-to-peer trading of renewable energy. This will increase the efficiency of energy markets, empower consumers, and potentially reduce energy waste by 25%.",
          note: "The idea/solution is not limited to this expected outcome. We encourage you to think outside the box and come up with your own innovative solutions and ideas as well!",
          SDG: "SDG 7 - Affordable and Clean Energy, SDG 12 - Responsible Consumption and Production",
          type: "Software",
        }
      ]
    }
  ];

  const Guidelines = [{
    icon: timerSvg,
    title: "24-Hour Hackathon",
    description:
      "A thrilling 24-hour coding marathon where teams collaborate, innovate, and build amazing solutions from scratch.",
  },
  {
    icon: g1,
    title: "Register with Ease",
    description:
      "Pre-registration opens January 2025—no red tape, just one click away!",
  }, {
    icon: downloadSvg,
    title: "Use Official PPT Template",
    description:
      "Download and use our official PPT template for submissions. Ensure uniformity and professionalism in your presentation.",
  },
  {
    icon: g2,
    title: "No Prerequisites",
    description:
      "Any college student can join, no prerequisites—just bring your creativity!",
  },
  {
    icon: g3,
    title: "Form Team",
    description:
      "Team up with 2-4 members from the same college; join our community to find teammates and get the latest updates!",
  },
  {
    icon: g4,
    title: "Flexible Teams",
    description:
      "Add teammates later by submitting an individual application, and they'll be added once approved.",
  },
  {
    icon: g5,
    title: "Zero Fees, Full Perks",
    description: "No cost to participate, plus free meals and accommodation at SRCAS campus.",
  },
  {
    icon: g6,
    title: "Free Food",
    description:
      "Enjoy complimentary meals, water, and coffee throughout the event at SRCAS.",
  },
  {
    icon: g7,
    title: "In-person Event",
    description: "SRCAS Hackathon 2.0 is an in-person / offline hackathon event at SRCAS Coimbatore.",
  },
  {
    icon: g8,
    title: "Hassle-Free Stay",
    description:
      "Accommodation arrangements will be provided for outstation participants at SRCAS campus.",
  },
  {
    icon: g9,
    title: "Venue",
    description:
      "SRCAS Coimbatore awaits—explore our beautiful campus and bring innovative ideas to life.",
  },


  ];

  return (
    <div className="overflow-hidden">
      <HeroSection />



      {/* Why Participate Section */}
      <div className="w-full py-16 px-4 mt-20 mb-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 leading-tight">
              Why Participate?
            </h2>
            <p className="text-lg md:text-xl text-supporting-mediumGray mb-8 max-w-4xl mx-auto">
              Join thousands of students in Tamil Nadu&apos;s premier hackathon and unlock your potential
            </p>
          </div>

          {/* Why Participate Content - 1x4 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8 ">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group  backdrop-blur-sm border border-white/10 rounded-2xl p-8  hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className="w-20 h-20 border-2 border-white/30 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center transition-colors duration-300">Learn & Grow</h3>
              <p className="text-gray-300 text-base leading-relaxed text-center">
                Enhance your technical skills, learn new technologies, and work on real-world problems that matter.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group  backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className="w-20 h-20 border-2 border-white/30 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center transition-colors duration-300">Network & Connect</h3>
              <p className="text-gray-300 text-base leading-relaxed text-center">
                Meet like-minded peers, industry experts, and potential collaborators. Build lasting relationships.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group backdrop-blur-sm border border-white/10 rounded-2xl p-8  hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className="w-20 h-20 border-2 border-white/30 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center transition-colors duration-300">Win Amazing Prizes</h3>
              <p className="text-gray-300 text-base leading-relaxed text-center">
                Compete for exciting prizes, recognition, and opportunities. Showcase your innovation to industry leaders.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group  backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className="w-20 h-20 border-2 border-white/30 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center transition-colors duration-300">Make an Impact</h3>
              <p className="text-gray-300 text-base leading-relaxed text-center">
                Contribute to solving real-world challenges aligned with UN Sustainable Development Goals.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Problem Statements Section */}
      <div className="flex flex-col  p-4 md:pb-16 lg:px-[5%]  ">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 leading-tight">
            Problem Statements
          </h2>
          <p className="text-lg md:text-xl text-supporting-mediumGray mb-8 max-w-4xl mx-auto">
            Choose from our curated problem statements across three exciting themes. Each problem offers unique challenges and opportunities for innovation.
          </p>
        </div>

        {themes.map((theme, index) => (
          <div key={index} className="mb-16">
            <div className="flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-24">
              {/* Left Half */}
              <div className="w-full  md:w-2/5 flex flex-col gap-5  ">
                <div className="max-w-[600px] text-white text-3xl md:text-4xl underline underline-offset-2 font-medium leading-[44px] -mr-14">
                  {theme.title}
                </div>
                <div className="max-w-[700px] text-[#C3C3C3]  font-normal text-lg leading-7">
                  {theme.description}
                </div>
              </div>

              {/* Right Half */}
              <div className="w-full md:w-3/5 flex flex-col gap-5">
                {theme.problems.map((problem, problemIndex) => {
                  const problemId = `${index}-${problemIndex}`;
                  const isExpanded = expandedProblem === problemId;

                  return (
                    <motion.div
                      key={problemIndex}
                      className="mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: problemIndex * 0.1 }}
                    >
                      <div
                        className="rounded-lg border-2 border-supporting-darkGray transition-all duration-300 cursor-pointer group"
                        onClick={() => toggleProblem(problemId)}
                      >
                        {/* Problem Header */}
                        <div className="flex items-center justify-between p-4">
                          <div className="flex-1">
                            <div className="text-white text-lg font-medium leading-7 hover:underline hover:underline-offset-4">
                              {problem.title}
                            </div>
                          </div>
                          <div className="ml-4 flex-shrink-0">
                            <div className="w-8 h-8 rounded-full border-2 border-supporting-darkGray transition-colors duration-300 flex items-center justify-center">
                              <svg
                                className={`w-4 h-4 text-white transition-transform duration-300 ${isExpanded ? 'rotate-45' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                              </svg>
                            </div>
                          </div>
                        </div>

                        {/* Expanded Content */}
                        <motion.div
                          initial={false}
                          animate={isExpanded ? "open" : "closed"}
                          variants={{
                            open: {
                              opacity: 1,
                              height: "auto",
                              transition: {
                                duration: 0.3,
                                ease: "easeInOut",
                                opacity: { duration: 0.2, delay: 0.1 }
                              }
                            },
                            closed: {
                              opacity: 0,
                              height: 0,
                              transition: {
                                duration: 0.3,
                                ease: "easeInOut",
                                opacity: { duration: 0.1 }
                              }
                            }
                          }}
                          className="overflow-hidden"
                        >
                          <div className="px-4 pb-4 border-t border-supporting-darkGray">
                            <div className="pt-4 space-y-4">
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={isExpanded ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                                transition={{ duration: 0.2, delay: isExpanded ? 0.1 : 0 }}
                              >
                                <h5 className="text-gray-200 font-semibold mb-2">Description:</h5>
                                <p className="text-gray-300 text-base leading-relaxed">{problem.description}</p>
                              </motion.div>

                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={isExpanded ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                                transition={{ duration: 0.2, delay: isExpanded ? 0.15 : 0 }}
                              >
                                <h5 className="text-gray-200 font-semibold mb-2">Expected Outcome:</h5>
                                <p className="text-gray-300 text-base leading-relaxed">{problem.expectedOutcome}</p>
                              </motion.div>

                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={isExpanded ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                                transition={{ duration: 0.2, delay: isExpanded ? 0.2 : 0 }}
                              >
                                <h5 className="text-gray-200 font-semibold mb-2">Note:</h5>
                                <p className="text-gray-300 text-base leading-relaxed">{problem.note}</p>
                              </motion.div>

                              <motion.div
                                className="flex gap-4"
                                initial={{ opacity: 0, y: 10 }}
                                animate={isExpanded ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                                transition={{ duration: 0.2, delay: isExpanded ? 0.25 : 0 }}
                              >
                                <div>
                                  <h5 className="text-gray-200 font-semibold mb-2">SDG:</h5>
                                  <p className="text-gray-300 text-base">{problem.SDG}</p>
                                </div>
                                <div>
                                  
                                  <h5 className="text-gray-200 font-semibold mb-2">Type:</h5>
                                  <p className="text-gray-300 text-base">{problem.type}</p>
                                </div>
                              </motion.div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Guidelines */}
      <div className="flex flex-col items-center gap-4 md:gap-16">
        <div className=" text-supporting-lightGray lg:text-5xl monitor:text-7xl xl:text-6xl md:text-4xl text-center text-3xl xs:text-2xl font-bold leading-[48px] xs:leading-[64px]">
          <AnimatedTitle viewport={true}>
            Guidelines for SRCAS Hackathon 2.0
          </AnimatedTitle>
        </div>
        <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-y-20 xl:gap-x-28 lg:gap-x-16 gap-x-4 py-8 md:py-16 xl:px-28 lg:px-16 px-4">
          {Guidelines.map((item, index) => (
            <GuidelinesCard
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
              index={index}
            />
          ))}
          <motion.div
            className="card flex gap-4 items-start "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={{
              hidden: { opacity: 0, x: 9 % 2 === 0 ? -50 : 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <Image src={g10} alt="Icon" className="xl:w-20 md:w-16 pt-1" />
            <div className="flex flex-col justify-center gap-2">
              <div className="monitor:text-4xl xl:text-3xl lg:text-2xl text-xl text-white font-bold">
                Safe and Secure
              </div>
              <div className="text-base lg:text-base xl:text-lg monitor:text-xl font-normal text-supporting-darkGray md:max-w-64 lg:max-w-[500px] leading-[1.5rem]">
                Organized by <Link
                  href="https://www.srcas.ac.in/"
                  className="underline decoration-white/60"
                  target="_blank"
                >
                  Sri Ramakrishna College of Arts and Science
                </Link> for an inclusive and secure environment for everyone
              </div>
            </div>
          </motion.div>
        </div>
      </div>



      {/* Instagram Card Section */}
      <div className="w-full py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <InstagramCard />
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
  );
}
