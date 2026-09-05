import { prisma } from '@/lib/db';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, ChevronRight, ExternalLink, AlertTriangle, FileText, CheckCircle2 } from 'lucide-react';

export default async function PostDetail({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const post = await prisma.post.findUnique({
    where: { slug }
  });

  if (!post || !post.published) {
    notFound();
  }

  // Get some related updates from the same category
  const related = await prisma.post.findMany({
    where: { category: post.category, published: true, id: { not: post.id } },
    take: 5,
    orderBy: { publishedAt: 'desc' }
  });

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      JOB: 'bg-blue-600',
      RESULT: 'bg-green-600',
      YOJANA: 'bg-orange-600',
      ADMIT_CARD: 'bg-purple-600',
      NEWS: 'bg-red-600',
      ANSWER_KEY: 'bg-teal-600',
    };
    return colors[category] || 'bg-gray-600';
  };

  const categoryName = post.category.replace('_', ' ');

  let datesObj = null;
  if (post.importantDates) {
    try {
      datesObj = JSON.parse(post.importantDates);
    } catch (e) {
      // If it's not JSON, we'll just display it as text later
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <nav className="flex text-sm text-gray-500 mb-6 items-center">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <ChevronRight size={16} className="mx-2" />
        <Link href={`/category/${post.category}`} className="hover:text-blue-600 uppercase">{categoryName}</Link>
        <ChevronRight size={16} className="mx-2" />
        <span className="text-gray-800 font-medium truncate max-w-[200px] md:max-w-md">{post.title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Main Content */}
        <div className="lg:col-span-3">
          <article className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
            {/* Header */}
            <div className={`${getCategoryColor(post.category)} text-white p-6 md:p-8`}>
              <div className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-4 uppercase">
                {categoryName}
              </div>
              <h1 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">{post.title}</h1>
              <div className="flex items-center text-sm bg-black/10 inline-flex px-3 py-1.5 rounded-lg">
                <Calendar size={16} className="mr-2" />
                <span>Published: {new Date(post.publishedAt || post.createdAt).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 md:p-8">
              
              {/* Short Intro */}
              <div className="text-lg text-gray-700 font-medium mb-8 p-4 bg-gray-50 border-l-4 border-blue-500 rounded-r-lg">
                {post.shortDescription}
              </div>

              {/* Main Content */}
              <div className="prose max-w-none text-gray-800 mb-10">
                <h3 className="text-xl font-bold text-gray-900 border-b pb-2 mb-4">About the Update</h3>
                <p className="whitespace-pre-line">{post.content}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                {/* Important Dates */}
                {post.importantDates && (
                  <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
                    <h3 className="text-lg font-bold text-orange-800 mb-4 flex items-center gap-2">
                      <Calendar size={20} /> Important Dates
                    </h3>
                    {datesObj ? (
                      <ul className="space-y-3">
                        {Object.entries(datesObj).map(([key, value]) => (
                          <li key={key} className="flex justify-between items-start border-b border-orange-200/50 pb-2 last:border-0">
                            <span className="font-medium text-gray-700">{key}:</span>
                            <span className="text-orange-700 font-bold text-right ml-4">{String(value)}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="whitespace-pre-line text-gray-700">{post.importantDates}</p>
                    )}
                  </div>
                )}

                {/* Eligibility */}
                {post.eligibility && (
                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                    <h3 className="text-lg font-bold text-blue-800 mb-4 flex items-center gap-2">
                      <CheckCircle2 size={20} /> Eligibility / Qualifications
                    </h3>
                    <p className="whitespace-pre-line text-gray-700">{post.eligibility}</p>
                  </div>
                )}
              </div>

              {/* Application Process & Documents */}
              {(post.applicationProcess || post.requiredDocuments) && (
                <div className="mb-10">
                  <h3 className="text-xl font-bold text-gray-900 border-b pb-2 mb-6">How to Apply / Process</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {post.applicationProcess && (
                      <div>
                        <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2"><FileText size={18}/> Steps to Follow</h4>
                        <p className="whitespace-pre-line text-gray-700 bg-gray-50 p-4 rounded-lg">{post.applicationProcess}</p>
                      </div>
                    )}
                    {post.requiredDocuments && (
                      <div>
                        <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2"><FileText size={18}/> Required Documents</h4>
                        <p className="whitespace-pre-line text-gray-700 bg-gray-50 p-4 rounded-lg">{post.requiredDocuments}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Important Links */}
              <div className="bg-gray-100 rounded-xl p-6 md:p-8 mt-12 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Important Links</h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {post.officialSourceUrl && (
                    <a href={post.officialSourceUrl} target="_blank" rel="nofollow noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-center flex items-center justify-center gap-2 transition-colors">
                      Visit Official Website <ExternalLink size={18} />
                    </a>
                  )}
                  {/* Mock buttons for common actions */}
                  {post.category === 'JOB' && post.officialSourceUrl && (
                    <a href={post.officialSourceUrl} target="_blank" rel="nofollow noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-center flex items-center justify-center gap-2 transition-colors">
                      Apply Online Here <ExternalLink size={18} />
                    </a>
                  )}
                  {post.category === 'RESULT' && post.officialSourceUrl && (
                    <a href={post.officialSourceUrl} target="_blank" rel="nofollow noopener noreferrer" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg text-center flex items-center justify-center gap-2 transition-colors">
                      Download Result <ExternalLink size={18} />
                    </a>
                  )}
                </div>
                
                <div className="mt-6 flex items-start gap-3 text-sm text-gray-500 bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <AlertTriangle className="text-yellow-600 flex-shrink-0" size={20} />
                  <p><strong>Disclaimer:</strong> This page is for informational purposes only. We do not guarantee the accuracy of this data. Always cross-check with the official website before applying or making any decisions.</p>
                </div>
              </div>

            </div>
          </article>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-1 space-y-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-bold text-gray-900 border-b pb-2 mb-4">Related Updates</h3>
            <ul className="space-y-4">
              {related.map(item => (
                <li key={item.id}>
                  <Link href={`/post/${item.slug}`} className="group block">
                    <h4 className="font-medium text-sm text-gray-800 group-hover:text-blue-600 mb-1 line-clamp-2">{item.title}</h4>
                    <span className="text-xs text-gray-500">{new Date(item.publishedAt || item.createdAt).toLocaleDateString('en-IN')}</span>
                  </Link>
                </li>
              ))}
              {related.length === 0 && <li className="text-sm text-gray-500">No related updates.</li>}
            </ul>
          </div>
          
          <div className="bg-blue-50 rounded-xl border border-blue-100 p-6 text-center">
            <h3 className="font-bold text-blue-900 mb-2">Subscribe for Updates</h3>
            <p className="text-sm text-blue-700 mb-4">Get the latest Sarkari Jobs and Results alerts directly.</p>
            <input type="email" placeholder="Your Email Address" className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3" />
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg transition-colors text-sm">Subscribe Now</button>
          </div>
        </aside>

      </div>
    </div>
  );
}
