import { prisma } from '@/lib/db';
import Link from 'next/link';
import { Calendar, Search } from 'lucide-react';
import SearchBar from '@/components/SearchBar';

export default async function SearchPage({ searchParams }: { searchParams: { q?: string } }) {
  const query = (await searchParams).q || '';

  let results: any[] = [];

  if (query.trim()) {
    results = await prisma.post.findMany({
      where: {
        published: true,
        OR: [
          { title: { contains: query } },
          { shortDescription: { contains: query } },
          { content: { contains: query } },
        ]
      },
      orderBy: { publishedAt: 'desc' }
    });
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Search Results</h1>
        
        <div className="bg-white p-2 rounded-full shadow-md flex border border-gray-200">
          <SearchBar variant="hero" className="flex-grow flex items-center w-full" />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-gray-50 border-b border-gray-200 p-4">
          <p className="text-gray-700 font-medium">
            {query ? `Found ${results.length} results for "${query}"` : 'Enter a search term above'}
          </p>
        </div>

        <div className="divide-y divide-gray-100">
          {results.map(post => (
            <div key={post.id} className="p-6 hover:bg-gray-50 transition-colors">
              <Link href={`/post/${post.slug}`} className="block">
                <div className="flex gap-2 items-center mb-1">
                  <span className="text-xs font-bold text-white bg-blue-600 px-2 py-0.5 rounded uppercase">
                    {post.category.replace('_', ' ')}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-blue-700 hover:underline mb-2">{post.title}</h2>
                <p className="text-gray-700 mb-3 text-sm line-clamp-2">{post.shortDescription}</p>
                <div className="flex items-center gap-4 text-xs text-gray-500 font-medium">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {new Date(post.publishedAt || post.createdAt).toLocaleDateString('en-IN')}</span>
                </div>
              </Link>
            </div>
          ))}

          {query && results.length === 0 && (
            <div className="p-12 text-center text-gray-500 text-lg">
              No results found for "{query}". Try different keywords.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
