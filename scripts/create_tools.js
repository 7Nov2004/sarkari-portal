const fs = require('fs');
const path = require('path');

const components = {
  "AgeCalculator.tsx": `import { useState } from 'react';

export default function AgeCalculator() {
  const [dob, setDob] = useState('');
  const [targetDate, setTargetDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [result, setResult] = useState('');

  const calculateAge = () => {
    if (!dob || !targetDate) return;
    const d1 = new Date(dob);
    const d2 = new Date(targetDate);
    
    let years = d2.getFullYear() - d1.getFullYear();
    let months = d2.getMonth() - d1.getMonth();
    let days = d2.getDate() - d1.getDate();

    if (days < 0) {
      months--;
      days += new Date(d2.getFullYear(), d2.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    setResult(\`\${years} Years, \${months} Months, \${days} Days\`);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-blue-800">Age Calculator</h1>
      <p className="text-gray-600 mb-6">Calculate your exact age for Sarkari Job application forms.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block mb-2 font-medium">Date of Birth</label>
          <input type="date" value={dob} onChange={e => setDob(e.target.value)} className="w-full border p-2 rounded" />
        </div>
        <div>
          <label className="block mb-2 font-medium">Age at Date</label>
          <input type="date" value={targetDate} onChange={e => setTargetDate(e.target.value)} className="w-full border p-2 rounded" />
        </div>
      </div>
      <button onClick={calculateAge} className="bg-blue-600 text-white px-6 py-2 rounded font-bold hover:bg-blue-700">Calculate</button>
      {result && <div className="mt-6 p-4 bg-green-100 border border-green-300 text-green-900 rounded-lg text-xl font-bold">Your Age: {result}</div>}
    </div>
  );
}`,
  
  "ImageCompressor.tsx": `import { useState, useRef } from 'react';

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
}`,

  "SignatureResizer.tsx": `import { useState } from 'react';

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
}`,

  "ImageResizer.tsx": `import { useState } from 'react';

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
}`,

  "ImageToPDF.tsx": `import { useState } from 'react';
import jsPDF from 'jspdf';

export default function ImageToPDF() {
  const [file, setFile] = useState<File | null>(null);

  const handleConvert = () => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const pdf = new jsPDF({ orientation: img.width > img.height ? 'landscape' : 'portrait', unit: 'px', format: [img.width, img.height] });
        pdf.addImage(img, 'JPEG', 0, 0, img.width, img.height);
        pdf.save('document.pdf');
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-blue-800">Image to PDF Converter</h1>
      <p className="text-gray-600 mb-6">Convert your marksheets or ID proofs from JPG/PNG to PDF format.</p>
      <input type="file" accept="image/*" onChange={e => setFile(e.target.files?.[0] || null)} className="mb-4 block w-full border p-2" />
      <button onClick={handleConvert} disabled={!file} className="bg-blue-600 text-white px-6 py-2 rounded font-bold disabled:opacity-50">Download PDF</button>
    </div>
  );
}`,

  "AddNameDate.tsx": `import { useState } from 'react';

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
}`,

  "PhotoSignJoiner.tsx": `import { useState } from 'react';

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
}`,

  "FormatConverter.tsx": `import { useState } from 'react';

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
          <a href={result} download={\`converted.\${format.split('/')[1]}\`} className="bg-green-600 text-white px-4 py-2 rounded inline-block">Download</a>
        </div>
      )}
    </div>
  );
}`
};

Object.entries(components).forEach(([name, content]) => {
  fs.writeFileSync(path.join(process.cwd(), 'src/components/tools', name), content, 'utf8');
});

console.log("All tools created.");
