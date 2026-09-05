import Link from 'next/link';
import { LayoutDashboard, FileText, PlusCircle, LogOut } from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="p-4 bg-gray-950 font-bold text-xl flex items-center justify-between">
          <span>Admin Panel</span>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link href="/admin" className="flex items-center gap-3 p-3 hover:bg-gray-800 rounded-lg text-sm transition-colors">
            <LayoutDashboard size={18} /> Dashboard
          </Link>
          <Link href="/admin/posts" className="flex items-center gap-3 p-3 hover:bg-gray-800 rounded-lg text-sm transition-colors">
            <FileText size={18} /> All Posts
          </Link>
          <Link href="/admin/posts/new" className="flex items-center gap-3 p-3 hover:bg-gray-800 rounded-lg text-sm transition-colors text-blue-400">
            <PlusCircle size={18} /> Add New Post
          </Link>
        </nav>
        <div className="p-4 border-t border-gray-800">
          <Link href="/" className="flex items-center gap-3 p-2 hover:bg-red-900/50 hover:text-red-400 rounded-lg text-sm transition-colors text-gray-400">
            <LogOut size={18} /> Back to Site
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}
