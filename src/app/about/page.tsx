import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | हमारे बारे में',
  description: 'Learn more about GovPortal.online, your trusted source for Sarkari Jobs and Results.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl prose prose-blue">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">हमारे बारे में (About Us)</h1>
      <p>
        <strong>GovPortal.online</strong> भारत का एक तेजी से बढ़ता हुआ एजुकेशनल और इंफॉर्मेशनल पोर्टल है। हमारा मुख्य उद्देश्य छात्रों और नौकरी की तलाश कर रहे युवाओं तक सबसे सटीक और तेज जानकारी पहुँचाना है।
      </p>
      <h2 className="text-2xl font-bold mt-8 mb-4">हम क्या करते हैं?</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>लेटेस्ट सरकारी नौकरी (Sarkari Jobs) की अपडेट्स।</li>
        <li>परीक्षा परिणाम (Sarkari Results) और मेरिट लिस्ट।</li>
        <li>एडमिट कार्ड (Admit Cards) और सिलेबस।</li>
        <li>केंद्र और राज्य सरकार की योजनाएं (Sarkari Yojana)।</li>
      </ul>
      <p>
        हम किसी भी सरकारी विभाग से नहीं जुड़े हैं। हम सिर्फ विभिन्न पब्लिक डोमेन और सरकारी वेबसाइट्स से जानकारी इकट्ठा करके आप तक आसान भाषा में पहुँचाते हैं।
      </p>
    </div>
  );
}