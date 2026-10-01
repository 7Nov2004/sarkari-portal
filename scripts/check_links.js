const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function main() {
  const posts = await prisma.post.findMany({ 
    where: { 
      OR: [
        { officialSourceUrl: null },
        { officialSourceUrl: '' }
      ]
    },
    select: { id: true, title: true, slug: true }
  });
  console.log(JSON.stringify(posts, null, 2));
}
main().finally(() => prisma.$disconnect());
