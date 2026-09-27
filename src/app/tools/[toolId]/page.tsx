import { Metadata } from 'next';
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
}