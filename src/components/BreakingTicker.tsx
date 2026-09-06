import Link from 'next/link';
import { Flame } from 'lucide-react';

const tickerItems = [
  {
    title: 'UP Police Constable Cut Off: क्या 185+ पर सिलेक्शन होगा? सेफ स्कोर व मेरिट लिस्ट',
    href: '/post/up-police-constable-cut-off-kya-185-par-selection-hoga',
  },
  {
    title: 'PM Kisan 18th Installment: इन 3 गलतियों से रुकेगी किस्त, तुरंत चेक करें बेनिफिशियरी स्टेटस',
    href: '/post/pm-kisan-18th-installment-in-galtiyo-se-atakegi-kist',
  },
  {
    title: 'फ्री सिलाई मशीन योजना: महिलाओं को मिल रहे ₹15,000 और टूलकिट, यहाँ से करें आवेदन',
    href: '/post/free-silai-machine-yojana-pm-vishwakarma-15000',
  },
  {
    title: 'लाड़ली बहना योजना 2026: सिर्फ इन महिलाओं को मिलेंगे ₹1,500, देखें नई रिजेक्ट व अप्रूव्ड लिस्ट',
    href: '/post/ladli-behna-yojana-sirf-in-mahilaon-ko-milenge-1500',
  },
  {
    title: 'शौचालय योजना 2026: सरकार दे रही ₹12,000 सीधे बैंक खाते में, ऐसे भरें नया फॉर्म',
    href: '/post/shauchalay-yojana-2026-swachh-bharat-12000-form',
  },
  {
    title: 'बिजली बिल माफी योजना: 100% ब्याज माफी और भारी छूट, जानें अपना डिस्काउंट',
    href: '/post/bijli-bill-mafi-yojana-2026-bakaya-bill-chhut',
  },
  {
    title: 'राशन कार्ड धारकों के लिए बड़ा अलर्ट: तुरंत पूरी करें बायोमेट्रिक e-KYC वरना कटेगा नाम',
    href: '/post/ration-card-ekyc-last-date-mobile-se-kaise-kare',
  },
  {
    title: 'Railway RPF Constable & SI: परीक्षा तिथि, एडमिट कार्ड व फिजिकल टेस्ट नियम',
    href: '/post/railway-rpf-constable-si-recruitment-2026-exam-date',
  },
];

export default function BreakingTicker() {
  return (
    <div className="bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white shadow-inner">
      <div className="container mx-auto px-4 flex items-center py-2 text-xs md:text-sm overflow-hidden">
        {/* Badge */}
        <div className="flex items-center gap-1.5 font-extrabold bg-black/30 px-3 py-1 rounded-full whitespace-nowrap mr-3 flex-shrink-0 border border-white/20 animate-pulse">
          <Flame size={15} className="text-yellow-300" />
          <span className="text-yellow-200">ब्रेकिंग अपडेट</span>
        </div>

        {/* Scrolling or Flex Container */}
        <div className="overflow-x-auto no-scrollbar flex items-center gap-6 whitespace-nowrap scroll-smooth">
          {tickerItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="hover:text-yellow-200 hover:underline transition-colors flex items-center gap-2 font-medium"
            >
              <span className="text-white/60">•</span>
              <span>{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
