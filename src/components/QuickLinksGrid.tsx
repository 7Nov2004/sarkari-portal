'use client';

import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

const sections = [
  {
    title: "नया लिंक (Trending)",
    links: [
      { name: "SIR 2026 Draft Voter List", url: "/search?q=Voter+List", isNew: true },
      { name: "गर्भवती महिला को रु 11000 की सहायता", url: "/search?q=Mahila+Sahayata", isNew: true },
      { name: "महिलाओं को हर महीने 2,500 रुपये", url: "/search?q=Mahila+Yojana", isNew: true },
      { name: "दिल्ली लक्ष्मी योजना (2,500 रुपये)", url: "/search?q=Delhi+Lakshmi+Yojana", isNew: true },
      { name: "बेटी को जन्म से रु 25000", url: "/search?q=Beti+Yojana" },
      { name: "युवा के लिए 9000 हर महीने", url: "/search?q=Yuva+Yojana" },
      { name: "लाड़ली लक्ष्मी योजना", url: "/category/YOJANA" },
      { name: "PF अकाउंट वालो को मिलेगा पैसा", url: "/search?q=PF+Account" },
      { name: "बेरोजगार युवा को 1000 रुपये हर महीने", url: "/category/YOJANA" },
      { name: "रोजगार के लिए 10 लाख तक लोन", url: "/category/YOJANA" },
    ],
  },
  {
    title: "सरकारी काम (Citizen Services)",
    links: [
      { name: "NSP नेशनल स्कालरशिप OTR", url: "/search?q=NSP+Scholarship", isNew: true },
      { name: "उद्यम रजिस्ट्रेशन सर्टिफिकेट", url: "/search?q=Udyam+Registration", isNew: true },
      { name: "फॉर्मर रजिस्ट्री (Farmer Registry)", url: "/search?q=Farmer+Registry" },
      { name: "पीएम उज्ज्वला नई कनेक्शन", url: "/search?q=PM+Ujjwala" },
      { name: "पासपोर्ट सेवा", url: "/search?q=Passport+Seva" },
      { name: "चेक बिजली बिल", url: "/search?q=Bijli+Bill" },
      { name: "आधार कार्ड (Aadhar Card)", url: "/search?q=Aadhar+Card" },
      { name: "पैनकार्ड (PAN Card)", url: "/search?q=PAN+Card" },
      { name: "पीएम किसान (PM Kisan)", url: "/category/YOJANA" },
      { name: "भूलेख (Bhulekh / Land Records)", url: "/search?q=Bhulekh" },
      { name: "नरेगा (जॉबकार्ड, हाज़िरी)", url: "/search?q=NREGA" },
      { name: "ई श्रम कार्ड (E-Shram Card)", url: "/search?q=E-Shram" },
    ],
  },
  {
    title: "सरकारी योजना (Govt Schemes)",
    links: [
      { name: "नयी योजना 2026", url: "/category/YOJANA", isNew: true },
      { name: "पीएम योजना (PM Schemes)", url: "/category/YOJANA" },
      { name: "महिला की योजना (Women)", url: "/search?q=Mahila+Yojana" },
      { name: "बेटी की योजना (Girl Child)", url: "/search?q=Beti+Yojana" },
      { name: "लोन वाली योजना (Loan)", url: "/search?q=Loan+Yojana" },
      { name: "किसान की योजना (Farmer)", url: "/search?q=Kisan+Yojana" },
      { name: "छात्रों की योजना (Students)", url: "/search?q=Scholarship" },
      { name: "गरीब की योजना (BPL)", url: "/search?q=Garib+Yojana" },
      { name: "पीएम इंटर्नशिप योजना", url: "/search?q=PM+Internship" },
      { name: "पीएम सूर्य घर योजना", url: "/search?q=Surya+Ghar", isNew: true },
    ],
  },
  {
    title: "स्कॉलरशिप (Scholarships)",
    links: [
      { name: "Class 11th, 12th, ITI Scholarship", url: "/category/SCHOLARSHIP", isNew: true },
      { name: "छात्रों को रु 50000 तक स्कॉलरशिप", url: "/search?q=50000+Scholarship", isNew: true },
      { name: "रु 300 से 2400 प्रति वर्ष स्कॉलरशिप", url: "/category/SCHOLARSHIP" },
      { name: "अजीम प्रेमजी स्कॉलरशिप (रु 30000)", url: "/search?q=Azim+Premji" },
      { name: "SBI आशा स्कॉलरशिप (कक्षा 9 से 12)", url: "/search?q=SBI+Asha" },
      { name: "रिलायंस फाउंडेशन स्कालरशिप रु 60000", url: "/search?q=Reliance+Foundation" },
      { name: "डॉ अम्बेडकर मेधावी छात्रवृत्ति", url: "/search?q=Ambedkar+Scholarship" },
      { name: "Mahindra EmpowerHer Scholarship", url: "/search?q=Mahindra+EmpowerHer" },
    ],
  },
  {
    title: "चुनाव व वोटर कार्ड (Elections)",
    links: [
      { name: "UP पंचायत चुनाव वोटर लिस्ट", url: "/search?q=Voter+List" },
      { name: "सरपंच /प्रधान /मुखिया का पैसा जाने", url: "/search?q=Panchayat+Paisa" },
      { name: "यू.पी. ग्राम पंचायत चुनाव", url: "/search?q=UP+Panchayat" },
      { name: "यूपी चुनाव में सीट कौन सा था जाने", url: "/search?q=Chunav+Seat" },
      { name: "बिहार वोटर लिस्ट डाउनलोड", url: "/search?q=Bihar+Voter+List" },
      { name: "वोटर कार्ड स्टेटस चेक", url: "/search?q=Voter+Card+Status" },
    ],
  },
  {
    title: "गाड़ी, लाइसेंस व अन्य (Licenses)",
    links: [
      { name: "ड्राइविंग लाइसेंस में मोबाइल अपडेट", url: "/search?q=Driving+License" },
      { name: "गाड़ी मालिक का नाम जाने", url: "/search?q=Vahan+Owner" },
      { name: "ड्राइविंग लाइसेंस का स्टेटस", url: "/search?q=DL+Status" },
      { name: "RC दुबारा प्रिंट करवाए", url: "/search?q=RC+Print" },
      { name: "चालान चेक करे (E-Challan)", url: "/search?q=Challan" },
      { name: "बैंक बैलेंस चेक (कॉल या मैसेज से)", url: "/search?q=Bank+Balance" },
      { name: "जन्म प्रमाण पत्र आवेदन (CRS)", url: "/search?q=Janam+Praman+Patra" },
      { name: "सुकन्या समृद्धि योजना कैलकुलेटर", url: "/search?q=Sukanya+Samriddhi" },
    ],
  },
  {
    title: "सिम, मोबाइल व बिजली बिल",
    links: [
      { name: "आपके नाम पर कितने सिम हैं?", url: "/search?q=Sim+Card+Check", isNew: true },
      { name: "चोरी हुई मोबाइल को ब्लॉक करे", url: "/search?q=Block+Mobile" },
      { name: "मिल जाने पर अनब्लॉक करे", url: "/search?q=Unblock+Mobile" },
      { name: "चेक बिजली बिल", url: "/search?q=Bijli+Bill" },
      { name: "बिजली बिल राहत योजना 2025", url: "/search?q=Bijli+Rahat" },
      { name: "बिजली बिल राहत कैलकुलेटर", url: "/search?q=Bijli+Calculator" },
    ],
  },
  {
    title: "लोन और सब्सिडी (Loans)",
    links: [
      { name: "पीएम विद्या लक्ष्मी योजना", url: "/search?q=Vidya+Lakshmi" },
      { name: "व्यापार के लिए 5 लाख लोन (UP)", url: "/search?q=Business+Loan" },
      { name: "ठेला वालो के लिए 10 हज़ार लोन", url: "/search?q=PM+SVANidhi" },
      { name: "ट्रैक्टर के लिए 3 लाख की सब्सिडी", url: "/search?q=Tractor+Subsidy" },
      { name: "बैटरी वाली स्प्रे मशीन सब्सिडी", url: "/search?q=Krishi+Yantra" },
      { name: "59 मिनट लोन योजना", url: "/search?q=59+Minute+Loan", isNew: true },
    ],
  },
];

export default function QuickLinksGrid() {
  return (
    <section className="mb-10 mt-6 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {sections.map((section, idx) => (
          <div key={idx} className="border border-gray-300 rounded-sm overflow-hidden bg-white shadow-sm flex flex-col">
            <div className="bg-[#005c99] text-white text-center py-2.5 px-2 font-bold text-[17px] border-b-2 border-[#003d66]">
              {section.title}
            </div>
            
            <div className="flex-grow flex flex-col">
              {section.links.map((link, linkIdx) => (
                <Link
                  key={linkIdx}
                  href={link.url}
                  className="flex items-start gap-2 p-2.5 border-b border-gray-200 hover:bg-blue-50 transition-colors group"
                >
                  <CheckCircle2 className="text-[#005c99] w-4 h-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-800 text-[15px] font-medium leading-snug group-hover:text-[#005c99]">
                    {link.name}
                    {link.isNew && (
                      <span className="ml-2 text-red-600 font-bold text-xs animate-pulse inline-block">
                        NEW
                      </span>
                    )}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
