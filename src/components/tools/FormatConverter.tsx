import { useState } from 'react';

export default function FormatConverter() {
  const [file, setFile] = useState<File | null>(null);
  const [format, setFormat] = useState('image/png');
  const [result, setResult] = useState<string | null>(null);

  const handleConvert = () => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width; canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, img.width, img.height);
        ctx.drawImage(img, 0, 0);
        setResult(canvas.toDataURL(format, 0.9));
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-blue-800">Image Format Converter</h1>
      <input type="file" accept="image/*" onChange={e => setFile(e.target.files?.[0] || null)} className="mb-4 block w-full border p-2" />
      <select value={format} onChange={e => setFormat(e.target.value)} className="mb-4 block w-full border p-2">
        <option value="image/png">Convert to PNG</option>
        <option value="image/jpeg">Convert to JPG/JPEG</option>
        <option value="image/webp">Convert to WEBP</option>
      </select>
      <button onClick={handleConvert} disabled={!file} className="bg-blue-600 text-white px-6 py-2 rounded font-bold disabled:opacity-50">Convert Image</button>
      {result && (
        <div className="mt-6">
          <img src={result} alt="Converted" className="border max-w-xs mb-4" />
          <a href={result} download={`converted.${format.split('/')[1]}`} className="bg-green-600 text-white px-4 py-2 rounded inline-block">Download</a>
        </div>
      )}
    </div>
  );
}