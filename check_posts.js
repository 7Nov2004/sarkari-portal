const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function main() {
  const posts = await prisma.post.findMany({ select: { title: true, category: true } });
  console.log(JSON.stringify(posts.map(p => p.title)));
}
main().finally(() => prisma.$disconnect());
