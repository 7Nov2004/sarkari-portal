import { prisma } from '@/lib/db';
import Link from 'next/link';

export default async function AdminDashboard() {
  const postsCount = await prisma.post.count();
  const jobsCount = await prisma.post.count({ where: { category: 'JOB' } });
  const resultsCount = await prisma.post.count({ where: { category: 'RESULT' } });
  
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-gray-500 font-medium mb-2">Total Posts</h3>
          <p className="text-4xl font-bold text-gray-900">{postsCount}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-gray-500 font-medium mb-2">Jobs</h3>
          <p className="text-4xl font-bold text-blue-600">{jobsCount}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-gray-500 font-medium mb-2">Results</h3>
          <p className="text-4xl font-bold text-green-600">{resultsCount}</p>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
        <div className="flex gap-4">
          <Link href="/admin/posts/new" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors">
            + Add New Post
          </Link>
          <Link href="/admin/posts" className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded transition-colors">
            Manage Posts
          </Link>
        </div>
      </div>
    </div>
  );
}
