import React from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { MapPin, Phone, Mail, Instagram, MessageCircle } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section id="contacto" className="py-20 bg-[#FFFEF7] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-[0.25em] text-[#708238] font-bold block mb-2">
            Contacto y Ubicación
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#2C2A29] mb-2">
            Casa Kintsugi
          </h2>
          <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto" />
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#708238] mb-3">
              <Phone className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <h4 className="font-bold text-sm text-[#2C2A29] mb-1">Teléfono</h4>
            <a href={`tel:${HOTEL_INFO.phone}`} className="text-xs text-stone-600 hover:text-[#D4AF37]">
              {HOTEL_INFO.phoneFormatted}
            </a>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[#708238]/20 flex items-center justify-center text-[#708238] mb-3">
              <Mail className="w-5 h-5 text-[#708238]" />
            </div>
            <h4 className="font-bold text-sm text-[#2C2A29] mb-1">Email</h4>
            <a href={`mailto:${HOTEL_INFO.email}`} className="text-xs text-stone-600 hover:text-[#D4AF37]">
              {HOTEL_INFO.email}
            </a>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#708238] mb-3">
              <MapPin className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <h4 className="font-bold text-sm text-[#2C2A29] mb-1">Ubicación</h4>
            <p className="text-xs text-stone-600">{HOTEL_INFO.address}</p>
          </div>

        </div>

        {/* Direct Contact Social Hub */}
        <div className="mt-10 bg-[#2C2A29] text-white p-6 sm:p-8 rounded-2xl border border-[#D4AF37]/30 text-center flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="text-center md:text-left">
            <span className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-widest block mb-1">
              Atención Inmediata
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-1">
              Contacta Directamente con Nosotros
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm">
              Escríbenos por WhatsApp para consultas rápidas o visítanos en Instagram para ver fotos y novedades.
            </p>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap justify-center gap-3 w-full md:w-auto">
            <a
              href={HOTEL_INFO.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg.5-[#25D366] bg-[#25D366] hover:bg-[#1ebd59] text-white font-bold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Directo</span>
            </a>

            <a
              href={HOTEL_INFO.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-95 text-white font-bold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md w-full sm:w-auto"
            >
              <Instagram className="w-5 h-5" />
              <span>Instagram</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
