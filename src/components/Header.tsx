import Link from 'next/link';
import { Search } from 'lucide-react';
import SearchBar from './SearchBar';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-blue-700 text-white shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-bold text-2xl tracking-tight">
            Sarkari<span className="text-yellow-400">Portal</span>
          </Link>
          <nav className="hidden md:flex gap-4 text-sm font-medium">
            <Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link>
            <Link href="/category/JOB" className="hover:text-yellow-400 transition-colors">Jobs</Link>
            <Link href="/category/RESULT" className="hover:text-yellow-400 transition-colors">Results</Link>
            <Link href="/category/ADMIT_CARD" className="hover:text-yellow-400 transition-colors">Admit Card</Link>
            <Link href="/category/YOJANA" className="hover:text-yellow-400 transition-colors">Yojana</Link>
            <Link href="/category/SARKARI_KAAM" className="hover:text-yellow-400 transition-colors">Sarkari Kaam</Link>
            <Link href="/category/SCHOLARSHIP" className="hover:text-yellow-400 transition-colors">Scholarship</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <SearchBar variant="header" className="hidden sm:block w-64" />
          {/* Mobile menu toggle could go here */}
        </div>
      </div>
    </header>
  );
}
