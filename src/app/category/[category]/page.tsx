import { prisma } from '@/lib/db';
import Link from 'next/link';
import { Calendar, ChevronRight } from 'lucide-react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

const validCategories = [
  'JOB',
  'RESULT',
  'ADMIT_CARD',
  'YOJANA',
  'NEWS',
  'ANSWER_KEY',
  'SARKARI_KAAM',
  'SCHOLARSHIP',
];

const categoryMetaTitles: Record<string, { title: string; desc: string }> = {
  JOB: {
    title: 'Latest Sarkari Jobs 2026 - Online Form, Vacancies & Bharti Alerts',
    desc: 'Find all latest government jobs, central and state recruitment notifications, eligibility, and direct apply online links.',
  },
  RESULT: {
    title: 'Sarkari Results 2026 - Direct Check Link & Merit Lists',
    desc: 'Check latest government exam results, cut off marks, scorecards, and selection lists at one place.',
  },
  ADMIT_CARD: {
    title: 'Admit Card 2026 - Download Hall Ticket & Exam Dates',
    desc: 'Download online admit cards and hall tickets for all central and state government competitive examinations.',
  },
  YOJANA: {
    title: 'Sarkari Yojana 2026 - Government Schemes, Eligibility & Benefits',
    desc: 'Complete guide and official application links for PM schemes, state government welfare yojanas, and financial benefits.',
  },
  NEWS: {
    title: 'Government Updates & Sarkari News 2026',
    desc: 'Latest official announcements, policy updates, and important notices from government departments.',
  },
  ANSWER_KEY: {
    title: 'Answer Key 2026 - Official Question Papers & Solutions',
    desc: 'Download official exam answer keys, response sheets, and objection submission details.',
  },
  SARKARI_KAAM: {
    title: 'Sarkari Kaam - Online Citizen Services, PAN, Aadhar & Documents',
    desc: 'Fast official links to apply for PAN card, check voter list, e-Shram, ration card, land records (Bhulekh), and portal services.',
  },
  SCHOLARSHIP: {
    title: 'Scholarship 2026 - School, College & Higher Education Grants',
    desc: 'Find national scholarship portal updates, private and government scholarships with eligibility criteria and application deadlines.',
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const upperCategory = category.toUpperCase();

  const meta = categoryMetaTitles[upperCategory];
  if (!meta) {
    return { title: 'Category' };
  }

  return {
    title: meta.title,
    description: meta.desc,
    alternates: {
      canonical: `https://govportal.online/category/${upperCategory}`,
    },
    openGraph: {
      title: `${meta.title} | GovPortal.online`,
      description: meta.desc,
      url: `https://govportal.online/category/${upperCategory}`,
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const upperCategory = category.toUpperCase();

  if (!validCategories.includes(upperCategory)) {
    notFound();
  }

  const posts = await prisma.post.findMany({
    where: { category: upperCategory, published: true },
    orderBy: { publishedAt: 'desc' },
  });

  const categoryName = upperCategory.replace('_', ' ');
  const meta = categoryMetaTitles[upperCategory];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <nav className="flex text-sm text-gray-500 mb-6 items-center">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <ChevronRight size={16} className="mx-2" />
        <span className="text-gray-800 font-medium uppercase">{categoryName}</span>
      </nav>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
        <div className="bg-blue-700 text-white p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold uppercase">{categoryName} Updates</h1>
          <p className="text-blue-100 mt-2 text-sm md:text-base">
            {meta ? meta.desc : `Latest information and updates regarding ${categoryName.toLowerCase()}.`}
          </p>
        </div>

        <div className="divide-y divide-gray-100">
          {posts.map((post) => (
            <div key={post.id} className="p-6 hover:bg-gray-50 transition-colors">
              <Link href={`/post/${post.slug}`} className="block">
                <h2 className="text-xl font-bold text-blue-700 hover:underline mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-700 mb-3 text-sm line-clamp-2">
                  {post.shortDescription}
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-500 font-medium">
                  <span className="flex items-center gap-1">
                    <Calendar size={13} />{' '}
                    {new Date(post.publishedAt || post.createdAt).toLocaleDateString('en-IN')}
                  </span>
                  <span className="text-blue-600 hover:underline">Read Full Details &rarr;</span>
                </div>
              </Link>
            </div>
          ))}

          {posts.length === 0 && (
            <div className="p-12 text-center text-gray-500 text-lg">
              No updates found in this category yet. Please check back later.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
