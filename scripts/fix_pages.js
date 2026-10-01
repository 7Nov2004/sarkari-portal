const fs = require('fs');
const path = require('path');

const pages = {
  'src/app/contact/page.tsx': `import type { Metadata } from 'next';
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
}`,
  'src/app/about/page.tsx': `import type { Metadata } from 'next';

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
}`,
  'src/app/privacy-policy/page.tsx': `import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | गोपनीयता नीति',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl prose prose-blue">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p>Last updated: ${new Date().toLocaleDateString()}</p>
      <p>At GovPortal.online, accessible from https://govportal.online, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by GovPortal.online and how we use it.</p>
      
      <h2 className="text-2xl font-bold mt-6 mb-4">Log Files</h2>
      <p>GovPortal.online follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.</p>

      <h2 className="text-2xl font-bold mt-6 mb-4">Cookies and Web Beacons</h2>
      <p>Like any other website, GovPortal.online uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience.</p>

      <h2 className="text-2xl font-bold mt-6 mb-4">Google DoubleClick DART Cookie</h2>
      <p>Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy.</p>
    </div>
  );
}`,
  'src/app/terms/page.tsx': `import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions',
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl prose prose-blue">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
      <p>Welcome to GovPortal.online!</p>
      <p>These terms and conditions outline the rules and regulations for the use of GovPortal.online's Website, located at https://govportal.online.</p>
      <h2 className="text-2xl font-bold mt-6 mb-4">License</h2>
      <p>Unless otherwise stated, GovPortal.online and/or its licensors own the intellectual property rights for all material on GovPortal.online. All intellectual property rights are reserved. You may access this from GovPortal.online for your own personal use subjected to restrictions set in these terms and conditions.</p>
      <h2 className="text-2xl font-bold mt-6 mb-4">Content Liability</h2>
      <p>We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website.</p>
    </div>
  );
}`,
  'src/app/disclaimer/page.tsx': `import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer | अस्वीकरण',
};

export default function DisclaimerPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl prose prose-blue">
      <h1 className="text-3xl font-bold mb-6">Disclaimer</h1>
      <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8">
        <p className="font-bold text-red-700">Important Notice:</p>
        <p className="text-red-900">GovPortal.online is an independent educational and informational portal. We are <strong>NOT</strong> affiliated, associated, authorized, endorsed by, or in any way officially connected with any government agency, department, or organization.</p>
      </div>
      <p>All the information on this website - https://govportal.online - is published in good faith and for general information purpose only. GovPortal.online does not make any warranties about the completeness, reliability and accuracy of this information.</p>
      <h2 className="text-2xl font-bold mt-6 mb-4">External Links</h2>
      <p>From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. We strongly advise you to check the official government websites for the most accurate and up-to-date information before applying for any job or scheme.</p>
    </div>
  );
}`
};

for (const [filepath, content] of Object.entries(pages)) {
  fs.writeFileSync(path.join(process.cwd(), filepath), content, 'utf8');
}
console.log("Fixed corrupted unicode pages successfully.");
