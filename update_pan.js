const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const panPost = await prisma.post.findFirst({
    where: {
      title: {
        contains: 'पैनकार्ड'
      }
    }
  });

  if (panPost) {
    await prisma.post.update({
      where: { id: panPost.id },
      data: {
        officialSourceUrl: 'https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html',
        content: 'यहाँ से आप नए पैन कार्ड के लिए ऑनलाइन आवेदन कर सकते हैं या पुराने पैन कार्ड में सुधार कर सकते हैं। आवेदन करने के लिए नीचे दिए गए "Visit Official Website" बटन पर क्लिक करें।\n\nजरूरी दस्तावेज़: आधार कार्ड, फोटो, और सिग्नेचर।'
      }
    });
    console.log('PAN card link updated successfully!');
  } else {
    console.log('PAN card post not found.');
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
