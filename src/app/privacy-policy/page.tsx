import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | गोपनीयता नीति',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl prose prose-blue">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p>Last updated: 26/9/2026</p>
      <p>At GovPortal.online, accessible from https://govportal.online, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by GovPortal.online and how we use it.</p>
      
      <h2 className="text-2xl font-bold mt-6 mb-4">Log Files</h2>
      <p>GovPortal.online follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.</p>

      <h2 className="text-2xl font-bold mt-6 mb-4">Cookies and Web Beacons</h2>
      <p>Like any other website, GovPortal.online uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience.</p>

      <h2 className="text-2xl font-bold mt-6 mb-4">Google DoubleClick DART Cookie</h2>
      <p>Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy.</p>
    </div>
  );
}