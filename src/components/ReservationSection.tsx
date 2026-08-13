import React from 'react';
import { ExternalLink, Check, ShieldCheck, Clock, Award } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export const ReservationSection: React.FC = () => {
  return (
    <section id="reservas" className="py-20 bg-[#FFFEF7] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-[0.25em] text-[#708238] font-bold block mb-2">
            Disponibilidad y Tarifas
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C2A29] mb-3">
            Reserva tu Estancia en Casa Kintsugi
          </h2>
          <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto mb-3" />
          <p className="text-stone-600 text-xs sm:text-sm">
            Gestionamos todas nuestras reservas de forma segura y directa a través de Booking.com.
          </p>
        </div>

        {/* Callout Box */}
        <div className="bg-stone-900 text-white rounded-3xl p-8 sm:p-12 border border-[#D4AF37]/30 shadow-2xl relative overflow-hidden text-center">
          
          {/* Background image overlay */}
          <div className="absolute inset-0 z-0 opacity-25">
            <img
              src="/gallery/img_12.png"
              alt="Casa Kintsugi"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-6">
              <Award className="w-3.5 h-3.5" />
              <span>Puntuación 4.5 / 5.0 en Google</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-4">
              Comprueba Fechas y Reserva Online
            </h3>

            <p className="text-stone-300 text-xs sm:text-sm max-w-lg mx-auto mb-8 leading-relaxed">
              Consulta disponibilidad en tiempo real, opciones con cancelación gratuita y confirmación inmediata directamente en nuestra página oficial de Booking.com.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-xs text-stone-300 mb-8">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#D4AF37]" />
                <span>Cancelación gratuita disponible</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D4AF37]" />
                <span>Entrada: {HOTEL_INFO.checkInTime}h | Salida: {HOTEL_INFO.checkOutTime}h</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>Garantía de mejor precio</span>
              </div>
            </div>

            <a
              href={HOTEL_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#D4AF37] hover:bg-[#b8982a] text-stone-950 font-bold px-10 py-5 rounded-full text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-xl hover:scale-105"
            >
              <ExternalLink className="w-4 h-4 text-stone-950" />
              <span>Ir a Booking.com</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
