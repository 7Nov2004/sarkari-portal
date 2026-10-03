const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const posts = [
    {
      title: "PM Awas Yojana Urban 2.0 (PMAY-U 2.0): Online Form & Subsidy Details",
      slug: "pm-awas-yojana-urban-2-apply-online",
      category: "YOJANA",
      shortDescription: "Central Government has launched PM Awas Yojana Urban 2.0 (PMAY-U 2.0) to provide interest subsidy up to Rs 1.80 Lakh on home loans for middle and poor families. Check eligibility and apply online.",
      officialSourceUrl: "https://pmay-urban.gov.in/",
      content: `
        <div class="job-post-content font-sans">
          <h2 class="text-2xl font-bold text-blue-800 mb-4">Pradhan Mantri Awas Yojana Urban 2.0 (PMAY-U 2.0)</h2>
          <p class="mb-4">The Union Cabinet has approved the <strong>Pradhan Mantri Awas Yojana - Urban 2.0 (PMAY-U 2.0)</strong> to assist 1 crore urban poor and middle-class families in constructing, purchasing, or renting affordable houses with financial assistance from the central government.</p>
          
          <h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-blue-600 mb-3">Key Benefits & Subsidy Details</h3>
          <ul class="list-disc pl-5 mb-6 space-y-2">
            <li><strong>Scheme Name:</strong> PMAY Urban 2.0 (PMAY-U 2.0)</li>
            <li><strong>Interest Subsidy:</strong> Up to ₹ 1.80 Lakh subsidy on home loans up to ₹ 25 Lakh.</li>
            <li><strong>Target Beneficiaries:</strong> EWS (Economically Weaker Section), LIG (Low Income Group), and MIG (Middle Income Group) families in urban areas.</li>
            <li><strong>House Value Limit:</strong> Eligible for houses valued up to ₹ 35 Lakh.</li>
          </ul>
          
          <h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-green-600 mb-3">How to Apply Online</h3>
          <p class="mb-4">1. Visit the official PMAY Urban portal (pmay-urban.gov.in).<br/>2. Click on 'Citizen Assessment' or 'PMAY-U 2.0 Application'.<br/>3. Verify with your Aadhaar number and mobile OTP.<br/>4. Fill in personal, income, and bank account details.<br/>5. Submit the application and download the acknowledgment slip for tracking.</p>
          
          <div class="bg-blue-50 border border-blue-200 p-4 rounded-md">
            <p class="mb-2"><strong>Official Portal:</strong> <a href="https://pmay-urban.gov.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-bold">pmay-urban.gov.in</a></p>
          </div>
        </div>
      `,
      published: true,
      publishedAt: new Date()
    },
    {
      title: "Rajasthan CET Graduation Level 2026 Admit Card Released - Download Link",
      slug: "rajasthan-cet-graduation-level-admit-card-2026",
      category: "ADMIT_CARD",
      shortDescription: "Rajasthan Staff Selection Board (RSMSSB) has released the admit card for Common Eligibility Test (CET) Graduation Level 2026. Download your call letter directly from SSO portal.",
      officialSourceUrl: "https://rsmssb.rajasthan.gov.in/",
      content: `
        <div class="job-post-content font-sans">
          <h2 class="text-2xl font-bold text-blue-800 mb-4">Rajasthan CET Graduation Level Admit Card 2026</h2>
          <p class="mb-4">The Rajasthan Staff Selection Board (RSMSSB) has officially activated the download link for the <strong>Common Eligibility Test (CET) Graduation Level Examination 2026</strong>. Registered candidates can now download their hall tickets using their Application Number and Date of Birth.</p>
          
          <h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-blue-600 mb-3">Exam Details</h3>
          <ul class="list-disc pl-5 mb-6 space-y-2">
            <li><strong>Recruiting Body:</strong> RSMSSB (Rajasthan)</li>
            <li><strong>Exam Name:</strong> CET (Graduation Level) 2026</li>
            <li><strong>Mode of Exam:</strong> Offline (OMR Based)</li>
            <li><strong>Admit Card Status:</strong> Available Now</li>
          </ul>
          
          <h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-green-600 mb-3">Steps to Download Hall Ticket</h3>
          <p class="mb-4">1. Visit the Rajasthan SSO Portal (sso.rajasthan.gov.in) or recruitment portal.<br/>2. Log in using your SSO ID and Password.<br/>3. Navigate to the 'Recruitment Portal' and click on 'Get Admit Card'.<br/>4. Select CET Graduation Level 2026 and download the PDF copy.</p>
          
          <div class="bg-blue-50 border border-blue-200 p-4 rounded-md">
            <p class="mb-2"><strong>Official Website:</strong> <a href="https://rsmssb.rajasthan.gov.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-bold">rsmssb.rajasthan.gov.in</a></p>
            <p class="mb-2"><strong>SSO Portal Login:</strong> <a href="https://sso.rajasthan.gov.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-bold">sso.rajasthan.gov.in</a></p>
          </div>
        </div>
      `,
      published: true,
      publishedAt: new Date()
    },
    {
      title: "Indian Air Force Agniveer Vayu Intake 01/2026 Notification & Online Form",
      slug: "airforce-agniveer-vayu-intake-01-2026-notification",
      category: "JOB",
      shortDescription: "Indian Air Force (IAF) has released the notification for Agniveer Vayu Intake 01/2026. 12th pass / Diploma holders (Male & Female) can apply online before the last date.",
      officialSourceUrl: "https://agnipathvayu.cdac.in/",
      content: `
        <div class="job-post-content font-sans">
          <h2 class="text-2xl font-bold text-blue-800 mb-4">IAF Agniveer Vayu Intake 01/2026 Recruitment</h2>
          <p class="mb-4">The Indian Air Force (IAF) invites online applications from eligible unmarried Indian male and female candidates for selection as <strong>Agniveer Vayu (Musician & Non-Combatant/General Duties) under Intake 01/2026</strong>. Read complete eligibility, syllabus, and physical standards below.</p>
          
          <h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-blue-600 mb-3">Eligibility Criteria & Details</h3>
          <ul class="list-disc pl-5 mb-6 space-y-2">
            <li><strong>Organization:</strong> Indian Air Force (IAF)</li>
            <li><strong>Entry:</strong> Agniveer Vayu Intake 01/2026</li>
            <li><strong>Educational Qualification:</strong> 10+2 (Intermediate) with Mathematics, Physics & English with minimum 50% marks OR 3-year Engineering Diploma.</li>
            <li><strong>Age Limit:</strong> Candidates born between 02 January 2004 and 02 July 2007 (both dates inclusive).</li>
          </ul>
          
          <h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-green-600 mb-3">Application Fee & Mode</h3>
          <p class="mb-4">Examination fee of ₹ 550/- plus GST is applicable for all candidates. Applications must be submitted online on the official Agnipath Vayu portal.</p>
          
          <div class="bg-blue-50 border border-blue-200 p-4 rounded-md">
            <p class="mb-2"><strong>Official Apply Portal:</strong> <a href="https://agnipathvayu.cdac.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-bold">agnipathvayu.cdac.in</a></p>
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
  .then(() => console.log("Successfully added 3 trending articles for Oct 3."))
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());
