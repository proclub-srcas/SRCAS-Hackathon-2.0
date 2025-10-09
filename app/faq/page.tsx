import Image from "next/image";
import { Mail } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faq from "@/public/Faq/question_mark.png";
import Link from "next/link";
import AnimatedTitle from "@/components/AnimatedTitle";

export const metadata = {
  title: "FAQ | SRCAS Hackathon",
  description: "Frequently asked questions about SRCAS Hackathon.",
  keywords: "FAQ, SRCAS Hackathon, SRCAS, Hackathon",
  openGraph: {
    title: "FAQ | SRCAS Hackathon",
    description: "Frequently asked questions about SRCAS Hackathon.",
    url: "https://srcashackathon.live/faq",
    images: "https://github.com/proclub-srcas/SRCAS-Hackathon/blob/main/public/srcas-hack-og.png", 
    siteName: "SRCAS Hackathon",
    type: "website",
    locale: "en_US",
  },
};


const faqs = [
  {
    question: "How do I register ?",
    answer: "Register on our website at [Registration Link].",
  },
  {
    question: "How many team members do I need ?",
    answer: "Your team must consist of 2 to 4 members.",
  },
  {
    question: "Can team members be from different Colleges?",
    answer: "No, team members should be from same College.",
  },
  {
    question: "Who is eligible to participate in the hackathon?",
    answer: "Any College student can participate in this Hackathon",
  },
  {
    question: "How much are the participation fees?",
    answer: "Participation is absolutely free of cost. Isn't that great? So register ASAP!!",
  },
  {
    question: "Will the Hackathon be in person or online ?",
    answer: "SRCAS Hackathon will be conducted in complete offline/in-person mode.",
  },
  {
    question: "What is the schedule of the hackathon?",
    answer: "The schedule is available on our website's home page.",
  },
  {
    question: "Where is the hackathon being held?",
    answer: "SRCAS Coimbatore, explore our beautiful campus while thinking about innovating some crazy thing.",
  },
  {
    question: "What are the prerequisites to participate in this hackathon ?",
    answer: "Participation in this hackathon does not require any prior qualifications. Individuals of any skill level are encouraged to take part.",
  },
  {
    question: "What should I bring?",
    answer: "All the necessary components required to finish your solution.",
  },
  {
    question: "Will there be mentors or experts available to help during the hackathon?",
    answer: "Yes, mentors will be available throughout the event.",
  },
  {
    question: "Who can I contact for further information or assistance?",
    answer: "Feel free to send an email to srcasprogrammingclub@gmail.com, or visit our contact page for additional contact information. We're eagerly awaiting your message.",
  },
];

export default function FAQSection() {
  return (
    <div className="min-h-screen text-primary-white p-6 md:p-12 lg:p-16 md:py-16 pt-[32px] sm:pt-[48px]">
      <div className="max-w-7xl mx-auto mb-24 md:mb-32">
        <div className="grid md:grid-cols-[2fr,1fr] gap-8 items-center">
          <div className="space-y-6 animate-in fade-in duration-500">
            <h1 className="text-[42px] md:text-6xl lg:text-8xl font-black leading-tight max-w-64 md:max-w-3xl">
              Everything you need , right here!
            </h1>
            <p className="text-supporting-mediumGray text-lg md:text-xl lg:text-xl xl:text-2xl font-medium md:max-w-lg lg:max-w-3xl">
              Elevating your hacker journey is what we're all about! 
              Don't hesitate to contact us for assistance or to connect with like-minded individuals.
            </p>
          </div>
          <Image
            src={faq}
            alt=""
            className="hidden md:flex md:w-[200px] lg:w-[220px] lg:pb-28 xl:pb-0 hover:-rotate-6 hover:scale-105 transition-all ease-in-out duration-500"
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-1 lg:grid-cols-[1fr,2fr] gap-12">
        <div className="space-y-8 animate-in duration-500 delay-300">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter animate-in duration-500">
            FAQs
          </h1>
            <div className="space-y-4 animate-in duration-500 delay-500">
              <p className="text-supporting-mediumGray text-lg">
                Unlock Product Insights and Billing Know-How! Can't find what you're after? Chat with our stellar team! chat to our friendly team.
              </p>
            </div>
        </div>

        <div className="animate-in fade-in duration-500 delay-500 md:h-[750px] lg:h-[760px] xl:h-[900px]">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedTitle key={index}>
                <AccordionItem
                  value={`item-${index}`}
                  className="border-b border-gray-800"
                >
                  <AccordionTrigger className="text-base sm:text-lg md:text-xl xl:text-2xl text-supporting-mediumGray hover:text-white transition-colors text-left pr-4 font-bold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base sm:text-lg  xl:text-xl text-supporting-mediumGray">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </AnimatedTitle>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
