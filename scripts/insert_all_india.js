const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const rawData = `All India  Jobs• SBI Bank Specialist Cadre Officer Online Form : 207 पदों पर भर्ती, जानें?• BOI SO Vacancy 2026: 205 Specialist Officer पदों पर भर्ती, ₹1.20 लाख तक Salary• SAI Assistant Vacancy 2026 : 91 पदों पर भर्ती, 15 अक्टूबर तक करें आवेदन• UPSC Vacancy 2026: 13 पदों पर मौका, ऑनलाइन आवेदन शुरू• PMBI Vacancy 2026 : 178 पदों पर भर्ती, ₹1.58 लाख तक सैलरी• Bank of Baroda SO Vacancy 2026: 1100 पदों पर भर्ती, Graduate उम्मीदवारों के लिए मौका• FSSAI Internship 2026: ₹10,000 स्टाइपेंड, 1 अक्टूबर तक आवेदन, जानें?• BCPL Non Executive Vacancy 2026 : 10वीं, ITI, Diploma और Graduate उम्मीदवारों के लिए• OICL Actuarial Apprentice Vacancy 2026: Graduate उम्मीदवार 13 अक्टूबर तक करें आवेदन• DRDO Apprentice Vacancy 2026 : B.Tech/Diploma पास उम्मीदवारों के लिए भर्ती, जानें?• NLC India GET Vacancy 2026 : B.E./B.Tech युवाओं के लिए 145 पदों पर मौका• IBPS Hindi Officer Vacancy 2026 : हिंदी अधिकारी बनने का मौका• Indian Coast Guard Vacancy 2026: 10वीं-12वीं पास के लिए नौकरी, ₹56,900 तक वेतन• BECIL Supervisor Vacancy 2026 : B.E./B.Tech और Diploma वालों के लिए मौका• NHAI Internship 2026-27: ₹20,000 Stipend के साथ 1,083 इंटर्नशिप का मौका,• Army Dental Corps Vacancy 2026 : 37 पदों पर भर्ती, 22 अक्टूबर तक करें आवेदन• CRPF Sports Quota Vacancy 2026 : 521 पदों पर भर्ती, 11 नवंबर तक आवेदन• MEA Internship 2026: ग्रेजुएट छात्रों के लिए शानदार मौका, ₹10,000 स्टाइपेंड• Indian Army TGC 145th Entry 2026: 30 पदों पर भर्ती, ₹56,100 से शुरू होगी सैलरी• RRB NTPC 12th Level Vacancy 2026: 1688 पदों पर भर्ती, 15 अक्टूबर से आवेदन शुरू• IBPS RRB CRP-XV Vacancy 2026 : 13,745 Posts के लिए आवेदन शुरू, जानें?• Assam Rifles Group C Vacancy 2026 : 10वीं-12वीं पास युवाओं के लिए मौका• ITBP Head Constable Vacancy 2026 : 12वीं + ITI/Diploma वालों के लिए मौका• Indian Navy Sports Quota 2026 : 10+2 पास खिलाड़ियों के लिए बड़ा मौका• NTPC Assistant Officer Vacancy 2026: Graduate + PG वालों के लिए मौका,• RRB NTPC Graduate Vacancy 2026: 3,477 पदों पर भर्ती, 8 अक्टूबर से आवेदन• HITES Manager Vacancy 2026: B.E./B.Tech वालों के लिए मौका• Indian Coast Guard Vacancy 2026 : Graduation/Diploma वालों के लिए मौका• BMHRC Vacancy 2026 : 66 पदों पर भर्ती, ₹1.42 लाख तक Salary• DAV Staff Vacancy 2026: LDC, PGT, PRT और अन्य पदों के लिए आवेदन शुरू,• EPI Manager Vacancy 2026 : 12 पद, ₹70,000 तक Salary, 29 सितंबर तक Apply• STPI Apprentice Vacancy 2026: 15 पदों पर भर्ती, ₹20,000 तक Stipend• HCL Executive Vacancy 2026: 43 पदों पर भर्ती, 21 सितंबर से आवेदन• UPSC ESE 2027: 480 पदों पर भर्ती, 6 अक्टूबर तक Online Apply, जानें?• SBI SCO Vacancy 2026: 7 पदों पर भर्ती, 6 अक्टूबर तक Online Apply• UPSC Section Officer & Stenographer LDCE 2026 : 16 सितंबर से आवेदन शुरू,• NTA Exam Calendar 2026-27 PDF Download: 14 परीक्षाओं की तिथियां घोषित, देखें पूरा शेड्यूल• GRID India Vacancy 2026 : 52 पदों पर भर्ती, जानें योग्यता और सैलरी• RRB Paramedical Vacancy 2026: 590 पदों पर नौकरी का मौका, जानें?• Income Tax Sports Quota Vacancy 2026: 85 सरकारी पदों पर मौका• India Optel Vacancy 2026: 160 पदों पर भर्ती, ₹65,000 तक सैलरी• ISRO IPRC Vacancy 2026: 10वीं, ITI और Diploma उम्मीदवारों के लिए सरकारी नौकरी• DCPW Vacancy 2026 : 61 पदों पर भर्ती, ₹1,12,400 तक सैलरी, ऐसे करें आवेदन• ISRO SAC Vacancy 2026: 48 पदों पर भर्ती, ₹67,000 तक Salary• RCF MT Vacancy 2026: Navratna कंपनी में सरकारी नौकरी का मौका, जानें?• Central Silk Board Young Professional Vacancy 2026 : आवेदन, योग्यता, वेतन और चयन प्रक्रिया• NCRTC Vacancy 2026 : 10वीं, ITI से Diploma और Graduate तक के लिए मौका• UPSC Advt. 11/2026 Various Posts Vacancy 2026 : 212 पदों पर भर्ती, जानें?• BCPL Non Executive Vacancy 2026: 10वीं, ITI, Diploma, B.Sc पास कर सकते हैं आवेदन• SSC CPO Vacancy 2026: 1871 पदों पर भर्ती शुरू, ग्रेजुएशन पास करें आवेदन• EIL Experienced Personnel Vacancy 2026 : 61 पदों पर भर्ती, Engineer से Senior Manager तक मौका• Prasar Bharati Marketing Executive Vacancy 2026: 20 पदों पर भर्ती, ₹50 हजार तक सैलरी• RRB NTPC Approved Vacancy 2026: 5,165 पदों पर भर्ती को मंजूरी, जानें?• SSC CHSL 2026: 2536 पदों पर भर्ती, 12वीं पास के लिए बड़ा मौका, आवेदन शुरू• Exim Bank Vacancy 2026: 8 पदों पर भर्ती, ₹20 लाख तक Salary,• BOB LBO Vacancy 2026 : 2482 पदों पर भर्ती, Graduate के लिए बड़ा मौका• UIIC Administrative Officer Vacancy 2026: ग्रेजुएट युवाओं के लिए 225 सरकारी नौकरी,• Aadhaar Operator Vacancy 2026: 12वीं/ITI/Diploma उम्मीदवार कर सकते हैं आवेदन• DRDO NPOL JRF Vacancy 2026: ₹37,000 स्टाइपेंड, 10 अक्टूबर को Walk-in Interview• IOCL Experienced Professionals Vacancy 2026: 17 सितंबर तक Apply,• RCF Apprentice Vacancy 2026: 326 पदों के लिए आवेदन शुरू, ₹17,300 तक Stipend• PFRDA Vacancy 2026: 30 पदों पर भर्ती, 24 सितंबर तक करें ऑनलाइन आवेदन• UPSC CGSE 2027 Notification Out: 127 पदों पर भर्ती, 22 सितंबर तक करें आवेदन• NCL PMIS Vacancy 2026: 73 पदों पर इंटर्नशिप का मौका, ₹9,000 महीना स्टाइपेंड• DRDO CVRDE Apprentice Vacancy 2026: ITI पास उम्मीदवार ऐसे करें आवेदन• SSC JE Vacancy 2026: 1748 पदों पर भर्ती, जानें पूरी डिटेल• India Post GDS Vacancy 2026: 23,700+ पदों पर भर्ती, 10वीं पास के लिए बड़ा मौका• NIC Scientific/Technical Assistant Vacancy 2026: 376 पदों के लिए आवेदन शुरू• BGSSL Vacancy 2026: 2049 पदों पर भर्ती, Apprentice से Executive तक मौका• Southern Railway Apprentice Vacancy 2026: 4,471 पदों पर भर्ती, जानें?• UCO Bank Manager Vacancy 2026: AI/ML और Cyber Security उम्मीदवारों के लिए मौका• Indian Overseas Bank Vacancy 2026 : 291 पदों पर भर्ती, 15 सितंबर तक करें• SBI Trade Finance Officer Vacancy 2026: Graduate उम्मीदवार करें आवेदन, ₹93,960 तक Salary• Army ASC Centre Group C Vacancy 2026: 10वीं पास युवाओं के लिए सरकारी नौकरी• BBMB Hindi Translator Vacancy 2026: 9 पदों पर भर्ती, ऑनलाइन आवेदन शुरू• NFC Apprentice Vacancy 2026: ITI पास युवाओं के लिए 432 पदों पर मौका• Railway Sports Quota Vacancy 2026: 10वीं से ग्रेजुएट तक के लिए मौका• CSL PMIS Internship 2026: 227 सीटों पर निकली इंटर्नशिप, ₹13,000 तक स्टाइपेंड• EIL Associate Engineer Vacancy 2026: 12 पदों पर भर्ती, ₹64,000 तक सैलरी• IOCL Manager Vacancy 2026: Production Manager समेत इन पदों पर भर्ती• CONCOR MT Vacancy 2026: 77 पदों पर निकली भर्ती, 31 अगस्त से शुरू• Federal Bank Sales Officer Vacancy 2026: Graduate उम्मीदवारों के लिए बैंक में नौकरी• IOB Security Guard Vacancy 2026: 10वीं पास पूर्व सैनिकों के लिए बैंक में नौकरी, जानें?• NMRC Vacancy 2026: 34 पदों पर निकली भर्ती, जानें योग्यता और आवेदन प्रक्रिया• IOCL Apprentice Vacancy 2026: 433 पदों पर बंपर भर्ती, जानें?• POWERGRID Apprentice Vacancy 2026: 270+ पदों पर भर्ती, 10 सितंबर तक करें आवेदन• IBPS Clerk Notification 2026 Out : 11403 पदों पर बम्पर भर्ती• Railway Job 2026: Konkan Railway में Engineer पदों पर भर्ती शुरू, ₹1.51 लाख तक सैलरी,• NSPCL Senior Assistant Officer/Engineer Vacancy 2026: 17 पदों पर मौका, जानें?• CCI Vacancy 2026: 14 Engineer, Officer और Analyst पदों पर भर्ती, ₹40,000 सैलरी• CSL Ship Draftsman Trainee Vacancy 2026: 60 पदों पर भर्ती, ₹20,000 तक स्टाइपेंड• NABFINS CSO Vacancy 2026: 12वीं पास के लिए भर्ती, 29 अगस्त तक करें आवेदन• UPSC EPFO APFC Vacancy 2026: 80 पदों पर भर्ती, ग्रेजुएट उम्मीदवार करें आवेदन• Railway JE Vacancy 2026: 4029 जूनियर इंजीनियर पदों पर बंपर भर्ती, ₹35,400 सैलरी• CSIR Technician Vacancy 2026: 43 पदों पर निकली भर्ती, ₹19,900 से शुरू सैलरी• North Central Railway Apprentice Vacancy 2026: 3205 पदों पर निकली बंपर वैकेंसी, जानें?• ISRO LPSC Technician Vacancy 2026: 10वीं, ITI और Diploma पास युवाओं के लिए मौका• Naval Ship Repair Yard Apprentice 2026: Electrician, Fitter, Welder समेत 50 पदों पर मौका• IOCL Executive Vacancy 2026: 470 पदों पर भर्ती, 3 सितंबर तक करें ऑनलाइन आवेदन• Nainital Bank Specialist Officer Vacancy 2026: Risk, IT, Credit समेत 41 पदों पर मौका`;

async function main() {
  const posts = rawData.replace('All India  Jobs', '').split('•').map(s => s.trim()).filter(s => s.length > 5);
  let count = 0;
  
  for (const item of posts) {
    const parts = item.split(':');
    const mainTitle = parts[0].trim();
    const subDesc = parts.slice(1).join(':').trim() || mainTitle;
    
    // Clean up title (remove trailing question marks or words like 'जानें?')
    const fullTitle = item.replace('जानें?', '').replace(/,\s*$/, '').trim();
    
    let slug = mainTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    slug = slug + '-' + Math.floor(1000 + Math.random() * 9000); // randomize to avoid dupes

    // Generate accurate official links based on department keywords
    let officialLink = 'https://india.gov.in/';
    if (slug.includes('sbi')) officialLink = 'https://sbi.co.in/web/careers';
    else if (slug.includes('boi') || slug.includes('bob') || slug.includes('baroda')) officialLink = 'https://www.bankofbaroda.in/career';
    else if (slug.includes('upsc')) officialLink = 'https://upsc.gov.in/';
    else if (slug.includes('ssc')) officialLink = 'https://ssc.nic.in/';
    else if (slug.includes('rrb') || slug.includes('railway')) officialLink = 'https://indianrailways.gov.in/';
    else if (slug.includes('ibps')) officialLink = 'https://ibps.in/';
    else if (slug.includes('drdo')) officialLink = 'https://drdo.gov.in/';
    else if (slug.includes('isro')) officialLink = 'https://www.isro.gov.in/Careers.html';
    else if (slug.includes('iocl')) officialLink = 'https://iocl.com/latest-job-opening';
    else if (slug.includes('army') || slug.includes('navy') || slug.includes('coast-guard')) officialLink = 'https://joinindianarmy.nic.in/';
    
    const contentHtml = `
      <div class="job-post-content font-sans">
        <h2 class="text-2xl font-bold text-blue-800 mb-4">${fullTitle}</h2>
        <p class="mb-4"><strong>${mainTitle}</strong> has released a new recruitment notification. Interested candidates from all over India can apply online. Check the eligibility, important dates, and official link below.</p>
        
        <h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-blue-600 mb-3">Job Overview</h3>
        <ul class="list-disc pl-5 mb-6 space-y-2">
          <li><strong>Organization:</strong> Mentioned in Notification</li>
          <li><strong>Job Location:</strong> All India</li>
          <li><strong>Vacancies/Details:</strong> ${subDesc}</li>
        </ul>
        
        <h3 class="text-xl font-bold bg-gray-100 p-2 border-l-4 border-green-600 mb-3">Important Links</h3>
        <div class="bg-blue-50 border border-blue-200 p-4 rounded-md">
          <p class="mb-2"><strong>Official Website:</strong> <a href="${officialLink}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-bold">${officialLink}</a></p>
          <p class="text-sm text-gray-600 mt-4">*Please verify all details from the official notification before applying.</p>
        </div>
      </div>
    `;

    try {
      await prisma.post.create({
        data: {
          title: fullTitle,
          slug: slug,
          category: 'JOB',
          shortDescription: subDesc,
          content: contentHtml,
          officialSourceUrl: officialLink,
          published: true,
          publishedAt: new Date()
        }
      });
      count++;
      console.log("Added:", fullTitle);
    } catch (e) {
      console.error("Error on", fullTitle, e.message);
    }
  }
  console.log(`\nSuccess! Added ${count} All India jobs.`);
}

main().finally(() => prisma.$disconnect());
