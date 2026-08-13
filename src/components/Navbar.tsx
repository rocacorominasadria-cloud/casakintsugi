import React, { useState, useEffect } from 'react';
import { Phone, ExternalLink, Menu as MenuIcon, X, Sparkles, Trees } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['inicio', 'sobre-nosotros', 'habitaciones', 'galeria', 'reservas', 'contacto'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'sobre-nosotros', label: 'El Hotel' },
    { id: 'habitaciones', label: 'Espacios' },
    { id: 'actividades', label: 'Actividades' },
    { id: 'dudas', label: 'Dudas' },
    { id: 'galeria', label: 'Galería' },
    { id: 'reservas', label: 'Booking' },
    { id: 'contacto', label: 'Contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFFEF7]/95 backdrop-blur-md shadow-md py-3 border-b border-[#D4AF37]/20 text-[#2C2A29]'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <button
            onClick={() => scrollToSection('inicio')}
            className="flex items-center group text-left cursor-pointer focus:outline-none"
          >
            <span className="font-['Cinzel',serif] text-xl sm:text-2xl font-extrabold tracking-wider block leading-tight">
              CASA <span className="text-[#D4AF37]">KINTSUGI</span>
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-xs uppercase tracking-widest font-medium transition-colors relative py-1 cursor-pointer focus:outline-none ${
                    isScrolled
                      ? isActive
                        ? 'text-[#D4AF37] font-bold'
                        : 'text-[#2C2A29] hover:text-[#D4AF37]'
                      : isActive
                      ? 'text-amber-300 font-bold'
                      : 'text-white/90 hover:text-amber-300'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D4AF37] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={`tel:${HOTEL_INFO.phone}`}
              className={`flex items-center space-x-2 text-xs font-semibold px-3 py-2 rounded-lg border transition-all ${
                isScrolled
                  ? 'border-[#D4AF37]/40 text-[#2C2A29] hover:bg-[#D4AF37]/10'
                  : 'border-white/30 text-white hover:bg-white/10'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{HOTEL_INFO.phoneFormatted}</span>
            </a>

            <a
              href={HOTEL_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D4AF37] hover:bg-[#b8982a] text-stone-900 font-bold px-5 py-2.5 rounded-full text-xs uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center space-x-2 cursor-pointer"
            >
              <ExternalLink className="w-4 h-4 text-stone-900" />
              <span>Reservar en Booking</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <a
              href={HOTEL_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D4AF37] text-stone-900 px-3 py-1.5 rounded-full text-xs font-bold flex items-center space-x-1"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Reservar</span>
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg focus:outline-none ${
                isScrolled ? 'text-[#2C2A29] hover:bg-stone-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-[#FFFEF7] border-b border-[#D4AF37]/30 shadow-2xl p-6 text-[#2C2A29] z-50">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <span className="text-xs uppercase tracking-widest text-[#708238] font-bold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" /> Casa Kintsugi
              </span>
            </div>

            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left text-lg font-serif py-2 px-3 rounded-lg hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-stone-300 font-sans text-xs">→</span>
              </button>
            ))}

            <div className="pt-4 border-t border-stone-200 flex flex-col space-y-3">
              <a
                href={`tel:${HOTEL_INFO.phone}`}
                className="flex items-center justify-center space-x-2 py-3 rounded-xl border border-[#D4AF37] text-[#2C2A29] font-medium text-sm"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>{HOTEL_INFO.phoneFormatted}</span>
              </a>

              <a
                href={HOTEL_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#D4AF37] text-stone-900 font-bold py-3 rounded-xl text-sm uppercase tracking-wider text-center shadow-md flex items-center justify-center space-x-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Reservar en Booking.com</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
