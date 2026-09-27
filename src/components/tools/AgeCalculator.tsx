import { useState } from 'react';

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

    setResult(`${years} Years, ${months} Months, ${days} Days`);
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
}