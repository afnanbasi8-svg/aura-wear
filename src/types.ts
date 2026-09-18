export interface ProductColor {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: 'suits' | 'shirts' | 'trousers' | 'blazers' | 'accessories';
  price: number;
  originalPrice?: number;
  images: string[];
  colors: ProductColor[];
  sizes: string[];
  fabric: string;
  description: string;
  details: string[];
  careInstructions: string[];
  inStock: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
}

export interface CartItem {
  id: string; // unique item id based on product.id + size + color
  product: Product;
  selectedSize: string;
  selectedColor: ProductColor;
  quantity: number;
}

export interface EditorialStory {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  excerpt: string;
  paragraphs: string[];
  quote?: string;
  quoteAuthor?: string;
}

export interface BespokeAppointment {
  serviceType: 'Bespoke Suit' | 'Tailored Shirts' | 'Ceremonial / Tuxedo' | 'Wardrobe Consultation';
  experienceType: 'Flagship Boutique Salon' | 'Private Residence Concierge';
  preferredDate: string;
  preferredTime: string;
  fullName: string;
  phone: string;
  email: string;
  notes?: string;
}
