const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const posts = [
    {
      title: "RRC Group D Recruitment 2026 Notification (1 Lakh+ Posts)",
      slug: "rrc-group-d-recruitment-2026",
      category: "JOB",
      shortDescription: "Railway Recruitment Cell (RRC) is going to release the mega recruitment notification for Group D Level-1 posts. 10th pass candidates can apply online.",
      officialSourceUrl: "https://indianrailways.gov.in/",
      content: `
        <div class="job-post-content font-sans">
          <h2 class="text-2xl font-bold text-blue-800 mb-4">RRC Railway Group D Recruitment 2026</h2>
          <p class="mb-4">The Ministry of Railways is soon going to issue the official notification for the <strong>RRC Group D (Level-1) Recruitment 2026</strong>. This is one of the biggest recruitment drives in India, offering more than 1 Lakh vacancies across various railway zones for 10th pass and ITI candidates.</p>
          
          <h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-blue-600 mb-3">Important Details</h3>
          <ul class="list-disc pl-5 mb-6 space-y-2">
            <li><strong>Organization:</strong> Railway Recruitment Cell (RRC)</li>
            <li><strong>Total Vacancies:</strong> 1,00,000+ Posts (Expected)</li>
            <li><strong>Qualification:</strong> 10th Pass OR ITI from NCVT/SCVT</li>
            <li><strong>Age Limit:</strong> 18 to 33 Years (Relaxation as per Govt rules)</li>
          </ul>
          
          <h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-green-600 mb-3">Selection Process</h3>
          <p class="mb-4">The selection will be based on a Computer Based Test (CBT) followed by a Physical Efficiency Test (PET), Document Verification (DV), and Medical Examination. Start your preparation now as the competition will be very high.</p>
          
          <div class="bg-blue-50 border border-blue-200 p-4 rounded-md">
            <p class="mb-2"><strong>Official Website:</strong> <a href="https://indianrailways.gov.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-bold">indianrailways.gov.in</a></p>
          </div>
        </div>
      `,
      published: true,
      publishedAt: new Date()
    },
    {
      title: "PM Kisan 18th Installment Status 2026: Check Beneficiary List",
      slug: "pm-kisan-18th-installment-status-2026",
      category: "YOJANA",
      shortDescription: "The central government has released the 18th installment of PM Kisan Samman Nidhi Yojana. Check your payment status and beneficiary list online.",
      officialSourceUrl: "https://pmkisan.gov.in/",
      content: `
        <div class="job-post-content font-sans">
          <h2 class="text-2xl font-bold text-blue-800 mb-4">PM Kisan 18th Installment Status 2026</h2>
          <p class="mb-4">The Government of India has successfully transferred the <strong>18th Installment of PM Kisan Samman Nidhi Yojana</strong> into the bank accounts of crores of eligible farmers. Under this scheme, farmers receive financial assistance of Rs. 6,000 per year in three equal installments.</p>
          
          <h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-blue-600 mb-3">Important Details</h3>
          <ul class="list-disc pl-5 mb-6 space-y-2">
            <li><strong>Scheme Name:</strong> PM Kisan Samman Nidhi</li>
            <li><strong>Installment:</strong> 18th Kist (Rs. 2,000)</li>
            <li><strong>Status:</strong> Released (Available to Check)</li>
            <li><strong>Mandatory:</strong> e-KYC and Bank Aadhar Seeding</li>
          </ul>
          
          <h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-green-600 mb-3">How to Check Status?</h3>
          <p class="mb-4">1. Visit the official PM Kisan portal.<br/>2. Go to the "Farmers Corner" and click on "Know Your Status".<br/>3. Enter your Registration Number and the Captcha code.<br/>4. Click on "Get Data" to see if your Rs. 2,000 has been credited.</p>
          
          <div class="bg-blue-50 border border-blue-200 p-4 rounded-md">
            <p class="mb-2"><strong>Check Status Here:</strong> <a href="https://pmkisan.gov.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-bold">pmkisan.gov.in</a></p>
          </div>
        </div>
      `,
      published: true,
      publishedAt: new Date()
    },
    {
      title: "UPPSC RO/ARO 2026 New Exam Date & Admit Card",
      slug: "uppsc-ro-aro-2026-exam-date",
      category: "ADMIT_CARD",
      shortDescription: "Uttar Pradesh Public Service Commission (UPPSC) has released the new exam schedule for Review Officer (RO) and Assistant Review Officer (ARO) 2026.",
      officialSourceUrl: "https://uppsc.up.nic.in/",
      content: `
        <div class="job-post-content font-sans">
          <h2 class="text-2xl font-bold text-blue-800 mb-4">UPPSC RO / ARO Pre Exam Date 2026</h2>
          <p class="mb-4">The Uttar Pradesh Public Service Commission (UPPSC) has issued a fresh notice regarding the Preliminary Examination for the posts of <strong>Review Officer (RO) and Assistant Review Officer (ARO)</strong>. Candidates can now check the new exam schedule and download instructions.</p>
          
          <h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-blue-600 mb-3">Important Details</h3>
          <ul class="list-disc pl-5 mb-6 space-y-2">
            <li><strong>Organization:</strong> UPPSC, Prayagraj</li>
            <li><strong>Post Name:</strong> Samiksha Adhikari (RO) / Sahayak Samiksha Adhikari (ARO)</li>
            <li><strong>Total Posts:</strong> 411 Posts</li>
            <li><strong>Status:</strong> New Exam Date Announced</li>
          </ul>
          
          <h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-green-600 mb-3">Admit Card Information</h3>
          <p class="mb-4">The admit cards will be available for download approximately 10 days before the exam date. Candidates must carry a printed copy of the OTR-based admit card along with a valid ID proof to the examination center.</p>
          
          <div class="bg-blue-50 border border-blue-200 p-4 rounded-md">
            <p class="mb-2"><strong>Official Website:</strong> <a href="https://uppsc.up.nic.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-bold">uppsc.up.nic.in</a></p>
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
  .then(() => console.log("Successfully added 3 new articles for Oct 2."))
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());
