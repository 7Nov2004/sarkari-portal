import Link from 'next/link';
import { XCircle, CheckCircle2 } from 'lucide-react';

const states = [
  "All India Job",
  "Uttar Pradesh",
  "Bihar",
  "Madhya Pradesh",
  "Chhattisgarh",
  "Rajasthan",
  "Maharastra",
  "Jharkhand",
  "Haryana",
  "Odisha",
  "Himachal Pradesh",
  "Delhi",
  "Punjab",
  "Uttarakhand",
  "Assam",
  "West Bengal"
];

export default function StateWiseJobsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* State Wise Job Card */}
        <div className="border border-gray-300 rounded-sm bg-white shadow-sm flex flex-col">
          {/* Header */}
          <div className="bg-white text-gray-800 text-center py-3 px-4 font-bold text-[18px] border-b border-gray-300 flex items-center justify-center gap-2">
            <XCircle size={20} className="text-gray-800 fill-gray-200" />
            State Wise Job
          </div>
          
          {/* List */}
          <div className="flex flex-col">
            {states.map((state, idx) => {
              const href = state === "All India Job" 
                ? "/all-india-jobs" 
                : `/search?q=${encodeURIComponent(state)}`;
                
              return (
                <Link
                  key={idx}
                  href={href}
                  className="flex items-center gap-3 py-2.5 px-4 border-b border-gray-200 hover:bg-gray-50 transition-colors group"
                >
                  <div className="text-blue-500 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM16.7071 9.70711C17.0976 9.31658 17.0976 8.68342 16.7071 8.29289C16.3166 7.90237 15.6834 7.90237 15.2929 8.29289L10.5 13.0858L8.70711 11.2929C8.31658 10.9024 7.68342 10.9024 7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071L9.79289 15.2071C10.1834 15.5976 10.8166 15.5976 11.2071 15.2071L16.7071 9.70711Z" />
                    </svg>
                  </div>
                  <span className="text-[#0056b3] text-[16px] group-hover:underline">
                    {state}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Placeholder for Qualification Wise Jobs (Bonus) */}
        <div className="border border-gray-300 rounded-sm bg-white shadow-sm flex flex-col h-fit">
          <div className="bg-white text-gray-800 text-center py-3 px-4 font-bold text-[18px] border-b border-gray-300 flex items-center justify-center gap-2">
            <XCircle size={20} className="text-gray-800 fill-gray-200" />
            Qualification Wise
          </div>
          <div className="flex flex-col">
            {["8th Pass Jobs", "10th Pass Jobs", "12th Pass Jobs", "ITI Jobs", "Diploma Jobs", "Graduate Jobs", "Post Graduate Jobs", "B.Tech / B.E Jobs", "Medical Jobs"].map((qual, idx) => (
              <Link
                key={idx}
                href={`/search?q=${encodeURIComponent(qual)}`}
                className="flex items-center gap-3 py-2.5 px-4 border-b border-gray-200 hover:bg-gray-50 transition-colors group"
              >
                <div className="text-blue-500 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM16.7071 9.70711C17.0976 9.31658 17.0976 8.68342 16.7071 8.29289C16.3166 7.90237 15.6834 7.90237 15.2929 8.29289L10.5 13.0858L8.70711 11.2929C8.31658 10.9024 7.68342 10.9024 7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071L9.79289 15.2071C10.1834 15.5976 10.8166 15.5976 11.2071 15.2071L16.7071 9.70711Z" />
                  </svg>
                </div>
                <span className="text-[#0056b3] text-[16px] group-hover:underline">
                  {qual}
                </span>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
