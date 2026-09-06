import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | गोपनीयता नीति',
  description: 'Privacy Policy of GovPortal.online - Information collection and usage policy.',
  alternates: {
    canonical: 'https://govportal.online/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">गोपनीयता नीति (Privacy Policy)</h1>
        <p className="text-sm text-gray-500 mb-8">अंतिम अपडेट: 6 सितम्बर 2026</p>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">1. हम कौन सी जानकारी एकत्र करते हैं?</h2>
            <p>
              GovPortal.online पर सामान्य रूप से ब्राउज़ करने हेतु किसी भी उपयोगकर्ता को व्यक्तिगत
              पहचान जैसे आधार नंबर, बैंक खाता या पासवर्ड प्रदान करने की आवश्यकता नहीं होती है। हम
              केवल मानक सर्वर लॉग डेटा (जैसे ब्राउज़र प्रकार, विज़िट किया गया समय, आईपी पता) एकत्र कर
              सकते हैं जो वेबसाइट के प्रदर्शन और सुरक्षा सुधार हेतु उपयोग होता है।
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">2. कुकीज़ (Cookies) और विज्ञापन</h2>
            <p>
              वेबसाइट अनुभव को बेहतर बनाने तथा भविष्य में प्रासंगिक विज्ञापन (जैसे Google AdSense)
              प्रदर्शित करने हेतु तृतीय-पक्ष विक्रेता कुकीज़ का उपयोग कर सकते हैं। उपयोगकर्ता अपने
              ब्राउज़र सेटिंग्स में जाकर किसी भी समय कुकीज़ को अक्षम (disable) कर सकते हैं।
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">3. बच्चों की ऑनलाइन सुरक्षा</h2>
            <p>
              हम 13 वर्ष से कम आयु के बच्चों से जानबूझकर कोई भी व्यक्तिगत पहचान योग्य जानकारी एकत्र
              नहीं करते हैं।
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">4. बाहरी वेबसाइटों की नीतियां</h2>
            <p>
              पोर्टल पर दिए गए आधिकारिक लिंक तृतीय-पक्ष सरकारी या निजी पोर्टल के हैं। उन वेबसाइटों
              पर जाने के बाद उनकी अपनी गोपनीयता नीति लागू होती है।
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
