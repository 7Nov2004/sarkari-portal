import type { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Disclaimer | अस्वीकरण',
  description: 'Disclaimer policy for GovPortal.online independent information portal.',
  alternates: {
    canonical: 'https://govportal.online/disclaimer',
  },
};

export default function DisclaimerPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12">
        <div className="flex items-center gap-3 text-blue-700 mb-6">
          <ShieldCheck size={36} />
          <h1 className="text-3xl font-bold">अस्वीकरण (Disclaimer)</h1>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg mb-8 flex items-start gap-3">
          <AlertTriangle className="text-amber-600 flex-shrink-0 mt-0.5" size={22} />
          <p className="text-amber-900 font-semibold text-sm md:text-base">
            GovPortal.online is an independent information portal and is NOT affiliated with,
            endorsed by, or connected to any government department, agency, or ministry.
          </p>
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed text-base">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">1. सूचना का उद्देश्य (Educational Purpose)</h2>
            <p>
              GovPortal.online पर प्रकाशित सभी जानकारी केवल सामान्य जन-सूचना, शैक्षिक एवं मार्गदर्शन
              के उद्देश्य से संकलित की जाती है। हम विभिन्न समाचार पत्रों, आधिकारिक रोजगार समाचारों
              और सार्वजनिक सरकारी पोर्टलों से जानकारी एकत्र करते हैं।
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">2. आधिकारिक पुष्टि (Official Verification)</h2>
            <p>
              यद्यपि हम सभी जानकारियों (जैसे परीक्षा तिथियां, पात्रता, आवेदन शुल्क) को सटीक रखने
              का पूर्ण प्रयास करते हैं, फिर भी किसी भी पद हेतु आवेदन करने या किसी योजना का लाभ लेने
              से पूर्व संबंधित विभाग की <strong>आधिकारिक वेबसाइट (Official Website)</strong> पर
              जारी मूल विज्ञापन/अधिसूचना को अवश्य पढ़ें।
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">3. बाहरी लिंक (Third-Party Links)</h2>
            <p>
              हमारी वेबसाइट पर बाहरी आधिकारिक वेबसाइटों के हाइपरलिंक दिए गए हैं। हम उन बाहरी वेबसाइटों
              की सामग्री, गोपनीयता नीतियों या उपलब्धता के लिए उत्तरदायी नहीं हैं।
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">4. संपर्क (Contact)</h2>
            <p>
              यदि आपको पोर्टल पर प्रकाशित किसी भी जानकारी में कोई त्रुटि दिखाई देती है, तो कृपया हमारे{' '}
              <Link href="/contact" className="text-blue-600 underline font-medium">
                संपर्क पृष्ठ
              </Link>{' '}
              के माध्यम से हमें सूचित करें ताकि त्वरित सुधार किया जा सके।
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
