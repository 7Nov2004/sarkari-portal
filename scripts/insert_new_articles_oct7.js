const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const posts = [
    {
      title: "PM Internship Scheme 2026 Online Registration Open (1.25 Crore Youth)",
      slug: "pm-internship-scheme-2026-online-registration",
      category: "YOJANA",
      shortDescription: "Central Government has opened the registration portal for PM Internship Scheme 2026. Eligible youth (aged 21-24) will receive Rs 5,000 monthly stipend and Rs 6,000 one-time financial aid.",
      officialSourceUrl: "https://pminternship.mca.gov.in/",
      content: `
        <div class="job-post-content font-sans">
          <h2 class="text-2xl font-bold text-blue-800 mb-4">Prime Minister Internship Scheme 2026 (PMIS Portal Open)</h2>
          <p class="mb-4">The Ministry of Corporate Affairs (MCA), Government of India has launched the official portal for the <strong>Prime Minister's Internship Scheme 2026</strong>. Over 1.25 crore candidates will be offered 12-month internship opportunities in India's top 500 companies with government stipends.</p>
          
          <h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-blue-600 mb-3">Key Highlights & Stipend</h3>
          <ul class="list-disc pl-5 mb-6 space-y-2">
            <li><strong>Scheme Name:</strong> Prime Minister Internship Scheme (PMIS)</li>
            <li><strong>Monthly Stipend:</strong> ₹ 5,000 per month (₹ 4,500 from Govt + ₹ 500 from Company CSR)</li>
            <li><strong>One-time Grant:</strong> ₹ 6,000 grant upon joining for incidentals</li>
            <li><strong>Age Limit:</strong> 21 to 24 years</li>
            <li><strong>Eligibility:</strong> High School, Higher Secondary, ITI, Polytechnic Diploma, or Graduates (BA, B.Sc, B.Com, BCA, BBA, B.Pharma).</li>
          </ul>
          
          <h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-green-600 mb-3">How to Register Online</h3>
          <p class="mb-4">1. Visit the official portal: <strong>pminternship.mca.gov.in</strong>.<br/>2. Click on 'Register' and verify your Aadhaar linked mobile number.<br/>3. Complete your profile and upload educational certificates via DigiLocker.<br/>4. Select up to 5 internship sectors and submit your choices.</p>
          
          <div class="bg-blue-50 border border-blue-200 p-4 rounded-md">
            <p class="mb-2"><strong>Official Portal:</strong> <a href="https://pminternship.mca.gov.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-bold">pminternship.mca.gov.in</a></p>
          </div>
        </div>
      `,
      published: true,
      publishedAt: new Date()
    },
    {
      title: "Ayushman Vay Vandana Card 2026: Free ₹5 Lakh Healthcare for Seniors (70+)",
      slug: "ayushman-vay-vandana-card-apply-online-2026",
      category: "YOJANA",
      shortDescription: "Ayushman Bharat PM-JAY has expanded to cover all senior citizens aged 70 and above with up to Rs 5 Lakh annual free treatment. Apply online for Ayushman Vay Vandana Card.",
      officialSourceUrl: "https://beneficiary.nha.gov.in/",
      content: `
        <div class="job-post-content font-sans">
          <h2 class="text-2xl font-bold text-blue-800 mb-4">Ayushman Vay Vandana Card 2026 (70+ Senior Citizens)</h2>
          <p class="mb-4">The Government of India has approved universal health insurance coverage under <strong>Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (AB PM-JAY)</strong> for all elderly citizens aged 70 years and above, irrespective of their income or socioeconomic status.</p>
          
          <h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-blue-600 mb-3">Benefits & Important Features</h3>
          <ul class="list-disc pl-5 mb-6 space-y-2">
            <li><strong>Health Cover:</strong> Up to ₹ 5,00,000 per family per year exclusively for senior citizens aged 70+.</li>
            <li><strong>Income Limit:</strong> No income limit (Available for Poor, Middle Class, and Higher Income seniors).</li>
            <li><strong>Card Name:</strong> Ayushman Vay Vandana Distinct Card.</li>
            <li><strong>Top-up Benefit:</strong> If family is already covered under AB PM-JAY, the 70+ member receives an extra ₹ 5 Lakh top-up.</li>
          </ul>
          
          <h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-green-600 mb-3">How to Apply Online via NHA Portal</h3>
          <p class="mb-4">1. Download the Ayushman App or visit beneficiary.nha.gov.in.<br/>2. Select 'Beneficiary' login and enter your mobile number with OTP.<br/>3. Enter Aadhaar details of senior citizen and complete instant e-KYC (Face auth or OTP).<br/>4. Download the digital Ayushman Vay Vandana Card instantly.</p>
          
          <div class="bg-blue-50 border border-blue-200 p-4 rounded-md">
            <p class="mb-2"><strong>Official NHA Portal:</strong> <a href="https://beneficiary.nha.gov.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-bold">beneficiary.nha.gov.in</a></p>
          </div>
        </div>
      `,
      published: true,
      publishedAt: new Date()
    },
    {
      title: "RRB NTPC 2026 Online Application Form Active: Apply for 11,558 Vacancies",
      slug: "rrb-ntpc-2026-apply-online-11558-posts",
      category: "JOB",
      shortDescription: "Railway Recruitment Board (RRB) has opened the online application link for 11,558 NTPC Graduate and Undergraduate posts. 12th pass & Graduates can apply online.",
      officialSourceUrl: "https://rrbapply.gov.in/",
      content: `
        <div class="job-post-content font-sans">
          <h2 class="text-2xl font-bold text-blue-800 mb-4">Railway RRB NTPC Recruitment 2026 (11,558 Posts)</h2>
          <p class="mb-4">The Railway Recruitment Boards (RRBs) are currently accepting online applications for <strong>11,558 Non-Technical Popular Categories (NTPC) Posts</strong> under CEN 05/2026 (Graduate) and CEN 06/2026 (Undergraduate). Eligible candidates across India can submit their applications online.</p>
          
          <h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-blue-600 mb-3">Vacancies & Eligibility Details</h3>
          <ul class="list-disc pl-5 mb-6 space-y-2">
            <li><strong>Organization:</strong> Railway Recruitment Board (RRB)</li>
            <li><strong>Total Posts:</strong> 11,558 Posts (Graduate: 3,445 | Undergraduate 12th Level: 8,113)</li>
            <li><strong>Graduate Posts:</strong> Chief Commercial cum Ticket Supervisor, Station Master, Goods Train Manager, Junior Account Assistant, Senior Clerk.</li>
            <li><strong>12th Pass Posts:</strong> Commercial cum Ticket Clerk, Accounts Clerk cum Typist, Junior Clerk cum Typist, Trains Clerk.</li>
            <li><strong>Age Limit:</strong> 18 to 33 years for 12th Level; 18 to 36 years for Graduate Level (Relaxation applicable).</li>
          </ul>
          
          <h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-green-600 mb-3">How to Apply Online</h3>
          <p class="mb-4">1. Visit the central railway portal: <strong>rrbapply.gov.in</strong>.<br/>2. Create an account by filling your Aadhaar and contact details.<br/>3. Fill educational qualifications and select the desired RRB zone.<br/>4. Upload photograph, signature and pay the examination fee online.</p>
          
          <div class="bg-blue-50 border border-blue-200 p-4 rounded-md">
            <p class="mb-2"><strong>Official Application Portal:</strong> <a href="https://rrbapply.gov.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-bold">rrbapply.gov.in</a></p>
          </div>
        </div>
      `,
      published: true,
      publishedAt: new Date()
    },
    {
      title: "CISF Constable Tradesman & Fireman Recruitment 2026: 10th Pass Apply Online",
      slug: "cisf-constable-tradesman-fireman-recruitment-2026",
      category: "JOB",
      shortDescription: "Central Industrial Security Force (CISF) has announced recruitment for Constable Tradesman and Fireman posts. 10th pass candidates can apply online.",
      officialSourceUrl: "https://cisfrectt.cisf.gov.in/",
      content: `
        <div class="job-post-content font-sans">
          <h2 class="text-2xl font-bold text-blue-800 mb-4">CISF Constable Tradesman & Fireman Recruitment 2026</h2>
          <p class="mb-4">The Central Industrial Security Force (CISF) under the Ministry of Home Affairs has released the official recruitment notification for the posts of <strong>Constable (Tradesman) and Constable (Fire)</strong>. Both male and female Indian citizens with 10th pass qualification can apply online.</p>
          
          <h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-blue-600 mb-3">Important Details</h3>
          <ul class="list-disc pl-5 mb-6 space-y-2">
            <li><strong>Organization:</strong> Central Industrial Security Force (CISF)</li>
            <li><strong>Post Name:</strong> Constable (Tradesman) / Constable (Fire)</li>
            <li><strong>Educational Qualification:</strong> 10th Class (Matriculation) pass from a recognized board. (Science stream required for Fire posts).</li>
            <li><strong>Pay Scale:</strong> Level-3 (₹ 21,700 to ₹ 69,100 per month) plus allowances.</li>
            <li><strong>Age Limit:</strong> 18 to 23 years (Relaxation as per central government norms).</li>
          </ul>
          
          <h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-green-600 mb-3">Selection Process</h3>
          <p class="mb-4">The selection process involves Physical Standards Test (PST), Physical Efficiency Test (PET), Document Verification, Trade Test, Written Examination (CBT/OMR), and Detailed Medical Examination (DME).</p>
          
          <div class="bg-blue-50 border border-blue-200 p-4 rounded-md">
            <p class="mb-2"><strong>Official CISF Recruitment Website:</strong> <a href="https://cisfrectt.cisf.gov.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-bold">cisfrectt.cisf.gov.in</a></p>
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
  .then(() => console.log("Successfully added 4 trending Scheme & Job articles for Oct 7."))
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());
