const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const posts = [
    {
      title: "SSC CHSL Result 2026 Out: Combined Higher Secondary Level Tier-1 Cut Off & Merit List",
      slug: "ssc-chsl-tier-1-result-cut-off-2026",
      category: "RESULT",
      shortDescription: "SSC has declared the Combined Higher Secondary Level (10+2) Tier-1 Result 2026. 12th pass candidates can check their scores and category-wise cut off marks on ssc.gov.in.",
      officialSourceUrl: "https://ssc.gov.in/",
      content: `<div class="job-post-content font-sans"><h2 class="text-2xl font-bold text-blue-800 mb-4">SSC CHSL Tier-1 Result 2026 Declared</h2><p class="mb-4">The Staff Selection Commission (SSC) has officially published the <strong>Result of Combined Higher Secondary Level (10+2) Examination Tier-I 2026</strong>. Lakhs of 12th pass candidates who appeared in the CBT exam can now check their individual scores and category-wise cut-off marks.</p><h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-blue-600 mb-3">Important Details</h3><ul class="list-disc pl-5 mb-6 space-y-2"><li><strong>Commission:</strong> Staff Selection Commission (SSC)</li><li><strong>Exam:</strong> Combined Higher Secondary Level (CHSL) Tier-1 2026</li><li><strong>Posts:</strong> LDC, JSA, PA, SA, DEO</li><li><strong>Status:</strong> Tier-1 Result Out</li></ul><h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-green-600 mb-3">How to Check Result</h3><p class="mb-4">1. Visit ssc.gov.in and click on Result tab.<br/>2. Open the CHSL 2026 Tier-1 Result link.<br/>3. Login with Registration Number and Date of Birth to view marks.</p><div class="bg-blue-50 border border-blue-200 p-4 rounded-md"><p><strong>Official Portal:</strong> <a href="https://ssc.gov.in/" target="_blank" class="text-blue-600 hover:underline font-bold">ssc.gov.in</a></p></div></div>`,
      published: true,
      publishedAt: new Date()
    },
    {
      title: "UPSC Civil Services IAS Mains Admit Card 2026 Download (CSE Mains Hall Ticket)",
      slug: "upsc-ias-civil-services-mains-admit-card-2026",
      category: "ADMIT_CARD",
      shortDescription: "UPSC has activated the download link for Civil Services (IAS) Mains Examination 2026 Admit Card. Download from upsconline.nic.in before the exam date.",
      officialSourceUrl: "https://upsconline.nic.in/",
      content: `<div class="job-post-content font-sans"><h2 class="text-2xl font-bold text-blue-800 mb-4">UPSC Civil Services (IAS) Mains 2026 Admit Card Released</h2><p class="mb-4">The Union Public Service Commission (UPSC) has released the <strong>e-Summon Letter (Admit Card) for Civil Services (Mains) Examination 2026</strong>. Candidates who qualified in the Prelims exam can now download their hall tickets from the UPSC online portal.</p><h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-blue-600 mb-3">Exam Overview</h3><ul class="list-disc pl-5 mb-6 space-y-2"><li><strong>Organization:</strong> Union Public Service Commission (UPSC)</li><li><strong>Exam Name:</strong> Civil Services (Mains) Examination 2026</li><li><strong>Posts:</strong> IAS, IPS, IFS, IRS and Group-A &amp; B Services</li><li><strong>Admit Card Status:</strong> Active</li></ul><h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-green-600 mb-3">Steps to Download</h3><p class="mb-4">1. Visit upsconline.nic.in.<br/>2. Click e-Admit Card section.<br/>3. Login with Registration Number and Date of Birth.<br/>4. Download and print 3 copies. Carry government photo ID.</p><div class="bg-blue-50 border border-blue-200 p-4 rounded-md"><p><strong>Official UPSC Portal:</strong> <a href="https://upsconline.nic.in/" target="_blank" class="text-blue-600 hover:underline font-bold">upsconline.nic.in</a></p></div></div>`,
      published: true,
      publishedAt: new Date()
    },
    {
      title: "Bihar BPSC TRE 4.0 Teacher Admit Card 2026 Out: Download Hall Ticket",
      slug: "bpsc-tre-4-teacher-admit-card-2026",
      category: "ADMIT_CARD",
      shortDescription: "BPSC has released the Admit Card for Teacher Recruitment Examination TRE 4.0 2026. Over 22 lakh candidates can download their hall tickets from bpsc.bih.nic.in.",
      officialSourceUrl: "https://bpsc.bih.nic.in/",
      content: `<div class="job-post-content font-sans"><h2 class="text-2xl font-bold text-blue-800 mb-4">BPSC TRE 4.0 Teacher Exam Admit Card 2026</h2><p class="mb-4">The Bihar Public Service Commission (BPSC) has officially released the <strong>Admit Card for Teacher Recruitment Examination (TRE 4.0) 2026</strong>. Over 22 lakh registered candidates can download their hall tickets from the official portal.</p><h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-blue-600 mb-3">Key Details</h3><ul class="list-disc pl-5 mb-6 space-y-2"><li><strong>Organization:</strong> Bihar Public Service Commission (BPSC)</li><li><strong>Exam:</strong> Teacher Recruitment Exam (TRE 4.0)</li><li><strong>Total Vacancies:</strong> 32,388 Posts</li><li><strong>Admit Card Status:</strong> Released</li></ul><h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-green-600 mb-3">How to Download Admit Card</h3><p class="mb-4">1. Go to bpsc.bih.nic.in.<br/>2. Click on Download Admit Card TRE 4.0 2026.<br/>3. Enter Application Number and Date of Birth.<br/>4. Download and print hall ticket.</p><div class="bg-blue-50 border border-blue-200 p-4 rounded-md"><p><strong>Official BPSC Portal:</strong> <a href="https://bpsc.bih.nic.in/" target="_blank" class="text-blue-600 hover:underline font-bold">bpsc.bih.nic.in</a></p></div></div>`,
      published: true,
      publishedAt: new Date()
    },
    {
      title: "PM Kisan Samman Nidhi 18th Kist Status 2026: ₹2,000 किसानों के खाते में जमा",
      slug: "pm-kisan-samman-nidhi-18th-installment-status-2026",
      category: "YOJANA",
      shortDescription: "PM-KISAN Samman Nidhi 18th installment of Rs 2,000 has been credited to beneficiary farmers' bank accounts. Check your payment status on pmkisan.gov.in.",
      officialSourceUrl: "https://pmkisan.gov.in/",
      content: `<div class="job-post-content font-sans"><h2 class="text-2xl font-bold text-blue-800 mb-4">PM Kisan Samman Nidhi 18th Kist 2026 (Rs 2,000 Credited)</h2><p class="mb-4">The central government has transferred the <strong>18th installment of PM Kisan Samman Nidhi Yojana</strong> directly into the bank accounts of over 9 crore eligible farmer families.</p><h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-blue-600 mb-3">Scheme Details</h3><ul class="list-disc pl-5 mb-6 space-y-2"><li><strong>Scheme:</strong> PM Kisan Samman Nidhi Yojana (PM-KISAN)</li><li><strong>Amount per Kist:</strong> Rs 2,000 (3 installments per year = Rs 6,000 annual)</li><li><strong>Transfer Mode:</strong> Direct Benefit Transfer (DBT) to Aadhaar-linked accounts</li></ul><h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-green-600 mb-3">How to Check Payment Status</h3><p class="mb-4">1. Visit pmkisan.gov.in.<br/>2. Click on Beneficiary Status on homepage.<br/>3. Enter Aadhaar Number or Account Number or Mobile Number.<br/>4. Click Get Data to view complete payment history.</p><div class="bg-blue-50 border border-blue-200 p-4 rounded-md"><p><strong>Official PM-KISAN Portal:</strong> <a href="https://pmkisan.gov.in/" target="_blank" class="text-blue-600 hover:underline font-bold">pmkisan.gov.in</a></p></div></div>`,
      published: true,
      publishedAt: new Date()
    },
    {
      title: "UP Lekhpal Bharti 2026 Result Declared: 7,882 Posts Merit List & Cut Off PDF",
      slug: "up-lekhpal-result-cut-off-merit-list-2026",
      category: "RESULT",
      shortDescription: "UPSSSC has declared the written examination result for Lekhpal (Revenue Accountant) posts in Uttar Pradesh. Check state-wise merit list and category cut off from upsssc.gov.in.",
      officialSourceUrl: "https://upsssc.gov.in/",
      content: `<div class="job-post-content font-sans"><h2 class="text-2xl font-bold text-blue-800 mb-4">UPSSSC Lekhpal Result 2026 - 7,882 Posts</h2><p class="mb-4">The Uttar Pradesh Subordinate Services Selection Commission (UPSSSC) has officially announced the <strong>Written Examination Result for Rajaswa Lekhpal 2026</strong>. Shortlisted candidates will be called for Document Verification.</p><h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-blue-600 mb-3">Result Highlights</h3><ul class="list-disc pl-5 mb-6 space-y-2"><li><strong>Organization:</strong> UPSSSC, Uttar Pradesh</li><li><strong>Post Name:</strong> Rajaswa Lekhpal (Revenue Accountant)</li><li><strong>Total Posts:</strong> 7,882</li><li><strong>Result Status:</strong> Written Exam Result Declared</li><li><strong>Next Step:</strong> Document Verification (DV)</li></ul><h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-green-600 mb-3">How to Check Result</h3><p class="mb-4">1. Visit upsssc.gov.in.<br/>2. Click Result tab and select Lekhpal Bharti 2026.<br/>3. Download the category-wise result PDF.<br/>4. Press Ctrl+F and type your Roll Number to check.</p><div class="bg-blue-50 border border-blue-200 p-4 rounded-md"><p><strong>Official UPSSSC Portal:</strong> <a href="https://upsssc.gov.in/" target="_blank" class="text-blue-600 hover:underline font-bold">upsssc.gov.in</a></p></div></div>`,
      published: true,
      publishedAt: new Date()
    },
    {
      title: "IBPS Clerk Prelims Admit Card 2026: Download CRP Clerks-XVI Hall Ticket",
      slug: "ibps-clerk-prelims-admit-card-crp-xvi-2026",
      category: "ADMIT_CARD",
      shortDescription: "IBPS has released the Admit Card for CRP Clerks-XVI Online Preliminary Examination 2026. Registered candidates download call letters from ibps.in.",
      officialSourceUrl: "https://www.ibps.in/",
      content: `<div class="job-post-content font-sans"><h2 class="text-2xl font-bold text-blue-800 mb-4">IBPS Clerk Prelims 2026 Admit Card Released (CRP Clerks-XVI)</h2><p class="mb-4">The Institute of Banking Personnel Selection (IBPS) has activated the download link for the <strong>Call Letter for CRP Clerks-XVI Online Preliminary Examination 2026</strong>.</p><h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-blue-600 mb-3">Details</h3><ul class="list-disc pl-5 mb-6 space-y-2"><li><strong>Organization:</strong> IBPS, Mumbai</li><li><strong>Post:</strong> Clerk (Clerical Cadre) in Public Sector Banks</li><li><strong>Admit Card:</strong> Active Now</li></ul><h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-green-600 mb-3">Download Steps</h3><p class="mb-4">1. Visit ibps.in.<br/>2. Click Call Letter for CRP Clerks-XVI Prelims 2026.<br/>3. Login with Registration Number and Password or Date of Birth.<br/>4. Download, print and carry with photo ID to exam center.</p><div class="bg-blue-50 border border-blue-200 p-4 rounded-md"><p><strong>Official IBPS Website:</strong> <a href="https://www.ibps.in/" target="_blank" class="text-blue-600 hover:underline font-bold">ibps.in</a></p></div></div>`,
      published: true,
      publishedAt: new Date()
    },
    {
      title: "MP Patwari Bharti 2026: 7,000 पदों पर बंपर भर्ती, ऑनलाइन आवेदन शुरू (MPPEB)",
      slug: "mp-patwari-recruitment-2026-apply-online",
      category: "JOB",
      shortDescription: "Madhya Pradesh Professional Examination Board (MPPEB/Vyapam) has released notification for 7,000+ Patwari posts. Graduate candidates can apply online on peb.mp.gov.in.",
      officialSourceUrl: "https://peb.mp.gov.in/",
      content: `<div class="job-post-content font-sans"><h2 class="text-2xl font-bold text-blue-800 mb-4">MP Patwari Recruitment 2026 (7,000+ Posts)</h2><p class="mb-4">The Madhya Pradesh Professional Examination Board (MPPEB/Vyapam) has released the official notification for <strong>7,000+ Patwari posts in Madhya Pradesh</strong>. Graduate candidates domiciled in MP can apply online.</p><h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-blue-600 mb-3">Eligibility Details</h3><ul class="list-disc pl-5 mb-6 space-y-2"><li><strong>Organization:</strong> MPPEB / Vyapam</li><li><strong>Post Name:</strong> Patwari (Revenue Department)</li><li><strong>Total Posts:</strong> 7,000+</li><li><strong>Qualification:</strong> Graduation in any stream + Computer Certificate (CPCT preferred).</li><li><strong>Age Limit:</strong> 18 to 40 years</li></ul><h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-green-600 mb-3">How to Apply Online</h3><p class="mb-4">1. Visit peb.mp.gov.in.<br/>2. Click on Patwari Exam 2026 notification.<br/>3. Register and fill the application form.<br/>4. Upload documents and pay exam fee online.<br/>5. Print submitted form for reference.</p><div class="bg-blue-50 border border-blue-200 p-4 rounded-md"><p><strong>Official MPPEB Portal:</strong> <a href="https://peb.mp.gov.in/" target="_blank" class="text-blue-600 hover:underline font-bold">peb.mp.gov.in</a></p></div></div>`,
      published: true,
      publishedAt: new Date()
    },
    {
      title: "Indian Army Agniveer CEE Result 2026 Declared: ARO Wise Merit List PDF Download",
      slug: "indian-army-agniveer-cee-result-merit-list-2026",
      category: "RESULT",
      shortDescription: "Indian Army has declared the Common Entrance Exam (CEE) Result for Agniveer GD, Technical, Clerk and Tradesmen. Download ARO-wise merit list PDF from joinindianarmy.nic.in.",
      officialSourceUrl: "https://joinindianarmy.nic.in/",
      content: `<div class="job-post-content font-sans"><h2 class="text-2xl font-bold text-blue-800 mb-4">Indian Army Agniveer CEE Result 2026 Out</h2><p class="mb-4">The Indian Army recruitment directorate has published the written examination results of the <strong>Agniveer Computer Based Common Entrance Examination (CEE) 2026</strong>.</p><h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-blue-600 mb-3">Result Overview</h3><ul class="list-disc pl-5 mb-6 space-y-2"><li><strong>Organization:</strong> Indian Army</li><li><strong>Exam Name:</strong> Agniveer CEE Examination 2026</li><li><strong>Trades:</strong> General Duty (GD), Technical, Clerk, Tradesmen 10th &amp; 8th Pass.</li><li><strong>Result Status:</strong> ARO Wise Merit List PDF Available</li><li><strong>Next Phase:</strong> Physical Fitness Test (1.6 Km Run, Pull-ups, Zig-Zag)</li></ul><h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-green-600 mb-3">How to Check Result PDF</h3><p class="mb-4">1. Visit joinindianarmy.nic.in.<br/>2. Navigate to CEE Results tab on homepage.<br/>3. Click on your Army Recruiting Office (ARO/ZRO) result link.<br/>4. Open PDF and press Ctrl+F to search your Roll Number.</p><div class="bg-blue-50 border border-blue-200 p-4 rounded-md"><p><strong>Official Army Website:</strong> <a href="https://joinindianarmy.nic.in/" target="_blank" class="text-blue-600 hover:underline font-bold">joinindianarmy.nic.in</a></p></div></div>`,
      published: true,
      publishedAt: new Date()
    }
  ];

  for (const post of posts) {
    try {
      await prisma.post.upsert({
        where: { slug: post.slug },
        update: post,
        create: post
      });
      console.log("Added:", post.title);
    } catch(e) {
      console.error("Error on:", post.title, e.message);
    }
  }
  console.log("\nDone! Added 8 highest-trending articles for Oct 27.");
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());
