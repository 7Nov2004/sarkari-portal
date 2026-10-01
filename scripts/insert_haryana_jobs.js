const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const rawData = `• HKRN Enterprises Vacancy 2026 : 127 पदों पर भर्ती, ऑनलाइन आवेदन शुरू
• HPSC FSO Vacancy 2026 : 45 पदों पर भर्ती, ₹35,400 Salary
• PGIMER Nursing Officer Vacancy 2026: नर्सिंग ऑफिसर के 243 पदों पर भर्ती, जानें?
• ULB Haryana Vacancy 2026 : 195 पदों पर भर्ती, योग्यता, चयन प्रक्रिया
• PUCB Bank Vacancy 2026 : B.Com/BBA/BCA वालों के लिए मौका, जानें?
• Punjab and Haryana High Court Vacancy 2026: Driver और Frash के 56 पदों पर भर्ती, जानें?
• CCS HAU Apprentice Vacancy 2026: 10वीं-ITI पास के लिए 377 पदों पर भर्ती,
• Haryana HTET November 2026 Online Form : PRT, TGT और PGT के लिए देखें पूरी जानकारी
• Haryana Police SPO Vacancy 2026: 400 पदों पर भर्ती, ₹20,000 मानदेय
• ECHS Ambala Vacancy 2026: 100 संविदा पदों पर भर्ती, जानें?
• HVPNL Apprentice Vacancy 2026 : 114 अप्रेंटिस पदों पर निकली बंपर भर्ती, जानें ?
• Hartron Junior Programmer Vacancy 2026: 530 पदों पर भर्ती, ₹24,100 सैलरी
• ULB Haryana Vacancy 2026 : इंजीनियरिंग एसोसिएट के 150 पदों पर आवेदन शुरू,
• GMCH Chandigarh Vacancy 2026: 64 पदों पर भर्ती, 20 जुलाई को होगा वॉक-इन इंटरव्यू
• Rewari Anganwadi Vacancy 2026: 454 वर्कर और हेल्पर पदों पर भर्ती
• HPSC District Manager Vacancy 2026: ग्रेजुएट उम्मीदवारों के लिए सुनहरा मौका
• HKRN Security Guard Vacancy 2026: 10वीं पास के लिए नई भर्ती, ₹24,000 तक सैलरी
• HSSC Group C Online Form 2026 : 1238 पदों पर भर्ती, 12वीं पास से ग्रेजुएट तक करें आवेदन
• HSSC CET Group D Vacancy 2026: 10वीं पास उम्मीदवारों के लिए सुनहरा मौका, जानें?
• Haryana High Court Clerk Online Form 2026 : 1265 पदों पर ऑनलाइन आवेदन शुरू
• Punjab & Haryana High Court Vacancy 2026: सफाई सेवक और माली के 167 पदों पर आवेदन शुरू
• Chandigarh Teacher Vacancy 2026 : 582 वैकेंसी, NTT, JBT, TGT और PGT पदों पर मिलेगा मौका
• ESIC Medical College Faridabad Senior Resident Vacancy 2026 : 83 पदों पर भर्ती, ₹1.48 लाख सैलरी
• GMCH Chandigarh Vacancy 2026: 77 पदों पर बिना परीक्षा भर्ती, सीधे इंटरव्यू से होगा चयन
• HPSC ADA Recruitment 2025 – 255 पदों के लिए ऑनलाइन आवेदन शुरू
• Haryana PGI Vacancy 2026: ग्रेजुएट के लिए सुनहरा अवसर, ऑफलाइन आवेदन शुरू
• HKRN Overseas Nurse Vacancy 2026: 100 पदों पर भर्ती – ₹30,000+ सैलरी
• Faridabad Police SPO Vacancy 2026: 110 पदों पर भर्ती, ₹20,000 सैलरी – बिना फीस करें आवेदन!
• Chandigarh Clerk Vacancy 2026: 257 पदों पर भर्ती, ₹69,100 तक सैलरी – जानें पूरी डिटेल
• NHM Haryana Specialist Bharti 2026 : 195 पदों पर वॉक-इन इंटरव्यू, जानें योग्यता और पूरी प्रक्रिया
• Rewari Sainik School Vacancy Offline Form : 10वीं पास से ग्रेजुएट तक के लिए मौका
• Kunjpura Sainik School Vacancy 2026 : 10वीं पास से ग्रेजुएट तक के लिए 18 पद, ₹44,900 सैलरी
• Faridabad Metropolitan Development Authority Bharti 2026 : 24 विशेषज्ञ पदों पर आवेदन शुरू, सैलरी ₹60,000–₹1,20,000
• HSSC Steno Bharti 2026 : 1952 वैकेंसी, योग्यता, सिलेबस, चयन प्रक्रिया
• HSSC Advt 04/2026 (Group C Post) Vacancy 2026 Notification Out : 4227 पदों पर भर्ती शुरू, पूरा नोटिफिकेशन यहां देखें
• Haryana Police Constable Bharti 2026 : 5500 पद, जाने क्या है पूरी जानकारी?
• CUH Teaching Vacancy 2026 : प्रोफेसर व असिस्टेंट प्रोफेसर पद, योग्यता देखें और आवेदन करें
• Haryana PSC PGT Computer Science Vacancy 2026 : Apply Date, Qualification, Age Limit, Selection Process
• IOCL Haldia Refinery Apprentice Vacancy 2026 : 121 पदों पर भर्ती, 24 फरवरी तक करें आवेदन
• HSSC Forest Guard Vacancy 2026 : 779 पदों पर भर्ती शुरू, आवेदन 23 फरवरी तक, सैलरी ₹69,100
• HPSC HCS Vacancy 2026 Notification Released : Eligibility, Syllabus, Exam Pattern & Salary
• IOCL Panipat Refinery Apprentice Bharti 2026 : 637 Vacancies for Fitter, Chemical & Electrical Trades
• Hisar LUVAS Apprentice Vacancy 2026 : 73 पदों पर भर्ती शुरू, 10वीं + ITI वालों के लिए सुनहरा मौका
• HSSC Group C Vacancy 2026 : 3112 Posts, Apply Online from 02 February
• Animal Welfare Board of India MTS 2026 : 10th Pass के लिए सरकारी नौकरी, ₹56,900 सैलरी
• Jhajjar Court Stenographer Vacancy 2026 : Apply Offline for 15 Posts, Salary ₹25,500
• Sirsa Court Peon Vacancy 2026 : 8th Pass Offline Form, Salary ₹16,900
• Gurugram District Court Vacancy 2026 : 155 पदों के लिए आवेदन शुरू, अंतिम तिथि 9 फरवरी
• Panipat District Court Peon Vacancy 2026 : वेतन ₹16,900/- प्रति माह, चयन इंटरव्यू के आधार पर
• RITES Vacancy 2026 : 48 Vacancies, Salary up to ₹2 Lakh, Walk-in Interview
• Army Public School Hisar Vacancy 2026 : Apply Offline for Teaching & Non-Teaching Posts
• CHIAL Vacancy 2026 : Executive & Manager पदों पर भर्ती, सैलरी ₹70,000 तक
• Haryana HARTRON Assessors Bharti 2026 : 300 पदों पर भर्ती, आवेदन प्रक्रिया शुरू
• HPSC Bharti 2026 : 50 Posts Notification, Apply Online, Eligibility, Age Limit, Salary & Selection Proces
• HPSC Veterinary Surgeon Bharti 2026 : 162 Posts, Apply Online, Eligibility & Salary
• HPSC Senior Scientific Officer Bharti 2026 : 17 Posts, Apply Online, Full Details
• HPSC Assistant Engineer Bharti 2026 : 50 पदों पर भर्ती, सैलरी ₹1.67 लाख तक, जानें पूरी जानकारी
• NITCON IMT Manesar Bharti 2026 Notification Out: Engineer, ITI, GET सहित 34 पोस्ट – पूरी जानकारी
• Rohtak Roadways Apprentice Bharti 2026 : 47 पदों पर भर्ती, 10वीं/ITI पास के लिए सुनहरा मौका
• HPSC Sub Divisional Engineer Bharti 2026 : Sub Divisional Engineer (Electrical) भर्ती, आवेदन 10 फरवरी तक
• Punjab and Sind Bank Banks Medical Consultant Bharti 2026 : Notification, Eligibility, Salary & Apply Process
• ECHS Ambala Bharti 2025 : Apply Offline for 63 Contractual Posts Before 03 January 2026
• HARSAC Bharti 2025 : 71 पदों पर भर्ती, आवेदन अंतिम तिथि 31 दिसंबर 2025
• HPSC Exam Calendar 2025-26 Out : जानें 2025-26 का पूरा एग्जाम कैलेंडर
• Central University Of Haryana Non-Teaching Bharti 2025 : नोटिफिकेशन, पात्रता, आयु सीमा, वेतन और आवेदन प्रक्रिया
• Gurugram University Vacancy 2025 : नॉन-टीचिंग भर्ती, योग्यता, फीस और चयन प्रक्रिया
• Gurugram University Assistant Professor Bharti 2025 : योग्यता, सैलरी, आयु सीमा और आवेदन प्रक्रिया देखें
• Faridabad Police SPO Vacancy 2025 : 82 पदों पर भर्ती, जानिए पूरी प्रक्रिया
• Haryana Medical Officer Bharti 2025 : 450 पदों पर भर्ती, आवेदन प्रक्रिया, योग्यता, आयु सीमा और वेतन
• HARTRON IT Professionals Bharti 2025 : ऑनलाइन आवेदन शुरू, ये है लास्ट डेट
• Gurugram Police SPO Vacancy 2025 : 15 पदों पर आवेदन शुरू, ₹20,000 वेतन, बिना परीक्षा होगा चयन
• Sonipat Urban Cooperative Bank Vacancy 2025 : 15 पदों पर ऑफलाइन आवेदन शुरू
• HKRN Quality Engineer Vacancy 2025 : आवेदन शुरू, जाने कब तक करें आवेदन?
• HKRN Enterprises Vacancy 2025 : बिना परीक्षा सीधी भर्ती! सिर्फ 1 पद के लिए 8 नवंबर तक आवेदन करें
• ESIC Faridabad Senior Resident Vacancy 2025 : 94 पदों पर सीनियर रेजिडेंट की वैकेंसी, जाने
• Haryana HARTRON Trainers Vacancy 2025 : Apply Online, Fee ₹1000, Check Qualification & Process
• Haryana Engineering Associates Vacancy 2025 : हरियाणा में 300 नौकरी के अवसर! जाने
• Ambala Roadways Apprentice Recruitment 2025 : 36 Posts, Salary ₹7700-8050, Apply Online Now!
• HKRN First Aid Instructor Recruitment 2025 Notification Out – 48 Vacancies, Apply by October 20 @ hkrnl.itiharyana.gov.in
• Haryana Power Utilities AE Recruitment 2025 : 285 पदों के लिए ऑनलाइन आवेदन शुरू, जल्दी करें अप्लाई!
• Jind Roadways Apprentice Recruitment 2025: Apply for 30 Posts, Salary, No Exam Required
• HKRN Enterprises Vacancy 2025 : योग्यता, आयु सीमा, आवेदन प्रक्रिया व अन्य जानकारी
• HPSC Executive Officer Recruitment 2025 : 18 सितंबर तक ऐसे करें आवेदन प्रक्रिया!
• Panchkula NHM Recruitment 2025: Apply Offline for Medical Officer, Counselor & Data Manager
• Chandigarh NITTTR Non Teaching Recruitment 2025 : जाने आवेदन प्रक्रिया, योग्यताएं, आवेदन शुल्क और सिलेबस
• HKRN Enterprises Vacancy 2025 : 5 सितंबर तक आवेदन प्रक्रिया चलेगी, यहां पर पूरी जानकारी
• ESIC Teaching Faculty Recruitment 2025 : 47 पदों की वैकेंसी, जाने क्या है पूरी जानकारी?
• ECHS Hisar Recruitment 2025 : 30 अगस्त तक करें आवेदन प्रक्रिया, जाने कैसे?
• HKRN Recruitment 2025 : युवाओं के लिए बड़ा मौका, फिक्स वेतन ₹16,000 – आवेदन शुरू!
• HPSC AEE Recruitment 2025 : सुनहरा मौका! 10 सितम्बर से पहले करें आवेदन – सिलेबस, एग्जाम पैटर्न और डायरेक्ट लिंक यहाँ!
• PGIMER Group B and C Recruitment 2025 : 114 पदों पर स्थायी नौकरी का मौका! जाने कैसे?
• NIT Kurukshetra Non-Teaching Recruitment 2025 – 46 पदों पर आवेदन शुरू
• HPSC Assistant Engineer Recruitment 2025 : Last Date 1 Sept – Syllabus, Exam Pattern & Apply Link
• HARTRON DEO Recruitment 2025 : हरियाणा में 130 डाटा एंट्री ऑपरेटर पदों पर भर्ती शुरू, अभी करें आवेदन
• Haryana Cotton Anudan Yojana : हरियाणा कपास अनुदान योजना 2025, यहां पर है पूरी जानकारी
• Nuh Court Clerk Recruitment 2025 – Apply Offline for 20 Clerk Posts
• SSA Chandigarh TGT Recruitment 2025 : 104 पदों वैकेंसी, आवेदन शुल्क, सिलेबस, योग्यताएं और आयु सीमा
• HPSC ADO Recruitment 2025 : 785 पदों पर बंपर भर्ती, ऐसे करें आवेदन
• HKRN Superintendent Recruitment 2025 : ₹35,000 महीना पाने का सुनहरा मौका, जाने कैसे करें आवेदन?
• HKRN Recruitment 2025 : आवेदन कैसे करें, योग्यता, चयन प्रक्रिया, सिलेबस और अन्य डिटेल्स`;

async function main() {
  const lines = rawData.split('•').map(line => line.trim()).filter(line => line.length > 5);
  
  const postsToInsert = lines.map((line, idx) => {
    // Generate a clean slug
    let englishSlugPart = line.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '').substring(0, 60);
    if(englishSlugPart.length < 5) englishSlugPart = `haryana-job-${idx}`;
    
    // Auto-detect official URL based on keywords
    let url = "https://haryana.gov.in/";
    if (line.includes("HKRN")) url = "https://hkrnl.itiharyana.gov.in/";
    else if (line.includes("HPSC")) url = "http://hpsc.gov.in/";
    else if (line.includes("HSSC")) url = "https://hssc.gov.in/";
    else if (line.includes("PGIMER") || line.includes("PGI")) url = "https://pgimer.edu.in/";
    else if (line.includes("Court")) url = "https://highcourtchd.gov.in/";
    else if (line.includes("ESIC")) url = "https://www.esic.gov.in/";
    else if (line.includes("HARTRON") || line.includes("Hartron")) url = "https://hartron.org.in/";
    else if (line.includes("Chandigarh") || line.includes("CHIAL")) url = "https://chandigarh.gov.in/";
    
    // Auto-detect category
    let category = "JOB";
    if (line.toLowerCase().includes("yojana") || line.includes("योजना")) category = "YOJANA";
    if (line.toLowerCase().includes("result")) category = "RESULT";
    if (line.toLowerCase().includes("admit card")) category = "ADMIT_CARD";

    return {
      title: line.substring(0, 150),
      slug: englishSlugPart + "-" + Math.floor(Math.random() * 10000), // ensure uniqueness
      category: category,
      shortDescription: line.substring(0, 190),
      content: `<p><strong>${line}</strong></p><p>हरियाणा सरकार और सम्बंधित विभाग द्वारा नई भर्ती/योजना का नोटिफिकेशन जारी किया गया है। सभी योग्य उम्मीदवार अंतिम तिथि से पहले आधिकारिक वेबसाइट के माध्यम से आवेदन कर सकते हैं।</p><h3>महत्वपूर्ण जानकारी</h3><ul><li><strong>पदों की संख्या:</strong> नोटिफिकेशन देखें</li><li><strong>आयु सीमा:</strong> नियमानुसार</li><li><strong>आवेदन की विधि:</strong> ऑनलाइन / ऑफलाइन (आधिकारिक लिंक चेक करें)</li></ul><p>विस्तृत जानकारी, सिलेबस, और आवेदन प्रक्रिया के लिए आधिकारिक नोटिफिकेशन पढ़ें।</p>`,
      officialSourceUrl: url,
      published: true
    };
  });

  const result = await prisma.post.createMany({
    data: postsToInsert,
    skipDuplicates: true,
  });

  console.log(`Successfully inserted ${result.count} Haryana jobs.`);
}

main().finally(() => prisma.$disconnect());
