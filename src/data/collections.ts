export interface CollectionItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  categoryFilter: string;
  itemCount: string;
}

export const COLLECTIONS: CollectionItem[] = [
  {
    id: 'signature-suit',
    name: 'The Signature Suit',
    subtitle: 'Bespoke Precision',
    description: 'Impeccably tailored two-piece and three-piece suits crafted from Super 140s wool and pure cashmere.',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1200&auto=format&fit=crop',
    categoryFilter: 'suits',
    itemCount: '12 Bespoke Models',
  },
  {
    id: 'modern-shirts',
    name: 'Modern Shirts',
    subtitle: 'Egyptian Giza Cotton',
    description: 'Crisp sartorial collars, mother-of-pearl buttons, and breathable two-ply weaves for effortless poise.',
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1200&auto=format&fit=crop',
    categoryFilter: 'shirts',
    itemCount: '18 Tailored Cuts',
  },
  {
    id: 'smart-casual',
    name: 'Smart Casual',
    subtitle: 'Refined Weekend Elegance',
    description: 'Deconstructed blazers, tailored high-twist trousers, and luxury linen overshirts designed for leisure.',
    image: 'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=1200&auto=format&fit=crop',
    categoryFilter: 'blazers',
    itemCount: '15 Versatile Silhouettes',
  },
  {
    id: 'leather-accessories',
    name: 'Leather Accessories',
    subtitle: 'Artisanal Finishing Touches',
    description: 'Vegetable-tanned full-grain belts, slim executive cardholders, and seven-fold Como silk neckties.',
    image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?q=80&w=1200&auto=format&fit=crop',
    categoryFilter: 'accessories',
    itemCount: '24 Handcrafted Accents',
  },
];
