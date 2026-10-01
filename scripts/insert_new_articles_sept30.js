const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const posts = [
    {
      title: "SSC GD Constable 2026 Notification Out (39,481 Posts)",
      slug: "ssc-gd-constable-recruitment-2026",
      category: "JOB",
      shortDescription: "Staff Selection Commission (SSC) has released the notification for GD Constable 2026. 10th pass candidates can apply online for 39,481 vacancies in CAPFs, SSF, and Assam Rifles.",
      officialSourceUrl: "https://ssc.nic.in/",
      content: `
        <div class="job-post-content font-sans">
          <h2 class="text-2xl font-bold text-blue-800 mb-4">SSC GD Constable Recruitment 2026</h2>
          <p class="mb-4">The Staff Selection Commission (SSC) has published the highly anticipated official notification for the <strong>Constable (GD) in Central Armed Police Forces (CAPFs), SSF, and Rifleman (GD) in Assam Rifles Examination, 2026</strong>. Eligible 10th pass candidates from all over India can apply online.</p>
          
          <h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-blue-600 mb-3">Important Details</h3>
          <ul class="list-disc pl-5 mb-6 space-y-2">
            <li><strong>Organization:</strong> Staff Selection Commission (SSC)</li>
            <li><strong>Total Vacancies:</strong> 39,481 Posts (Approx.)</li>
            <li><strong>Qualification:</strong> 10th Class (Matriculation) Pass</li>
            <li><strong>Age Limit:</strong> 18 to 23 Years (Age relaxation applicable as per rules)</li>
          </ul>
          
          <h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-green-600 mb-3">Application Fee & Process</h3>
          <p class="mb-4">General / OBC / EWS candidates have to pay Rs. 100/-. SC / ST / Ex-Servicemen and All Category Female candidates are exempted from the fee payment. Apply through the new SSC portal before the last date.</p>
          
          <div class="bg-blue-50 border border-blue-200 p-4 rounded-md">
            <p class="mb-2"><strong>Official Apply Link:</strong> <a href="https://ssc.nic.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-bold">ssc.nic.in</a></p>
          </div>
        </div>
      `,
      published: true,
      publishedAt: new Date()
    },
    {
      title: "UPSC NDA & NA (II) Result 2026 Declared (Name Wise)",
      slug: "upsc-nda-2-result-2026",
      category: "RESULT",
      shortDescription: "Union Public Service Commission (UPSC) has announced the written exam result of National Defence Academy (NDA) and Naval Academy (NA) II Exam 2026. Download PDF.",
      officialSourceUrl: "https://upsc.gov.in/",
      content: `
        <div class="job-post-content font-sans">
          <h2 class="text-2xl font-bold text-blue-800 mb-4">UPSC NDA & NA (II) 2026 Result Out</h2>
          <p class="mb-4">The Union Public Service Commission (UPSC) has officially declared the written examination results for the <strong>National Defence Academy and Naval Academy Examination (II) 2026</strong>. Candidates who appeared for the exam can now check their roll numbers in the selected candidates' list.</p>
          
          <h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-blue-600 mb-3">Important Details</h3>
          <ul class="list-disc pl-5 mb-6 space-y-2">
            <li><strong>Organization:</strong> UPSC</li>
            <li><strong>Exam Name:</strong> NDA & NA (II) 2026</li>
            <li><strong>Status:</strong> Result PDF Available</li>
            <li><strong>Next Stage:</strong> SSB Interview</li>
          </ul>
          
          <h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-green-600 mb-3">What's Next?</h3>
          <p class="mb-4">Candidates whose roll numbers qualify in the written test must register themselves online on the Indian Army recruiting website within 2 weeks to get their SSB Interview dates and centers.</p>
          
          <div class="bg-blue-50 border border-blue-200 p-4 rounded-md">
            <p class="mb-2"><strong>Download Result PDF:</strong> <a href="https://upsc.gov.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-bold">upsc.gov.in</a></p>
          </div>
        </div>
      `,
      published: true,
      publishedAt: new Date()
    },
    {
      title: "Bihar BPSC TRE 4.0 Admit Card 2026 Released",
      slug: "bihar-bpsc-tre-4-admit-card-2026",
      category: "ADMIT_CARD",
      shortDescription: "Bihar Public Service Commission (BPSC) has released the e-Admit Card and Exam Center details for Teacher Recruitment Exam (TRE) 4.0.",
      officialSourceUrl: "https://bpsc.bih.nic.in/",
      content: `
        <div class="job-post-content font-sans">
          <h2 class="text-2xl font-bold text-blue-800 mb-4">BPSC Teacher TRE 4.0 Admit Card 2026</h2>
          <p class="mb-4">The Bihar Public Service Commission (BPSC) has activated the admit card download link for the <strong>Teacher Recruitment Exam (TRE 4.0) 2026</strong>. Candidates applying for PRT, TGT, and PGT posts can now download their e-Admit Cards and view their allocated exam center city.</p>
          
          <h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-blue-600 mb-3">Important Details</h3>
          <ul class="list-disc pl-5 mb-6 space-y-2">
            <li><strong>Organization:</strong> BPSC, Bihar</li>
            <li><strong>Exam Name:</strong> TRE 4.0 (School Teacher)</li>
            <li><strong>Status:</strong> Admit Card Live</li>
            <li><strong>Required to Download:</strong> Passport size photo upload (25kb)</li>
          </ul>
          
          <h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-green-600 mb-3">How to Download</h3>
          <p class="mb-4">Before downloading the final admit card, candidates must log in to their dashboard and upload a recent passport-size photograph. After uploading, the admit card PDF containing the exam center code and instructions will be generated.</p>
          
          <div class="bg-blue-50 border border-blue-200 p-4 rounded-md">
            <p class="mb-2"><strong>Official Website:</strong> <a href="https://bpsc.bih.nic.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-bold">bpsc.bih.nic.in</a></p>
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
  .then(() => console.log("Successfully added 3 new articles."))
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());
