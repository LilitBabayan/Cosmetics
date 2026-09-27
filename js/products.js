const PRODUCTS = [
  {
    id: "p1",
    name: "Dew Drop Serum",
    brand: "Lumora",
    category: "Skincare",
    price: 34.00,
    icon: "💧",
    color: "#e8f0e6",
    image: "https://images.unsplash.com/photo-1679394270597-e90694d70350?auto=format&fit=crop&w=600&q=80",
    description: "A lightweight hyaluronic acid serum that locks in moisture for a plump, dewy finish all day long."
  },
  {
    id: "p2",
    name: "Velvet Matte Lipstick",
    brand: "Lumora",
    category: "Makeup",
    price: 22.00,
    icon: "💄",
    color: "#f6dede",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80",
    description: "Long-wearing, richly pigmented matte lipstick that glides on smooth and never feels drying."
  },
  {
    id: "p3",
    name: "Silk Glow Foundation",
    brand: "Lumora",
    category: "Makeup",
    price: 38.00,
    icon: "🧴",
    color: "#f3e6d8",
    image: "https://images.unsplash.com/photo-1531646317777-0619c7c5d1d3?auto=format&fit=crop&w=600&q=80",
    description: "Buildable, skin-like coverage with a natural satin finish. Available in 24 shades."
  },
  {
    id: "p4",
    name: "Rosewater Mist Toner",
    brand: "Lumora",
    category: "Skincare",
    price: 19.00,
    icon: "🌹",
    color: "#f7e3e8",
    image: "https://images.unsplash.com/photo-1613803745799-ba6c10aace85?auto=format&fit=crop&w=600&q=80",
    description: "A refreshing, alcohol-free toner infused with rosewater to soothe and balance skin."
  },
  {
    id: "p5",
    name: "Blush Petal Duo",
    brand: "Lumora",
    category: "Makeup",
    price: 26.00,
    icon: "🌸",
    color: "#fbe4ee",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
    description: "A soft-focus powder blush duo for a natural, lit-from-within flush of color."
  },
  {
    id: "p6",
    name: "Nightly Renewal Cream",
    brand: "Lumora",
    category: "Skincare",
    price: 42.00,
    icon: "🌙",
    color: "#e6eaf2",
    image: "https://images.unsplash.com/photo-1713768704571-6aeb0d0e5105?auto=format&fit=crop&w=600&q=80",
    description: "A rich overnight cream with peptides and ceramides to visibly restore skin while you sleep."
  },
  {
    id: "p7",
    name: "Golden Hour Eau de Parfum",
    brand: "Lumora",
    category: "Fragrance",
    price: 68.00,
    icon: "✨",
    color: "#faf0dd",
    image: "https://images.unsplash.com/photo-1543422655-ac1c6ca993ed?auto=format&fit=crop&w=600&q=80",
    description: "Warm notes of amber, vanilla, and sandalwood in a long-lasting eau de parfum."
  },
  {
    id: "p8",
    name: "Citrus Bloom Eau de Toilette",
    brand: "Lumora",
    category: "Fragrance",
    price: 54.00,
    icon: "🍊",
    color: "#fdeee0",
    image: "https://images.unsplash.com/photo-1595425959632-34f2822322ce?auto=format&fit=crop&w=600&q=80",
    description: "A bright, uplifting blend of citrus and white florals for an everyday signature scent."
  },
  {
    id: "p9",
    name: "Serene",
    brand: "Lumora",
    category: "Makeup",
    price: 13.00,
    icon: "💋",
    color: "#fbe0d9",
    image: "https://images.unsplash.com/photo-1631214524115-9942bf927d4a?auto=format&fit=crop&w=600&q=80",
    description: "A calming, nourishing lip oil that melts into a sheer, glass-like shine for effortlessly soft lips."
  },
  {
    id: "p10",
    name: "Ruby Woo",
    brand: "MAC",
    category: "Makeup",
    price: 21.00,
    icon: "💄",
    color: "#f9e1e4",
    image: "https://images.unsplash.com/photo-1617176892739-98fc49fdcbe7?auto=format&fit=crop&w=600&q=80",
    description: "The iconic blue-red matte that flatters nearly every skin tone in one confident swipe."
  },
  {
    id: "p11",
    name: "Pillow Talk Matte Revolution",
    brand: "Charlotte Tilbury",
    category: "Makeup",
    price: 34.00,
    icon: "👄",
    color: "#f4e3ee",
    image: "https://images.unsplash.com/photo-1631214499500-2e34edcaccfe?auto=format&fit=crop&w=600&q=80",
    description: "A universally-loved nude-pink with a soft matte finish that feels like your lips, just better."
  },
  {
    id: "p12",
    name: "Rouge Dior",
    brand: "Dior",
    category: "Makeup",
    price: 43.00,
    icon: "💋",
    color: "#eee3f5",
    image: "https://images.unsplash.com/photo-1626895872564-b691b6877b83?auto=format&fit=crop&w=600&q=80",
    description: "A weightless, couture-finish lipstick with a satin sheen that reads effortlessly polished."
  },
  {
    id: "p13",
    name: "Audacious Lipstick",
    brand: "NARS",
    category: "Makeup",
    price: 34.00,
    icon: "🎀",
    color: "#e3ecf5",
    image: "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?auto=format&fit=crop&w=600&q=80",
    description: "Buildable, second-skin color with a satin finish that never feels heavy on the lips."
  },
  {
    id: "p14",
    name: "Rouge Pur Couture",
    brand: "Yves Saint Laurent",
    category: "Makeup",
    price: 39.00,
    icon: "👑",
    color: "#f5ece0",
    image: "https://images.unsplash.com/photo-1587055682234-853183f4523c?auto=format&fit=crop&w=600&q=80",
    description: "A saturated, long-wearing classic with pigment that lasts through dinner and drinks."
  },
  {
    id: "p15",
    name: "Addict Lip Glow Oil",
    brand: "Dior",
    category: "Makeup",
    price: 40.00,
    icon: "🫧",
    color: "#eaf3e6",
    image: "https://images.unsplash.com/photo-1631120629198-777872b283f1?auto=format&fit=crop&w=600&q=80",
    description: "A glossy, color-adapting oil that conditions while it gives lips a glassy, my-lips-but-better shine."
  },
  {
    id: "p16",
    name: "Instant Light Lip Comfort Oil",
    brand: "Clarins",
    category: "Makeup",
    price: 29.00,
    icon: "🌿",
    color: "#f7e8d9",
    image: "https://images.unsplash.com/photo-1687195821497-fed0346cdc34?auto=format&fit=crop&w=600&q=80",
    description: "A cult-favorite nourishing oil that melts on for instant comfort and a sheer, dewy tint."
  }
];
