const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function main() {
  const posts = await prisma.post.findMany({ select: { slug: true, title: true, category: true }, take: 15, orderBy: { publishedAt: 'desc' } });
  console.log(JSON.stringify(posts, null, 2));
}
main().finally(() => prisma.$disconnect());
