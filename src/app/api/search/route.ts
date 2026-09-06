import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const q = searchParams.get('q') || '';

  if (!q.trim() || q.length < 2) {
    return NextResponse.json([]);
  }

  try {
    const results = await prisma.post.findMany({
      where: {
        published: true,
        OR: [
          { title: { contains: q } },
          { shortDescription: { contains: q } },
          { content: { contains: q } },
        ]
      },
      select: {
        id: true,
        title: true,
        slug: true,
        category: true,
      },
      take: 5, // Limit to 5 suggestions
      orderBy: { publishedAt: 'desc' }
    });

    return NextResponse.json(results);
  } catch (error) {
    console.error('Search API Error:', error);
    return NextResponse.json([], { status: 500 });
  }
}
