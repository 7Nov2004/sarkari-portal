const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const newPosts = [
    {
      title: "MPESB Teacher Counselling 2026 Date & Process",
      slug: "mpesb-teacher-counselling",
      category: "JOB",
      shortDescription: "MPESB Primary, Middle and High School Teacher Counselling schedule and choice filling details released.",
      content: "<p>Madhya Pradesh Employees Selection Board (MPESB) teacher counselling process has started. Candidates can do choice filling on the TRC MPOnline portal.</p>",
      officialSourceUrl: "https://trc.mponline.gov.in/",
      published: true
    },
    {
      title: "Bihar STET 2026 Online Form Date Extended",
      slug: "bihar-stet-2026-online",
      category: "JOB",
      shortDescription: "BSEB has released the Bihar STET 2026 notification for Paper 1 and Paper 2. Apply online now.",
      content: "<p>Bihar School Examination Board (BSEB) has invited online applications for the State Teacher Eligibility Test (STET) 2026.</p>",
      officialSourceUrl: "https://bsebstet.com/",
      published: true
    },
    {
      title: "ICF Apprentice 1010 Posts Recruitment 2026",
      slug: "icf-apprentice-1010-posts",
      category: "JOB",
      shortDescription: "Integral Coach Factory (ICF) Chennai has released a notification for 1010 Act Apprentice vacancies.",
      content: "<p>10th pass and ITI candidates can apply for the ICF Chennai Apprentice vacancy. No written exam, selection based on merit.</p>",
      officialSourceUrl: "https://pb.icf.gov.in/",
      published: true
    },
    {
      title: "RCF Kapurthala Vacancy 734 Posts Apprentice",
      slug: "rcf-kapurthala-vacancy-734-posts",
      category: "JOB",
      shortDescription: "Rail Coach Factory (RCF) Kapurthala invites applications for 734 Act Apprentice posts.",
      content: "<p>Apply online for RCF Kapurthala Apprentice recruitment. 10th+ITI pass candidates are eligible.</p>",
      officialSourceUrl: "https://rcf.indianrailways.gov.in/",
      published: true
    },
    {
      title: "BSEB Class 10th & 12th Registration Card 2027",
      slug: "bseb-class-10th-12th-registration-card-2027",
      category: "ADMIT_CARD",
      shortDescription: "Bihar Board 10th (Matric) and 12th (Inter) Registration Card for the 2027 board exams released.",
      content: "<p>Students can download their dummy/original registration cards from the official BSEB website using their school code and DOB.</p>",
      officialSourceUrl: "http://secondary.biharboardonline.com/",
      published: true
    },
    {
      title: "SBI Clerk Backlog Vacancy 2026 Online Form",
      slug: "sbi-clerk-backlog",
      category: "JOB",
      shortDescription: "State Bank of India (SBI) Junior Associate (Clerk) Backlog recruitment notification released.",
      content: "<p>Eligible candidates can apply online for SBI Clerk backlog vacancies for reserved categories.</p>",
      officialSourceUrl: "https://sbi.co.in/web/careers",
      published: true
    },
    {
      title: "Railway GDCE Vacancy 2026 Online Form",
      slug: "railway-gdce-vacancy-2026",
      category: "JOB",
      shortDescription: "General Departmental Competitive Examination (GDCE) quota vacancy for Railway Employees.",
      content: "<p>Serving regular railway employees can apply for ALP, Technician, and Junior Engineer posts under the GDCE quota.</p>",
      officialSourceUrl: "https://indianrailways.gov.in/",
      published: true
    },
    {
      title: "RSSB JE Recruitment 2026 (874 Posts) Apply Online",
      slug: "rssb-je-recruitment-874-posts",
      category: "JOB",
      shortDescription: "Rajasthan Staff Selection Board (RSSB) Junior Engineer (JE) Vacancy for 874 posts.",
      content: "<p>B.Tech and Diploma candidates in Civil/Electrical/Mechanical can apply online for Rajasthan JEN recruitment.</p>",
      officialSourceUrl: "https://rsmssb.rajasthan.gov.in/",
      published: true
    },
    {
      title: "UPSSSC Veterinary Pharmacist Vacancy 2026",
      slug: "upsssc-veterinary-pharmacist-vacancy",
      category: "JOB",
      shortDescription: "UPSSSC invites online applications for Veterinary Pharmacist posts through UP PET.",
      content: "<p>Candidates who have passed UP PET and hold a Diploma in Veterinary Pharmacy can apply online.</p>",
      officialSourceUrl: "https://upsssc.gov.in/",
      published: true
    },
    {
      title: "MDU B.Ed / M.Ed Online Form 2026",
      slug: "mdu-bed-med-online-form-2026",
      category: "ADMISSION",
      shortDescription: "Maharshi Dayanand University (MDU) Rohtak B.Ed and M.Ed admission online form.",
      content: "<p>Online registration for admission to B.Ed, M.Ed, and other education courses in MDU affiliated colleges has started.</p>",
      officialSourceUrl: "https://mdu.ac.in/",
      published: true
    },
    {
      title: "MPESB Group 2 Sub Group 4 Vacancy",
      slug: "mpesb-group-2-sub-group-4",
      category: "JOB",
      shortDescription: "MPESB Group 2 Sub Group 4 Sahayak Samparikshak, Patwari & Other Post Recruitment.",
      content: "<p>Apply online for MP Patwari and Group 2 Sub Group 4 vacancies on the official MPESB portal.</p>",
      officialSourceUrl: "https://esb.mp.gov.in/",
      published: true
    },
    {
      title: "UPSSSC Livestock Extension Officer Vacancy",
      slug: "upsssc-livestock-extension-officer",
      category: "JOB",
      shortDescription: "UPSSSC Pashudhan Prasar Adhikari (Livestock Extension Officer) recruitment.",
      content: "<p>Online applications are invited for Livestock Extension Officer posts based on UP PET score.</p>",
      officialSourceUrl: "https://upsssc.gov.in/",
      published: true
    },
    {
      title: "RRB Junior Engineer JE CBT II Result 2026",
      slug: "rrb-junior-engineer-je-cbt-ii-result-2026",
      category: "RESULT",
      shortDescription: "Railway Recruitment Board (RRB) JE CBT 2 Result and cut-off marks released.",
      content: "<p>Candidates can check their RRB JE CBT 2 results and document verification schedule on their respective RRB regional websites.</p>",
      officialSourceUrl: "https://indianrailways.gov.in/",
      published: true
    }
  ];

  for (let post of newPosts) {
    const exists = await prisma.post.findUnique({ where: { slug: post.slug } });
    if (!exists) {
      await prisma.post.create({ data: post });
      console.log(`Created: ${post.title}`);
    } else {
      console.log(`Exists: ${post.title}`);
    }
  }
}
main().finally(() => prisma.$disconnect());
