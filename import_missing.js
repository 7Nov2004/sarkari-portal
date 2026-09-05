const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const allData = [
  // Links from states
  { title: 'State Wise Job UP', category: 'JOB', shortDescription: 'उत्तर प्रदेश से सम्बंधित सरकारी नौकरियां' },
  { title: 'State Wise Job MP', category: 'JOB', shortDescription: 'मध्य प्रदेश से सम्बंधित सरकारी नौकरियां' },
  { title: 'State Wise Job Bihar', category: 'JOB', shortDescription: 'बिहार से सम्बंधित सरकारी नौकरियां' },
  { title: 'State Wise Job Chhattisgarh', category: 'JOB', shortDescription: 'छत्तीसगढ़ से सम्बंधित सरकारी नौकरियां' },
  { title: 'State Wise Job Rajasthan', category: 'JOB', shortDescription: 'राजस्थान से सम्बंधित सरकारी नौकरियां' },
  { title: 'State Wise Job Jharkhand', category: 'JOB', shortDescription: 'झारखंड से सम्बंधित सरकारी नौकरियां' },
  { title: 'State Wise Job Maharastra', category: 'JOB', shortDescription: 'महाराष्ट्र से सम्बंधित सरकारी नौकरियां' },
  { title: 'State Wise Job Haryana', category: 'JOB', shortDescription: 'हरियाणा से सम्बंधित सरकारी नौकरियां' },
  
  // Voter List / Elections
  { title: 'SIR 2026 Draft Voter List', category: 'SARKARI_KAAM', shortDescription: 'नयी वोटर लिस्ट (SIR Draft Roll) 2026' },
  { title: 'UP पंचायत चुनाव नयी वोटर लिस्ट', category: 'SARKARI_KAAM', shortDescription: 'UP पंचायत चुनाव वोटर लिस्ट चेक करें' },
  { title: 'UP पंचायत चुनाव कटे नाम का लिस्ट', category: 'SARKARI_KAAM', shortDescription: 'UP पंचायत चुनाव में कटे हुए नामों की लिस्ट' },
  { title: 'SIR ( 2003 ,2002 वोटर लिस्ट )', category: 'SARKARI_KAAM', shortDescription: 'पुरानी वोटर लिस्ट 2002, 2003' },
  { title: 'SIR फॉर्म ऑनलाइन भरे', category: 'SARKARI_KAAM', shortDescription: 'वोटर लिस्ट के लिए ऑनलाइन फॉर्म भरें' },
  { title: 'BLO ने सब्मिट किया की नहीं जाने', category: 'SARKARI_KAAM', shortDescription: 'चेक करें कि BLO ने आपका फॉर्म सबमिट किया या नहीं' },
  { title: 'UP पंचायत चुनाव वोटर लिस्ट', category: 'SARKARI_KAAM', shortDescription: 'UP पंचायत चुनाव वोटर लिस्ट' },
  { title: 'सरपंच /प्रधान /मुखिया किस काम का कितना पैसा निकला', category: 'SARKARI_KAAM', shortDescription: 'ग्राम पंचायत के कार्यों का ब्यौरा और फंड की जानकारी' },
  { title: 'यू. पी. ग्राम पंचायत चुनाव (प्रधानी )', category: 'SARKARI_KAAM', shortDescription: 'UP प्रधानी चुनाव सम्बंधित जानकारी' },
  { title: 'यूपी चुनाव 2021 में सीट कौन सा था जाने(ग्राम ,क्षेत्र ,जिला)', category: 'SARKARI_KAAM', shortDescription: 'यूपी पंचायत चुनाव 2021 सीट आरक्षण सूची' },
  { title: 'यूपी चुनाव 2015 में सीट कौन सा था जाने', category: 'SARKARI_KAAM', shortDescription: 'यूपी पंचायत चुनाव 2015 सीट आरक्षण सूची' },
  { title: 'यूपी चुनाव 2010 में सीट कौन सा था जाने', category: 'SARKARI_KAAM', shortDescription: 'यूपी पंचायत चुनाव 2010 सीट आरक्षण सूची' },
  { title: 'बिहार 2003 वोटर लिस्ट', category: 'SARKARI_KAAM', shortDescription: '2003 बिहार मतदाता सूची' },
  { title: '2003 बिहार मतदाता सूची में अपना नाम खोजें', category: 'SARKARI_KAAM', shortDescription: '2003 बिहार मतदाता सूची में नाम खोजें' },
  { title: 'राजस्थान ग्राम पंचायत चुनाव(सरपंच )', category: 'SARKARI_KAAM', shortDescription: 'राजस्थान सरपंच चुनाव जानकारी' },
  
  // Electricity / Bills
  { title: 'बिजली बिल राहत कैलकुलेटर', category: 'SARKARI_KAAM', shortDescription: 'अपना बिजली बिल राहत डिस्काउंट कैलकुलेट करें' },
  { title: 'बिजली बिल राहत योजना 2025', category: 'YOJANA', shortDescription: 'बिजली बिल माफ़ी/राहत योजना 2025' },
  { title: 'चेक बिजली बिल', category: 'SARKARI_KAAM', shortDescription: 'अपना बिजली बिल ऑनलाइन चेक करें' },
  { title: 'UP बिजली से सम्बन्धित काम', category: 'SARKARI_KAAM', shortDescription: 'UPPCL सम्बंधित सभी सेवाएं' },

  // Pensions / Social Security
  { title: 'बुजुर्ग के लिए 1000 रूपये', category: 'YOJANA', shortDescription: 'वृद्धावस्था पेंशन योजना के तहत हर महीने 1000 रुपये' },
  { title: 'वृद्धा पेंशन बिहार', category: 'YOJANA', shortDescription: 'बिहार वृद्धावस्था पेंशन योजना आवेदन और स्टेटस' },
  
  // Other missed Yojanas & Services
  { title: 'UPI से गलत पेमेंट होने पर कंप्लेंट करे', category: 'SARKARI_KAAM', shortDescription: 'UPI द्वारा गलत खाते में पैसे चले जाने पर शिकायत कैसे करें' },
  { title: 'NSP नेशनल स्कालरशिप OTR', category: 'SCHOLARSHIP', shortDescription: 'National Scholarship Portal OTR रजिस्ट्रेशन' },
  { title: 'उद्यम रजिस्ट्रेशन सर्टिफिकेट NEW', category: 'SARKARI_KAAM', shortDescription: 'MSME उद्यम रजिस्ट्रेशन ऑनलाइन सर्टिफिकेट' },
  { title: 'पीएम उज्ज्वला नई कनेक्शन', category: 'YOJANA', shortDescription: 'प्रधानमंत्री उज्ज्वला योजना के तहत फ्री गैस कनेक्शन' },
  { title: 'पीएम किसान', category: 'YOJANA', shortDescription: 'प्रधानमंत्री किसान सम्मान निधि योजना की किश्त चेक करें' },
  { title: 'पीएम आवास', category: 'YOJANA', shortDescription: 'प्रधानमंत्री आवास योजना (PMAY) लिस्ट और स्टेटस' },
  { title: 'नरेगा(जॉबकार्ड ,हाज़िरी )', category: 'SARKARI_KAAM', shortDescription: 'नरेगा जॉबकार्ड डाउनलोड करें और हाज़िरी चेक करें' },
  { title: 'वोटर कार्ड', category: 'SARKARI_KAAM', shortDescription: 'नया वोटर कार्ड ऑनलाइन अप्लाई करें या डाउनलोड करें' },
  { title: 'ड्राइविंग लाइसेंस', category: 'SARKARI_KAAM', shortDescription: 'लर्निंग और परमानेंट ड्राइविंग लाइसेंस ऑनलाइन आवेदन' },
  { title: 'शौचालय योजना (रू.12000)', category: 'YOJANA', shortDescription: 'स्वच्छ भारत मिशन के तहत शौचालय बनाने के लिए 12000 रुपये की सहायता' },
  { title: 'गैस सब्सिडी देखे', category: 'SARKARI_KAAM', shortDescription: 'अपनी गैस सिलेंडर की सब्सिडी ऑनलाइन चेक करें' },
  { title: 'राशन कार्ड', category: 'SARKARI_KAAM', shortDescription: 'राशन कार्ड लिस्ट देखें और नया राशन कार्ड अप्लाई करें' },
  { title: 'समग्र id कार्ड', category: 'SARKARI_KAAM', shortDescription: 'मध्य प्रदेश समग्र पोर्टल से अपनी समग्र ID निकालें' },
  { title: 'बेरोजगारी भत्ता योजना (1500 )', category: 'YOJANA', shortDescription: 'बेरोजगार युवाओं को हर महीने 1500 रुपये भत्ता' },
  { title: 'अन्तर्जातीय विवाह 2.5 लाख', category: 'YOJANA', shortDescription: 'अंतरजातीय विवाह (Intercaste Marriage) प्रोत्साहन योजना के तहत 2.5 लाख' },
  
  // Missing Scholarships
  { title: 'कक्षा 1 से 10 तक रु 2000 तक हर साल स्कालरशिप (श्रमिकों के बच्चो को) Last Date: 31 अगस्त', category: 'SCHOLARSHIP', shortDescription: 'श्रमिकों के बच्चों के लिए 2000 रुपये वार्षिक स्कॉलरशिप' },
  { title: 'Class 1 से 12 ,ITI, Diploma , polytechnic,BA,B.Sc,MA,MSc,Mtech, MBA, Nursing,MBBS के छात्रों को 15000 से 75000 तक स्कालरशिप Last Date: 31 अगस्त', category: 'SCHOLARSHIP', shortDescription: 'सभी कक्षाओं के छात्रों के लिए 15000 से 75000 रुपये तक की स्कॉलरशिप' },
  { title: 'रिलायंस फाउंडेशन स्कालरशिप रु 60000 तक का स्कॉलरशिप Last Date: 2 अक्टूबर', category: 'SCHOLARSHIP', shortDescription: 'रिलायंस फाउंडेशन की ओर से छात्रों के लिए 60000 रुपये तक की स्कॉलरशिप' },
  { title: 'डॉ अम्बेडकर मेधावी छात्रवृत्ति योजना दसवीं से पोस्टग्रेजुएट तक 8000 से 12000 स्कॉलरशिपLast Date: 30 नवम्बर', category: 'SCHOLARSHIP', shortDescription: 'डॉ अम्बेडकर मेधावी छात्रवृत्ति योजना के तहत 8000 से 12000 तक स्कॉलरशिप' },
  { title: 'Mahindra EmpowerHer Scholarship 2026 :9th से 12th और पोस्ट ग्रेजुएट तक रु 5500 की स्कॉलरशिप', category: 'SCHOLARSHIP', shortDescription: 'छात्राओं के लिए महिंद्रा की EmpowerHer स्कॉलरशिप' },
  
  // Property / Land Services
  { title: 'जमीन विवाद में है या नहीं जाने', category: 'SARKARI_KAAM', shortDescription: 'ज़मीन खरीदने से पहले चेक करें कि उस पर कोई विवाद तो नहीं है' },
  
  // Telecom / Mobile
  { title: 'आपके नाम पर कितने सिम', category: 'SARKARI_KAAM', shortDescription: 'TAFCOP पोर्टल से जानें आपके आधार पर कितने सिम चालू हैं' },
  { title: 'मिल जाने पर अनब्लॉक करे', category: 'SARKARI_KAAM', shortDescription: 'चोरी हुआ मोबाइल वापस मिलने पर उसे अनब्लॉक कैसे करें' },
  { title: 'आपका मोबाइल चोरी का या डुबलीकेट तो नहीं', category: 'SARKARI_KAAM', shortDescription: 'CEIR/KYM पोर्टल से मोबाइल का IMEI नंबर वेरीफाई करें' },
  
  // Miscelaneous
  { title: 'PF सम्बंधित कार्य', category: 'SARKARI_KAAM', shortDescription: 'EPFO से सम्बंधित सभी कार्य: पासबुक, एडवांस और KYC' },
  { title: 'जन्म प्रमाण पत्र आवेदन (CRS )', category: 'SARKARI_KAAM', shortDescription: 'CRS पोर्टल से नया जन्म प्रमाण पत्र (Birth Certificate) बनवाएं' },
  { title: 'सुकन्या समृद्धि योजना कैलकुलेटर', category: 'SARKARI_KAAM', shortDescription: 'सुकन्या समृद्धि योजना में मिलने वाले रिटर्न की गणना करें' },
  { title: 'रोजगार में जाने पर 15000 का प्रोत्साहन', category: 'YOJANA', shortDescription: 'नया रोजगार शुरू करने पर सरकार द्वारा 15000 रुपये का प्रोत्साहन' },
];

async function main() {
  console.log('Inserting all missing yojanas and services...');
  
  for (const item of allData) {
    const slugBase = 'post-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
      
    await prisma.post.create({
      data: {
        title: item.title,
        slug: slugBase,
        category: item.category,
        shortDescription: item.shortDescription,
        content: 'यहाँ आपको ' + item.title + ' के बारे में पूरी जानकारी मिलेगी। इसके लिए आवेदन प्रक्रिया, आवश्यक दस्तावेज़ और पात्रता की जानकारी नीचे दी गयी है। अधिक जानकारी के लिए आधिकारिक वेबसाइट पर जाएँ।',
        officialSourceUrl: 'https://india.gov.in',
        published: true,
        publishedAt: new Date(),
      },
    });
  }
  
  console.log('Done inserting missing links!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
