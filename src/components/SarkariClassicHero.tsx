import Link from 'next/link';
import { ArrowDownCircle } from 'lucide-react';

export default function SarkariClassicHero() {
  const topPills = [
    { name: "State Wise Job", link: "/search?q=State+Wise" },
    { name: "Qualification Wise", link: "/search?q=Qualification" },
    { name: "सरकारी योजना", link: "/category/YOJANA" },
    { name: "सरकारी काम", link: "/category/SARKARI_KAAM" },
  ];

  const toolPills = [
    "Signature Resizer", "Image Resizer", "Image to PDF", "Add Name & Date", 
    "Photo Sign Joiner", "Age Calculator", "PNG to JPG to Webp", 
    "20kb Photo", "50kb Photo", "Photo in KB"
  ];

  const liveLinks = [
    "MPESB Teacher counselling", "Bihar STET 2026 Online", "ICF Apprentice 1010 Posts", 
    "RCF Kapurthala Vacancy 734 Posts", "BSEB Class 10th & 12th Registration Card 2027",
    "SBI Clerk Backlog", "Railway GDCE Vacancy 2026", "RSSB JE Recruitment (874 Posts)",
    "UPSSSC Veterinary Pharmacist Vacancy", "MDU B.Ed / M.Ed Online Form 2026",
    "MPESB Group 2 Sub Group 4", "UPSSSC Livestock Extension Officer", "BPSC TRE 4 Vacancy 32388 Posts"
  ];

  const colorBlocks = [
    { title: "IBPS RRB Office Assistant & Officer 13706 Posts", bg: "bg-[#b50101]", link: "/category/JOB" },
    { title: "UP Scholarship Online Form 2026 Apply Now", bg: "bg-[#008000]", link: "/category/SCHOLARSHIP" },
    { title: "MPTET Primary & Secondary Teacher", bg: "bg-[#c801a2]", link: "/category/JOB" },
    { title: "SSC CHSL Vacancy 2026 Apply Now", bg: "bg-[#010180]", link: "/category/JOB" },
    
    { title: "Vidya Sambal Guest Teacher 76791 Posts", bg: "bg-[#007398]", link: "/category/JOB" },
    { title: "UPESSC Assistant Teacher Vacancy 2026", bg: "bg-[#ff6600]", link: "/category/JOB" },
    { title: "BOB LBO Vacancy 2026 Online Form", bg: "bg-[#808000]", link: "/category/JOB" },
    { title: "SSC JE Recruitment 2026 Online Form", bg: "bg-[#800000]", link: "/category/JOB" },
    
    { title: "India Post GDS Vacancy 2026 Total 23700+ Posts", bg: "bg-[#cc00cc]", link: "/category/JOB" },
    { title: "Bihar STET 2026 Online Form (Extended)", bg: "bg-[#008080]", link: "/category/JOB" },
    { title: "Rajasthan Safai Karmchari (24,752 Posts)", bg: "bg-[#4b0082]", link: "/category/JOB" },
    { title: "BPSC School Teacher Form (32,388 Posts)", bg: "bg-[#ff3333]", link: "/category/JOB" },
  ];

  return (
    <div className="flex flex-col items-center w-full max-w-6xl mx-auto px-2 font-sans mt-4">
      
      {/* Top 4 White Pills */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mb-6">
        {topPills.map((pill, idx) => (
          <Link href={pill.link} key={idx} className="flex items-center justify-center gap-2 py-2 px-2 border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 text-gray-800 font-medium text-[15px]">
            <ArrowDownCircle size={16} className="text-gray-600" />
            {pill.name}
          </Link>
        ))}
      </div>

      {/* Teal Tool Pills */}
      <div className="flex flex-wrap justify-center gap-2 mb-6 w-full">
        {toolPills.map((tool, idx) => (
          <Link href="/search?q=tools" key={idx} className="bg-[#17a2b8] hover:bg-[#138496] text-white text-[13px] px-3 py-1 rounded-full shadow-sm transition-colors">
            {tool}
          </Link>
        ))}
      </div>

      {/* Live Now Ticker Section */}
      <div className="w-full flex flex-col items-center mb-8">
        <div className="bg-[#ff0000] text-white font-bold px-4 py-1.5 rounded-full text-sm mb-4 animate-pulse flex items-center gap-2 shadow-md">
          <div className="w-2 h-2 bg-white rounded-full"></div> LIVE NOW
        </div>
        <div className="text-center text-[#0056b3] text-[15px] leading-relaxed max-w-5xl font-medium">
          {liveLinks.map((link, idx) => (
            <span key={idx}>
              <Link href={`/search?q=${encodeURIComponent(link)}`} className="hover:underline hover:text-red-600">
                {link}
              </Link>
              {idx < liveLinks.length - 1 && <span className="text-gray-400 mx-2">|</span>}
            </span>
          ))}
        </div>
        <div className="mt-4 text-red-600 font-bold text-lg text-center hover:underline cursor-pointer">
          RRB Junior Engineer JE CBT II Result 2026
        </div>
      </div>

      {/* Colored Hero Blocks */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 mb-8">
        {colorBlocks.map((block, idx) => (
          <Link 
            href={block.link} 
            key={idx} 
            className={`${block.bg} text-white flex items-center justify-center text-center p-3 h-20 md:h-24 hover:opacity-90 transition-opacity border border-white`}
          >
            <span className="font-bold text-[16px] md:text-[18px] leading-tight drop-shadow-sm">
              {block.title}
            </span>
          </Link>
        ))}
      </div>

    </div>
  );
}
