import { prisma } from '@/lib/db';
import Link from 'next/link';
import { Calendar, ChevronRight } from 'lucide-react';
import { notFound } from 'next/navigation';

export default async function CategoryPage({ params }: { params: { category: string } }) {
  const { category } = await params;
  const upperCategory = category.toUpperCase();

  const validCategories = ['JOB', 'RESULT', 'ADMIT_CARD', 'YOJANA', 'NEWS', 'ANSWER_KEY', 'SARKARI_KAAM', 'SCHOLARSHIP'];
  if (!validCategories.includes(upperCategory)) {
    notFound();
  }

  const posts = await prisma.post.findMany({
    where: { category: upperCategory, published: true },
    orderBy: { publishedAt: 'desc' }
  });

  const categoryName = upperCategory.replace('_', ' ');

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <nav className="flex text-sm text-gray-500 mb-6 items-center">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <ChevronRight size={16} className="mx-2" />
        <span className="text-gray-800 font-medium uppercase">{categoryName}</span>
      </nav>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
        <div className="bg-blue-700 text-white p-6">
          <h1 className="text-3xl font-bold uppercase">{categoryName} Updates</h1>
          <p className="text-blue-100 mt-2">Latest information and updates regarding {categoryName.toLowerCase()}.</p>
        </div>

        <div className="divide-y divide-gray-100">
          {posts.map(post => (
            <div key={post.id} className="p-6 hover:bg-gray-50 transition-colors">
              <Link href={`/post/${post.slug}`} className="block">
                <h2 className="text-xl font-bold text-blue-700 hover:underline mb-2">{post.title}</h2>
                <p className="text-gray-700 mb-3">{post.shortDescription}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 font-medium">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {new Date(post.publishedAt || post.createdAt).toLocaleDateString('en-IN')}</span>
                  <span className="text-blue-600 hover:underline">Read More &rarr;</span>
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
