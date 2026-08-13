export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  date: string;
  avatar: string;
}

export interface GalleryItem {
  id: string;
  image: string;
}

export interface Reservation {
  id: string;
  code: string;
  name: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  roomType: string;
  comments?: string;
  status: 'confirmada' | 'pendiente' | 'cancelada';
  createdAt: string;
}

export interface RoomType {
  id: string;
  name: string;
  description: string;
  capacity: string;
  price: string;
  image: string;
  features: string[];
}
