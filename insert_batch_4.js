const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const newPosts = [
    {
      title: "BPSC TRE 4 Vacancy 2026 : 32,388 शिक्षक पदों पर होगी बंपर भर्ती",
      slug: "bpsc-tre-4-vacancy-2026-apply-online",
      category: "JOB",
      shortDescription: "बिहार लोक सेवा आयोग (BPSC) ने TRE 4.0 के तहत 32,388 शिक्षक पदों पर भर्ती का विज्ञापन जारी किया है। B.Ed / D.El.Ed पास उम्मीदवार ऑनलाइन आवेदन करें।",
      content: "<p>BPSC द्वारा 32,388 शिक्षक पदों पर सीधी भर्ती के लिए नोटिफिकेशन जारी कर दिया गया है।</p><h2>महत्वपूर्ण तिथियाँ</h2><ul><li>आवेदन शुरू: (अधिसूचना के अनुसार)</li><li>अंतिम तिथि: जल्द अपडेट होगी</li></ul><h2>योग्यता</h2><p>CTET / STET पास और B.Ed / D.El.Ed धारक उम्मीदवार इसके लिए पात्र हैं।</p>",
      officialSourceUrl: "https://bpsc.bih.nic.in/",
      published: true
    },
    {
      title: "Rajasthan Safai Karmachari Bharti 2026: 24,752 पदों पर बंपर भर्ती",
      slug: "rajasthan-safai-karmachari-bharti-2026",
      category: "JOB",
      shortDescription: "राजस्थान सरकार ने सफाई कर्मचारियों के 24,752 पदों पर सीधी भर्ती का नोटिफिकेशन जारी किया है। बिना परीक्षा सिर्फ इंटरव्यू से नौकरी पाने का शानदार मौका।",
      content: "<p>स्वायत्त शासन विभाग, राजस्थान ने सफाई कर्मचारी भर्ती 2026 के लिए 24,752 पदों पर आवेदन आमंत्रित किए हैं।</p><h2>भर्ती विवरण</h2><ul><li><strong>कुल पद:</strong> 24,752</li><li><strong>आयु सीमा:</strong> 18 से 40 वर्ष</li><li><strong>चयन प्रक्रिया:</strong> लॉटरी/इंटरव्यू/प्रैक्टिकल टेस्ट के आधार पर</li></ul><h2>आवेदन कैसे करें</h2><p>इच्छुक उम्मीदवार SSO Rajasthan पोर्टल के माध्यम से ऑनलाइन आवेदन भर सकते हैं। 1 साल का सफाई कार्य का अनुभव प्रमाण पत्र अनिवार्य है।</p>",
      officialSourceUrl: "https://sso.rajasthan.gov.in/",
      published: true
    },
    {
      title: "Bank of Baroda SO Vacancy 2026: 1100 पदों पर भर्ती, Graduate उम्मीदवारों के लिए मौका",
      slug: "bank-of-baroda-so-vacancy-2026-apply",
      category: "JOB",
      shortDescription: "बैंक ऑफ बड़ौदा (Bank of Baroda) ने स्पेशलिस्ट ऑफिसर (SO) के 1100 पदों पर भर्ती के लिए आवेदन आमंत्रित किए हैं। ऑनलाइन फॉर्म भरें।",
      content: "<p>ग्रेजुएट पास उम्मीदवारों के लिए बैंक ऑफ बड़ौदा में स्पेशलिस्ट ऑफिसर बनने का सुनहरा अवसर है।</p><h2>कुल पद - 1100</h2><p>सभी इच्छुक अभ्यर्थी आधिकारिक वेबसाइट पर जाकर अपनी योग्यता (Graduation/PG/MBA) के अनुसार ऑनलाइन आवेदन कर सकते हैं।</p>",
      officialSourceUrl: "https://www.bankofbaroda.in/career",
      published: true
    },
    {
      title: "SSSB Punjab Junior Scale Stenographer Result 2026:- Released",
      slug: "sssb-punjab-junior-scale-stenographer-result-2026",
      category: "RESULT",
      shortDescription: "Punjab SSSB Junior Scale Stenographer का फाइनल रिज़ल्ट और कट-ऑफ मार्क्स जारी कर दिए गए हैं। यहाँ अपना रोल नंबर चेक करें।",
      content: "<p>SSSB Punjab ने हाल ही में आयोजित हुई Junior Scale Stenographer परीक्षा का परिणाम घोषित कर दिया है।</p><h2>कैसे चेक करें रिज़ल्ट?</h2><p>नीचे दिए गए आधिकारिक लिंक पर क्लिक करके PDF डाउनलोड करें और अपना नाम/रोल नंबर सर्च करें। सफल उम्मीदवारों को अगले चरण के लिए जल्द सूचित किया जाएगा।</p>",
      officialSourceUrl: "https://sssb.punjab.gov.in/",
      published: true
    },
    {
      title: "FSSAI Internship 2026: ₹10,000 स्टाइपेंड, 1 अक्टूबर तक आवेदन",
      slug: "fssai-internship-2026-apply-online",
      category: "JOB",
      shortDescription: "भारतीय खाद्य सुरक्षा और मानक प्राधिकरण (FSSAI) में इंटर्नशिप का सुनहरा मौका। हर महीने ₹10,000 का स्टाइपेंड मिलेगा।",
      content: "<p>FSSAI ने छात्रों के लिए शानदार Internship Program लॉन्च किया है।</p><h2>इंटर्नशिप के लाभ</h2><ul><li>प्रतिमाह ₹10,000 का स्टाइपेंड।</li><li>फूड सेफ्टी से जुड़ी सरकारी कार्यप्रणाली सीखने का अवसर।</li><li>इंटर्नशिप पूरी होने पर सर्टिफिकेट।</li></ul><h2>आवेदन प्रक्रिया</h2><p>अंतिम तिथि 1 अक्टूबर 2026 है। FSSAI के इंटर्नशिप पोर्टल पर जाकर ऑनलाइन आवेदन करें।</p>",
      officialSourceUrl: "https://fssai.gov.in/internship/",
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
