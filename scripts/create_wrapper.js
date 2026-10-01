const fs = require('fs');

fs.writeFileSync("src/app/tools/[toolId]/page.tsx", `import { Metadata } from 'next';
import ToolWrapper from '@/components/tools/ToolWrapper';

export const metadata: Metadata = {
  title: 'Free Sarkari Tools - Resizer, Compressor, Calculator',
  description: 'Use our free tools to resize images, compress photos to 20kb/50kb, calculate age, add name and date to photos, and more.',
};

export default function ToolPage({ params }: { params: { toolId: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <ToolWrapper toolId={params.toolId} />
    </div>
  );
}`);

fs.writeFileSync("src/components/tools/ToolWrapper.tsx", `"use client";
import { useSearchParams } from 'next/navigation';
import AgeCalculator from './AgeCalculator';
import ImageCompressor from './ImageCompressor';
import SignatureResizer from './SignatureResizer';
import ImageResizer from './ImageResizer';
import ImageToPDF from './ImageToPDF';
import AddNameDate from './AddNameDate';
import PhotoSignJoiner from './PhotoSignJoiner';
import FormatConverter from './FormatConverter';

export default function ToolWrapper({ toolId }: { toolId: string }) {
  const searchParams = useSearchParams();
  const target = searchParams.get('target');

  const renderTool = () => {
    switch (toolId) {
      case 'age-calculator': return <AgeCalculator />;
      case 'compressor': return <ImageCompressor defaultTarget={target ? parseInt(target) : 50} />;
      case 'signature-resizer': return <SignatureResizer />;
      case 'image-resizer': return <ImageResizer />;
      case 'image-to-pdf': return <ImageToPDF />;
      case 'add-name-date': return <AddNameDate />;
      case 'photo-sign-joiner': return <PhotoSignJoiner />;
      case 'format-converter': return <FormatConverter />;
      default: return <div className="text-center p-12 text-red-500">Tool not found or under construction.</div>;
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      {renderTool()}
    </div>
  );
}`);
console.log("Wrapper written");
