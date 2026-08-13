import React from 'react';
import { Phone, ExternalLink, MessageCircle } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export const MobileQuickBar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-stone-900/95 backdrop-blur-md border-t border-[#D4AF37]/30 p-2.5 shadow-2xl flex items-center justify-between gap-2">
      <a
        href={HOTEL_INFO.social.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-[#25D366] text-white py-2.5 rounded-xl text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md"
      >
        <MessageCircle className="w-4 h-4" />
        <span>WhatsApp</span>
      </a>

      <a
        href={`tel:${HOTEL_INFO.phone}`}
        className="flex-1 bg-stone-800 text-white py-2.5 rounded-xl text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 border border-stone-700"
      >
        <Phone className="w-4 h-4 text-[#D4AF37]" />
        <span>Llamar</span>
      </a>

      <a
        href={HOTEL_INFO.bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-[#D4AF37] text-stone-950 py-2.5 rounded-xl text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-lg cursor-pointer"
      >
        <ExternalLink className="w-4 h-4" />
        <span>Reservar</span>
      </a>
    </div>
  );
};
