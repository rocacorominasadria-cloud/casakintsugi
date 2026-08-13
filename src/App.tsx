import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { RoomsSection } from './components/RoomsSection';
import { ActivitiesSection } from './components/ActivitiesSection';
import { GallerySection } from './components/GallerySection';
import { ReservationSection } from './components/ReservationSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { FaqSection } from './components/FaqSection';
import { AiChatWidget } from './components/AiChatWidget';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';

export default function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFEF7] text-[#2C2A29] font-sans antialiased selection:bg-[#D4AF37] selection:text-stone-950 pb-16 md:pb-0">
      
      {/* Sticky Top Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero onViewGallery={() => scrollToSection('galeria')} />

        {/* Hotel About Section */}
        <AboutSection />

        {/* Cabins & Rooms Section */}
        <RoomsSection />

        {/* Outdoor Activities Section */}
        <ActivitiesSection />

        {/* Gallery Section - Pure Images Grid */}
        <GallerySection />

        {/* Reservation Callout Section linking to Booking.com */}
        <ReservationSection />

        {/* Reviews Section */}
        <ReviewsSection />

        {/* Resuelve tus Dudas (FAQ Section) */}
        <FaqSection />

        {/* Location & Contact Section */}
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* AI Assistant Chat Widget */}
      <AiChatWidget />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileQuickBar />

    </div>
  );
}
