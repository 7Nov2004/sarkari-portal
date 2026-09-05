'use client';

import { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SearchBar({ 
  className = "", 
  variant = "header" 
}: { 
  className?: string, 
  variant?: "header" | "hero" 
}) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    // Close suggestions when clicking outside
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.trim().length < 2) {
        setSuggestions([]);
        return;
      }
      setIsLoading(true);
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        const data = await res.json();
        setSuggestions(data);
      } catch (error) {
        console.error("Failed to fetch suggestions", error);
      } finally {
        setIsLoading(false);
      }
    };

    const debounceTimer = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(debounceTimer);
  }, [query]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setShowSuggestions(false);
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  const isHeader = variant === "header";

  return (
    <div ref={wrapperRef} className={`relative ${className}`}>
      <form onSubmit={handleSubmit} className="flex items-center w-full">
        {isHeader ? (
          <>
            <input 
              type="text" 
              value={query}
              onChange={(e) => { setQuery(e.target.value); setShowSuggestions(true); }}
              onFocus={() => { if(query.length >= 2) setShowSuggestions(true); }}
              placeholder="Search Jobs, Results..." 
              className="pl-9 pr-4 py-1.5 rounded-full bg-blue-800 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm w-full"
            />
            <Search className="absolute left-3 top-2 h-4 w-4 text-blue-300" />
          </>
        ) : (
          <>
            <input 
              type="text" 
              value={query}
              onChange={(e) => { setQuery(e.target.value); setShowSuggestions(true); }}
              onFocus={() => { if(query.length >= 2) setShowSuggestions(true); }}
              placeholder="Search for jobs, results, schemes..." 
              className="w-full px-6 py-3 text-gray-900 rounded-l-full focus:outline-none text-lg"
            />
            <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-8 py-3 rounded-r-full transition-colors">
              Search
            </button>
          </>
        )}
      </form>

      {/* Suggestions Dropdown */}
      {showSuggestions && query.trim().length >= 2 && (
        <div className={`absolute left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50 ${isHeader ? 'w-80' : 'w-full'}`}>
          {isLoading && suggestions.length === 0 ? (
            <div className="p-4 text-sm text-gray-500 text-center">Loading...</div>
          ) : suggestions.length > 0 ? (
            <ul className="divide-y divide-gray-100">
              {suggestions.map((item) => (
                <li key={item.id}>
                  <Link 
                    href={`/post/${item.slug}`} 
                    onClick={() => setShowSuggestions(false)}
                    className="flex flex-col p-3 hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-xs font-bold text-blue-600 mb-1">{item.category.replace('_', ' ')}</span>
                    <span className="text-sm font-medium text-gray-800 line-clamp-2">{item.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <button 
                  onClick={handleSubmit}
                  className="w-full text-left p-3 text-sm font-bold text-blue-600 hover:bg-blue-50 transition-colors"
                >
                  See all results for "{query}"
                </button>
              </li>
            </ul>
          ) : (
            <div className="p-4 text-sm text-gray-500 text-center">No suggestions found.</div>
          )}
        </div>
      )}
    </div>
  );
}
