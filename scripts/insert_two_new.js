const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const posts = [
    {
      title: "SSC CGL 2026 Tier 1 Admit Card & Application Status Out",
      slug: "ssc-cgl-2026-tier-1-admit-card",
      category: "ADMIT_CARD",
      shortDescription: "Staff Selection Commission (SSC) has released the admit card and application status for Combined Graduate Level (CGL) 2026 Tier 1 Examination. Download now.",
      officialSourceUrl: "https://ssc.nic.in/",
      content: `
        <div class="job-post-content font-sans">
          <h2 class="text-2xl font-bold text-blue-800 mb-4">SSC CGL Tier 1 Admit Card 2026</h2>
          <p class="mb-4">The Staff Selection Commission (SSC) has officially released the Application Status and Admit Card for the Combined Graduate Level (CGL) Examination 2026. Candidates who applied for the exam can now check their exam city, date, and download their hall tickets.</p>
          
          <h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-blue-600 mb-3">Important Details</h3>
          <ul class="list-disc pl-5 mb-6 space-y-2">
            <li><strong>Organization:</strong> Staff Selection Commission (SSC)</li>
            <li><strong>Exam Name:</strong> Combined Graduate Level (CGL) 2026</li>
            <li><strong>Status:</strong> Admit Card & Application Status Released</li>
            <li><strong>Exam Date:</strong> October 2026</li>
          </ul>
          
          <h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-green-600 mb-3">How to Download</h3>
          <p class="mb-4">1. Visit the official SSC regional website.<br/>2. Click on the "SSC CGL 2026 Admit Card" link.<br/>3. Enter your Registration Number and Date of Birth.<br/>4. Download and print the Admit Card for future reference.</p>
          
          <div class="bg-blue-50 border border-blue-200 p-4 rounded-md">
            <p class="mb-2"><strong>Official Website:</strong> <a href="https://ssc.nic.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-bold">https://ssc.nic.in/</a></p>
          </div>
        </div>
      `,
      published: true,
      publishedAt: new Date()
    },
    {
      title: "UP Police Constable Result 2026 Declared (60,244 Posts)",
      slug: "up-police-constable-result-2026",
      category: "RESULT",
      shortDescription: "Uttar Pradesh Police Recruitment and Promotion Board (UPPRPB) has declared the written exam result for 60,244 Constable posts. Check your marks and cutoff here.",
      officialSourceUrl: "https://uppbpb.gov.in/",
      content: `
        <div class="job-post-content font-sans">
          <h2 class="text-2xl font-bold text-blue-800 mb-4">UP Police Constable Written Exam Result 2026</h2>
          <p class="mb-4">The Uttar Pradesh Police Recruitment and Promotion Board (UPPRPB) has announced the results for the written examination conducted for 60,244 Constable Vacancies. Candidates can now check their qualifying status and cutoff marks online.</p>
          
          <h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-blue-600 mb-3">Important Details</h3>
          <ul class="list-disc pl-5 mb-6 space-y-2">
            <li><strong>Organization:</strong> UPPRPB</li>
            <li><strong>Post Name:</strong> UP Police Constable</li>
            <li><strong>Total Posts:</strong> 60,244</li>
            <li><strong>Result Status:</strong> Declared (Available Now)</li>
          </ul>
          
          <h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-green-600 mb-3">Next Steps (PET/PST)</h3>
          <p class="mb-4">Candidates who have qualified the written examination will be called for Document Verification (DV) and Physical Standard Test (PST) / Physical Efficiency Test (PET). Keep your documents ready.</p>
          
          <div class="bg-blue-50 border border-blue-200 p-4 rounded-md">
            <p class="mb-2"><strong>Official Website:</strong> <a href="https://uppbpb.gov.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-bold">https://uppbpb.gov.in/</a></p>
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
  .then(() => console.log("Successfully added 2 new articles."))
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());
