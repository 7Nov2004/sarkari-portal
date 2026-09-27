import { useState, useRef } from 'react';

export default function ImageCompressor({ defaultTarget }: { defaultTarget: number }) {
  const [file, setFile] = useState<File | null>(null);
  const [targetKb, setTargetKb] = useState(defaultTarget);
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleCompress = () => {
    if (!file) return;
    setLoading(true);
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        ctx.drawImage(img, 0, 0);

        let quality = 0.9;
        let dataUrl = canvas.toDataURL('image/jpeg', quality);
        let currentKb = (dataUrl.length * (3/4)) / 1024;

        // Simple loop to reduce quality
        while (currentKb > targetKb && quality > 0.1) {
          quality -= 0.05;
          dataUrl = canvas.toDataURL('image/jpeg', quality);
          currentKb = (dataUrl.length * (3/4)) / 1024;
        }

        setResult(dataUrl);
        setLoading(false);
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-blue-800">Photo Compressor (Under {targetKb}KB)</h1>
      <p className="text-gray-600 mb-6">Compress your passport photo or signature for online form uploads.</p>
      <div className="mb-4">
        <input type="file" accept="image/*" onChange={e => setFile(e.target.files?.[0] || null)} className="block w-full border p-2" />
      </div>
      <div className="mb-6">
        <label className="block mb-2 font-medium">Target Size (KB)</label>
        <input type="number" value={targetKb} onChange={e => setTargetKb(Number(e.target.value))} className="border p-2 rounded" />
      </div>
      <button onClick={handleCompress} disabled={!file || loading} className="bg-blue-600 text-white px-6 py-2 rounded font-bold disabled:opacity-50">
        {loading ? 'Compressing...' : 'Compress Image'}
      </button>

      {result && (
        <div className="mt-6">
          <p className="mb-2 text-green-700 font-bold">Success! Click below to download.</p>
          <img src={result} alt="Compressed" className="border max-w-xs mb-4" />
          <a href={result} download="compressed-photo.jpg" className="bg-green-600 text-white px-4 py-2 rounded inline-block font-bold">Download Photo</a>
        </div>
      )}
    </div>
  );
}