import { Card } from "@/components/ui/card";
import { Train, Plane, Bus, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import phoneImg from "@/public/Contact/phone.png";

export const metadata = {
  title: "Contact | SRCAS Hackathon",
  description:
    "Connect with us at SRCAS Hackathon! Reach out for assistance, questions, or just to say hello. Find information on reaching SRCAS, including travel options.",
  keywords: "contact, SRCAS Hackathon, reach us, get in touch",
  openGraph: {
    title: "Contact | SRCAS Hackathon",
    description:
      "Connect with us at SRCAS Hackathon! Reach out for assistance, questions, or just to say hello. Find information on reaching SRCAS, including travel options.",
    url: "https://srcashackathon.live/contact",
    images: "https://github.com/proclub-srcas/SRCAS-Hackathon/blob/main/public/srcas-hack-og.png", 
    siteName: "SRCAS Hackathon",
    type: "website",
    locale: "en_US",
  },
};


export default function ContactSection() {
  return (
    <div className="w-full text-primary-white p-6 md:p-12 lg:p-20 md:py-16 pt-[32px] sm:pt-[48px]">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex items-start justify-between pb-8 md:pb-16">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h1 className="text-[42px] md:text-6xl lg:text-8xl font-black leading-tight">
                How can we
                <br />
                Help you?
              </h1>
              <div className="block md:hidden">
                <Image
                  src={phoneImg}
                  alt="phone"
                  height={100}
                  width={100}
                  className="hidden sm:block"
                />
              </div>
            </div>

            <p className="text-supporting-mediumGray xxs:text-lg md:text-xl font-medium max-w-lg md:max-w-xl lg:max-w-2xl xl:maw-w-3xl">
              Hacker Experience is what we prioritize! Have questions, need
              assistance, or just want to connect? Feel free to reach out!
            </p>
          </div>
          <div className="hidden md:block mx-auto">
            <Image
              src={phoneImg}
              alt="phone"
              className="md:w-[168px] lg:w-[200px] xl:w-[220px]"
            />
          </div>
        </div>

        <div className="flex flex-col items-start gap-12 md:gap-20 md:flex-row ">
          <div className="flex flex-col items-start gap-8 md:gap-12 flex-1">
            <div className="flex flex-col items-start gap-4 md:gap-8">
              <p className="text-[#FFFFFF] font-[500] text-[1.5rem] md:text-[1.875rem]">
                Staff Coordinator
              </p>
              <div className="flex flex-col items-start gap-2">
                <p className="text-white font-semibold   text-[1rem] lg:text-[1.5rem]">Dr. M. Praneesh</p>
                <p className="text-white font-normal text-[1rem] lg:text-[1.5rem]">+91 9629924052</p>
              </div>
            </div>
            
            <div className="flex flex-col items-start gap-4 md:gap-8">
              <p className="text-[#FFFFFF] font-[500] text-[1.5rem] md:text-[1.875rem]">
                Student Coordinators
              </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                 <div className="flex flex-col items-start gap-2">
                 <p className="text-white font-semibold text-[1rem] lg:text-[1.5rem]">Mr. B. Pravin</p>
                   <p className="text-white font-normal text-[1rem] lg:text-[1.5rem]">+91 8778227393</p>
                  
                 </div>
                 <div className="flex flex-col items-start gap-2">
                  
                 <p className="text-white font-semibold text-[1rem] lg:text-[1.5rem]">Mr. R.S Dhananjay</p>
                   <p className="text-white font-normal text-[1rem] lg:text-[1.5rem]">+91 9345060349</p>
                 </div>
                 <div className="flex flex-col items-start gap-2 sm:col-span-2">
                  
                 <p className="text-white font-semibold text-[1rem] lg:text-[1.5rem]">Mr. Sarath P</p>
                   <p className="text-white font-normal text-[1rem] lg:text-[1.5rem]">+91 90038 02153</p>
                 </div>
               </div>
            </div>
          </div>
          
          <div className="flex flex-col items-start gap-8 md:gap-12 flex-1">
            <div className="flex flex-col items-start gap-4 md:gap-8">
              <p className="text-[#FFFFFF] font-[500] text-[1.5rem] md:text-[1.875rem]">
                Address
              </p>
              <p
                className="max-w-full text-white 
              font-normal text-[1rem] lg:text-[1.5rem]"
              >
                2XCP+WQ4, Bus Stop, Avinashi Road Between Fun Mall & Lakshmi Mills, Nava India Rd, Peelamedu, Tamil Nadu
                641006
              </p>
            </div>
            
            <div className="flex flex-col items-start gap-4 md:gap-8">
              <p className="text-[#FFFFFF] font-[500] text-[1.5rem] md:text-[1.875rem]">
                Email Us
              </p>
              <div className="flex flex-col items-start gap-2">
                <Link 
                  href="mailto:proclub@srcas.ac.in"
                  className="text-blue-500 underline underline-offset-3 font-normal text-[1rem] lg:text-[1.5rem]"
                >
                  proclub@srcas.ac.in
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-8 md:gap-12">
          <p className="text-[#FFFFFF] font-normal font-['Inter'] text-[1.5rem] md:text-[1.875rem]">
            Reaching SRCAS Coimbatore
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.218137130089!2d76.98439197480867!3d11.022253789141816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85849d74c3695%3A0x9153ec3168293ec5!2sSri%20Ramakrishna%20College%20of%20Arts%20%26%20Science!5e0!3m2!1sen!2sin!4v1716544629649!5m2!1sen!2sin"
            className="w-full h-full md:h-[25rem] border-0 rounded-[1rem]"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
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
