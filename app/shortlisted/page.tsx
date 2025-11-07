"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import srcasHackLogo from "@/public/assets/srcashack-logo.png";

export default function Shortlisted() {
  const finalists = [
    {
      serial: 1,
      theme: '01',
      problemStatement: 'T1PS01',
      teamName: 'ZGDX',
      teamID: 'T1PS01T12',
      leaderName: 'Pavithra S',
      collegeName: 'Sri Ramakrishna College of Arts & Science'
    },
    {
      serial: 2,
      theme: '01',
      problemStatement: 'T1PS01',
      teamName: 'CODE HACKERS',
      teamID: 'T1PS01T13',
      leaderName: 'Rajashree B',
      collegeName: 'Sri Ramakrishna College of Arts and Science for Women'
    },
    {
      serial: 3,
      theme: '01',
      problemStatement: 'T1PS01',
      teamName: 'Tech Titans',
      teamID: 'T1PS01T21',
      leaderName: 'Divya R',
      collegeName: 'Sri G.V.G. Visalakshi College for Women'
    },
    {
      serial: 4,
      theme: '01',
      problemStatement: 'T1PS01',
      teamName: 'THE MOGGERS',
      teamID: 'T1PS01T38',
      leaderName: 'Raghul M',
      collegeName: 'Sri Ramakrishna College of Arts & Science'
    },
    {
      serial: 5,
      theme: '01',
      problemStatement: 'T1PS02',
      teamName: 'We Tried',
      teamID: 'T1PS02T06',
      leaderName: 'Lakshmi Prabha S',
      collegeName: 'KG College of Arts and Science'
    },
    {
      serial: 6,
      theme: '01',
      problemStatement: 'T1PS02',
      teamName: 'BYTE KARMA',
      teamID: 'T1PS02T18',
      leaderName: 'Tharun Prakash V',
      collegeName: 'Dr. Mahalingam College of Engineering and Technology'
    },
    {
      serial: 7,
      theme: '01',
      problemStatement: 'T1PS02',
      teamName: 'TECH ARMY',
      teamID: 'T1PS02T23',
      leaderName: 'Padmapriya C',
      collegeName: 'St.Joseph\'s Institute of Technology'
    },
    {
      serial: 8,
      theme: '01',
      problemStatement: 'T1PS03',
      teamName: 'CODE KARMA',
      teamID: 'T1PS03T02',
      leaderName: 'Sanchana S',
      collegeName: 'Kalasalingam Academy of Research and Education'
    },
    {
      serial: 9,
      theme: '02',
      problemStatement: 'T2PS01',
      teamName: 'DATA ACES',
      teamID: 'T2PS01T02',
      leaderName: 'Hirthick S',
      collegeName: 'Thiagarajar College of Engineering'
    },
    {
      serial: 10,
      theme: '02',
      problemStatement: 'T2PS01',
      teamName: 'Daydreamers',
      teamID: 'T2PS01T06',
      leaderName: 'Hariprasath V',
      collegeName: 'Velammal Engineering College'
    },
    {
      serial: 11,
      theme: '02',
      problemStatement: 'T2PS01',
      teamName: 'Yugo',
      teamID: 'T2PS01T12',
      leaderName: 'Raksha V',
      collegeName: 'Sona College of Technology'
    },
    {
      serial: 12,
      theme: '02',
      problemStatement: 'T2PS01',
      teamName: 'CYKLONES',
      teamID: 'T2PS01T55',
      leaderName: 'Larwin J',
      collegeName: 'Sri Krishna College of Engineering & Technology'
    },
    {
      serial: 13,
      theme: '02',
      problemStatement: 'T2PS02',
      teamName: 'Earth Guardians',
      teamID: 'T2PS02T13',
      leaderName: 'Sivaranjani V',
      collegeName: 'KG College of Arts and Science'
    },
    {
      serial: 14,
      theme: '02',
      problemStatement: 'T2PS02',
      teamName: 'BlockChain Wizards',
      teamID: 'T2PS02T17',
      leaderName: 'Jeeva M',
      collegeName: 'Sri Krishna College of Engineering and Technology'
    },
    {
      serial: 15,
      theme: '02',
      problemStatement: 'T2PS03',
      teamName: 'Hint Crafters',
      teamID: 'T2PS03T10',
      leaderName: 'Mathivathani AG',
      collegeName: 'Sri Ramakrishna College of Arts & Science'
    },
    {
      serial: 16,
      theme: '02',
      problemStatement: 'T2PS03',
      teamName: 'Sentinels',
      teamID: 'T2PS03T09',
      leaderName: 'Lithika Sri G',
      collegeName: 'Sri Sai Ram Engineering College'
    },
    {
      serial: 17,
      theme: '03',
      problemStatement: 'T3PS01',
      teamName: 'Tech Titanz',
      teamID: 'T3PS01T01',
      leaderName: 'Keerthana P',
      collegeName: 'Sri Eshwar College of Engineering'
    },
    {
      serial: 18,
      theme: '03',
      problemStatement: 'T3PS01',
      teamName: 'The Neural Ninjas',
      teamID: 'T3PS01T07',
      leaderName: 'Pratham Munjal',
      collegeName: 'S.R.M Institute Of Science & Technology'
    },
    {
      serial: 19,
      theme: '03',
      problemStatement: 'T3PS01',
      teamName: 'Wind Driven Crew',
      teamID: 'T3PS01T11',
      leaderName: 'Arunoth Symen A',
      collegeName: 'Christ (Deemed to be University)'
    },
    {
      serial: 20,
      theme: '03',
      problemStatement: 'T3PS02',
      teamName: 'AI Rebels',
      teamID: 'T3PS02T06',
      leaderName: 'Brinda M',
      collegeName: 'Rathinam College of Arts and Science'
    },
    {
      serial: 21,
      theme: '03',
      problemStatement: 'T3PS02',
      teamName: 'THUNDERS',
      teamID: 'T3PS02T15',
      leaderName: 'Prakashraj M',
      collegeName: 'Coimbatore Institute Of Technology'
    },
    {
      serial: 22,
      theme: '03',
      problemStatement: 'T3PS03',
      teamName: 'DevDynamos',
      teamID: 'T3PS03T03',
      leaderName: 'Aravindh Prabu',
      collegeName: 'Sri Ramakrishna Engineering College'
    },
    {
      serial: 23,
      theme: '03',
      problemStatement: 'T3PS03',
      teamName: 'Tech Army',
      teamID: 'T3PS03T07',
      leaderName: 'Sanjai J',
      collegeName: 'Sri Krishna College of Engineering and Technology'
    },
    {
      serial: 24,
      theme: '03',
      problemStatement: 'T3PS03',
      teamName: 'ECO LEDGENCE',
      teamID: 'T3PS03T09',
      leaderName: 'Karmuhilan DB',
      collegeName: 'Rathinam College Of Arts And Science'
    }
  ];

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
