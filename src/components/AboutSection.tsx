import React from 'react';
import { Trees, Flame, HeartHandshake, Coffee } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const highlights = [
    {
      icon: Trees,
      title: 'Alojamiento Rústico',
      desc: 'Bungalow y espacio con encanto, diseñados para el máximo descanso'
    },
    {
      icon: Flame,
      title: 'Jardín y Barbacoa',
      desc: 'Espacio exterior con zona de barbacoa privada y área de relax'
    },
    {
      icon: Coffee,
      title: 'Paz y Tranquilidad',
      desc: 'Un entorno silencioso y natural para desconectar de la rutina'
    },
    {
      icon: HeartHandshake,
      title: 'Atención Personalizada',
      desc: 'Anfitriones serviciales comprometidos con tu comodidad'
    }
  ];

  return (
    <section id="sobre-nosotros" className="py-20 bg-[#FFFEF7] text-[#2C2A29]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#708238] font-bold block mb-2">
            Casa Kintsugi
          </span>
          <h2 className="font-[#Cinzel,serif] font-serif text-3xl sm:text-4xl font-bold mb-3">
            Tu Refugio de Paz y Naturaleza
          </h2>
          <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto mb-4" />
          <p className="text-stone-600 text-sm leading-relaxed">
            Un alojamiento íntimo en Can Parellada concebido para la calma, el descanso y la reconexión.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm text-center hover:border-[#D4AF37] transition-all"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-[#D4AF37]/15 flex items-center justify-center text-[#708238] mb-4">
                  <Icon className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="font-serif font-bold text-base mb-1 text-[#2C2A29]">
                  {item.title}
                </h3>
                <p className="text-stone-500 text-xs leading-normal">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Real Photo Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md group">
            <img
              src="/gallery/img_0.png"
              alt="Jardín y Entorno de Casa Kintsugi"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent flex items-end p-6">
              <span className="text-white text-xs font-serif font-bold tracking-wider uppercase bg-stone-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-stone-700/50">
                Jardín y Barbacoa
              </span>
            </div>
          </div>

          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md group">
            <img
              src="/gallery/img_7.png"
              alt="Interiores con Encanto"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent flex items-end p-6">
              <span className="text-white text-xs font-serif font-bold tracking-wider uppercase bg-stone-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-stone-700/50">
                Detalles Kintsugi
              </span>
            </div>
          </div>

          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md group">
            <img
              src="/gallery/img_14.png"
              alt="Zona de Relax y Descanso"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent flex items-end p-6">
              <span className="text-white text-xs font-serif font-bold tracking-wider uppercase bg-stone-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-stone-700/50">
                Zona de Relax Exterior
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
