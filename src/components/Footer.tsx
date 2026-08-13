import React from 'react';
import { Trees, Instagram, MessageCircle } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C1C1C] text-stone-300 pt-12 pb-8 border-t border-[#D4AF37]/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Brand */}
        <div className="flex items-center justify-center mb-4">
          <span className="font-['Cinzel',serif] text-2xl sm:text-3xl font-extrabold tracking-wider text-white">
            CASA <span className="text-[#D4AF37]">KINTSUGI</span>
          </span>
        </div>

        <p className="text-stone-400 text-xs max-w-md mx-auto mb-6">
          {HOTEL_INFO.address}
        </p>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-wider mb-8">
          <button onClick={() => scrollToSection('inicio')} className="hover:text-[#D4AF37]">Inicio</button>
          <button onClick={() => scrollToSection('sobre-nosotros')} className="hover:text-[#D4AF37]">El Hotel</button>
          <button onClick={() => scrollToSection('habitaciones')} className="hover:text-[#D4AF37]">Espacios</button>
          <button onClick={() => scrollToSection('actividades')} className="hover:text-[#D4AF37]">Actividades</button>
          <button onClick={() => scrollToSection('dudas')} className="hover:text-[#D4AF37]">Dudas</button>
          <button onClick={() => scrollToSection('galeria')} className="hover:text-[#D4AF37]">Galería</button>
          <button onClick={() => scrollToSection('reservas')} className="hover:text-[#D4AF37]">Reservar</button>
          <button onClick={() => scrollToSection('contacto')} className="hover:text-[#D4AF37]">Contacto</button>
        </div>

        {/* Social */}
        <div className="flex justify-center gap-4 mb-8">
          <a
            href={HOTEL_INFO.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-stone-800 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-stone-950 rounded-full transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href={HOTEL_INFO.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-stone-800 hover:bg-emerald-500 text-white rounded-full transition-colors"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-[11px] text-stone-500 border-t border-stone-800 pt-6">
          © {new Date().getFullYear()} Casa Kintsugi • Boutique Eco Stay. Todos los derechos reservados.
        </p>

      </div>
    </footer>
  );
};
