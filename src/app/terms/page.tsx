import type { Metadata } from 'next';

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
}