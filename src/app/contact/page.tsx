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
        <h1 className="text-3xl font-bold text-gray-900 mb-4">हमसे संपर्क करें (Contact Us)</h1>
        <p className="text-gray-600 mb-8">
          यदि आपके पास पोर्टल पर दी गई किसी भी जानकारी के संबंध में कोई सुझाव, प्रश्न या सुधार है,
          तो आप हमसे संपर्क कर सकते हैं।
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 flex items-start gap-4">
            <Mail className="text-blue-600 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-bold text-blue-900 mb-1">ईमेल सहायता (Email)</h3>
              <p className="text-sm text-gray-600 mb-2">सुझाव और सहायता के लिए हमें लिखें:</p>
              <a
                href="mailto:contact@govportal.online"
                className="text-blue-700 font-semibold text-sm hover:underline"
              >
                contact@govportal.online
              </a>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-xl border border-green-100 flex items-start gap-4">
            <MessageSquare className="text-green-600 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-bold text-green-900 mb-1">प्रतिक्रिया (Feedback)</h3>
              <p className="text-sm text-gray-600">
                हमारी टीम 24 से 48 व्यावसायिक घंटों के भीतर आपके संदेश की समीक्षा करती है।
              </p>
            </div>
          </div>
        </div>

        <div className="border-t pt-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">त्वरित संदेश भेजें (Quick Message)</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">आपका नाम</label>
                <input
                  type="text"
                  placeholder="अपना नाम दर्ज करें"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ईमेल पता</label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">संदेश का विषय</label>
              <input
                type="text"
                placeholder="विषय (Subject)"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">आपका संदेश</label>
              <textarea
                rows={4}
                placeholder="अपना संदेश यहाँ लिखें..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="button"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2.5 rounded-lg transition-colors text-sm"
            >
              संदेश भेजें (Send Message)
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
