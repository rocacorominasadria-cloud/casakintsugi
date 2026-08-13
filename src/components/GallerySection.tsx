import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../data/hotelData';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const prevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) =>
        prev === 0 ? GALLERY_IMAGES.length - 1 : (prev as number) - 1
      );
    }
  };

  const nextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) =>
        prev === GALLERY_IMAGES.length - 1 ? 0 : (prev as number) + 1
      );
    }
  };

  return (
    <section id="galeria" className="py-16 bg-stone-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Pure Image Grid - No text as requested */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {GALLERY_IMAGES.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative h-64 sm:h-72 rounded-xl overflow-hidden cursor-pointer shadow-md bg-stone-900 border border-white/5 hover:border-[#D4AF37]/50 transition-all duration-300"
            >
              <img
                src={item.image}
                alt=""
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Hover icon without text */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="p-3 bg-black/60 backdrop-blur-md rounded-full text-[#D4AF37]">
                  <Maximize2 className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal - Only Image, No Text */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
            aria-label="Cerrar"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={prevLightbox}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-stone-950 text-white transition-all cursor-pointer z-50"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextLightbox}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-stone-950 text-white transition-all cursor-pointer z-50"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Main Image - Only the image */}
          <div className="max-w-5xl w-full flex items-center justify-center">
            <img
              src={GALLERY_IMAGES[lightboxIndex].image}
              alt=""
              className="max-h-[85vh] w-auto object-contain rounded-lg shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>

        </div>
      )}
    </section>
  );
};
