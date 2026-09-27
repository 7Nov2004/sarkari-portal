import { useState } from 'react';

export default function ImageResizer() {
  const [file, setFile] = useState<File | null>(null);
  const [w, setW] = useState(200);
  const [h, setH] = useState(230);
  const [result, setResult] = useState<string | null>(null);

  const handleResize = () => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = w; canvas.height = h;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, w, h);
        ctx.drawImage(img, 0, 0, w, h);
        setResult(canvas.toDataURL('image/jpeg', 0.9));
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-blue-800">Image Resizer (Pixels)</h1>
      <input type="file" accept="image/*" onChange={e => setFile(e.target.files?.[0] || null)} className="mb-4 block w-full border p-2" />
      <div className="flex gap-4 mb-4">
        <div><label className="block text-sm">Width (px)</label><input type="number" value={w} onChange={e => setW(Number(e.target.value))} className="border p-2 w-24" /></div>
        <div><label className="block text-sm">Height (px)</label><input type="number" value={h} onChange={e => setH(Number(e.target.value))} className="border p-2 w-24" /></div>
      </div>
      <button onClick={handleResize} disabled={!file} className="bg-blue-600 text-white px-6 py-2 rounded font-bold disabled:opacity-50">Resize</button>
      {result && (
        <div className="mt-6">
          <img src={result} alt="Resized" className="border max-w-xs mb-4" />
          <a href={result} download="resized.jpg" className="bg-green-600 text-white px-4 py-2 rounded inline-block">Download</a>
        </div>
      )}
    </div>
  );
}