import { useState } from 'react';

export default function PhotoSignJoiner() {
  const [photo, setPhoto] = useState<File | null>(null);
  const [sign, setSign] = useState<File | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const handleJoin = async () => {
    if (!photo || !sign) return;
    
    const loadImage = (f: File): Promise<HTMLImageElement> => new Promise((res) => {
      const r = new FileReader();
      r.onload = (e) => { const i = new Image(); i.onload = () => res(i); i.src = e.target?.result as string; };
      r.readAsDataURL(f);
    });

    const pImg = await loadImage(photo);
    const sImg = await loadImage(sign);

    const canvas = document.createElement('canvas');
    canvas.width = Math.max(pImg.width, sImg.width);
    canvas.height = pImg.height + sImg.height;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw photo centered
    ctx.drawImage(pImg, (canvas.width - pImg.width)/2, 0);
    // Draw sign centered below
    ctx.drawImage(sImg, (canvas.width - sImg.width)/2, pImg.height);
    
    setResult(canvas.toDataURL('image/jpeg', 0.9));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-blue-800">Photo & Sign Joiner</h1>
      <div className="mb-4">
        <label className="block mb-1 font-bold">Select Passport Photo</label>
        <input type="file" accept="image/*" onChange={e => setPhoto(e.target.files?.[0] || null)} className="block w-full border p-2" />
      </div>
      <div className="mb-6">
        <label className="block mb-1 font-bold">Select Signature Photo</label>
        <input type="file" accept="image/*" onChange={e => setSign(e.target.files?.[0] || null)} className="block w-full border p-2" />
      </div>
      <button onClick={handleJoin} disabled={!photo || !sign} className="bg-blue-600 text-white px-6 py-2 rounded font-bold disabled:opacity-50">Join Images</button>
      {result && (
        <div className="mt-6">
          <img src={result} alt="Joined" className="border max-w-xs mb-4" />
          <a href={result} download="photo-sign-joined.jpg" className="bg-green-600 text-white px-4 py-2 rounded inline-block">Download</a>
        </div>
      )}
    </div>
  );
}