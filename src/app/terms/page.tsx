import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | नियम एवं शर्तें',
  description: 'Terms and Conditions for using GovPortal.online portal.',
  alternates: {
    canonical: 'https://govportal.online/terms',
  },
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">नियम एवं शर्तें (Terms & Conditions)</h1>
        <p className="text-sm text-gray-500 mb-8">प्रभावी तिथि: 6 सितम्बर 2026</p>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">1. पोर्टल का उपयोग</h2>
            <p>
              GovPortal.online पर उपलब्ध कराई गई सामग्री केवल सूचनात्मक एवं मार्गदर्शन के लिए है।
              इस वेबसाइट का उपयोग करते समय आप इन नियमों और शर्तों का पूर्ण पालन करने के लिए सहमत होते हैं।
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">2. बौद्धिक संपदा अधिकार</h2>
            <p>
              वेबसाइट का लेआउट, डिजाइन, कोड, लोगो और सामग्री संरचना GovPortal.online के स्वामित्व
              में है। बिना पूर्व अनुमति के वेबसाइट सामग्री का व्यावसायिक पुनः प्रकाशन वर्जित है।
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">3. देयता की सीमा (Limitation of Liability)</h2>
            <p>
              GovPortal.online किसी भी प्रत्यक्ष या अप्रत्यक्ष नुकसान, परीक्षा आवेदन में चूक, या
              सरकारी विभागों द्वारा नियमों/तिथियों में किए गए अप्रत्याशित परिवर्तनों के लिए उत्तरदायी
              नहीं होगा। उपयोगकर्ताओं को सलाह दी जाती है कि वे हमेशा आधिकारिक अधिसूचना की जांच करें।
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">4. शर्तों में संशोधन</h2>
            <p>
              हम समय-समय पर इन शर्तों को संशोधित करने का अधिकार सुरक्षित रखते हैं। अद्यतन शर्तें
              इस पृष्ठ पर प्रकाशित होते ही प्रभावी मानी जाएंगी।
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
