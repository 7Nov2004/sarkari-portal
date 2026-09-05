import { prisma } from '@/lib/db';
import Link from 'next/link';

export default async function AdminPosts() {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Manage Posts</h1>
        <Link href="/admin/posts/new" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors">
          + Add New Post
        </Link>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="p-4 font-medium text-gray-600">Title</th>
              <th className="p-4 font-medium text-gray-600">Category</th>
              <th className="p-4 font-medium text-gray-600">Status</th>
              <th className="p-4 font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map(post => (
              <tr key={post.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="p-4 font-medium text-gray-900">{post.title}</td>
                <td className="p-4 text-gray-600">{post.category}</td>
                <td className="p-4">
                  {post.published ? (
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded font-medium">Published</span>
                  ) : (
                    <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded font-medium">Draft</span>
                  )}
                </td>
                <td className="p-4">
                  <Link href={`/admin/posts/${post.id}/edit`} className="text-blue-600 hover:underline mr-4">Edit</Link>
                  {/* Delete functionality would be implemented with a Client Component or Server Action */}
                  <span className="text-red-600 hover:underline cursor-pointer">Delete</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
