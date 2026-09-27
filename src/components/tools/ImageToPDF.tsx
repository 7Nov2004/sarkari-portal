import { useState } from 'react';
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
}