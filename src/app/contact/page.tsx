import type { Metadata } from 'next';
import { Mail, MapPin, MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | संपर्क करें',
  description: 'Get in touch with GovPortal.online team for feedback, corrections or inquiries.',
  alternates: {
    canonical: 'https://govportal.online/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">संपर्क करें (Contact Us)</h1>
        <p className="text-gray-600 mb-8">
          यदि आपको हमारी वेबसाइट के कंटेंट से संबंधित कोई सवाल है, या आप किसी जॉब की जानकारी चाहते हैं, तो आप हमसे संपर्क कर सकते हैं।
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 flex items-start gap-4">
            <Mail className="text-blue-600 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-bold text-blue-900 mb-1">ईमेल करें (Email)</h3>
              <p className="text-sm text-gray-600 mb-2">किसी भी व्यावसायिक पूछताछ के लिए हमें ईमेल करें:</p>
              <a href="mailto:contact@govportal.online" className="text-blue-700 font-semibold text-sm hover:underline">
                contact@govportal.online
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}