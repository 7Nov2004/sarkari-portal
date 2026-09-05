import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Add admin user
  const admin = await prisma.user.upsert({
    where: { username: 'admin' },
    update: {},
    create: {
      username: 'admin',
      passwordHash: 'hashed_password_demo', // Intentionally fake for demo
      role: 'ADMIN',
    },
  });

  // Create Jobs
  const job1 = await prisma.post.upsert({
    where: { slug: 'ssc-cgl-2026-notification' },
    update: {},
    create: {
      title: 'SSC CGL 2026 Notification, Online Form',
      slug: 'ssc-cgl-2026-notification',
      category: 'JOB',
      shortDescription: 'Staff Selection Commission (SSC) has released the Combined Graduate Level (CGL) 2026 notification. Candidates can apply online.',
      content: 'The Staff Selection Commission has released the notification for the Combined Graduate Level Examination, 2026. This exam aims to fill various Group B and Group C posts in different Ministries/Departments/Organizations of the Government of India.',
      importantDates: '{"Application Start": "10-09-2026", "Last Date": "09-10-2026", "Exam Date Tier 1": "Dec 2026"}',
      eligibility: 'Bachelor Degree in Any Stream from a Recognized University in India.',
      applicationProcess: '1. Visit the official SSC website. 2. Register/Login. 3. Fill the CGL 2026 application form. 4. Upload photo/signature. 5. Pay the fee and submit.',
      requiredDocuments: 'Aadhar Card, 10th/12th/Graduation Marksheets, Photo, Signature.',
      officialSourceUrl: 'https://ssc.nic.in/',
      published: true,
      publishedAt: new Date(),
    },
  });

  const job2 = await prisma.post.upsert({
    where: { slug: 'up-police-constable-recruitment-2026' },
    update: {},
    create: {
      title: 'UP Police Constable Recruitment 2026',
      slug: 'up-police-constable-recruitment-2026',
      category: 'JOB',
      shortDescription: 'Uttar Pradesh Police Recruitment and Promotion Board (UPPRPB) invites applications for 35,000+ Constable posts.',
      content: 'UP Police has announced a massive recruitment drive for Constables. Interested and eligible candidates can apply online.',
      importantDates: '{"Application Start": "15-09-2026", "Last Date": "15-10-2026"}',
      eligibility: '10+2 (Intermediate) Exam Passed in Any Recognized Board in India.',
      applicationProcess: 'Apply online through the UPPRPB official portal.',
      officialSourceUrl: 'https://uppbpb.gov.in/',
      published: true,
      publishedAt: new Date(),
    },
  });

  // Create Results
  const result1 = await prisma.post.upsert({
    where: { slug: 'ibps-po-mains-result-2026' },
    update: {},
    create: {
      title: 'IBPS PO Mains Result 2026 Declared',
      slug: 'ibps-po-mains-result-2026',
      category: 'RESULT',
      shortDescription: 'Institute of Banking Personnel Selection (IBPS) has declared the Mains Result for Probationary Officer (PO) recruitment.',
      content: 'Candidates who appeared for the IBPS PO Mains examination can now check their results and scorecard on the official website.',
      importantDates: '{"Mains Exam Date": "Aug 2026", "Result Declared": "05-09-2026"}',
      applicationProcess: 'Login with Registration No / Roll No and Password / DOB to view the result.',
      officialSourceUrl: 'https://ibps.in/',
      published: true,
      publishedAt: new Date(),
    },
  });

  // Create Yojanas
  const yojana1 = await prisma.post.upsert({
    where: { slug: 'pm-kisan-samman-nidhi-yojana-18th-installment' },
    update: {},
    create: {
      title: 'PM Kisan Samman Nidhi Yojana - 18th Installment',
      slug: 'pm-kisan-samman-nidhi-yojana-18th-installment',
      category: 'YOJANA',
      shortDescription: 'Check status for the 18th installment of PM Kisan Samman Nidhi Yojana. Eligible farmers get ₹6,000 per year.',
      content: 'The Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) is a central sector scheme that provides income support to all landholding farmers families in the country.',
      eligibility: 'Small and marginal farmer families holding cultivable land.',
      applicationProcess: 'Farmers can register themselves via the PM Kisan portal or through Common Service Centres (CSCs). eKYC is mandatory.',
      officialSourceUrl: 'https://pmkisan.gov.in/',
      published: true,
      publishedAt: new Date(),
    },
  });

  // Create Admit Cards
  const admitCard1 = await prisma.post.upsert({
    where: { slug: 'upsc-civil-services-mains-admit-card-2026' },
    update: {},
    create: {
      title: 'UPSC Civil Services Mains Admit Card 2026',
      slug: 'upsc-civil-services-mains-admit-card-2026',
      category: 'ADMIT_CARD',
      shortDescription: 'Union Public Service Commission (UPSC) has released the admit cards for the Civil Services Mains Examination 2026.',
      content: 'Candidates who have cleared the preliminary exam can download their admit card for the mains examination from the UPSC official website.',
      importantDates: '{"Admit Card Release": "01-09-2026", "Mains Exam Date": "20-09-2026 to 29-09-2026"}',
      requiredDocuments: 'Admit Card Printout, Original Photo ID Card.',
      officialSourceUrl: 'https://upsc.gov.in/',
      published: true,
      publishedAt: new Date(),
    },
  });

  console.log('Seed data created successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
