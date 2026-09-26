const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const newPosts = [
    {
      title: "PM Surya Ghar Muft Bijli Yojana 2026: 300 यूनिट फ्री बिजली और 78 हज़ार सब्सिडी",
      slug: "pm-surya-ghar-muft-bijli-yojana-2026-subsidy",
      category: "YOJANA",
      shortDescription: "पीएम सूर्य घर मुफ्त बिजली योजना के तहत सरकार दे रही है 300 यूनिट मुफ्त बिजली और सोलर पैनल लगाने पर 78,000 रुपये तक की भारी सब्सिडी। आज ही ऑनलाइन आवेदन करें।",
      content: "<p>प्रधानमंत्री सूर्य घर मुफ्त बिजली योजना भारत सरकार की एक महत्वाकांक्षी योजना है जिसका उद्देश्य एक करोड़ घरों पर रूफटॉप सोलर पैनल लगाना है।</p><h2>योजना के लाभ (Benefits)</h2><ul><li>हर महीने 300 यूनिट तक मुफ्त बिजली।</li><li>2 kW के पैनल पर 60,000 रुपये तक की सब्सिडी।</li><li>3 kW या उससे अधिक पर 78,000 रुपये की सब्सिडी।</li><li>बिजली बिल में भारी कटौती और अतिरिक्त बिजली ग्रिड को बेचकर कमाई।</li></ul><h2>आवेदन कैसे करें?</h2><p>आधिकारिक पोर्टल <strong>pmsuryaghar.gov.in</strong> पर जाएं और नेशनल पोर्टल के माध्यम से अपना रजिस्ट्रेशन करें।</p>",
      published: true
    },
    {
      title: "PM Internship Scheme 2026: युवाओं को हर महीने 5000 रुपये और ट्रेनिंग",
      slug: "pm-internship-scheme-2026-apply-online",
      category: "YOJANA",
      shortDescription: "बेरोजगार युवाओं के लिए पीएम इंटर्नशिप योजना शुरू! टॉप 500 कंपनियों में इंटर्नशिप, 5000 रुपये प्रतिमाह स्टाइपेंड और 6000 रुपये एकमुश्त सहायता।",
      content: "<p>सरकार ने 1 करोड़ युवाओं को कौशल प्रदान करने के लिए पीएम इंटर्नशिप योजना शुरू की है।</p><h2>पात्रता (Eligibility)</h2><ul><li>उम्र: 21 से 24 वर्ष</li><li>शैक्षणिक योग्यता: 10वीं, 12वीं या ग्रेजुएशन पास (रेगुलर कोर्स वाले पात्र नहीं)</li><li>परिवार में कोई सरकारी नौकरी में न हो।</li></ul><h2>मिलने वाले लाभ</h2><p>इंटर्न को हर महीने ₹5,000 दिए जाएंगे, जिसमें ₹4,500 सरकार और ₹500 कंपनी देगी। साथ ही ₹6,000 की एकमुश्त अनुदान राशि भी मिलेगी।</p>",
      published: true
    },
    {
      title: "PSB 59 Minute Loan Yojana: व्यापार के लिए 5 करोड़ तक का लोन 1 घंटे में",
      slug: "psb-59-minute-loan-yojana-msme",
      category: "SARKARI_KAAM",
      shortDescription: "MSME और छोटे व्यापारियों के लिए 59 मिनट लोन योजना। बिना बैंक के चक्कर काटे 10 लाख से 5 करोड़ तक के लोन की सैद्धांतिक मंजूरी मात्र 59 मिनट में प्राप्त करें।",
      content: "<p>छोटे उद्योगों और व्यापार को बढ़ावा देने के लिए PSB 59 Minute Loan पोर्टल लॉन्च किया गया है।</p><h2>मुख्य विशेषताएं</h2><ul><li>मात्र 59 मिनट में इन-प्रिंसिपल अप्रूवल।</li><li>MUDRA लोन और MSME लोन दोनों उपलब्ध।</li><li>न्यूनतम दस्तावेज़ीकरण (GST, ITR और बैंक स्टेटमेंट)।</li></ul><h2>आवेदन प्रक्रिया</h2><p>आधिकारिक वेबसाइट <strong>psbloansin59minutes.com</strong> पर जाएं, अपना GSTIN डालें, ITR अपलोड करें और बैंक अकाउंट लिंक करें।</p>",
      published: true
    },
    {
      title: "ड्राइविंग लाइसेंस (DL) में मोबाइल नंबर घर बैठे कैसे अपडेट करें (Parivahan Sewa)",
      slug: "driving-license-mobile-number-update-online",
      category: "SARKARI_KAAM",
      shortDescription: "क्या आप अपने ड्राइविंग लाइसेंस (DL) में मोबाइल नंबर बदलना चाहते हैं? अब बिना RTO जाए घर बैठे सारथी परिवहन (Sarathi Parivahan) वेबसाइट से नंबर अपडेट करें।",
      content: "<p>परिवहन विभाग की ऑनलाइन सेवाओं का लाभ उठाने के लिए आपके ड्राइविंग लाइसेंस (DL) में सही मोबाइल नंबर लिंक होना अनिवार्य है।</p><h2>मोबाइल नंबर अपडेट करने का प्रोसेस</h2><ol><li><strong>Sarathi Parivahan</strong> वेबसाइट पर जाएं।</li><li>अपना राज्य चुनें और 'Others' मेनू में जाकर 'Mobile Number Update' पर क्लिक करें।</li><li>अपना आधार नंबर, DL नंबर और जन्मतिथि दर्ज करें।</li><li>नया मोबाइल नंबर डालें और OTP वेरीफाई करें।</li></ol>",
      published: true
    },
    {
      title: "Traffic E-Challan Status Check & Pay: अपनी गाड़ी का चालान ऑनलाइन कैसे चेक करें?",
      slug: "traffic-e-challan-status-check-pay-online",
      category: "SARKARI_KAAM",
      shortDescription: "अपनी गाड़ी (कार/बाइक) का पेंडिंग ई-चालान (E-Challan) मोबाइल से कैसे चेक करें और ऑनलाइन पेमेंट कैसे करें? पूरी प्रक्रिया यहाँ जानें।",
      content: "<p>अगर आपने भी ट्रैफिक नियम तोड़ा है, तो आपका ई-चालान कट सकता है। इसे ऑनलाइन चेक करना बहुत आसान है।</p><h2>चालान कैसे चेक करें?</h2><ul><li><strong>E-Challan Parivahan</strong> (echallan.parivahan.gov.in) वेबसाइट पर जाएं।</li><li>'Check Online Services' पर जाकर 'Check Challan Status' पर क्लिक करें।</li><li>अपना गाड़ी नंबर (Vehicle Number), चालान नंबर या DL नंबर डालें।</li><li>कैप्चा भरें और 'Get Details' पर क्लिक करें। अगर चालान है, तो वहीं से ऑनलाइन पेमेंट भी कर सकते हैं।</li></ul>",
      published: true
    },
    {
      title: "Udyam Registration Portal 2026: फ्री में MSME सर्टिफिकेट कैसे बनाएं?",
      slug: "udyam-msme-registration-certificate-free-apply",
      category: "SARKARI_KAAM",
      shortDescription: "अपने बिज़नेस/दुकान के लिए फ्री में उद्यम रजिस्ट्रेशन (MSME Certificate) करें। जानें इसके फायदे, जरूरी दस्तावेज और ऑनलाइन अप्लाई करने का तरीका।",
      content: "<p>छोटे और मध्यम व्यवसायों के लिए उद्यम रजिस्ट्रेशन (MSME) भारत सरकार का आधिकारिक सर्टिफिकेट है। इसके माध्यम से सरकारी लोन, टेंडर और सब्सिडी में छूट मिलती है।</p><h2>ज़रूरी दस्तावेज</h2><ul><li>आधार कार्ड (जो मोबाइल से लिंक हो)</li><li>पैन कार्ड (PAN Card)</li><li>बैंक खाते की जानकारी</li></ul><h2>अप्लाई कैसे करें?</h2><p>आधिकारिक वेबसाइट <strong>udyamregistration.gov.in</strong> पर जाएं। यह बिल्कुल मुफ्त है। दलालों से बचें।</p>",
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
