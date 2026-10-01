const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const posts = [
    {
      title: "PM Surya Ghar Muft Bijli Yojana 2026: Apply Online (300 Units Free)",
      slug: "pm-surya-ghar-muft-bijli-yojana-2026",
      category: "YOJANA",
      shortDescription: "Apply online for PM Surya Ghar Yojana to get 300 units of free electricity and up to Rs. 78,000 subsidy for installing rooftop solar panels.",
      officialSourceUrl: "https://pmsuryaghar.gov.in/",
      content: `
        <div class="job-post-content font-sans">
          <h2 class="text-2xl font-bold text-blue-800 mb-4">PM Surya Ghar Muft Bijli Yojana 2026</h2>
          <p class="mb-4">The Government of India has launched the <strong>PM Surya Ghar Muft Bijli Yojana</strong> to provide up to 300 units of free electricity every month to 1 crore households. Under this scheme, eligible families will receive heavy subsidies to install rooftop solar panels.</p>
          
          <h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-blue-600 mb-3">Key Benefits & Details</h3>
          <ul class="list-disc pl-5 mb-6 space-y-2">
            <li><strong>Scheme Name:</strong> PM Surya Ghar Muft Bijli Yojana</li>
            <li><strong>Benefit:</strong> 300 Units Free Electricity / Month</li>
            <li><strong>Subsidy Amount:</strong> Up to Rs. 78,000 for 3kW setup</li>
            <li><strong>Eligibility:</strong> Indian Citizens having an electricity connection and suitable rooftop space.</li>
          </ul>
          
          <h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-green-600 mb-3">How to Apply</h3>
          <p class="mb-4">1. Register on the official portal using your State, Electricity Distribution Company, Electricity Consumer Number, Mobile Number, and Email.<br/>2. Login with your Mobile Number.<br/>3. Apply for the Rooftop Solar using the simple application form.<br/>4. Once approved, install the plant from a registered vendor.</p>
          
          <div class="bg-blue-50 border border-blue-200 p-4 rounded-md">
            <p class="mb-2"><strong>Official Registration Link:</strong> <a href="https://pmsuryaghar.gov.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-bold">pmsuryaghar.gov.in</a></p>
          </div>
        </div>
      `,
      published: true,
      publishedAt: new Date()
    },
    {
      title: "Subhadra Yojana 2026: Online Form, Eligibility & Registration",
      slug: "subhadra-yojana-2026-apply-online",
      category: "YOJANA",
      shortDescription: "The Subhadra Yojana provides financial assistance of Rs. 10,000 per year to eligible women. Check the eligibility and apply online now.",
      officialSourceUrl: "https://subhadra.odisha.gov.in/",
      content: `
        <div class="job-post-content font-sans">
          <h2 class="text-2xl font-bold text-blue-800 mb-4">Subhadra Yojana 2026 Registration</h2>
          <p class="mb-4">The <strong>Subhadra Yojana</strong> is a flagship women empowerment initiative aimed at providing financial assistance directly into the bank accounts of eligible women beneficiaries. Women between the ages of 21 and 60 years can apply to receive Rs. 10,000 annually (in two equal installments of Rs. 5,000).</p>
          
          <h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-blue-600 mb-3">Important Details</h3>
          <ul class="list-disc pl-5 mb-6 space-y-2">
            <li><strong>Scheme Name:</strong> Subhadra Yojana</li>
            <li><strong>Beneficiaries:</strong> Women aged 21-60 years</li>
            <li><strong>Financial Help:</strong> ₹ 10,000 per year (₹ 50,000 over 5 years)</li>
            <li><strong>Mandatory Doc:</strong> Aadhaar Card linked with a single-holder bank account.</li>
          </ul>
          
          <h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-green-600 mb-3">Application Process</h3>
          <p class="mb-4">Interested women can apply by filling out the official form available at Anganwadi centers, Block offices, or Mo Seva Kendras. You can also track your application status via the official web portal.</p>
          
          <div class="bg-blue-50 border border-blue-200 p-4 rounded-md">
            <p class="mb-2"><strong>Official Website:</strong> <a href="https://subhadra.odisha.gov.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-bold">subhadra.odisha.gov.in</a></p>
          </div>
        </div>
      `,
      published: true,
      publishedAt: new Date()
    },
    {
      title: "PM Vishwakarma Yojana 2026: Free Training & Toolkit E-Voucher",
      slug: "pm-vishwakarma-yojana-2026",
      category: "YOJANA",
      shortDescription: "Apply for PM Vishwakarma Yojana to get free skill training, Rs. 500 daily stipend, Rs. 15,000 toolkit voucher, and collateral-free loans.",
      officialSourceUrl: "https://pmvishwakarma.gov.in/",
      content: `
        <div class="job-post-content font-sans">
          <h2 class="text-2xl font-bold text-blue-800 mb-4">PM Vishwakarma Yojana 2026</h2>
          <p class="mb-4">The <strong>PM Vishwakarma Yojana</strong> is a central sector scheme to support traditional artisans and craftspeople. It covers 18 distinct trades (like carpenters, tailors, blacksmiths, masons, etc.) by providing them with skill upgrading, toolkit incentives, and easy credit support.</p>
          
          <h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-blue-600 mb-3">Key Benefits</h3>
          <ul class="list-disc pl-5 mb-6 space-y-2">
            <li><strong>Recognition:</strong> PM Vishwakarma Certificate and ID Card.</li>
            <li><strong>Skill Training:</strong> 5-7 days of basic training with ₹ 500 per day stipend.</li>
            <li><strong>Toolkit Incentive:</strong> e-Voucher of up to ₹ 15,000 for modern tools.</li>
            <li><strong>Credit Support:</strong> Collateral-free loans up to ₹ 3 Lakh (at just 5% interest).</li>
          </ul>
          
          <h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-green-600 mb-3">Who Can Apply?</h3>
          <p class="mb-4">An artisan or craftsperson working with hands and tools in one of the 18 specified traditional trades. Minimum age should be 18 years, and only one member per family is eligible.</p>
          
          <div class="bg-blue-50 border border-blue-200 p-4 rounded-md">
            <p class="mb-2"><strong>Official Website & Application:</strong> <a href="https://pmvishwakarma.gov.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-bold">pmvishwakarma.gov.in</a></p>
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
    console.log("Added Yojana:", post.title);
  }
}

main()
  .then(() => console.log("Successfully added 3 new Yojana articles."))
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());
