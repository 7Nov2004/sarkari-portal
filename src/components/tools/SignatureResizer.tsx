import { useState } from 'react';

export default function SignatureResizer() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const handleResize = () => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        // Standard Sarkari Signature Size
        canvas.width = 140; 
        canvas.height = 60;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        setResult(canvas.toDataURL('image/jpeg', 0.8));
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-blue-800">Signature Resizer</h1>
      <p className="text-gray-600 mb-6">Automatically resize your signature to standard 140x60 pixels for Govt Forms.</p>
      <input type="file" accept="image/*" onChange={e => setFile(e.target.files?.[0] || null)} className="mb-4 block w-full border p-2" />
      <button onClick={handleResize} disabled={!file} className="bg-blue-600 text-white px-6 py-2 rounded font-bold disabled:opacity-50">Resize Signature</button>
      {result && (
        <div className="mt-6">
          <img src={result} alt="Signature" className="border mb-4" />
          <a href={result} download="signature-resized.jpg" className="bg-green-600 text-white px-4 py-2 rounded inline-block">Download</a>
        </div>
      )}
    </div>
  );
}