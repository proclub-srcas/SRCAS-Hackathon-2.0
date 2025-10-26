"use client";
import { useAnimate } from "motion/react";
import closesidebar from "@/public/closesidebar.svg";
import opensidebar from "@/public/opensidebar.svg";
import {
  Calendar,
  Handshake,
  House,
  Trophy,
  Users,
  Info,
  Image as Gallery,
  Phone,
  Download,
} from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const sidebarLinks = [
  { name: "Home", icon: <House />, href: "/" },
  { name: "Gallery", icon: <Gallery />, href: "/gallery" },
  { name: "Partners", icon: <Handshake />, href: "/partners" },
  { name: "Prizes", icon: <Trophy />, href: "/prizes" },
  { name: "Schedule", icon: <Calendar />, href: "/schedule" },
  { name: "Humans", icon: <Users />, href: "/humans" },
  { name: "FAQs", icon: <Info />, href: "/faq" },
  { name: "Contact", icon: <Phone />, href: "/contact" },
];

const MobileSidebar = () => {
  const [fullyopen, setFullyopen] = useState(false);
  const [open, setOpen] = useState(false);
  const [scope, animate] = useAnimate();
  const pathname = usePathname();
  const sidebarRef = useRef(null);
  const ishome = pathname === "/";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  useEffect(() => {
    const animateSidebar = async () => {
      if (open) {
        await animate(
          scope.current,
          { height: "480px", width: "65px", borderRadius: "32px" },
          { duration: 0.3 }
        );
        await animate(
          scope.current,
          { width: "170px", borderRadius: "32px" },
          { delay: 0.3 }
        );
        setFullyopen(true);
      } else {
        await animate(
          scope.current,
          { height: "46px", width: "46px", borderRadius: "32px" },
          {
            type: "spring",
            stiffness: 90,
            damping: 15,
          }
        );
        setFullyopen(false);
      }
    };

    animateSidebar();
  }, [open, animate, scope]);

  return (
    <>
      <div
        ref={(el) => {
          scope.current = el; // For animations
          sidebarRef.current = el; // For outside click detection
        }}
        className={`backdrop-blur-xl bg-[#222222] h-[48px] w-[48px] fixed rounded-[32px] z-50 ${
          ishome ? "left-4 top-5 " : "right-4 top-5"
        }`}
        style={{
          background: "rgba(34, 34, 34, 0.50)",
          boxShadow: "0px 0px 80px 0px rgba(0, 0, 0, 0.15)",
          backdropFilter: "blur(20px)",
        }}
      >
        {open ? (
          <Image
            alt="opensidebar"
            onClick={() => setOpen(!open)}
            src={opensidebar}
            className="absolute right-3 top-3"
          />
        ) : (
          <Image
            alt="closesidebar"
            onClick={() => setOpen(!open)}
            src={closesidebar}
            
          />
        )}
        {open && (
          <div className="flex flex-col justify-between h-full p-4 pt-12 overflow-hidden">
            <div className="flex flex-col gap-3">
              {sidebarLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-3 px-2 py-2 rounded-lg transition-all duration-300 ${
                    pathname === link.href 
                      ? "text-white " 
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    {link.icon}
                  </div>
                  {fullyopen && <span className="text-sm font-medium">{link.name}</span>}
                </Link>
              ))}
            </div>
            
            {/* PPT Download Button */}
            <a
              href="/assets/srcas-hackathon.pptx"
              download="SRCAS-Hackathon-Presentation.pptx"
              className="flex items-center gap-3 px-2 py-2 rounded-lg text-white/60 hover:text-[#007acc] hover:bg-[#007acc]/10 transition-all duration-300"
              onClick={() => setOpen(false)}
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <Download className="hover:animate-bounce  " />
              </div>
              {fullyopen && <span className="text-sm font-medium">Download PPT</span>}
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileSidebar;
