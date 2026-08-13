import React, { useState, useEffect } from 'react';
import { ExternalLink, Image as ImageIcon, Star, MapPin } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface HeroProps {
  onViewGallery: () => void;
}

const HERO_IMAGES = [
  '/gallery/img_1.png',
  '/gallery/img_0.png',
  '/gallery/img_2.png',
  '/gallery/img_6.png',
  '/gallery/img_12.png'
];

export const Hero: React.FC<HeroProps> = ({ onViewGallery }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-stone-950 overflow-hidden">
      
      {/* Background Image Container with automatic smooth carousel */}
      <div className="absolute inset-0 z-0">
        {HERO_IMAGES.map((imgSrc, idx) => (
          <img
            key={imgSrc}
            src={imgSrc}
            alt="Casa Kintsugi - Entorno y Alojamiento"
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
              idx === currentImageIndex ? 'opacity-80 scale-105' : 'opacity-0 scale-100'
            }`}
            style={{ transitionProperty: 'opacity, transform' }}
          />
        ))}
        {/* Elegant gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-black/40" />
      </div>

      {/* Floating Rating Badge */}
      <div className="absolute top-28 right-6 hidden lg:flex flex-col gap-3 z-10">
        <div className="bg-stone-900/90 backdrop-blur-md border border-[#D4AF37]/50 px-4 py-2.5 rounded-2xl text-white text-xs flex items-center gap-3 shadow-2xl">
          <div className="flex text-[#D4AF37]">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${i < 4 ? 'fill-[#D4AF37] text-[#D4AF37]' : 'fill-[#D4AF37]/40 text-[#D4AF37]'}`}
              />
            ))}
          </div>
          <div>
            <span className="font-serif font-bold text-sm block tracking-wide">
              {HOTEL_INFO.bookingRating} / 10 • {HOTEL_INFO.bookingLabel}
            </span>
            <span className="text-[9px] uppercase tracking-widest text-amber-200/80">
              {HOTEL_INFO.bookingReviews} Comentarios en Booking
            </span>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-28 pb-20">
        
        {/* Title */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-wider uppercase leading-tight mb-3 text-white drop-shadow-2xl">
          CASA <span className="text-[#D4AF37]">KINTSUGI</span>
        </h1>

        {/* Tagline */}
        <p className="text-xs sm:text-base text-amber-100/90 font-light max-w-xl mx-auto mb-6 tracking-widest uppercase">
          {HOTEL_INFO.tagline}
        </p>

        {/* Location Subtitle */}
        <p className="text-xs sm:text-sm text-stone-200 font-medium max-w-xl mx-auto mb-8 flex items-center justify-center gap-2 bg-stone-900/70 backdrop-blur-md py-2 px-4 rounded-full w-fit border border-stone-700/50 shadow-lg">
          <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
          <span>{HOTEL_INFO.address}</span>
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <a
            href={HOTEL_INFO.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#D4AF37] hover:bg-[#b8982a] text-stone-950 font-bold px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2.5 group cursor-pointer"
          >
            <ExternalLink className="w-4 h-4 text-stone-900 group-hover:translate-x-0.5 transition-transform" />
            <span>Reservar en Booking</span>
          </a>

          <button
            onClick={onViewGallery}
            className="w-full sm:w-auto border border-white/80 hover:border-[#D4AF37] hover:bg-white/10 text-white font-bold px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2.5 group cursor-pointer"
          >
            <ImageIcon className="w-4 h-4 text-amber-300 group-hover:scale-110 transition-transform" />
            <span>Ver Galería</span>
          </button>
        </div>

      </div>

    </section>
  );
};

