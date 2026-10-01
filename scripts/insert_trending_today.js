const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const posts = [
    {
      title: "India Post GDS 3rd Merit List 2026 Released (State Wise PDF)",
      slug: "india-post-gds-3rd-merit-list-2026",
      category: "RESULT",
      shortDescription: "The Department of Posts has released the 3rd Merit List for Gramin Dak Sevak (GDS) Recruitment 2026. Download State Wise Result PDF here.",
      officialSourceUrl: "https://indiapostgdsonline.gov.in/",
      content: `
        <div class="job-post-content font-sans">
          <h2 class="text-2xl font-bold text-blue-800 mb-4">India Post GDS 3rd Merit List 2026 Out</h2>
          <p class="mb-4">The India Post has officially declared the <strong>3rd Merit List</strong> for the Gramin Dak Sevak (GDS) Recruitment 2026. Candidates who applied for the 23,700+ vacancies and were waiting for the 3rd list can now check their names and document verification schedule.</p>
          
          <h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-blue-600 mb-3">Important Details</h3>
          <ul class="list-disc pl-5 mb-6 space-y-2">
            <li><strong>Organization:</strong> India Post</li>
            <li><strong>Post Name:</strong> Gramin Dak Sevak (BPM/ABPM/Dak Sevak)</li>
            <li><strong>Status:</strong> 3rd Merit List Released</li>
            <li><strong>Selection:</strong> Based on 10th Class Merit</li>
          </ul>
          
          <h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-green-600 mb-3">What's Next? (Document Verification)</h3>
          <p class="mb-4">Shortlisted candidates will receive an SMS/Email. You must report to the designated Head Post Office with all your original documents (10th Marksheet, Caste Certificate, Aadhar, etc.) before the deadline mentioned in the PDF.</p>
          
          <div class="bg-blue-50 border border-blue-200 p-4 rounded-md">
            <p class="mb-2"><strong>Official Download Link:</strong> <a href="https://indiapostgdsonline.gov.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-bold">indiapostgdsonline.gov.in</a></p>
          </div>
        </div>
      `,
      published: true,
      publishedAt: new Date()
    },
    {
      title: "RRB NTPC 2026 Registration Last Date Extended - Apply Now",
      slug: "rrb-ntpc-2026-last-date-extended",
      category: "JOB",
      shortDescription: "Railway Recruitment Board (RRB) has extended the last date for NTPC (Graduate & Undergraduate) Online Form 2026. Don't miss this final chance.",
      officialSourceUrl: "https://indianrailways.gov.in/",
      content: `
        <div class="job-post-content font-sans">
          <h2 class="text-2xl font-bold text-blue-800 mb-4">RRB NTPC Application Last Date Extended 2026</h2>
          <p class="mb-4">Great news for Railway aspirants! The Railway Recruitment Board (RRB) has officially extended the last date to apply for the Non-Technical Popular Categories (NTPC) Graduate and Undergraduate posts due to heavy server load.</p>
          
          <h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-blue-600 mb-3">Important Details</h3>
          <ul class="list-disc pl-5 mb-6 space-y-2">
            <li><strong>Organization:</strong> Railway Recruitment Board (RRB)</li>
            <li><strong>Total Posts:</strong> 11,558 Posts (Combined)</li>
            <li><strong>Notice:</strong> Registration Date Extended</li>
            <li><strong>Job Location:</strong> All India</li>
          </ul>
          
          <h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-green-600 mb-3">Why Apply Now?</h3>
          <p class="mb-4">The servers are currently running smoothly. Candidates who were facing payment issues or OTP delays should immediately complete their forms to avoid last-minute rush again.</p>
          
          <div class="bg-blue-50 border border-blue-200 p-4 rounded-md">
            <p class="mb-2"><strong>Official Website:</strong> <a href="https://indianrailways.gov.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-bold">indianrailways.gov.in</a></p>
          </div>
        </div>
      `,
      published: true,
      publishedAt: new Date()
    },
    {
      title: "IBPS PO Prelims Admit Card 2026 Download Link Active",
      slug: "ibps-po-prelims-admit-card-2026",
      category: "ADMIT_CARD",
      shortDescription: "Institute of Banking Personnel Selection (IBPS) has activated the admit card link for Probationary Officer (PO) Prelims Exam 2026. Download now.",
      officialSourceUrl: "https://ibps.in/",
      content: `
        <div class="job-post-content font-sans">
          <h2 class="text-2xl font-bold text-blue-800 mb-4">IBPS PO Prelims Admit Card 2026</h2>
          <p class="mb-4">The Institute of Banking Personnel Selection (IBPS) has officially released the Call Letters (Admit Cards) for the Preliminary Examination for the post of Probationary Officers (PO) / Management Trainees 2026.</p>
          
          <h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-blue-600 mb-3">Important Details</h3>
          <ul class="list-disc pl-5 mb-6 space-y-2">
            <li><strong>Organization:</strong> IBPS</li>
            <li><strong>Exam Name:</strong> PO/MT Prelims 2026</li>
            <li><strong>Status:</strong> Admit Card Download Active</li>
            <li><strong>Credentials Required:</strong> Registration No / Roll No & Password / DOB</li>
          </ul>
          
          <h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-green-600 mb-3">Instructions for Exam Day</h3>
          <p class="mb-4">Candidates must bring a printed copy of the Admit Card, an original Photo ID proof (Aadhar/PAN/Voter ID), and a photocopy of the same ID to the examination center. Arrive at least 30 minutes before the reporting time.</p>
          
          <div class="bg-blue-50 border border-blue-200 p-4 rounded-md">
            <p class="mb-2"><strong>Official Website:</strong> <a href="https://ibps.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-bold">ibps.in</a></p>
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
    console.log("Added:", post.title);
  }
}

main()
  .then(() => console.log("Successfully added 3 new trending articles."))
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());
