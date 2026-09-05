import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">SarkariPortal</h3>
            <p className="text-sm">
              Your trusted independent information portal for the latest updates on jobs, results, schemes, and more.
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/category/JOB" className="hover:text-white transition-colors">Sarkari Jobs</Link></li>
              <li><Link href="/category/RESULT" className="hover:text-white transition-colors">Sarkari Results</Link></li>
              <li><Link href="/category/YOJANA" className="hover:text-white transition-colors">Government Schemes</Link></li>
              <li><Link href="/category/ADMIT_CARD" className="hover:text-white transition-colors">Admit Cards</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm space-y-4">
          <div className="bg-yellow-900/30 border border-yellow-700/50 p-4 rounded-lg text-yellow-500 max-w-3xl mx-auto">
            <p className="font-bold mb-1">Disclaimer</p>
            <p>This is an independent information portal and is not affiliated with, endorsed by, or connected to any government department, agency, or organization. We provide information gathered from public sources for educational and informational purposes only.</p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <p>&copy; {new Date().getFullYear()} SarkariPortal. All rights reserved.</p>
            <p className="text-gray-500 font-medium text-xs">Developed by AJ Studio by Aayush Jaiswal</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
