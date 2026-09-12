import Link from 'next/link';
import { prisma } from '@/lib/db';
import { Calendar, Building, GraduationCap, ChevronRight, Briefcase, FileText, FileBadge, Newspaper, FileKey } from 'lucide-react';
import SearchBar from '@/components/SearchBar';
import QuickLinksGrid from '@/components/QuickLinksGrid';

export default async function Home() {
  const jobs = await prisma.post.findMany({ where: { category: 'JOB', published: true }, orderBy: { publishedAt: 'desc' }, take: 5 });
  const results = await prisma.post.findMany({ where: { category: 'RESULT', published: true }, orderBy: { publishedAt: 'desc' }, take: 5 });
  const yojanas = await prisma.post.findMany({ where: { category: 'YOJANA', published: true }, orderBy: { publishedAt: 'desc' }, take: 5 });
  const admitCards = await prisma.post.findMany({ where: { category: 'ADMIT_CARD', published: true }, orderBy: { publishedAt: 'desc' }, take: 5 });
  const news = await prisma.post.findMany({ where: { category: 'NEWS', published: true }, orderBy: { publishedAt: 'desc' }, take: 5 });

  return (
    <div className="flex flex-col gap-8 pb-12">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Latest Sarkari Jobs, Results & Yojana Updates</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Your independent information portal providing the fastest updates and official links for government jobs, exams, and schemes.
          </p>
          <div className="max-w-2xl mx-auto bg-white p-2 rounded-full shadow-lg flex">
            <SearchBar variant="hero" className="flex-grow flex items-center w-full" />
          </div>
        </div>
      </section>

      {/* Category Shortcuts */}
      <section className="container mx-auto px-4 -mt-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { name: 'Latest Jobs', icon: Briefcase, color: 'bg-blue-500', link: '/category/JOB' },
            { name: 'Results', icon: FileBadge, color: 'bg-green-500', link: '/category/RESULT' },
            { name: 'Admit Cards', icon: FileText, color: 'bg-purple-500', link: '/category/ADMIT_CARD' },
            { name: 'Yojana', icon: Building, color: 'bg-orange-500', link: '/category/YOJANA' },
            { name: 'Scholarships', icon: GraduationCap, color: 'bg-pink-500', link: '/category/SCHOLARSHIP' },
            { name: 'Sarkari Kaam', icon: Newspaper, color: 'bg-red-500', link: '/category/SARKARI_KAAM' },
          ].map((cat, idx) => (
            <Link key={idx} href={cat.link} className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center justify-center gap-2 hover:shadow-lg transition-shadow border border-gray-100 group">
              <div className={`${cat.color} text-white p-3 rounded-full group-hover:scale-110 transition-transform`}>
                <cat.icon size={24} />
              </div>
              <span className="font-semibold text-gray-800 text-sm text-center">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick Links Grid (Sarkari Result style) */}
      <section className="container mx-auto px-4">
        <QuickLinksGrid />
      </section>

      {/* Main Content Sections */}
      <section className="container mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Column 1: Jobs & Yojanas */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Sarkari Jobs */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <Briefcase size={20} /> Latest Sarkari Jobs
                </h2>
                <Link href="/category/JOB" className="text-sm font-medium hover:underline flex items-center">View All <ChevronRight size={16} /></Link>
              </div>
              <div className="divide-y divide-gray-100">
                {jobs.map(job => (
                  <div key={job.id} className="p-4 hover:bg-blue-50 transition-colors">
                    <Link href={`/post/${job.slug}`} className="block">
                      <h3 className="font-bold text-blue-700 text-lg hover:underline mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                        {job.eligibility && <span className="flex items-center gap-1"><GraduationCap size={14} /> {job.eligibility.substring(0, 30)}...</span>}
                      </div>
                      <p className="text-sm text-gray-700 mb-3 line-clamp-2">{job.shortDescription}</p>
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded">View Details / Apply Online</span>
                    </Link>
                  </div>
                ))}
                {jobs.length === 0 && <div className="p-6 text-center text-gray-500">No recent jobs found.</div>}
              </div>
            </div>

            {/* Sarkari Yojana */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-orange-600 text-white p-4 flex justify-between items-center">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <Building size={20} /> Government Schemes (Yojana)
                </h2>
                <Link href="/category/YOJANA" className="text-sm font-medium hover:underline flex items-center">View All <ChevronRight size={16} /></Link>
              </div>
              <div className="divide-y divide-gray-100">
                {yojanas.map(yojana => (
                  <div key={yojana.id} className="p-4 hover:bg-orange-50 transition-colors">
                    <Link href={`/post/${yojana.slug}`} className="block">
                      <h3 className="font-bold text-orange-700 text-lg hover:underline mb-2">{yojana.title}</h3>
                      <p className="text-sm text-gray-700 line-clamp-2">{yojana.shortDescription}</p>
                    </Link>
                  </div>
                ))}
                {yojanas.length === 0 && <div className="p-6 text-center text-gray-500">No recent schemes found.</div>}
              </div>
            </div>
          </div>

          {/* Column 2: Results, Admit Cards, News */}
          <div className="flex flex-col gap-8">
            {/* Results */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-green-600 text-white p-3 flex justify-between items-center">
                <h2 className="font-bold flex items-center gap-2">
                  <FileBadge size={18} /> Latest Results
                </h2>
                <Link href="/category/RESULT" className="text-xs hover:underline">View All</Link>
              </div>
              <ul className="divide-y divide-gray-100">
                {results.map(result => (
                  <li key={result.id} className="p-3 hover:bg-green-50 transition-colors">
                    <Link href={`/post/${result.slug}`} className="font-medium text-green-700 hover:underline text-sm block">
                      {result.title}
                    </Link>
                    <div className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                      <Calendar size={12} /> {new Date(result.publishedAt || result.createdAt).toLocaleDateString('en-IN')}
                    </div>
                  </li>
                ))}
                {results.length === 0 && <li className="p-4 text-center text-sm text-gray-500">No results found.</li>}
              </ul>
            </div>

            {/* Admit Cards */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-purple-600 text-white p-3 flex justify-between items-center">
                <h2 className="font-bold flex items-center gap-2">
                  <FileText size={18} /> Admit Cards
                </h2>
                <Link href="/category/ADMIT_CARD" className="text-xs hover:underline">View All</Link>
              </div>
              <ul className="divide-y divide-gray-100">
                {admitCards.map(admitCard => (
                  <li key={admitCard.id} className="p-3 hover:bg-purple-50 transition-colors">
                    <Link href={`/post/${admitCard.slug}`} className="font-medium text-purple-700 hover:underline text-sm block">
                      {admitCard.title}
                    </Link>
                  </li>
                ))}
                {admitCards.length === 0 && <li className="p-4 text-center text-sm text-gray-500">No admit cards found.</li>}
              </ul>
            </div>
            
            {/* News */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-red-600 text-white p-3 flex justify-between items-center">
                <h2 className="font-bold flex items-center gap-2">
                  <Newspaper size={18} /> Important News
                </h2>
                <Link href="/category/NEWS" className="text-xs hover:underline">View All</Link>
              </div>
              <ul className="divide-y divide-gray-100">
                {news.map(n => (
                  <li key={n.id} className="p-3 hover:bg-red-50 transition-colors">
                    <Link href={`/post/${n.slug}`} className="font-medium text-red-700 hover:underline text-sm block">
                      {n.title}
                    </Link>
                  </li>
                ))}
                {news.length === 0 && <li className="p-4 text-center text-sm text-gray-500">No news found.</li>}
              </ul>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
