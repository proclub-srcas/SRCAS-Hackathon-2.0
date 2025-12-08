"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import srcasHackLogo from "@/public/assets/srcashack-logo.png";
import { useState, useMemo } from "react";

interface Team {
  teamName: string;
  leaderName: string;
  collegeName: string;
  psNumber: number;
}

type SortField = 'teamName' | 'leaderName' | 'collegeName' | 'psNumber';
type SortOrder = 'asc' | 'desc';

export default function Shortlisted() {
  const [selectedPS, setSelectedPS] = useState<number | 'all'>('all');
  const [sortField, setSortField] = useState<SortField>('psNumber');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  // All teams data
  const allTeams: Team[] = [
    // PS01 Teams
    {
      teamName: "ZeroHour",
      leaderName: "Kabilesh C",
      collegeName: "SRMIST Kattankulathur",
      psNumber: 1
    },
    {
      teamName: "theenginmAI",
      leaderName: "SWETHA S M",
      collegeName: "PSNA COLLEGE OF ENGINEERING AND TECHNOLOGY",
      psNumber: 1
    },
    {
      teamName: "Tech Mavericks",
      leaderName: "Abdul Munaf Z",
      collegeName: "Sri Krishna Arts and Science College",
      psNumber: 1
    },
    {
      teamName: "Innovators",
      leaderName: "M.Rosi",
      collegeName: "Shri Vishnu Engineering College for women",
      psNumber: 1
    },
    {
      teamName: "4 %",
      leaderName: "Sajith J",
      collegeName: "Sri Shakthi Institute of Engineering and Technology",
      psNumber: 1
    },
    {
      teamName: "CyberSentinels",
      leaderName: "LARA DHARSHINI P",
      collegeName: "Coimbatore Institute Of Technology",
      psNumber: 1
    },
    // PS02 Teams
    {
      teamName: "Protocol Pioneers",
      leaderName: "Manickam R",
      collegeName: "Karunya Institute of Technology and Sciences",
      psNumber: 2
    },
    {
      teamName: "Make Sure",
      leaderName: "Sanjay K",
      collegeName: "Kongu Engineering College",
      psNumber: 2
    },
    {
      teamName: "EchoVision",
      leaderName: "Elson Benanzal A",
      collegeName: "KIT-KALAIGNARKARUNANIDHI INSTITUTE OF TECHNOLOGY",
      psNumber: 2
    },
    {
      teamName: "HeisenBug",
      leaderName: "Tino Britty J",
      collegeName: "PSG College Of Technology",
      psNumber: 2
    },
    {
      teamName: "EC&IT warriors",
      leaderName: "Akshay Srinivas N",
      collegeName: "Sri Ramakrishna Institute of Technology (SRIT), Tamil Nadu",
      psNumber: 2
    },
    {
      teamName: "Bit Bash",
      leaderName: "Bumandla Rajashekar",
      collegeName: "Vardhaman College of Engineering (VCE), Hyderabad",
      psNumber: 2
    },
    // PS03 Teams
    {
      teamName: "Team Innocreators",
      leaderName: "Durga Rajesh Mallya",
      collegeName: "Coimbatore Institute of Technology",
      psNumber: 3
    },
    {
      teamName: "Cyber Craft",
      leaderName: "LAL SINGH DHARMI",
      collegeName: "Patrician College of arts and sciences",
      psNumber: 3
    },
    {
      teamName: "HIVE",
      leaderName: "Kethciyal S",
      collegeName: "Rathinam Group of Institutions",
      psNumber: 3
    },
    {
      teamName: "Deal Dynamos",
      leaderName: "Deepak Mouriya M",
      collegeName: "KPR Institute of Engineering and Technology",
      psNumber: 3
    },
    {
      teamName: "Eclipse Syndicate",
      leaderName: "Madhan S",
      collegeName: "KG College of Arts and Science",
      psNumber: 3
    },
    {
      teamName: "Team Detroit",
      leaderName: "Gopinath . R",
      collegeName: "SSM COLLEGE OF ARTS AND SCIENCE (C-68064)",
      psNumber: 3
    },
    // PS04 Teams
    {
      teamName: "TEAM HACKTIVATE",
      leaderName: "Dhamodharan D",
      collegeName: "Nehru Arts And Science College",
      psNumber: 4
    },
    {
      teamName: "Black codex",
      leaderName: "Mithil P",
      collegeName: "kathir college of engineering",
      psNumber: 4
    },
    {
      teamName: "RKM Students",
      leaderName: "Prem R",
      collegeName: "Ramakrishna Mission Polytechnic College",
      psNumber: 4
    },
    {
      teamName: "Matrixminds07",
      leaderName: "Sankara Narayana SV",
      collegeName: "Sri Sairam Institute of technology",
      psNumber: 4
    },
    {
      teamName: "Billiance AI",
      leaderName: "Tamil Adhavan",
      collegeName: "SRM UNIVERSITY",
      psNumber: 4
    },
    {
      teamName: "NovaTech",
      leaderName: "A KRITTIKA",
      collegeName: "Alliance University",
      psNumber: 4
    },
    // PS05 Teams
    {
      teamName: "ROADIN",
      leaderName: "SONIYA D",
      collegeName: "Shrimathi Devkunvar Nanalal Bhatt Vaishnav College for Women, Chromepet",
      psNumber: 5
    },
    {
      teamName: "PulsePath Synergy",
      leaderName: "Mithunavannan JR",
      collegeName: "Kgisl Institute of Technology",
      psNumber: 5
    },
    {
      teamName: "Radesh",
      leaderName: "Radhika",
      collegeName: "Amrita Vishwa vidyapeetham chennai",
      psNumber: 5
    },
    {
      teamName: "Idea Igniters",
      leaderName: "Harini.T",
      collegeName: "Sri Ramakrishna College of Arts and Science for Women",
      psNumber: 5
    },
    {
      teamName: "Tech Monk's",
      leaderName: "Sri Thraishika S",
      collegeName: "Sri Ramakrishna College of Arts & Science",
      psNumber: 5
    },
    {
      teamName: "PowerHouse",
      leaderName: "Anbusathyan Balakumar",
      collegeName: "SNS COLLEGE OF TECHNOLOGY",
      psNumber: 5
    }
  ];

  // Filter and sort teams
  const filteredAndSortedTeams = useMemo(() => {
    let result = [...allTeams];

    // Filter by PS
    if (selectedPS !== 'all') {
      result = result.filter(team => team.psNumber === selectedPS);
    }

    // Sort
    result.sort((a, b) => {
      let aVal = a[sortField];
      let bVal = b[sortField];

      if (typeof aVal === 'string') aVal = aVal.toLowerCase();
      if (typeof bVal === 'string') bVal = bVal.toLowerCase();

      if (aVal < bVal) return sortOrder === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    return result;
  }, [selectedPS, sortField, sortOrder, allTeams]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  const formatPSNumber = (num: number) => {
    return `PS${num.toString().padStart(2, '0')}`;
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div className="w-full px-4 mt-20 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start justify-between gap-8 mb-8">
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

      {/* Filter and Stats Section */}
      <div className="w-full px-4 pb-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6"
          >
            {/* PS Filter */}
            <div className="flex items-center gap-3">
              <label className="text-white font-semibold text-sm md:text-base">
                Filter by PS:
              </label>
              <select
                value={selectedPS}
                onChange={(e) => setSelectedPS(e.target.value === 'all' ? 'all' : parseInt(e.target.value))}
                className="bg-white/10 border border-white/20 text-white rounded-lg px-4 py-2 text-sm md:text-base focus:outline-none focus:border-secondary-orange transition-colors"
              >
                <option value="all" className="bg-[#1a1a1a]">All Problem Statements</option>
                <option value="1" className="bg-[#1a1a1a]">PS 01</option>
                <option value="2" className="bg-[#1a1a1a]">PS 02</option>
                <option value="3" className="bg-[#1a1a1a]">PS 03</option>
                <option value="4" className="bg-[#1a1a1a]">PS 04</option>
                <option value="5" className="bg-[#1a1a1a]">PS 05</option>
              </select>
            </div>

            {/* Team Count */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg">
              <svg className="w-5 h-5 text-secondary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="text-white font-semibold text-sm md:text-base">
                {filteredAndSortedTeams.length} Team{filteredAndSortedTeams.length !== 1 ? 's' : ''} Selected
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Table Section */}
      <div className="w-full px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="overflow-x-auto rounded-2xl border border-white/20 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f]"
          >
            <table className="min-w-full">
              <thead className="bg-gradient-to-r from-secondary-orange/20 to-secondary-orange/10 border-b-2 border-secondary-orange/30">
                <tr>
                  <th className="py-4 px-4 md:px-6 text-left text-xs md:text-sm font-bold text-white uppercase tracking-wider border-r border-white/10">
                    S.No
                  </th>
                  <th
                    className="py-4 px-4 md:px-6 text-left text-xs md:text-sm font-bold text-white uppercase tracking-wider border-r border-white/10 cursor-pointer hover:bg-white/5 transition-colors"
                    onClick={() => handleSort('teamName')}
                  >
                    <div className="flex items-center gap-2">
                      Team Name
                      {sortField === 'teamName' && (
                        <svg className={`w-4 h-4 transition-transform ${sortOrder === 'desc' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                      )}
                    </div>
                  </th>
                  <th
                    className="py-4 px-4 md:px-6 text-left text-xs md:text-sm font-bold text-white uppercase tracking-wider border-r border-white/10 cursor-pointer hover:bg-white/5 transition-colors"
                    onClick={() => handleSort('leaderName')}
                  >
                    <div className="flex items-center gap-2">
                      Team Leader
                      {sortField === 'leaderName' && (
                        <svg className={`w-4 h-4 transition-transform ${sortOrder === 'desc' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                      )}
                    </div>
                  </th>
                  <th
                    className="py-4 px-4 md:px-6 text-left text-xs md:text-sm font-bold text-white uppercase tracking-wider border-r border-white/10 cursor-pointer hover:bg-white/5 transition-colors"
                    onClick={() => handleSort('collegeName')}
                  >
                    <div className="flex items-center gap-2">
                      Institution
                      {sortField === 'collegeName' && (
                        <svg className={`w-4 h-4 transition-transform ${sortOrder === 'desc' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                      )}
                    </div>
                  </th>
                  <th
                    className="py-4 px-4 md:px-6 text-left text-xs md:text-sm font-bold text-white uppercase tracking-wider cursor-pointer hover:bg-white/5 transition-colors"
                    onClick={() => handleSort('psNumber')}
                  >
                    <div className="flex items-center gap-2 justify-center">
                      PS No.
                      {sortField === 'psNumber' && (
                        <svg className={`w-4 h-4 transition-transform ${sortOrder === 'desc' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                      )}
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {filteredAndSortedTeams.map((team, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.02 }}
                    className="hover:bg-white/5 transition-colors duration-200"
                  >
                    <td className="py-4 px-4 md:px-6 text-white font-semibold text-sm md:text-base border-r border-white/10">
                      {index + 1}
                    </td>
                    <td className="py-4 px-4 md:px-6 text-white font-bold text-sm md:text-base border-r border-white/10">
                      {team.teamName}
                    </td>
                    <td className="py-4 px-4 md:px-6 text-white text-sm md:text-base border-r border-white/10">
                      {team.leaderName}
                    </td>
                    <td className="py-4 px-4 md:px-6 text-supporting-lightGray text-sm md:text-base border-r border-white/10">
                      {team.collegeName}
                    </td>
                    <td className="py-4 px-4 md:px-6 text-center border-white/10">
                      <span className="inline-flex items-center justify-center px-3 py-1 rounded-lg text-sm font-bold bg-secondary-orange/20 text-secondary-orange border border-secondary-orange/30 whitespace-nowrap">
                        {formatPSNumber(team.psNumber)}
                      </span>
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
