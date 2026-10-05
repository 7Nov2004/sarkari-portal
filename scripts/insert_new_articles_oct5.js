const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const posts = [
    {
      title: "SSC MTS & Havaldar 2026 Application Status & Admit Card Download Link",
      slug: "ssc-mts-havaldar-admit-card-application-status-2026",
      category: "ADMIT_CARD",
      shortDescription: "Staff Selection Commission (SSC) has released the region-wise Application Status and Admit Card for Multi-Tasking (Non-Technical) Staff and Havaldar Examination 2026.",
      officialSourceUrl: "https://ssc.gov.in/",
      content: `
        <div class="job-post-content font-sans">
          <h2 class="text-2xl font-bold text-blue-800 mb-4">SSC MTS & Havaldar 2026 Admit Card & Exam Status</h2>
          <p class="mb-4">The Staff Selection Commission (SSC) has officially activated the <strong>Application Status and Admit Card download links for the Multi-Tasking (Non-Technical) Staff (MTS) and Havaldar (CBIC & CBN) Examination 2026</strong>. Candidates can now check their exam city, shift timings, and download hall tickets.</p>
          
          <h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-blue-600 mb-3">Important Details</h3>
          <ul class="list-disc pl-5 mb-6 space-y-2">
            <li><strong>Organization:</strong> Staff Selection Commission (SSC)</li>
            <li><strong>Post Name:</strong> MTS & Havaldar</li>
            <li><strong>Total Posts:</strong> 9,583 Vacancies</li>
            <li><strong>Status:</strong> Application Status & Hall Ticket Active Region-Wise</li>
          </ul>
          
          <h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-green-600 mb-3">How to Check Application Status & Download Call Letter</h3>
          <p class="mb-4">1. Visit the regional SSC website (NR, CR, WR, ER, SR, etc.) or main portal ssc.gov.in.<br/>2. Click on 'Know Your Status / Download Admit Card for MTS 2026'.<br/>3. Enter your Registration Number and Date of Birth.<br/>4. Verify exam city, roll number, and report to center as per scheduled timing.</p>
          
          <div class="bg-blue-50 border border-blue-200 p-4 rounded-md">
            <p class="mb-2"><strong>Official SSC Portal:</strong> <a href="https://ssc.gov.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-bold">ssc.gov.in</a></p>
          </div>
        </div>
      `,
      published: true,
      publishedAt: new Date()
    },
    {
      title: "PM Mudra Loan Yojana 2026: Apply Online (Now Get Up to ₹20 Lakh Loan)",
      slug: "pm-mudra-loan-yojana-2026-apply-online",
      category: "YOJANA",
      shortDescription: "Under Pradhan Mantri Mudra Yojana (PMMY), government has increased the loan limit from Rs 10 Lakh to Rs 20 Lakh under the new 'Tarun Plus' category. Check eligibility and apply online.",
      officialSourceUrl: "https://www.mudra.org.in/",
      content: `
        <div class="job-post-content font-sans">
          <h2 class="text-2xl font-bold text-blue-800 mb-4">PM Mudra Loan Yojana 2026 (Limit Increased to ₹20 Lakh)</h2>
          <p class="mb-4">The Government of India has enhanced the loan limit under the <strong>Pradhan Mantri Mudra Yojana (PMMY)</strong> from ₹10 Lakh to ₹20 Lakh. This initiative aims to foster entrepreneurship and empower small business owners across the nation with easy, collateral-free credit.</p>
          
          <h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-blue-600 mb-3">Loan Categories & Limits</h3>
          <ul class="list-disc pl-5 mb-6 space-y-2">
            <li><strong>Shishu:</strong> Loans up to ₹ 50,000</li>
            <li><strong>Kishore:</strong> Loans from ₹ 50,001 up to ₹ 5,00,000</li>
            <li><strong>Tarun:</strong> Loans from ₹ 5,00,001 up to ₹ 10,00,000</li>
            <li><strong>Tarun Plus (New):</strong> Loans from ₹ 10,00,001 up to ₹ 20,00,000 for entrepreneurs who have successfully repaid previous Tarun loans.</li>
          </ul>
          
          <h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-green-600 mb-3">How to Apply Online via JanSamarth</h3>
          <p class="mb-4">1. Visit the JanSamarth portal or Mudra official website.<br/>2. Select 'Business Activity Loan' under Mudra scheme.<br/>3. Fill required personal and business details with Aadhaar & PAN verification.<br/>4. Get digital in-principle approval from partner banks.</p>
          
          <div class="bg-blue-50 border border-blue-200 p-4 rounded-md">
            <p class="mb-2"><strong>Official Mudra Portal:</strong> <a href="https://www.mudra.org.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-bold">mudra.org.in</a></p>
          </div>
        </div>
      `,
      published: true,
      publishedAt: new Date()
    },
    {
      title: "Indian Navy Agniveer SSR & MR 01/2026 Batch Online Form Out",
      slug: "indian-navy-agniveer-ssr-mr-01-2026-online-form",
      category: "JOB",
      shortDescription: "Indian Navy has released notification for Agniveer Senior Secondary Recruit (SSR) & Matric Recruit (MR) 01/2026 Batch. 10th and 12th pass unmarried male & female candidates apply online.",
      officialSourceUrl: "https://joinindiannavy.gov.in/",
      content: `
        <div class="job-post-content font-sans">
          <h2 class="text-2xl font-bold text-blue-800 mb-4">Indian Navy Agniveer SSR & MR 01/2026 Recruitment</h2>
          <p class="mb-4">The Indian Navy invites online applications from eligible unmarried Indian male and female candidates for enrolment as <strong>Agniveer (SSR) & Agniveer (MR) for the 01/2026 Batch</strong>. Check age eligibility, physical test parameters, and syllabus details below.</p>
          
          <h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-blue-600 mb-3">Post Wise Eligibility</h3>
          <ul class="list-disc pl-5 mb-6 space-y-2">
            <li><strong>Agniveer (SSR):</strong> Passed 10+2 examination with Maths & Physics and at least one of these subjects: Chemistry/Biology/Computer Science from an approved board.</li>
            <li><strong>Agniveer (MR):</strong> Passed Matriculation (10th) Examination from a recognized Board of School Education.</li>
            <li><strong>Age Limit:</strong> Candidate should be born between 01 Nov 2004 and 30 Apr 2007 (both dates inclusive).</li>
          </ul>
          
          <h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-green-600 mb-3">Selection Procedure</h3>
          <p class="mb-4">Selection is based on Shortlisting (Indian Navy Entrance Test - INET CBT examination), followed by Physical Fitness Test (PFT), and Final Medical Examination at INS Chilka.</p>
          
          <div class="bg-blue-50 border border-blue-200 p-4 rounded-md">
            <p class="mb-2"><strong>Official Portal:</strong> <a href="https://joinindiannavy.gov.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-bold">joinindiannavy.gov.in</a></p>
          </div>
        </div>
      `,
      published: true,
      publishedAt: new Date()
    }
  ];

  for (const post of posts) {
    await prisma.post.upsert({
      where: { slug: post.slug },
      update: post,
      create: post
    });
    console.log("Added Post:", post.title);
  }
}

main()
  .then(() => console.log("Successfully added 3 trending articles for Oct 5."))
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());
