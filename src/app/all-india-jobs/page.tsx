import { prisma } from '@/lib/db';
import Link from 'next/link';
import { Calendar } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All India Jobs 2026 - Latest Govt Jobs Across India',
  description: 'Find the latest All India Government Jobs, Central Govt Vacancies, Bank Jobs, SSC, UPSC, Railway, and Defence recruitment online.',
};

export default async function AllIndiaJobsPage() {
  const jobs = await prisma.post.findMany({
    where: {
      published: true,
      category: 'JOB',
      content: {
        contains: 'All India'
      }
    },
    orderBy: { publishedAt: 'desc' },
    take: 150
  });

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl font-sans">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">All India Jobs</h1>
        <p className="text-gray-600">Explore the latest central government jobs, bank jobs, and recruitment opportunities across India.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-gray-50 border-b border-gray-200 p-4">
          <p className="text-gray-700 font-bold">Latest Vacancies ({jobs.length})</p>
        </div>

        <div className="divide-y divide-gray-100">
          {jobs.map(post => (
            <div key={post.id} className="p-5 hover:bg-gray-50 transition-colors">
              <Link href={`/post/${post.slug}`} className="block">
                <h2 className="text-[18px] font-bold text-[#0056b3] hover:underline hover:text-[#b50101] mb-2 leading-tight">
                  {post.title}
                </h2>
                <p className="text-gray-700 mb-3 text-[14px] line-clamp-2">{post.shortDescription}</p>
                <div className="flex items-center gap-4 text-xs text-gray-500 font-medium">
                  <span className="flex items-center gap-1">
                    <Calendar size={13} /> {new Date(post.publishedAt || post.createdAt).toLocaleDateString('en-IN')}
                  </span>
                </div>
              </Link>
            </div>
          ))}

          {jobs.length === 0 && (
            <div className="p-12 text-center text-gray-500 text-lg">
              No jobs found at the moment.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
