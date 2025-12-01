"use client";

import Image from "next/image";
import HeroSection from "@/components/Herosection";
import InstagramCard from "@/components/instaCard";
import g1 from "@/public/HomePageLogo/g1.svg";
import g2 from "@/public/HomePageLogo/g2.svg";
import g3 from "@/public/HomePageLogo/g3.svg";
import g5 from "@/public/HomePageLogo/g5.svg";
import idCard from "@/public/HomePageLogo/id-card.svg";

import g7 from "@/public/HomePageLogo/g7.svg";

import g9 from "@/public/HomePageLogo/g9.svg";
import g10 from "@/public/HomePageLogo/g10.svg";
import downloadSvg from "@/public/assets/download-svg.svg";
import timerSvg from "@/public/HomePageLogo/timer.svg";
import * as motion from "motion/react-client";
import AnimatedTitle from "@/components/AnimatedTitle";
import Link from "next/link";
import FallingText from "@/components/FallingText";
import { useState, useEffect } from "react";
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
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWhatsAppModal(true);
    }, 5000); // Show after 5 seconds

    return () => clearTimeout(timer);
  }, []);

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

  const problemStatements = [
    {
      id: 1,
      title: "Mobile App for Cyberbullying Detection & Prevention",
      problem: "With the growing use of social media and messaging platforms, cyberbullying among teenagers and students has become a major psychological and social issue. Victims often hesitate to report incidents due to fear or lack of awareness, leading to mental distress and social withdrawal. Existing moderation systems are platform-specific and fail to protect users across multiple apps or private chats.",
      goal: "To develop an AI-powered mobile application that continuously monitors user messages, social media interactions, and public comments for offensive, threatening, or abusive content. Using natural language processing (NLP) and sentiment analysis, the app should detect harmful patterns and issue real-time alerts or guidance. It should also provide reporting options, mental health resources, and parental dashboards (optional for minors).",
      expectedOutcome: "A real-time, privacy-aware mobile safety companion that automatically identifies and flags cyberbullying incidents, promotes digital well-being, and supports early intervention. The project aims to reduce online harassment rates and increase awareness among youth and parents."
    },
    {
      id: 2,
      title: "LLM for Cyber Issue SOPs",
      problem: "Citizens often face cyber issues like fake profiles, online scams, identity theft, and harassment but are unaware of proper reporting channels or standard operating procedures (SOPs). Information on government and cyber cell websites is often fragmented and hard to navigate.",
      goal: "To design an LLM-powered assistant (web/app/chatbot) trained on official government guidelines, CERT-In advisories, and cybercrime SOPs. The model should understand natural queries (e.g., \"Someone made a fake account of me\" or \"How to report online money fraud?\") and instantly provide step-by-step instructions, relevant official links, and reporting forms.",
      expectedOutcome: "An interactive, multilingual knowledge assistant that empowers users with accurate, immediate, and verified responses to cybercrime-related queries — reducing dependency on manual support and increasing the speed of citizen response in cyber incidents."
    },
    {
      id: 3,
      title: "SOS & Geo-Fencing App for Women & Elderly",
      problem: "In emergencies, women and elderly individuals may not have time to contact help or share their location. Current safety apps often require manual actions or fail when there's no internet connectivity.",
      goal: "To create a lightweight safety mobile app that supports one-touch SOS alerts, geo-fencing, and real-time location sharing. The system automatically detects if a user exits a predefined safe zone or triggers panic detection (e.g., sudden acceleration, loud noise). The app should send alerts via SMS, WhatsApp, or calls to pre-registered contacts and local authorities even in low-network conditions.",
      expectedOutcome: "A reliable personal safety system offering proactive protection and rapid response. The app enhances security for vulnerable groups, fosters community safety awareness, and can be integrated with local police helplines or smart city emergency frameworks."
    },
    {
      id: 4,
      title: "IoT Device Security Analyzer",
      problem: "IoT devices like smart cameras, wearables, and home assistants often have weak security configurations. Many users are unaware that their devices are vulnerable to attacks or misconfigured, exposing their networks to exploitation.",
      goal: "To build a network-scanning and vulnerability-assessment tool that detects IoT devices connected to a local Wi-Fi network, identifies their make/model, and checks for known vulnerabilities (CVE database) or default credentials. The tool should provide a security score and recommendations for securing each device (e.g., firmware updates, port closures).",
      expectedOutcome: "A comprehensive IoT vulnerability scanner that empowers users and enterprises to detect, analyze, and mitigate IoT security risks. This leads to stronger endpoint security, reduced attack surfaces, and greater visibility in smart home or industrial IoT environments."
    },
    {
      id: 5,
      title: "Accelerating Realistic Road Network Modeling for Indian Traffic Simulations",
      problem: "India's urban road networks are uniquely complex — characterized by irregular lane patterns, mixed traffic, temporary barricades, frequent construction zones, and poor road maintenance. Current traffic modeling tools fail to accurately capture these real-world irregularities, leading to inaccurate predictions for congestion, safety risks, and infrastructure planning.",
      goal: "To design and develop an AI-assisted, MATLAB-integrated toolset that automatically generates realistic digital twins of Indian road networks from minimal inputs such as map data, drone imagery, or sensor datasets. The system should simplify digital twin creation, incorporate generative AI for auto-populating road environments, and integrate seamlessly with MATLAB, Simulink, and RoadRunner.",
      expectedOutcome: "A prototype workflow that automates Indian road network model creation, achieving 70–90% reduction in manual modeling time, increased realism in simulation scenarios, and seamless integration with MATLAB tools. This enables more data-driven urban planning and autonomous driving research."
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
      "Registration is now open! Sign up quickly and join us for an amazing hackathon experience.",
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
    icon: idCard,
    title: "ID Card Mandatory",
    description:
      "All participants must carry their valid college ID cards throughout the event for identification and security purposes.",
  }
    ,
  {
    icon: g3,
    title: "Form Team",
    description:
      "Team up with 2-4 members from the same college; join our community to find teammates and get the latest updates!",
  },

  {
    icon: g5,
    title: "Zero Fees, Full Perk and Free Food",
    description: "No cost to participate, plus free meals and refreshments at SRCAS campus.",
  },
  {
    icon: g7,
    title: "In-person Event",
    description: "SRCAS Hackathon 2.0 is an in-person (offline) hackathon event at SRCAS Coimbatore.",
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
      {/* WhatsApp Modal */}
      {showWhatsAppModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative bg-gradient-to-br from-[#2a2a2a] to-[#1f1f1f] border border-white/20 rounded-3xl p-8 md:p-12 max-w-lg w-full shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={() => setShowWhatsAppModal(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* WhatsApp Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/40">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="text-center space-y-4">
              <h3 className="text-2xl md:text-3xl font-black text-white">
                Join Our WhatsApp Group
              </h3>
              <p className="text-base md:text-lg text-white/70 leading-relaxed">
                Stay updated with the latest hackathon announcements, FAQs, and important notifications. Join our community now!
              </p>

              <a
                href="https://chat.whatsapp.com/Ldpuv6oaszdD65feKi7K4u"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowWhatsAppModal(false)}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 mt-6"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Join WhatsApp Group
              </a>
            </div>
          </motion.div>
        </div>
      )}

      {/* Floating WhatsApp Widget */}
      <a
        href="https://chat.whatsapp.com/Ldpuv6oaszdD65feKi7K4u"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 group"
      >
        <div className="relative">
          {/* Ping animation */}
          <span className="absolute inset-0 w-full h-full bg-green-500 rounded-full animate-ping opacity-75"></span>

          {/* Main button */}
          <div className="relative bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </div>

          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            <div className="bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-lg">
              WhatsApp Group for Updates & FAQ
            </div>
          </div>
        </div>
      </a>

      <HeroSection />

      {/* Prize Pool Section */}
      <div className="w-full py-12 md:py-16 px-4 mt-8 md:mt-12">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="bg-gradient-to-br from-[#1a1a1a] via-[#222222] to-[#1a1a1a] border border-white/10 rounded-3xl p-8 md:p-12 lg:p-16 hover:border-secondary-orange/30 hover:shadow-2xl hover:shadow-secondary-orange/10 transition-all duration-500 overflow-hidden">

              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-orange/5 via-transparent to-secondary-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* Money Icon Stack */}
              <div className="flex justify-center mb-8 relative z-10">
                <div className="relative">
                  {/* Outer glow ring */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-emerald-500/20 to-green-600/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>

                  {/* Main icon container */}
                  <div className="relative w-28 h-28 md:w-36 md:h-36 bg-gradient-to-br from-[#2a2a2a] to-[#1f1f1f] rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-emerald-500/40 transition-all duration-500 group-hover:scale-105">

                    {/* Stacked coins effect */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* Back coin */}
                      <div className="absolute w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-emerald-400/40 to-green-500/30 rounded-full -translate-x-2 translate-y-2 blur-[1px] opacity-60"></div>

                      {/* Middle coin */}
                      <div className="absolute w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-emerald-400/50 to-green-500/40 rounded-full translate-x-1 -translate-y-1 blur-[0.5px] opacity-80"></div>

                      {/* Front coin with rupee symbol */}
                      <div className="relative w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-emerald-500 via-emerald-400 to-green-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/40 border-2 border-emerald-400/30 group-hover:shadow-emerald-400/60 group-hover:border-emerald-400/50 transition-all duration-500">
                        <span className="text-2xl md:text-3xl font-black text-[#1a1a1a]">₹</span>
                      </div>
                    </div>
                  </div>

                  {/* Orbiting particles */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-48 md:h-48">
                    <div className="absolute top-0 left-1/2 w-2 h-2 bg-emerald-400/60 rounded-full blur-sm animate-pulse"></div>
                    <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-green-500/60 rounded-full blur-sm animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="text-center space-y-5 relative z-10">
                <h2 className="text-lg md:text-xl font-bold text-supporting-mediumGray uppercase tracking-widest">
                  Total Prize Pool
                </h2>

                <div className="relative">
                  <div className="flex items-center justify-center gap-4">
                    <div className="h-[2px] w-16 md:w-24 bg-gradient-to-r from-transparent via-secondary-orange/50 to-secondary-orange rounded-full"></div>
                    <p className="text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-br from-white via-white to-white/80 bg-clip-text text-transparent tracking-tighter">
                      ₹75,000
                    </p>
                    <div className="h-[2px] w-16 md:w-24 bg-gradient-to-l from-transparent via-secondary-orange/50 to-secondary-orange rounded-full"></div>
                  </div>

                  {/* Subtle shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                </div>

                <p className="text-base md:text-lg text-supporting-mediumGray max-w-2xl mx-auto leading-relaxed px-4">
                  Compete for exciting cash prizes and recognition. Top teams will be rewarded for their innovation and problem-solving excellence.
                </p>

                {/* Link to prizes page */}
                <div className="pt-6">
                  <Link
                    href="/prizes"
                    className="inline-flex items-center gap-2 text-sm md:text-base text-secondary-orange hover:text-white transition-colors duration-300 group/link px-6 py-2 rounded-lg border border-secondary-orange/20 hover:border-secondary-orange/40 hover:bg-secondary-orange/5"
                  >
                    <span className="font-medium">
                      Check detailed info
                    </span>
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Subtle corner accents */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-secondary-orange/5 to-transparent rounded-tl-3xl"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-secondary-green/5 to-transparent rounded-br-3xl"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Important Dates Section */}
      <div className="w-full py-12 md:py-16 px-4 mt-8 md:mt-12 mb-4 md:mb-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedTitle viewport={true}>
            <h2 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-3 md:mb-4 text-center">
              Mark Your Calendar
            </h2>
          </AnimatedTitle>
          <p className="text-base md:text-lg lg:text-xl text-supporting-mediumGray mb-10 md:mb-16 text-center max-w-3xl mx-auto">
            Stay on track with these key milestones for SRCAS Hackathon 2.0
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="relative bg-gradient-to-br from-[#2a2a2a] to-[#1f1f1f] border border-white/20 rounded-2xl p-10 hover:border-secondary-orange/60 hover:shadow-lg hover:shadow-secondary-orange/10 transition-all duration-300 h-full overflow-hidden group">
                {/* Subtle corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-secondary-orange/5 to-transparent rounded-bl-full"></div>

                <div className="relative z-10">
                  <div className="flex justify-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </div>
                  </div>

                  <div className="text-center space-y-4">
                    <h3 className="text-xs md:text-sm font-bold text-[#3B82F6] uppercase tracking-[0.2em]">
                      Idea Submission
                    </h3>
                    <p className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none">
                      Dec 5
                    </p>
                    <p className="text-lg md:text-xl text-white/40 font-medium">2025</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative bg-gradient-to-br from-[#2a2a2a] to-[#1f1f1f] border border-white/20 rounded-2xl p-10 hover:border-secondary-orange/60 hover:shadow-lg hover:shadow-secondary-orange/10 transition-all duration-300 h-full overflow-hidden group">
                {/* Subtle corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-secondary-orange/5 to-transparent rounded-bl-full"></div>

                <div className="relative z-10">
                  <div className="flex justify-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>

                  <div className="text-center space-y-4">
                    <h3 className="text-xs md:text-sm font-bold text-[#3B82F6] uppercase tracking-[0.2em]">
                      Finalists Announced
                    </h3>
                    <p className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none">
                      Dec 8
                    </p>
                    <p className="text-lg md:text-xl text-white/40 font-medium">2025</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="relative bg-gradient-to-br from-[#2a2a2a] to-[#1f1f1f] border border-white/20 rounded-2xl p-10 hover:border-secondary-orange/60 hover:shadow-lg hover:shadow-secondary-orange/10 transition-all duration-300 h-full overflow-hidden group">
                {/* Subtle corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-secondary-orange/5 to-transparent rounded-bl-full"></div>

                <div className="relative z-10">
                  <div className="flex justify-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>

                  <div className="text-center space-y-4">
                    <h3 className="text-xs md:text-sm font-bold text-[#3B82F6] uppercase tracking-[0.2em]">
                      24 Hours Hackathon
                    </h3>
                    <p className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none">
                      Dec 13
                    </p>
                    <p className="text-lg md:text-xl text-white/40 font-medium">2025</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Problem Statements Section */}
      <div className="flex flex-col px-4 py-8 md:py-16  lg:px-[7%]">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 md:mb-6 leading-tight">
            Problem Statements
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-supporting-mediumGray mb-4 md:mb-8 max-w-4xl mx-auto px-2">
            Choose from our curated problem statements focusing on cybersecurity, sustainability, and smart city solutions. Each problem offers unique challenges and opportunities for innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:gap-6 max-w-6xl mx-auto w-full">
          {problemStatements.map((problem, index) => {
            const problemId = `problem-${problem.id}`;
            const isExpanded = expandedProblem === problemId;

            return (
              <motion.div
                key={problem.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="w-full"
              >
                <div
                  className="rounded-lg border-2 border-supporting-darkGray transition-all duration-300 cursor-pointer hover:border-white/30 bg-black/20"
                  onClick={() => toggleProblem(problemId)}
                >

                  <div className="flex items-center justify-between p-3 sm:p-4 md:p-6">
                    <div className="flex items-start gap-2 sm:gap-3 md:gap-4 flex-1 min-w-0">
                      <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 border-white/50 flex items-center justify-center">
                        <span className="text-white font-bold text-sm sm:text-base md:text-lg">{problem.id}</span>
                      </div>
                      <div className="flex-1 min-w-0 pr-2">
                        <h3 className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold leading-tight sm:leading-snug md:leading-7 pt-1 sm:pt-1.5 md:pt-2 hover:underline hover:underline-offset-4 break-words">
                          {problem.title}
                        </h3>
                      </div>
                    </div>
                    <div className="flex-shrink-0 ml-2 sm:ml-3 md:ml-4">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border-2 border-supporting-darkGray transition-colors duration-300 flex items-center justify-center hover:border-white/40">
                        <svg
                          className={`w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform duration-300 ${isExpanded ? 'rotate-45' : ''}`}
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
                    <div className="px-3 sm:px-4 md:px-6 pb-3 sm:pb-4 md:pb-6 border-t border-supporting-darkGray">
                      <div className="pt-3 sm:pt-4 md:pt-6 space-y-3 sm:space-y-4 md:space-y-5">
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={isExpanded ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                          transition={{ duration: 0.2, delay: isExpanded ? 0.1 : 0 }}
                        >
                          <h5 className="text-white font-bold mb-1.5 sm:mb-2 text-base sm:text-lg">Problem:</h5>
                          <p className="text-gray-300 text-sm sm:text-base leading-relaxed break-words">{problem.problem}</p>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={isExpanded ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                          transition={{ duration: 0.2, delay: isExpanded ? 0.15 : 0 }}
                        >
                          <h5 className="text-white font-bold mb-1.5 sm:mb-2 text-base sm:text-lg">Goal:</h5>
                          <p className="text-gray-300 text-sm sm:text-base leading-relaxed break-words">{problem.goal}</p>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={isExpanded ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                          transition={{ duration: 0.2, delay: isExpanded ? 0.2 : 0 }}
                        >
                          <h5 className="text-white font-bold mb-1.5 sm:mb-2 text-base sm:text-lg">Expected Outcome:</h5>
                          <p className="text-gray-300 text-sm sm:text-base leading-relaxed break-words">{problem.expectedOutcome}</p>
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
      {/* Why Participate Section */}
      <div className="w-full py-16 px-4 mt-20 mb-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 leading-tight">
              Why Participate?
            </h2>
            <p className="text-lg md:text-xl text-supporting-mediumGray mb-8 max-w-4xl mx-auto">
              Join students in Tamil Nadu&apos;s premier hackathon and unlock your potential
            </p>
          </div>

          {/* Why Participate Content - 1x4 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8  ">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group  backdrop-blur-sm border border-white/10 rounded-2xl p-8  hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className="w-20 h-20 border-2 border-white/30 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-blue-500/20 to-blue-600/20">
                <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center transition-colors duration-300">Learn & Grow</h3>
              <p className="text-gray-300 text-base leading-relaxed text-center">
                Enhance your technical skills, learn new technologies and work on real-world problems that matter.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group  backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className="w-20 h-20 border-2 border-white/30 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-green-500/20 to-green-600/20">
                <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center transition-colors duration-300">Network & Connect</h3>
              <p className="text-gray-300 text-base leading-relaxed text-center">
                Meet like-minded peers, industry experts and potential collaborators. Build lasting relationships.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group backdrop-blur-sm border border-white/10 rounded-2xl p-8  hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className="w-20 h-20 border-2 border-white/30 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20">
                <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center transition-colors duration-300">Win Amazing Prizes</h3>
              <p className="text-gray-300 text-base leading-relaxed text-center">
                Compete for exciting prizes, recognition and opportunities. Showcase your innovation to industry leaders.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group  backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className="w-20 h-20 border-2 border-white/30 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-purple-500/20 to-purple-600/20">
                <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center transition-colors duration-300">Make an Impact</h3>
              <p className="text-gray-300 text-base leading-relaxed text-center">
                Contribute to solving real-world challenges aligned with Sustainable Development Goals.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Falling Text Animation Section - Hidden on Mobile */}
      <div className="w-full py-16 px-4 mb-16 hidden md:block">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 leading-tight">
              Interactive Experience
            </h2>
            <p className="text-lg md:text-xl text-supporting-mediumGray mb-8 max-w-4xl mx-auto">
              Experience the power of technology through interactive animations
            </p>
          </div>

          <div className="bg-transparent rounded-2xl p-8 min-h-[500px] flex items-center justify-center pb-16 overflow-visible">
            <FallingText
              text="SRCAS Hackathon 2.0 brings together brilliant minds to code innovate and build the future of technology through cutting-edge solutions and collaborative development"
              highlightWords={["SRCAS", "Hackathon", "code", "innovate", "technology", "solutions", "development"]}
              trigger="scroll"
              backgroundColor="transparent"
              wireframes={false}
              gravity={0.5}
              fontSize="2.8rem"
              mouseConstraintStiffness={0.7}
            />
          </div>
        </div>
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
  );
}
