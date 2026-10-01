const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const newPosts = [
    {
      title: "PM Mudra Loan Yojana 2026: खुद का बिज़नेस शुरू करने के लिए 10 लाख तक का लोन",
      slug: "pm-mudra-loan-yojana-10-lakh-business-apply",
      category: "YOJANA",
      shortDescription: "प्रधानमंत्री मुद्रा योजना (PMMY) के तहत अपना व्यवसाय शुरू करने या बढ़ाने के लिए बिना गारंटी 50 हज़ार से 10 लाख रुपये तक का लोन (Mudra Loan) पाएं।",
      content: "<p>छोटे व्यापारियों और नए उद्यमियों को आर्थिक मदद देने के लिए सरकार <strong>प्रधानमंत्री मुद्रा योजना (PMMY)</strong> चला रही है। इसमें तीन कैटेगरी में लोन मिलता है:</p><h2>मुद्रा लोन के प्रकार</h2><ul><li><strong>शिशु लोन (Shishu):</strong> ₹50,000 तक का लोन (नए काम के लिए)।</li><li><strong>किशोर लोन (Kishor):</strong> ₹50,000 से ₹5 लाख तक का लोन।</li><li><strong>तरुण लोन (Tarun):</strong> ₹5 लाख से ₹10 लाख तक का लोन (बिज़नेस बढ़ाने के लिए)।</li></ul><h2>आवेदन कैसे करें?</h2><p>आप किसी भी सरकारी बैंक, प्राइवेट बैंक, ग्रामीण बैंक या जन स्मॉल फाइनेंस बैंक में जाकर 'मुद्रा लोन' का फॉर्म भर सकते हैं। ऑनलाइन अप्लाई के लिए आप <strong>Udyamimitra</strong> या <strong>JanSamarth</strong> पोर्टल का उपयोग कर सकते हैं।</p>",
      officialSourceUrl: "https://www.mudra.org.in/",
      published: true
    },
    {
      title: "NREGA Job Card List 2026: मनरेगा की नई लिस्ट जारी, ऐसे चेक करें अपनी हाज़िरी और पैसा",
      slug: "nrega-job-card-list-2026-attendance-payment-check",
      category: "SARKARI_KAAM",
      shortDescription: "नरेगा (MGNREGA) जॉब कार्ड की नई लिस्ट 2026 जारी हो गई है। घर बैठे मोबाइल से अपनी हाज़िरी (Attendance), मस्टर रोल और बैंक खाते में आया पैसा चेक करें।",
      content: "<p>महात्मा गांधी राष्ट्रीय ग्रामीण रोज़गार गारंटी अधिनियम (मनरेगा) के तहत काम करने वाले मज़दूर अब आसानी से अपना सारा हिसाब ऑनलाइन देख सकते हैं।</p><h2>नरेगा का पैसा और लिस्ट कैसे चेक करें?</h2><ol><li>नरेगा की आधिकारिक वेबसाइट <strong>nrega.nic.in</strong> पर जाएं।</li><li>'Job Cards' वाले ऑप्शन पर क्लिक करें।</li><li>अपना राज्य, वित्तीय वर्ष (2025-2026), जिला, ब्लॉक और पंचायत चुनें।</li><li>अब आपके गाँव के सभी जॉब कार्ड धारकों की लिस्ट खुल जाएगी।</li><li>अपने नाम या जॉब कार्ड नंबर पर क्लिक करके आप देख सकते हैं कि आपने कितने दिन काम किया और कितना पैसा आपके खाते में आया है।</li></ol>",
      officialSourceUrl: "https://nrega.nic.in/",
      published: true
    },
    {
      title: "PM Fasal Bima Yojana (PMFBY): फसल बर्बाद होने पर सरकार देगी भारी मुआवज़ा",
      slug: "pm-fasal-bima-yojana-pmfby-crop-insurance-apply",
      category: "YOJANA",
      shortDescription: "प्रधानमंत्री फसल बीमा योजना के तहत सूखा, बाढ़, या ओलावृष्टि से फसल बर्बाद होने पर किसानों को नुकसान की भरपाई (Claim) दी जाती है। ऑनलाइन आवेदन शुरू।",
      content: "<p>किसानों को प्राकृतिक आपदाओं (बाढ़, सूखा, ओले आदि) से होने वाले नुकसान से बचाने के लिए <strong>प्रधानमंत्री फसल बीमा योजना (PMFBY)</strong> चलाई जा रही है।</p><h2>योजना के लाभ (Benefits)</h2><ul><li>खरीफ फसलों (Kharif) के लिए सिर्फ 2% प्रीमियम।</li><li>रबी फसलों (Rabi) के लिए सिर्फ 1.5% प्रीमियम।</li><li>व्यावसायिक/बागवानी फसलों के लिए 5% प्रीमियम।</li><li>बाकी का पूरा प्रीमियम केंद्र और राज्य सरकार मिलकर भरती है।</li></ul><h2>क्लेम कैसे करें?</h2><p>फसल नुकसान होने के 72 घंटे के अंदर 'Crop Insurance App' या टोल-फ्री नंबर पर सूचना देना अनिवार्य है। आप अपने नज़दीकी सीएससी (CSC) या <strong>pmfby.gov.in</strong> पोर्टल से नया बीमा भी करवा सकते हैं।</p>",
      officialSourceUrl: "https://pmfby.gov.in/",
      published: true
    },
    {
      title: "Kanya Sumangala Yojana 2026: बेटियों को जन्म से लेकर पढ़ाई तक मिलेंगे ₹25,000",
      slug: "mukhyamantri-kanya-sumangala-yojana-25000-apply",
      category: "YOJANA",
      shortDescription: "मुख्यमंत्री कन्या सुमंगला योजना के तहत बेटियों के जन्म, टीकाकरण और पढ़ाई (कक्षा 1, 6, 9 और ग्रेजुएशन) के लिए सरकार 25,000 रुपये सीधे बैंक में भेज रही है।",
      content: "<p>बेटियों के उज्जवल भविष्य और शिक्षा को बढ़ावा देने के लिए यूपी सरकार ने <strong>मुख्यमंत्री कन्या सुमंगला योजना</strong> की राशि बढ़ाकर ₹25,000 कर दी है।</p><h2>कब और कितना पैसा मिलता है?</h2><ul><li><strong>जन्म होने पर:</strong> ₹5,000</li><li><strong>1 साल का टीकाकरण पूरा होने पर:</strong> ₹2,000</li><li><strong>कक्षा 1 में एडमिशन पर:</strong> ₹3,000</li><li><strong>कक्षा 6 में एडमिशन पर:</strong> ₹3,000</li><li><strong>कक्षा 9 में एडमिशन पर:</strong> ₹5,000</li><li><strong>12वीं पास कर ग्रेजुएशन/डिप्लोमा में जाने पर:</strong> ₹7,000</li></ul><h2>आवश्यक दस्तावेज़ (Documents)</h2><p>माता-पिता का आधार कार्ड, बेटी का जन्म प्रमाण पत्र, बैंक पासबुक और परिवार का आय प्रमाण पत्र (सालाना आय 3 लाख से कम होनी चाहिए)।</p>",
      officialSourceUrl: "https://mksy.up.gov.in/",
      published: true
    },
    {
      title: "RTE Admission 2026: बड़े प्राइवेट स्कूलों में बच्चों का फ्री एडमिशन (RTE Act 25%)",
      slug: "rte-admission-2026-free-private-school-form",
      category: "SARKARI_KAAM",
      shortDescription: "Right to Education (RTE) के तहत गरीब बच्चों को शहर के बड़े और महंगे प्राइवेट स्कूलों में 25% कोटे के तहत कक्षा 1 से 8 तक बिल्कुल फ्री एडमिशन मिलता है।",
      content: "<p>शिक्षा के अधिकार (RTE - Right to Education) कानून के तहत हर प्राइवेट स्कूल को अपनी 25% सीटें गरीब (BPL/EWS) बच्चों के लिए रिज़र्व करनी होती हैं। इसमें बच्चों की 8वीं तक की पढ़ाई का पूरा खर्च सरकार उठाती है।</p><h2>कौन आवेदन कर सकता है?</h2><ul><li>जिनकी वार्षिक पारिवारिक आय 1 लाख (कई राज्यों में 2.5 लाख) से कम हो।</li><li>SC, ST, अनाथ, या दिव्यांग बच्चे।</li><li>बच्चे की उम्र 3 से 7 वर्ष के बीच होनी चाहिए (कक्षा के अनुसार)।</li></ul><h2>आवेदन प्रक्रिया</h2><p>हर राज्य का अपना RTE पोर्टल होता है (जैसे यूपी के लिए rte25.upsdc.gov.in, राजस्थान के लिए rajpsp.nic.in)। फॉर्म निकलते ही आप अपने पसंदीदा 10 प्राइवेट स्कूलों का चयन कर सकते हैं। इसके बाद लॉटरी (Lottery System) के ज़रिये एडमिशन दिया जाता है।</p>",
      officialSourceUrl: "https://rte25.upsdc.gov.in/",
      published: true
    },
    {
      title: "Post Office MIS Scheme: एक बार पैसा जमा करें और हर महीने 9 हज़ार रुपये पेंशन पाएं",
      slug: "post-office-monthly-income-scheme-mis-interest-rate",
      category: "SARKARI_KAAM",
      shortDescription: "पोस्ट ऑफिस की Monthly Income Scheme (POMIS) में एकमुश्त निवेश करें और हर महीने फिक्सड इनकम (पेंशन की तरह) प्राप्त करें। ब्याज दर और फायदे जानें।",
      content: "<p>अगर आप अपनी जमा पूंजी को सुरक्षित रखना चाहते हैं और हर महीने एक रेगुलर इनकम भी चाहते हैं, तो <strong>Post Office Monthly Income Scheme (MIS)</strong> सबसे बेहतरीन विकल्प है।</p><h2>योजना की ख़ास बातें</h2><ul><li><strong>निवेश की सीमा:</strong> सिंगल अकाउंट में अधिकतम 9 लाख और जॉइंट अकाउंट (पति-पत्नी) में 15 लाख रुपये जमा कर सकते हैं।</li><li><strong>ब्याज दर (Interest Rate):</strong> सरकार हर 3 महीने में ब्याज तय करती है (वर्तमान में लगभग 7.4% सालाना)।</li><li><strong>मंथली इनकम:</strong> अगर आप 15 लाख निवेश करते हैं, तो आपको हर महीने लगभग ₹9,250 की गारंटीड इनकम मिलेगी।</li><li><strong>मेच्योरिटी (Maturity):</strong> 5 साल बाद आपका पूरा मूलधन (Principal Amount) भी वापस मिल जाएगा।</li></ul><h2>कैसे खुलवाएं खाता?</h2><p>आप अपने नज़दीकी किसी भी डाकघर (Post Office) में जाकर आधार और पैन कार्ड की कॉपी देकर यह खाता खुलवा सकते हैं।</p>",
      officialSourceUrl: "https://www.indiapost.gov.in/",
      published: true
    }
  ];

  for (let post of newPosts) {
    const exists = await prisma.post.findUnique({ where: { slug: post.slug } });
    if (!exists) {
      await prisma.post.create({ data: post });
      console.log(`Created: ${post.title}`);
    } else {
      console.log(`Exists: ${post.title}`);
    }
  }
}
main().finally(() => prisma.$disconnect());
