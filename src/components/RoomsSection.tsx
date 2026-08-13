import React from 'react';
import { ROOM_TYPES, HOTEL_INFO } from '../data/hotelData';
import { ExternalLink, Users, Check } from 'lucide-react';

export const RoomsSection: React.FC = () => {
  return (
    <section id="habitaciones" className="py-20 bg-stone-100 text-[#2C2A29]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#708238] font-bold block mb-2">
            Nuestras Estancias
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-3">
            Espacios y Alojamiento
          </h2>
          <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto mb-4" />
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {ROOM_TYPES.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-2xl border border-stone-200 shadow-md p-8 flex flex-col justify-between hover:shadow-xl transition-all relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-[#708238] text-xs font-semibold bg-[#708238]/10 px-3 py-1 rounded-full">
                    <Users className="w-3.5 h-3.5" />
                    <span>{room.capacity}</span>
                  </div>
                  <span className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-wider bg-stone-900 px-3 py-1 rounded-full">
                    Precio según fecha
                  </span>
                </div>

                <h3 className="font-serif font-bold text-2xl mb-3 text-[#2C2A29]">
                  {room.name}
                </h3>

                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {room.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {room.features.map((feat, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 bg-stone-100 text-stone-700 text-xs px-3 py-1.5 rounded-lg font-medium"
                    >
                      <Check className="w-3.5 h-3.5 text-[#708238]" />
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100">
                <p className="text-[11px] text-stone-400 mb-3 text-center">
                  El precio varía según el día de estancia y disponibilidad.
                </p>
                <a
                  href={HOTEL_INFO.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-stone-900 hover:bg-[#D4AF37] hover:text-stone-950 text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Ver precio en Booking.com</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
