import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const data = [
  { title: 'गर्भवती महिला को रु 11000 की सहायता NEW', category: 'YOJANA', shortDescription: 'गर्भवती महिलाओं के लिए 11000 रुपये की आर्थिक सहायता योजना।' },
  { title: 'महिलाओं को हर महीने 2,500 रुपये NEW', category: 'YOJANA', shortDescription: 'महिलाओं के लिए प्रतिमाह 2500 रुपये की योजना।' },
  { title: 'दिल्ली लक्ष्मी योजना (2,500 रुपये ) NEW', category: 'YOJANA', shortDescription: 'दिल्ली सरकार द्वारा लक्ष्मी योजना के तहत 2500 रुपये।' },
  { title: 'बेटी को जन्म से रु 25000', category: 'YOJANA', shortDescription: 'बेटी के जन्म पर 25000 रुपये की आर्थिक सहायता योजना।' },
  { title: 'युवा के लिए 9000 हर महीने', category: 'YOJANA', shortDescription: 'युवाओं के लिए 9000 रुपये प्रतिमाह सहायता योजना।' },
  { title: 'वर्क फ्रॉम होम जॉब', category: 'JOB', shortDescription: 'घर बैठे काम करने के अवसर (Work from Home Jobs)।' },
  { title: 'लाड़ली लक्ष्मी योजना', category: 'YOJANA', shortDescription: 'मध्य प्रदेश लाड़ली लक्ष्मी योजना - बेटियों के भविष्य को सुरक्षित करने के लिए।' },
  { title: 'जनगणना 2026', category: 'NEWS', shortDescription: 'भारत की जनगणना 2026 से सम्बंधित महत्वपूर्ण जानकारी और अपडेट।' },
  { title: 'PF अकाउंट वालो को मिलेगा', category: 'YOJANA', shortDescription: 'PF अकाउंट धारकों के लिए नया लाभ और सरकारी घोषणाएं।' },
  { title: 'बेरोजगार युवा को 1000 रूपये हर महीने', category: 'YOJANA', shortDescription: 'बेरोजगारी भत्ता योजना के तहत हर महीने 1000 रुपये की सहायता।' },
  { title: 'रोजगार के लिए 10 लाख तक लोन', category: 'YOJANA', shortDescription: 'स्वरोजगार शुरू करने के लिए सरकार द्वारा 10 लाख रुपये तक का लोन।' },
  { title: 'फॉर्मर रजिस्ट्री (Farmer Registry)', category: 'SARKARI_KAAM', shortDescription: 'किसानों के लिए फॉर्मर रजिस्ट्री में पंजीकरण की प्रक्रिया।' },
  { title: 'पीएम विद्यालक्ष्मी लोन (10 लाख )', category: 'YOJANA', shortDescription: 'छात्रों की उच्च शिक्षा के लिए पीएम विद्यालक्ष्मी एजुकेशन लोन।' },
  { title: 'विधवा महिला को रु. 30000 की सहायता', category: 'YOJANA', shortDescription: 'विधवा महिलाओं को 30000 रुपये की एकमुश्त सहायता या पेंशन योजना।' },
  { title: 'पक्का मकान के लिए 2.5 लाख', category: 'YOJANA', shortDescription: 'पीएम आवास योजना के तहत पक्का मकान बनाने के लिए 2.5 लाख रुपये।' },
  { title: 'लेबर पंजीयन 7000 रु', category: 'SARKARI_KAAM', shortDescription: 'श्रमिकों के लेबर कार्ड पंजीयन पर 7000 रुपये की सहायता।' },
  { title: 'राशन कार्ड डाउनलोड', category: 'SARKARI_KAAM', shortDescription: 'अपना नया या पुराना राशन कार्ड ऑनलाइन डाउनलोड करें।' },
  { title: 'कन्या उत्थान योजना (बेटी को आगे पढ़ने के लिए 25000 की सहायता)', category: 'YOJANA', shortDescription: 'मुख्यमंत्री कन्या उत्थान योजना के तहत शिक्षा के लिए 25000 रुपये।' },
  { title: 'LIC बिमा सखी', category: 'JOB', shortDescription: 'महिलाओं के लिए LIC बीमा सखी योजना से जुड़ने का अवसर।' },
  { title: 'LPG Gas eKYC', category: 'SARKARI_KAAM', shortDescription: 'अपने गैस कनेक्शन की eKYC ऑनलाइन पूरी करें ताकि सब्सिडी मिलती रहे।' },
  { title: 'बेटी के शादी के लिए 1 लाख', category: 'YOJANA', shortDescription: 'कन्या विवाह योजना के तहत गरीब परिवारों की बेटियों की शादी के लिए 1 लाख।' },
  { title: 'बैंक से आधार लिंक करे (NPCI)', category: 'SARKARI_KAAM', shortDescription: 'डीबीटी का लाभ पाने के लिए अपने बैंक खाते को आधार (NPCI) से लिंक करें।' },
  
  // Scholarships
  { title: 'छात्रों को रु 50000 तक स्कॉलरशिप Last Date :31 अक्टूबर', category: 'SCHOLARSHIP', shortDescription: 'मेधावी छात्रों के लिए 50000 रुपये तक की स्कॉलरशिप योजना।' },
  { title: 'रु 300 से 2400 प्रति वर्ष स्कॉलरशिप New', category: 'SCHOLARSHIP', shortDescription: 'स्कूली छात्रों के लिए 300 से 2400 रुपये तक की वार्षिक स्कॉलरशिप।' },
  { title: 'अजीम प्रेमजी स्कॉलरशिप (रु 30000 को छात्रवृत्ति मेधावी छात्रों को )', category: 'SCHOLARSHIP', shortDescription: 'मेधावी छात्रों के लिए अजीम प्रेमजी फाउंडेशन की ओर से 30000 रुपये की छात्रवृत्ति।' },
  { title: 'SBI आशा स्कॉलरशिप (कक्षा 9 वीं से 12 वीं ,स्नातक ,स्नातकोत्तर ,MBBS,IIT,IIM : 15000 से लेकर रु 15 लाख छात्रवृत्ति)', category: 'SCHOLARSHIP', shortDescription: 'SBI द्वारा कक्षा 9 से उच्च शिक्षा तक के लिए 15000 से 15 लाख तक की स्कॉलरशिप।' },
  
  // Important Services
  { title: 'पासपोर्ट सेवा', category: 'SARKARI_KAAM', shortDescription: 'नया पासपोर्ट बनवाने या रिन्यू करने के लिए ऑनलाइन आवेदन करें।' },
  { title: 'पैनकार्ड', category: 'SARKARI_KAAM', shortDescription: 'नया पैन कार्ड ऑनलाइन बनाएं या सुधार करें।' },
  { title: 'भूलेख और भू नक्शा(ज़मीन का नक्शा )', category: 'SARKARI_KAAM', shortDescription: 'अपनी ज़मीन का खसरा, खतौनी और नक्शा ऑनलाइन देखें।' },
  { title: 'ई श्रम कार्ड', category: 'SARKARI_KAAM', shortDescription: 'असंगठित क्षेत्र के मजदूरों के लिए ई-श्रम कार्ड आवेदन।' },
  { title: 'आयुष्मान कार्ड', category: 'SARKARI_KAAM', shortDescription: '5 लाख रुपये तक के मुफ्त इलाज के लिए आयुष्मान कार्ड डाउनलोड करें।' },
  { title: 'आभा कार्ड (ABHA ID)', category: 'SARKARI_KAAM', shortDescription: 'डिजिटल हेल्थ रिकॉर्ड रखने के लिए अपना आभा कार्ड बनाएं।' },
  { title: 'APAAR ID कार्ड', category: 'SARKARI_KAAM', shortDescription: 'छात्रों के लिए वन नेशन वन स्टूडेंट ID (APAAR ID) कार्ड बनाएं।' },
  
  // Others
  { title: 'बैंक बैलेंस चेक (कॉल या मैसेज से )', category: 'SARKARI_KAAM', shortDescription: 'मिस्ड कॉल या SMS के जरिए अपने बैंक का बैलेंस चेक करें।' },
  { title: 'चोरी हुई मोबाइल को ब्लॉक करे', category: 'SARKARI_KAAM', shortDescription: 'CEIR पोर्टल के माध्यम से अपना चोरी हुआ या खोया मोबाइल ब्लॉक करें।' },
];

async function main() {
  console.log('Inserting new yojanas and services...');
  
  for (const item of data) {
    const slug = item.title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-');
      
    await prisma.post.upsert({
      where: { slug: slug || Date.now().toString() }, // fallback if slug is empty
      update: {},
      create: {
        title: item.title,
        slug: slug || `post-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        category: item.category,
        shortDescription: item.shortDescription,
        content: `यहाँ आपको ${item.title} के बारे में पूरी जानकारी मिलेगी। इसके लिए आवेदन प्रक्रिया, आवश्यक दस्तावेज़ और पात्रता की जानकारी नीचे दी गयी है। अधिक जानकारी के लिए आधिकारिक वेबसाइट पर जाएँ।`,
        officialSourceUrl: 'https://india.gov.in',
        published: true,
        publishedAt: new Date(),
      },
    });
  }
  
  console.log('Done inserting!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
