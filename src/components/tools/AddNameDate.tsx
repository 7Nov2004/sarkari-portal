import { useState } from 'react';

export default function AddNameDate() {
  const [file, setFile] = useState<File | null>(null);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [result, setResult] = useState<string | null>(null);

  const handleGenerate = () => {
    if (!file || !name || !date) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const extraHeight = 60;
        canvas.width = img.width;
        canvas.height = img.height + extraHeight;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
        
        ctx.fillStyle = '#000000';
        ctx.font = '24px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(name.toUpperCase(), canvas.width / 2, img.height + 25);
        ctx.fillText(date, canvas.width / 2, img.height + 50);

        setResult(canvas.toDataURL('image/jpeg', 0.9));
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-blue-800">Add Name & Date on Photo</h1>
      <p className="text-gray-600 mb-6">Easily print your Name and Date of Photo at the bottom of your passport photo (SSC/UPSC standard).</p>
      <input type="file" accept="image/*" onChange={e => setFile(e.target.files?.[0] || null)} className="mb-4 block w-full border p-2" />
      <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} className="mb-2 block w-full border p-2" />
      <input type="text" placeholder="Date (e.g. 15-08-2026)" value={date} onChange={e => setDate(e.target.value)} className="mb-4 block w-full border p-2" />
      <button onClick={handleGenerate} disabled={!file || !name} className="bg-blue-600 text-white px-6 py-2 rounded font-bold disabled:opacity-50">Generate Photo</button>
      {result && (
        <div className="mt-6">
          <img src={result} alt="Generated" className="border max-w-xs mb-4" />
          <a href={result} download="photo-with-name.jpg" className="bg-green-600 text-white px-4 py-2 rounded inline-block">Download</a>
        </div>
      )}
    </div>
  );
}