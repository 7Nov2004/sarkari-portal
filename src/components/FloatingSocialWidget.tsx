'use client';

import { useState } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';

export default function FloatingSocialWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2 font-sans">
      {/* Expanded Popup Menu */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 w-72 mb-2 animate-in fade-in slide-in-from-bottom-5 duration-200">
          <div className="flex justify-between items-center pb-2 border-b border-gray-100 mb-3">
            <h4 className="font-bold text-gray-900 text-sm flex items-center gap-1.5">
              🔔 सरकारी नौकरी & योजना अलर्ट
            </h4>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 p-1 rounded-full"
            >
              <X size={16} />
            </button>
          </div>
          <p className="text-xs text-gray-600 mb-4 leading-relaxed">
            हर नई भर्ती, एडमिट कार्ड और योजना की सूचना तुरंत अपने मोबाइल पर पाएं:
          </p>
          <div className="space-y-2">
            <a
              href="https://whatsapp.com/channel/0029Va4x"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-2.5 px-3 rounded-xl flex items-center justify-center gap-2 text-sm shadow-sm transition-transform active:scale-95"
            >
              <MessageCircle size={18} /> Join WhatsApp Channel
            </a>
            <a
              href="https://t.me/govportalonline"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#229ED9] hover:bg-[#1f8fc4] text-white font-bold py-2.5 px-3 rounded-xl flex items-center justify-center gap-2 text-sm shadow-sm transition-transform active:scale-95"
            >
              <Send size={18} /> Join Telegram Channel
            </a>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 px-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform active:scale-95 cursor-pointer"
        aria-label="Join WhatsApp Channel"
      >
        <div className="relative">
          <MessageCircle size={24} className="animate-bounce" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-400"></span>
          </span>
        </div>
        <span className="font-bold text-sm hidden sm:inline tracking-wide">
          Join WhatsApp Alert
        </span>
        <span className="font-bold text-xs sm:hidden">
          WhatsApp अलर्ट
        </span>
      </button>
    </div>
  );
}
