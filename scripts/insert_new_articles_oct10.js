const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const posts = [
    {
      title: "Ladli Behna Yojana 17th Kist Status 2026: ₹1,250 Credited (Check DBT Payment)",
      slug: "ladli-behna-yojana-17th-installment-status-2026",
      category: "YOJANA",
      shortDescription: "Under Mukhyamantri Ladli Behna Yojana, monthly financial assistance of Rs 1,250 has been transferred via DBT on 10th October. Check beneficiary payment status online.",
      officialSourceUrl: "https://cmladlibehna.mp.gov.in/",
      content: `
        <div class="job-post-content font-sans">
          <h2 class="text-2xl font-bold text-blue-800 mb-4">Mukhyamantri Ladli Behna Yojana 17th Installment 2026</h2>
          <p class="mb-4">The state government has successfully disbursed the <strong>17th monthly installment of Mukhyamantri Ladli Behna Yojana</strong> directly into the Aadhaar-linked bank accounts of over 1.29 crore beneficiary women on 10th October. Eligible beneficiaries receive ₹1,250 every month.</p>
          
          <h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-blue-600 mb-3">Key Details & Installment Info</h3>
          <ul class="list-disc pl-5 mb-6 space-y-2">
            <li><strong>Scheme Name:</strong> Mukhyamantri Ladli Behna Yojana</li>
            <li><strong>Monthly Amount:</strong> ₹ 1,250 credited per eligible woman</li>
            <li><strong>Transfer Mode:</strong> Direct Benefit Transfer (Aadhaar DBT enabled accounts)</li>
            <li><strong>Status:</strong> Payment Disbursed for October 2026</li>
          </ul>
          
          <h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-green-600 mb-3">How to Check DBT Payment Status</h3>
          <p class="mb-4">1. Visit the official portal: <strong>cmladlibehna.mp.gov.in</strong>.<br/>2. Click on 'Application & Payment Status' (आवेदन एवं भुगतान की स्थिति).<br/>3. Enter your Ladli Behna Samagra Member ID or Application Number.<br/>4. Enter the captcha code and verify with OTP sent to your registered mobile number.<br/>5. View your complete bank transfer history and credit status.</p>
          
          <div class="bg-blue-50 border border-blue-200 p-4 rounded-md">
            <p class="mb-2"><strong>Official Portal:</strong> <a href="https://cmladlibehna.mp.gov.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-bold">cmladlibehna.mp.gov.in</a></p>
          </div>
        </div>
      `,
      published: true,
      publishedAt: new Date()
    },
    {
      title: "Delhi Police Constable Recruitment 2026: 7,547 Posts Notification & Online Form",
      slug: "delhi-police-constable-recruitment-2026",
      category: "JOB",
      shortDescription: "Staff Selection Commission (SSC) has released the recruitment notification for 7,547 Constable (Executive) Male and Female vacancies in Delhi Police. 12th pass apply online.",
      officialSourceUrl: "https://ssc.gov.in/",
      content: `
        <div class="job-post-content font-sans">
          <h2 class="text-2xl font-bold text-blue-800 mb-4">Delhi Police Constable (Executive) Recruitment 2026</h2>
          <p class="mb-4">The Staff Selection Commission (SSC) invites online applications for the recruitment of <strong>Constable (Executive) Male and Female in Delhi Police Examination 2026</strong>. 12th pass candidates from all over India are eligible to apply.</p>
          
          <h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-blue-600 mb-3">Vacancy & Eligibility Criteria</h3>
          <ul class="list-disc pl-5 mb-6 space-y-2">
            <li><strong>Recruitment Body:</strong> Staff Selection Commission (SSC) & Delhi Police</li>
            <li><strong>Post Name:</strong> Constable (Executive) Male & Female</li>
            <li><strong>Total Posts:</strong> 7,547 Vacancies (Male: 5,056 | Female: 2,491)</li>
            <li><strong>Educational Qualification:</strong> 10+2 (Senior Secondary) pass from a recognized board. Male candidates must possess a valid driving license for LMV (Motorcycle or Car).</li>
            <li><strong>Age Limit:</strong> 18 to 25 years (Age relaxation applicable for reserved categories).</li>
          </ul>
          
          <h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-green-600 mb-3">Selection Stages</h3>
          <p class="mb-4">Selection will be done through Computer Based Examination (CBE) consisting of 100 objective questions (GK/Current Affairs, Reasoning, Numerical Ability, Computer), followed by Physical Endurance & Measurement Test (PE&MT), and Medical Examination.</p>
          
          <div class="bg-blue-50 border border-blue-200 p-4 rounded-md">
            <p class="mb-2"><strong>Apply on Official SSC Portal:</strong> <a href="https://ssc.gov.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-bold">ssc.gov.in</a></p>
          </div>
        </div>
      `,
      published: true,
      publishedAt: new Date()
    },
    {
      title: "Indian Army Agniveer Result 2026 Declared: Check ARO Wise Merit List PDF",
      slug: "indian-army-agniveer-result-merit-list-2026",
      category: "RESULT",
      shortDescription: "Join Indian Army has officially declared the Common Entrance Exam (CEE) Result and Merit List for Agniveer General Duty (GD), Technical, Clerk, and Tradesmen. Download ARO-wise PDF.",
      officialSourceUrl: "https://joinindianarmy.nic.in/",
      content: `
        <div class="job-post-content font-sans">
          <h2 class="text-2xl font-bold text-blue-800 mb-4">Indian Army Agniveer CEE Result 2026 Out</h2>
          <p class="mb-4">The Indian Army recruitment directorate has published the written examination results of the <strong>Agniveer Computer Based Common Entrance Examination (CEE) 2026</strong>. Candidates who took the exam can now check their roll numbers in the official ZRO/ARO merit lists.</p>
          
          <h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-blue-600 mb-3">Overview & Results Status</h3>
          <ul class="list-disc pl-5 mb-6 space-y-2">
            <li><strong>Organization:</strong> Indian Army</li>
            <li><strong>Exam Name:</strong> Agniveer CEE Examination 2026</li>
            <li><strong>Trades Covered:</strong> General Duty (GD), Technical, Office Assistant / Clerk, Tradesmen 10th & 8th Pass.</li>
            <li><strong>Result Status:</strong> ARO Wise Merit List PDF Available</li>
            <li><strong>Next Phase:</strong> Recruitment Rally Physical Fitness Test (1.6 Km Run, Pull-ups, Ditch, Zig-Zag Balance).</li>
          </ul>
          
          <h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-green-600 mb-3">How to Check Roll Number in Result PDF</h3>
          <p class="mb-4">1. Visit the official Army recruitment website: <strong>joinindianarmy.nic.in</strong>.<br/>2. Navigate to the 'CEE Results' tab on the homepage.<br/>3. Click on your respective Army Recruiting Office (ARO/ZRO) result link.<br/>4. Open the PDF and press 'Ctrl + F' to search your Roll Number.</p>
          
          <div class="bg-blue-50 border border-blue-200 p-4 rounded-md">
            <p class="mb-2"><strong>Official Army Website:</strong> <a href="https://joinindianarmy.nic.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-bold">joinindianarmy.nic.in</a></p>
          </div>
        </div>
      `,
      published: true,
      publishedAt: new Date()
    },
    {
      title: "IBPS PO Prelims Result 2026 Declared: Check Scorecard & Mains Exam Date",
      slug: "ibps-po-prelims-result-cut-off-2026",
      category: "RESULT",
      shortDescription: "Institute of Banking Personnel Selection (IBPS) has announced the Prelims Result and Cut Off marks for Probationary Officers (CRP PO/MT XIV). Check qualification status for Mains.",
      officialSourceUrl: "https://www.ibps.in/",
      content: `
        <div class="job-post-content font-sans">
          <h2 class="text-2xl font-bold text-blue-800 mb-4">IBPS PO Prelims Examination Result 2026</h2>
          <p class="mb-4">The Institute of Banking Personnel Selection (IBPS) has activated the online link to view the <strong>Result Status of the Online Preliminary Examination for CRP PO/MT-XIV 2026</strong>. Candidates who appeared for the preliminary test can check their status using their login credentials.</p>
          
          <h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-blue-600 mb-3">Important Details</h3>
          <ul class="list-disc pl-5 mb-6 space-y-2">
            <li><strong>Conducting Body:</strong> IBPS, Mumbai</li>
            <li><strong>Post Name:</strong> Probationary Officer / Management Trainee (PO/MT)</li>
            <li><strong>Exam:</strong> Online Preliminary Exam</li>
            <li><strong>Status:</strong> Result Status Live (Scorecard released within 7 days)</li>
            <li><strong>Next Stage:</strong> Online Main Examination (Objective + Descriptive Test)</li>
          </ul>
          
          <h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-green-600 mb-3">Steps to Check IBPS PO Result</h3>
          <p class="mb-4">1. Visit the official portal: <strong>ibps.in</strong>.<br/>2. Click on the scrolling link 'Result Status of Online Preliminary Examination for CRP PO/MT-XIV'.<br/>3. Enter your Registration Number / Roll Number and Password / Date of Birth.<br/>4. Enter the captcha code and click 'Login' to view your qualification status.</p>
          
          <div class="bg-blue-50 border border-blue-200 p-4 rounded-md">
            <p class="mb-2"><strong>Official IBPS Website:</strong> <a href="https://www.ibps.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-bold">ibps.in</a></p>
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
  .then(() => console.log("Successfully added 4 trending articles for Oct 10."))
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());
