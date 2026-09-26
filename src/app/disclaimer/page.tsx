import type { Metadata } from 'next';

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
}