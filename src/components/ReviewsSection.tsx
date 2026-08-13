import React, { useState, useEffect } from 'react';
import { REVIEWS, HOTEL_INFO } from '../data/hotelData';
import { Star, Quote, Award, ChevronLeft, ChevronRight } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const currentRev = REVIEWS[currentIndex];

  return (
    <section id="resenas" className="py-20 bg-stone-900 text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-bold block mb-2">
            Opiniones de Clientes
          </span>
          <h2 className="font-serif text-3xl font-bold mb-2">
            Puntuación y Comentarios en Booking
          </h2>
          <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto mb-3" />
          <p className="text-stone-400 text-xs">
            Comentarios 100% reales verificados por Booking.com
          </p>
        </div>

        {/* Overall Score Banner */}
        <div className="bg-stone-800/90 border border-white/10 rounded-2xl p-6 mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="bg-[#D4AF37] text-stone-950 font-bold text-3xl sm:text-4xl px-5 py-3 rounded-2xl font-serif flex items-center justify-center">
              8,2
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-white flex items-center gap-2 justify-center md:justify-start">
                <span>Muy bien</span>
                <Award className="w-5 h-5 text-[#D4AF37]" />
              </h3>
              <p className="text-stone-400 text-xs">
                Basado en {HOTEL_INFO.bookingReviews} comentarios verificados
              </p>
            </div>
          </div>

          {/* Sub-scores */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full md:w-auto text-xs">
            {HOTEL_INFO.scores.map((s, idx) => (
              <div key={idx} className="bg-stone-950/50 border border-white/5 rounded-xl px-3 py-2 text-center md:text-left">
                <span className="text-stone-400 text-[10px] block">{s.label}</span>
                <span className="font-bold text-[#D4AF37] text-sm">{s.score}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Single Review Carousel Container */}
        <div className="relative max-w-2xl mx-auto">
          {/* Main Review Card */}
          <div className="bg-stone-800/90 border border-[#D4AF37]/30 rounded-2xl p-8 sm:p-10 relative shadow-2xl min-h-[260px] flex flex-col justify-between transition-all duration-300">
            <Quote className="absolute top-6 right-6 w-10 h-10 text-[#D4AF37]/20" />
            
            <div>
              {/* Star Rating */}
              <div className="flex text-amber-400 gap-1 mb-4">
                {[...Array(currentRev.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-stone-100 text-sm sm:text-base leading-relaxed italic mb-8">
                "{currentRev.text}"
              </p>
            </div>

            {/* Author Info */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/10">
              <img
                src={currentRev.avatar}
                alt={currentRev.name}
                className="w-11 h-11 rounded-full object-cover border-2 border-[#D4AF37]"
              />
              <div>
                <h4 className="font-bold text-sm text-white">{currentRev.name}</h4>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#D4AF37] font-medium">{currentRev.role}</span>
                  <span className="text-stone-500 text-xs">•</span>
                  <span className="text-xs text-stone-400">{currentRev.date}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrow Buttons */}
          <button
            onClick={prevReview}
            aria-label="Reseña anterior"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 w-11 h-11 rounded-full bg-stone-900 border border-[#D4AF37]/50 text-white flex items-center justify-center hover:bg-[#D4AF37] hover:text-stone-950 transition-all shadow-lg cursor-pointer focus:outline-none"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextReview}
            aria-label="Siguiente reseña"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 w-11 h-11 rounded-full bg-stone-900 border border-[#D4AF37]/50 text-white flex items-center justify-center hover:bg-[#D4AF37] hover:text-stone-950 transition-all shadow-lg cursor-pointer focus:outline-none"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Navigation Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {REVIEWS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Ir a la reseña ${index + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer focus:outline-none ${
                  currentIndex === index
                    ? 'w-8 h-2.5 bg-[#D4AF37]'
                    : 'w-2.5 h-2.5 bg-stone-600 hover:bg-stone-400'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

