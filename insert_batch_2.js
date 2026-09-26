const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const newPosts = [
    {
      title: "PM SVANidhi Yojana 2026: रेहड़ी-पटरी (ठेला) वालों को बिना गारंटी 10 से 50 हज़ार का लोन",
      slug: "pm-svanidhi-yojana-10000-loan-online-apply",
      category: "YOJANA",
      shortDescription: "पीएम स्वनिधि योजना के तहत रेहड़ी, पटरी, और ठेला लगाने वाले छोटे व्यापारियों को बिना किसी गारंटी के 10 हज़ार से 50 हज़ार रुपये तक का लोन मिल रहा है। आज ही ऑनलाइन अप्लाई करें।",
      content: "<p>सड़क किनारे दुकान या ठेला लगाने वालों को आर्थिक मदद देने के लिए भारत सरकार ने <strong>पीएम स्वनिधि योजना (PM SVANidhi)</strong> की शुरुआत की है।</p><h2>योजना के लाभ (Benefits)</h2><ul><li>बिना किसी गारंटी (Collateral free) के लोन।</li><li>पहली बार में ₹10,000, समय पर चुकाने पर दूसरी बार ₹20,000 और तीसरी बार ₹50,000 का लोन।</li><li>डिजिटल पेमेंट करने पर सालाना ₹1,200 तक का कैशबैक।</li><li>लोन पर 7% की ब्याज सब्सिडी (सीधे खाते में)।</li></ul><h2>अप्लाई कैसे करें?</h2><p>आधिकारिक वेबसाइट <strong>pmsvanidhi.mohua.gov.in</strong> पर जाएं या अपने नजदीकी सीएससी (CSC) सेंटर या बैंक शाखा में जाकर आवेदन करें।</p>",
      published: true
    },
    {
      title: "eGramSwaraj: सरपंच, प्रधान या मुखिया ने गाँव में कितना पैसा खर्च किया? ऐसे चेक करें",
      slug: "egramswaraj-panchayat-fund-work-details-check",
      category: "SARKARI_KAAM",
      shortDescription: "क्या आप जानना चाहते हैं कि आपके गाँव के विकास के लिए कितना पैसा आया और सरपंच/प्रधान ने कहाँ खर्च किया? eGramSwaraj पोर्टल से मोबाइल पर पूरी रिपोर्ट निकालें।",
      content: "<p>अब कोई भी आम नागरिक यह जान सकता है कि उसके गाँव या पंचायत में सरकार द्वारा कितना फंड भेजा गया है और वह फंड किन-किन कामों में खर्च हुआ है।</p><h2>ऑनलाइन चेक करने का तरीका</h2><ol><li>भारत सरकार के आधिकारिक पोर्टल <strong>egramswaraj.gov.in</strong> पर जाएं।</li><li>नीचे स्क्रॉल करके 'Reports' सेक्शन में 'Planning' या 'Accounting' पर क्लिक करें।</li><li>अपना राज्य (State), जिला पंचायत, ब्लॉक और ग्राम पंचायत चुनें।</li><li>वर्ष (Financial Year) चुनें और 'Get Report' पर क्लिक करें।</li></ol><p>अब आपके सामने पूरी लिस्ट आ जाएगी कि किस सड़क, नाली या योजना के लिए कितना पैसा पास हुआ है।</p>",
      published: true
    },
    {
      title: "PM Kisan Tractor Yojana 2026: नया ट्रैक्टर खरीदने पर किसानों को 50% तक की भारी सब्सिडी",
      slug: "pm-kisan-tractor-yojana-subsidy-online-apply",
      category: "YOJANA",
      shortDescription: "पीएम किसान ट्रैक्टर योजना के तहत कृषि यंत्रों और नए ट्रैक्टर की खरीद पर सरकार दे रही है 20% से 50% तक की भारी सब्सिडी (छूट)। योग्यता और आवेदन प्रक्रिया जानें।",
      content: "<p>किसानों की आय दोगुनी करने और खेती को आधुनिक बनाने के लिए केंद्र व राज्य सरकारें मिलकर <strong>प्रधानमंत्री किसान ट्रैक्टर योजना</strong> चला रही हैं।</p><h2>योजना की विशेषताएं</h2><ul><li>किसानों को नया ट्रैक्टर खरीदने पर 20% से 50% तक की सब्सिडी मिलती है। (सब्सिडी की दर अलग-अलग राज्यों में अलग हो सकती है)।</li><li>सब्सिडी की राशि सीधे किसान के बैंक खाते (DBT) में भेजी जाती है।</li></ul><h2>ज़रूरी दस्तावेज़ (Documents Required)</h2><ul><li>आधार कार्ड</li><li>जमीन के कागज़ (खसरा-खतौनी)</li><li>बैंक पासबुक (आधार से लिंक)</li><li>पासपोर्ट साइज फोटो</li></ul><h2>आवेदन प्रक्रिया</h2><p>इस योजना का लाभ राज्य सरकार के कृषि विभाग द्वारा दिया जाता है। आप अपने राज्य के 'पारदर्शी किसान सेवा पोर्टल' (Direct Benefit Transfer in Agriculture) पर जाकर ऑनलाइन पंजीकरण कर सकते हैं या नज़दीकी कृषि कार्यालय से संपर्क कर सकते हैं।</p>",
      published: true
    },
    {
      title: "All Bank Balance Check Missed Call Number List 2026 (SBI, PNB, BOI, HDFC)",
      slug: "all-bank-balance-check-missed-call-number-list",
      category: "SARKARI_KAAM",
      shortDescription: "बिना इंटरनेट और बिना बैंक जाए सिर्फ एक मिस्ड कॉल (Missed Call) या SMS से अपने बैंक खाते का बैलेंस चेक करें। सभी प्रमुख बैंकों के नंबर यहाँ देखें।",
      content: "<p>अब आपको अपना बैंक बैलेंस चेक करने के लिए पासबुक प्रिंट कराने या ATM जाने की ज़रूरत नहीं है। आप अपने रजिस्टर्ड मोबाइल नंबर से सिर्फ एक मिस्ड कॉल देकर बैलेंस जान सकते हैं।</p><h2>प्रमुख बैंकों के मिस्ड कॉल नंबर</h2><ul><li><strong>SBI (State Bank of India):</strong> 09223766666</li><li><strong>PNB (Punjab National Bank):</strong> 1800-180-2223</li><li><strong>Bank of Baroda (BOB):</strong> 8468001111</li><li><strong>HDFC Bank:</strong> 1800-270-3333</li><li><strong>ICICI Bank:</strong> 9594612612</li><li><strong>Bank of India (BOI):</strong> 09015135135</li><li><strong>Union Bank of India:</strong> 09223008586</li></ul><p><em>नोट: मिस्ड कॉल उसी नंबर से दें जो आपके बैंक खाते से लिंक (Registered) है।</em></p>",
      published: true
    },
    {
      title: "UP Panchayat Chunav Voter List 2026 PDF Download (ग्राम पंचायत मतदाता सूची)",
      slug: "up-panchayat-chunav-voter-list-pdf-download",
      category: "SARKARI_KAAM",
      shortDescription: "यूपी ग्राम पंचायत चुनाव 2026 के लिए नई वोटर लिस्ट (मतदाता सूची) जारी। यहाँ से अपने गाँव की वोटर लिस्ट की PDF फाइल मोबाइल में डाउनलोड करें और अपना नाम चेक करें।",
      content: "<p>उत्तर प्रदेश राज्य निर्वाचन आयोग (SEC UP) ने आगामी ग्राम पंचायत चुनावों के लिए नई वोटर लिस्ट (Draft / Final Roll) जारी कर दी है।</p><h2>अपने गाँव की लिस्ट कैसे डाउनलोड करें?</h2><ol><li>राज्य निर्वाचन आयोग की वेबसाइट <strong>sec.up.nic.in</strong> पर जाएं।</li><li>'Elections' टैब में जाकर 'Panchayat Voter Search' या 'Download Voter List' विकल्प चुनें।</li><li>अपना जिला (District), ब्लॉक (Block) और ग्राम पंचायत (Gram Panchayat) का नाम सेलेक्ट करें।</li><li>कैप्चा कोड डालें और 'Submit' पर क्लिक करें।</li></ol><p>इसके बाद आपके सामने पूरे गाँव की पीडीएफ लिस्ट खुल जाएगी, जिसमें आप देख सकते हैं कि आपका या आपके परिवार का नाम लिस्ट में है या कट गया है।</p>",
      published: true
    },
    {
      title: "Passport Seva 2026: नया पासपोर्ट बनवाने के लिए ऑनलाइन आवेदन (Online Apply) कैसे करें?",
      slug: "passport-seva-online-apply-registration-process",
      category: "SARKARI_KAAM",
      shortDescription: "नया पासपोर्ट बनवाने का सबसे आसान तरीका! Passport Seva पोर्टल पर रजिस्ट्रेशन से लेकर अपॉइंटमेंट बुक करने तक की पूरी ऑनलाइन प्रक्रिया स्टेप-बाय-स्टेप जानें।",
      content: "<p>अगर आप विदेश यात्रा करना चाहते हैं, तो पासपोर्ट सबसे अहम दस्तावेज़ है। अब आप बिना किसी एजेंट के घर बैठे नया पासपोर्ट अप्लाई कर सकते हैं।</p><h2>ऑनलाइन आवेदन प्रक्रिया (Step-by-Step)</h2><ol><li>आधिकारिक वेबसाइट <strong>passportindia.gov.in</strong> पर जाएं।</li><li>'New User Registration' पर क्लिक करके अपना अकाउंट बनाएं।</li><li>लॉगिन करने के बाद 'Apply for Fresh Passport' पर क्लिक करें।</li><li>ऑनलाइन फॉर्म (Form 1) भरें, जिसमें आपकी पर्सनल और फैमिली डिटेल्स होंगी।</li><li>फॉर्म सबमिट करने के बाद 'Pay and Schedule Appointment' पर जाकर फीस (₹1500 सामान्य के लिए) जमा करें।</li><li>अपने नज़दीकी Passport Seva Kendra (PSK) या पोस्ट ऑफिस (POPSK) के लिए अपॉइंटमेंट बुक करें।</li></ol><p>तय तारीख पर अपने असली दस्तावेज़ (आधार, पैन, 10वीं की मार्कशीट) लेकर पासपोर्ट ऑफिस जाएं। वेरिफिकेशन के बाद पुलिस वेरिफिकेशन होगा और आपका पासपोर्ट डाक द्वारा घर आ जाएगा।</p>",
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
