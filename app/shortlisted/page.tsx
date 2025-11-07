"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import srcasHackLogo from "@/public/assets/srcashack-logo.png";

interface Finalist {
  serial: number;
  theme: string;
  problemStatement: string;
  teamName: string;
  teamID: string;
  leaderName: string;
  collegeName: string;
}

export default function Shortlisted() {
  const finalists: Finalist[] = [];

  return (
    <div className="overflow-hidden ">
      {/* Hero Section */}
      <div className="w-full  px-4 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start justify-between gap-8 mb-12">
            <div className="text-left flex-1">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-white font-gotham font-black text-[36px] xs:text-[42px] md:text-5xl lg:text-[4.2rem] xl:text-[96px] xl:leading-tight mb-6"
              >
                Finalists of<br />
                SRCAS Hackathon 2.0
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-supporting-mediumGray text-left font-medium md:text-xl lg:text-2xl text-lg xs:text-md max-w-[800px]"
              >
                Congratulations to all the selected teams! You will be notified with further steps soon.
              </motion.p>
            </div>
            <div className="hidden md:block flex-shrink-0">
              <motion.div
                initial={{ opacity: 0, rotate: -12 }}
                animate={{ opacity: 1, rotate: 12 }}
                transition={{ duration: 0.8 }}
              >
                <Image 
                  src={srcasHackLogo} 
                  alt="SRCAS Hackathon 2.0 Logo" 
                  className="w-48 h-24 lg:w-40 lg:h-40 xl:w-[430px] xl:h-[430px] -mt-16 object-contain rotate-12"
                />
              </motion.div>
            </div>
          </div>

        </div>
      </div>

      {/* Table Section */}
      <div className="w-full px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="overflow-x-auto rounded-2xl border border-white/10 bg-transparent"
          >
            <table className="min-w-full">
              <thead className="bg-transparent border-b border-white/20">
                <tr>
                  <th className="py-4 px-6 text-left text-sm font-bold text-white uppercase tracking-wider border-r border-white/10">
                    S.No
                  </th>
                  <th className="py-4 px-6 text-left text-sm font-bold text-white uppercase tracking-wider border-r border-white/10">
                    Theme
                  </th>
                  <th className="py-4 px-6 text-left text-sm font-bold text-white uppercase tracking-wider border-r border-white/10">
                    Problem Statement
                  </th>
                  <th className="py-4 px-6 text-left text-sm font-bold text-white uppercase tracking-wider border-r border-white/10">
                    Team Name
                  </th>
                  <th className="py-4 px-6 text-left text-sm font-bold text-white uppercase tracking-wider border-r border-white/10">
                    Team ID
                  </th>
                  <th className="py-4 px-6 text-left text-sm font-bold text-white uppercase tracking-wider border-r border-white/10">
                    Team Leader
                  </th>
                  <th className="py-4 px-6 text-left text-sm font-bold text-white uppercase tracking-wider">
                    College
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {finalists.map((finalist, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.02 }}
                    className="hover:bg-white/5 transition-colors duration-200"
                  >
                    <td className="py-4 px-6 text-white font-semibold border-r border-white/10">
                      {finalist.serial}
                    </td>
                    <td className="py-4 px-6 text-white border-r border-white/10">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30">
                        Theme {finalist.theme}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-white font-medium border-r border-white/10">
                      {finalist.problemStatement}
                    </td>
                    <td className="py-4 px-6 text-white font-bold border-r border-white/10">
                      {finalist.teamName}
                    </td>
                    <td className="py-4 px-6 text-supporting-mediumGray font-mono text-base border-r border-white/10">
                      {finalist.teamID}
                    </td>
                    <td className="py-4 px-6 text-white border-r border-white/10">
                      {finalist.leaderName}
                    </td>
                    <td className="py-4 px-6 text-supporting-mediumGray text-base">
                      {finalist.collegeName}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>

        
        </div>
      </div>
    </div>
  );
}
