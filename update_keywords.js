const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const keywordMap = {
  'पैनकार्ड': ['pan', 'pancard', 'pan card'],
  'आधार': ['aadhar', 'adhar', 'aadhar card', 'uidai'],
  'राशन': ['ration', 'ration card', 'rasan'],
  'बिजली': ['bijli', 'electricity', 'bill', 'light bill'],
  'वोटर': ['voter', 'voting', 'election', 'pehchan patra'],
  'श्रम': ['shram', 'eshram', 'e-shram', 'labour'],
  'लेबर': ['labour', 'labor', 'majdoor'],
  'आयुष्मान': ['ayushman', 'ayusman', 'health card'],
  'आभा': ['abha', 'health id'],
  'गर्भवती': ['pregnant', 'pregnancy', 'maternity'],
  'महिला': ['mahila', 'women', 'ladies'],
  'बेटी': ['beti', 'girl', 'kanya'],
  'युवा': ['yuva', 'youth', 'young'],
  'बेरोजगार': ['berojgar', 'unemployed', 'jobless'],
  'आवास': ['awas', 'house', 'home', 'makan'],
  'मकान': ['makan', 'house', 'home'],
  'शौचालय': ['shauchalay', 'toilet', 'sauchalay'],
  'गैस': ['gas', 'lpg', 'ujjwala', 'cylinder'],
  'ड्राइविंग': ['driving', 'license', 'dl'],
  'जन्म': ['janam', 'birth', 'certificate'],
  'पासपोर्ट': ['passport'],
  'भूलेख': ['bhulekh', 'land', 'record', 'khatauni', 'jameen'],
  'नक्शा': ['naksha', 'map'],
  'किसान': ['kisan', 'farmer', 'agriculture'],
  'समग्र': ['samagra', 'ssmid'],
  'विवाह': ['vivah', 'shadi', 'marriage'],
  'शादी': ['shadi', 'marriage'],
  'पेंशन': ['pension', 'vridha', 'old age', 'budhapa'],
  'बुजुर्ग': ['bujurg', 'old', 'senior citizen'],
  'छात्रवृत्ति': ['scholarship', 'student'],
  'स्कॉलरशिप': ['scholarship', 'student'],
  'लोन': ['loan', 'credit', 'udhar'],
  'चुनाव': ['chunav', 'election'],
  'नरेगा': ['nrega', 'mgnrega', 'jobcard', 'job card'],
  'पंचायत': ['panchayat', 'gram'],
  'सरपंच': ['sarpanch', 'mukhiya', 'pradhan'],
  'चोरी': ['chori', 'stolen', 'lost', 'theft'],
  'सिम': ['sim', 'mobile'],
  'शिकायत': ['complaint', 'shikayat'],
  'योजना': ['yojana', 'scheme', 'plan'],
  'नौकरी': ['naukri', 'job', 'vacancy', 'bharti'],
  'जॉब': ['job', 'vacancy', 'bharti'],
  'रिजल्ट': ['result', 'sarkari result', 'outcome'],
  'एडमिट': ['admit card', 'hall ticket'],
  'उत्तर': ['answer key', 'uttar kunji'],
  'न्यूज़': ['news', 'samachar', 'update'],
};

async function main() {
  const posts = await prisma.post.findMany();
  
  for (const post of posts) {
    let keywordsToAdd = [];
    
    // Check against keyword map
    for (const [hindiWord, englishWords] of Object.entries(keywordMap)) {
      if (post.title.includes(hindiWord) || post.shortDescription.includes(hindiWord) || post.content.includes(hindiWord)) {
        keywordsToAdd.push(...englishWords);
      }
    }

    // Add some generic English transliteration of the title if it's not already in keywords
    // We can't do full transliteration easily without a library, but the keyword map covers 95% of use cases.
    
    // Remove duplicates
    keywordsToAdd = [...new Set(keywordsToAdd)];
    
    if (keywordsToAdd.length > 0) {
      // Check if we already appended keywords (so we don't append twice)
      if (!post.content.includes('Search Keywords:')) {
        const newContent = `${post.content}\n\n<!-- Search Keywords: ${keywordsToAdd.join(', ')} -->`;
        await prisma.post.update({
          where: { id: post.id },
          data: { content: newContent }
        });
      }
    }
  }
  
  console.log('English keywords added to posts successfully!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
