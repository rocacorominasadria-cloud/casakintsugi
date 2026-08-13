import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle, Instagram } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface FaqItem {
  question: string;
  answer: string;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: '¿A qué hora se realiza el Check-in y el Check-out?',
      answer: `El horario de Check-in en Casa Kintsugi es a partir de las ${HOTEL_INFO.checkInTime}h y la salida (Check-out) se realiza hasta las ${HOTEL_INFO.checkOutTime}h para garantizar la limpieza y desinfección adecuada de las instalaciones.`
    },
    {
      question: '¿Cómo puedo comprobar la disponibilidad y reservar?',
      answer: 'Puedes consultar fechas y reservar directamente online a través del botón de Booking en esta web. Si tienes alguna duda sobre disponibilidad especial o fechas concretas, también puedes escribirnos directamente por WhatsApp.'
    },
    {
      question: '¿Disponen de barbacoa privada y zonas de jardín?',
      answer: 'Sí, nuestros alojamientos cuentan con acceso al área de jardín y zona de barbacoa para que puedas disfrutar de comidas al aire libre en un entorno tranquilo y rodeado de naturaleza.'
    },
    {
      question: '¿Qué equipamiento incluyen el Bungalow y los Espacios?',
      answer: 'Todos nuestros alojamientos están equipados con cama confortable, baño completo, aire acondicionado / climatización, conexión wifi gratuita y zona de relax. El Bungalow dispone además de cocina para mayor autonomía.'
    },
    {
      question: '¿Dónde está ubicada la casa y cómo es el acceso?',
      answer: 'Nos encontramos en Carrer Galceran, 31, en la urbanización Can Parellada (Barcelona), a pocos minutos del centro histórico de Caldes de Montbui. Es un acceso fácil y cómodo en vehículo.'
    },
    {
      question: '¿Tienen asistencia o atención durante la estancia?',
      answer: 'Sí, nuestro equipo está siempre atento y accesible para resolver cualquier duda antes o durante tu estancia. Ofrecemos canal de atención directo por WhatsApp para mayor agilidad.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="dudas" className="py-20 bg-[#F7F5EC] text-[#2C2A29] relative border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#708238]/10 text-[#708238] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3">
            <HelpCircle className="w-4 h-4" />
            <span>Preguntas Frecuentes</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C2A29] mb-3">
            Resuelve tus Dudas
          </h2>
          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mb-4" />
          <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
            Aquí encontrarás respuestas a las preguntas más habituales sobre tu estancia, instalaciones y servicios en Casa Kintsugi.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#FFFEF7] border border-stone-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#D4AF37]"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-[#2C2A29]">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#708238] text-white' : 'bg-stone-100 text-stone-600'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-stone-600 text-xs sm:text-sm leading-relaxed border-t border-stone-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Social Contact Prompt */}
        <div className="bg-white border border-[#D4AF37]/30 rounded-2xl p-6 sm:p-8 text-center shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h3 className="font-serif text-lg font-bold text-[#2C2A29] mb-1">
              ¿Tienes alguna duda específica?
            </h3>
            <p className="text-stone-500 text-xs sm:text-sm">
              Escríbenos directamente por WhatsApp o síguenos en Instagram para una respuesta inmediata.
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
            <a
              href={HOTEL_INFO.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-medium text-xs sm:text-sm px-5 py-3 rounded-xl hover:bg-[#1ebd59] transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            <a
              href={HOTEL_INFO.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-medium text-xs sm:text-sm px-5 py-3 rounded-xl hover:opacity-95 transition-all shadow-sm"
            >
              <Instagram className="w-4 h-4" />
              <span>Instagram</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
