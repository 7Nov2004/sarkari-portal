import { ImageResponse } from 'next/og';
import { prisma } from '@/lib/db';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export const alt = 'GovPortal Post Thumbnail';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await prisma.post.findUnique({
    where: { slug },
    select: { title: true, category: true, shortDescription: true },
  });

  const title = post?.title || 'Sarkari Job & Yojana Alert 2026';
  const category = (post?.category || 'UPDATE').replace('_', ' ');

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          backgroundColor: '#0f172a',
          backgroundImage:
            'radial-gradient(circle at 25px 25px, #1e293b 2%, transparent 0%), radial-gradient(circle at 75px 75px, #1e293b 2%, transparent 0%)',
          backgroundSize: '100px 100px',
          padding: '60px 70px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              backgroundColor: '#2563eb',
              color: '#ffffff',
              padding: '10px 24px',
              borderRadius: '30px',
              fontSize: 24,
              fontWeight: 800,
              letterSpacing: '1px',
            }}
          >
            {category}
          </div>
          <div
            style={{
              color: '#94a3b8',
              fontSize: 22,
              fontWeight: 600,
            }}
          >
            GovPortal.online
          </div>
        </div>

        <div
          style={{
            fontSize: 54,
            fontWeight: 900,
            color: '#ffffff',
            lineHeight: 1.25,
            maxHeight: '320px',
            overflow: 'hidden',
          }}
        >
          {title}
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            borderTop: '2px solid #334155',
            paddingTop: '30px',
          }}
        >
          <div style={{ color: '#38bdf8', fontSize: 26, fontWeight: 700 }}>
            ⚡ Fast Official Updates & Direct Link
          </div>
          <div
            style={{
              backgroundColor: '#eab308',
              color: '#0f172a',
              padding: '10px 24px',
              borderRadius: '12px',
              fontSize: 24,
              fontWeight: 800,
            }}
          >
            Check Now &rarr;
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
