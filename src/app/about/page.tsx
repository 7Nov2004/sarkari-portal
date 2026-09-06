import type { Metadata } from 'next';
import Link from 'next/link';
import { Award, Target, Users, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | हमारे बारे में',
  description: 'About GovPortal.online - Independent educational and government information portal.',
  alternates: {
    canonical: 'https://govportal.online/about',
  },
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">हमारे बारे में (About GovPortal)</h1>
        <p className="text-lg text-blue-700 font-medium mb-8">
          भारत के युवाओं और नागरिकों के लिए सबसे तेज़, स्पष्ट और विश्वसनीय सूचना मंच।
        </p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Target className="text-blue-600" size={24} /> हमारा मिशन (Our Mission)
            </h2>
            <p>
              GovPortal.online का मुख्य उद्देश्य देश के करोड़ों युवाओं और आम नागरिकों तक सरकारी
              नौकरियों (Sarkari Jobs), परीक्षाओं के परिणाम (Results), प्रवेश पत्र (Admit Cards),
              और जन-कल्याणकारी योजनाओं (Government Yojanas) की सटीक और अद्यतन जानकारी को सरल हिंदी
              व अंग्रेजी में निःशुल्क उपलब्ध कराना है।
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <BookOpen className="text-green-600" size={24} /> हम क्या प्रदान करते हैं?
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li><strong>सरकारी नौकरियां (Latest Jobs):</strong> केंद्र और सभी राज्यों की भर्तियों की अधिसूचना, पात्रता और अंतिम तिथि।</li>
              <li><strong>परीक्षा परिणाम व उत्तर कुंजी:</strong> SSC, UPSC, Railway, Banking व Police परीक्षाओं के परिणाम।</li>
              <li><strong>कल्याणकारी योजनाएं (Yojana):</strong> पीएम आवास, पीएम किसान, लाड़ली लक्ष्मी, छात्रवृत्ति योजनाएं।</li>
              <li><strong>नागरिक सेवाएं (Sarkari Kaam):</strong> पैन कार्ड, वोटर लिस्ट, राशन कार्ड, भूलेख, समग्र आईडी के आधिकारिक लिंक्स।</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Users className="text-purple-600" size={24} /> स्वतंत्र पोर्टल (Independent Identity)
            </h2>
            <p>
              हम स्पष्ट करते हैं कि हम एक स्वतंत्र डिजिटल सूचना मंच हैं। हम किसी सरकारी विभाग का
              हिस्सा नहीं हैं। हम उपयोगकर्ताओं को सीधे संबंधित सरकारी विभागों के मूल आधिकारिक वेब
              पोर्टल से जोड़ते हैं ताकि पारदर्शिता और सुरक्षा बनी रहे।
            </p>
          </section>

          <div className="border-t pt-6 text-sm text-gray-500">
            विकसित किया गया: <strong>AJ Studio by Aayush Jaiswal</strong> | संपर्क करें:{' '}
            <Link href="/contact" className="text-blue-600 underline font-medium">
              यहाँ क्लिक करें
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
