import { GalleryItem, Testimonial, RoomType } from '../types';

export const BOOKING_URL = 'https://www.booking.com/hotel/es/casa-kintsugi.es.html?aid=2127526&label=metagha-link-MRES-hotel-10033070_dev-desktop_los-1_bw-38_dow-Sunday_defdate-1_room-0_gstadt-2_rateid-public_aud-0_gacid-_mcid-50_bc-AJkXrg_ppa-0_clrid-0_ad-0_gstkid-0_checkin-20260920_ppt-B&sid=5ff362f9e6e26bba55dd118d942bab13&all_sr_blocks=1003307001_373112418_0_0_0&checkin=2026-09-20&checkout=2026-09-21&dest_id=10033070&dest_type=hotel&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=1003307001_373112418_0_0_0&hpos=1&keep_landing=1&matching_block_id=1003307001_373112418_0_0_0&no_rooms=1&req_adults=2&req_children=0&sb_price_type=total&sr_order=popularity&sr_pri_blocks=1003307001_373112418_0_0_0__6917&srepoch=1786629232&srpvid=1448619825e40cc0&type=total&ucfs=1&utm_campaign=ES&utm_content=dev-desktop_los-1_bw-38_dow-Sunday_defdate-1_room-0_gstadt-2_rateid-public_aud-0_gacid-_mcid-50_bc-AJkXrg_ppa-0_clrid-0_ad-0_gstkid-0_checkin-20260920_ppt-B&utm_medium=mapresults&utm_source=metagha&utm_term=hotel-10033070&#tab-main';

export const HOTEL_INFO = {
  name: 'Casa Kintsugi',
  tagline: 'Tu Refugio de Paz y Naturaleza',
  address: 'Carrer Galceran, 31, 08783 Can Parellada, Barcelona',
  phone: '+34 614 20 09 80',
  phoneFormatted: '614 20 09 80',
  email: 'reservas@casakintsugi.es',
  googleRating: 4.5,
  googleReviews: 8,
  bookingRating: 8.2,
  bookingLabel: 'Muy bien',
  bookingReviews: 199,
  checkInTime: '15:00',
  checkOutTime: '11:00',
  bookingUrl: BOOKING_URL,
  description: 'Un espacio íntimo en Can Parellada (Barcelona) concebido para la calma, el descanso y la reconexión en plena naturaleza.',
  social: {
    instagram: 'https://instagram.com/casakintsugi',
    whatsapp: 'https://wa.me/34614200980?text=Hola,%20quisiera%20consultar%20disponibilidad%20en%20Casa%20Kintsugi'
  },
  scores: [
    { label: 'Personal', score: 8.8 },
    { label: 'Limpieza', score: 8.7 },
    { label: 'Confort', score: 8.5 },
    { label: 'Relación calidad-precio', score: 8.4 },
    { label: 'Instalaciones y servicios', score: 8.3 },
    { label: 'Ubicación', score: 7.7 },
  ]
};

export const ROOM_TYPES: RoomType[] = [
  {
    id: 'bungalow',
    name: 'Bungalow',
    description: 'Bungalow acogedor y tranquilo equipado con barbacoa, zona de descanso, jardín y todas las comodidades para desconectar.',
    capacity: '1 - 2 Personas',
    price: 'Precio variable según fecha',
    image: '/gallery/img_3.png',
    features: ['Barbacoa Privada', 'Acceso al Jardín', 'Cocina Equipada', 'Zona Relax', 'Climatización']
  },
  {
    id: 'espacio-1-dormitorio',
    name: 'Espacio de 1 dormitorio',
    description: 'Espacioso alojamiento con ambiente cálido, cama confortable, baño completo y entorno de paz en plena naturaleza.',
    capacity: '1 - 2 Personas',
    price: 'Precio variable según fecha',
    image: '/gallery/img_5.png',
    features: ['Cama Confortable', 'Estilo Oriental y Campestre', 'Baño Privado', 'Paz y Tranquilidad', 'Wifi']
  }
];

// Gallery images containing all uploaded photos (0 to 22)
const galleryIndices = Array.from({ length: 23 }, (_, i) => i);

export const GALLERY_IMAGES: GalleryItem[] = galleryIndices.map((idx) => ({
  id: `img-${idx}`,
  image: `/gallery/img_${idx}.png`
}));

export const REVIEWS: Testimonial[] = [
  {
    id: 'rev-1',
    name: 'Ferriz',
    role: 'Bungalow • 2 noches',
    text: 'La tranquilidad. Un lugar ideal para descansar.',
    rating: 5,
    date: 'Agosto de 2026',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'rev-2',
    name: 'Joan',
    role: 'Bungalow • 1 noche',
    text: 'La barbacoa, el bungalow y el cómo se descansa, espectacular. Y el jardín una pasada.',
    rating: 4,
    date: 'Abril de 2026',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'rev-3',
    name: 'Andrés',
    role: 'Bungalow • 2 noches',
    text: 'Todo nos pareció genial, el espacio, la cama, los dueños encantadores, con unas vistas geniales y mucha paz.',
    rating: 5,
    date: 'Abril de 2026',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'rev-4',
    name: 'Hicham',
    role: 'Bungalow • 1 noche',
    text: 'Desconexión y va bien para relajarse. Muy recomendable.',
    rating: 5,
    date: 'Enero de 2026',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'rev-5',
    name: 'Skbblz',
    role: 'Espacio de 1 dormitorio',
    text: 'Tranquilidad oriental y campestre. El estilo y el personal muy atento y amable.',
    rating: 5,
    date: 'Noviembre de 2025',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'rev-6',
    name: 'Inma',
    role: 'Bungalow • 1 noche',
    text: 'Me gustó mucho el sonido del agua y el decorado precioso.',
    rating: 5,
    date: 'Agosto de 2025',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'rev-7',
    name: 'Salto',
    role: 'Bungalow • 1 noche',
    text: 'La encargada muy amable. Todo muy confortable y bien decorado, cuidado al detalle. La cama comodísima. Mucha tranquilidad. Repetiré seguro.',
    rating: 5,
    date: 'Mayo de 2025',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80'
  }
];

