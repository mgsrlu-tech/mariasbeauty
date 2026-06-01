export type Product = {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  category: string;
  tag?: "Más vendido" | "Nuevo" | "Agotado" | "Oferta";
  description: string;
  image: string;
  image2?: string;
};

export const products: Product[] = [
  {
    id: "summer-fridays-lip-butter",
    name: "Lip Butter Balm",
    brand: "Summer Fridays",
    price: 840,
    category: "Labios",
    tag: "Más vendido",
    description: "El bálsamo labial más viral. Hidrata, nutre y da un acabado jugoso y natural. Disponible en múltiples tonos.",
    image: "https://shooshbeauty.shop/cdn/shop/files/7F2EF93B-BC87-409C-AF33-6F9E3D7A6778_533x.webp",
  },
  {
    id: "elf-glow-reviver-lip-oil",
    name: "Glow Reviver Lip Oil",
    brand: "e.l.f.",
    price: 410,
    category: "Labios",
    tag: "Más vendido",
    description: "Aceite labial que hidrata, ilumina y da volumen. Efecto espejo con una sensación ligera y no pegajosa.",
    image: "https://shooshbeauty.shop/cdn/shop/files/22FB41CD-2180-43DA-8162-EC6E1D522218_533x.jpg",
  },
  {
    id: "patrick-ta-blush-duo",
    name: "Major Beauty Headlines Blush Duo",
    brand: "Patrick Ta",
    price: 1250,
    category: "Maquillaje",
    tag: "Nuevo",
    description: "El blush duo favorito de las influencers. Combina un tono mate con uno shimmer para un acabado editorial irresistible.",
    image: "https://shooshbeauty.shop/cdn/shop/files/607236B3-64C6-4A0B-9B5D-8D23F57E2AF0_533x.webp",
  },
  {
    id: "rhode-peptide-liptint",
    name: "Peptide Lip Tint Raspberry Jelly",
    brand: "Rhode",
    price: 700,
    category: "Labios",
    tag: "Más vendido",
    description: "Tinte labial con péptidos de Hailey Bieber. Da color natural, hidratación y efecto jugoso todo el día.",
    image: "https://shooshbeauty.shop/cdn/shop/files/3185F3B1-AD8A-4479-88F0-E9C81CD9C0BA_533x.jpg",
  },
  {
    id: "onesize-setting-spray",
    name: "Mattifying Setting Spray",
    brand: "One/Size",
    price: 600,
    category: "Maquillaje",
    description: "Spray fijador mate que controla el brillo hasta 16 horas. Ideal para pieles mixtas y grasas.",
    image: "https://shooshbeauty.shop/cdn/shop/files/0E16B74A-968F-487E-A95D-84A5D040034C_533x.jpg",
  },
  {
    id: "kiko-3d-hydra-lipgloss",
    name: "3D Hydra Lipgloss",
    brand: "Kiko Milano",
    price: 540,
    category: "Labios",
    description: "Lip gloss con efecto 3D voluminizador. Fórmula hidratante con 30 tonos disponibles.",
    image: "https://shooshbeauty.shop/cdn/shop/files/DCE3A9D9-E21B-4D8E-84C9-6BAB3AD32E47_533x.jpg",
  },
  {
    id: "starface-pimple-patches",
    name: "Pimple Patches",
    brand: "Starface",
    price: 470,
    category: "Skincare",
    tag: "Más vendido",
    description: "Los parches anti-barro más adorables. Forma de estrella con hidrocoloide que absorbe impurezas y protege el grano.",
    image: "https://shooshbeauty.shop/cdn/shop/files/0BB1570F-9D9E-4E71-8672-C90EA5E481F3_533x.jpg",
  },
  {
    id: "shiseido-eyelash-curler",
    name: "Eyelash Curler",
    brand: "Shiseido",
    price: 750,
    category: "Accesorios",
    description: "El rizador de pestañas más icónico del mundo. Curva perfecta sin pellizcar. Favorito de maquilladoras profesionales.",
    image: "https://shooshbeauty.shop/cdn/shop/files/755F9C26-C806-4AC1-8A94-9A3CEE5F96AB_533x.jpg",
  },
  {
    id: "beauty-of-joseon-glow-serum",
    name: "Glow Sérum",
    brand: "Beauty of Joseon",
    price: 620,
    category: "Skincare",
    tag: "Nuevo",
    description: "Suero coreano con arroz y propóleo. Ilumina, unifica el tono y da una luminosidad natural tipo glass skin.",
    image: "https://shooshbeauty.shop/cdn/shop/files/CF90D5F8-AE44-4DE4-A256-4373942BD49A.webp?v=1744676743&width=533",
  },
  {
    id: "beauty-of-joseon-relief-sun",
    name: "Relief Sun SPF 50+",
    brand: "Beauty of Joseon",
    price: 600,
    category: "Skincare",
    description: "El protector solar coreano más amado. Textura tipo sérum, sin residuo blanco y con niacinamida para piel uniforme.",
    image: "https://shooshbeauty.shop/cdn/shop/files/B49403A8-C1CE-48FD-84A9-DCE10D94CA4C.webp?v=1744675108&width=533",
  },
  {
    id: "anua-peach-toner",
    name: "Peach 77 Niacin Essence Toner",
    brand: "Anua",
    price: 790,
    category: "Skincare",
    tag: "Nuevo",
    description: "Tónico esencia con extracto de durazno y niacinamida al 2%. Calma, hidrata e ilumina en un solo paso.",
    image: "https://shooshbeauty.shop/cdn/shop/files/A16CE3C3-C830-4238-AD9A-B8534CD271F0.webp?v=1751310456&width=533",
  },
  {
    id: "anastasia-sparkle-lip-gloss",
    name: "Sparkle Lip Gloss Duo",
    brand: "Anastasia Beverly Hills",
    price: 850,
    category: "Labios",
    description: "Duo de labiales con brillo brillante y partículas holográficas. Para un look festivo o editorial.",
    image: "https://shooshbeauty.shop/cdn/shop/files/557432E8-4CD1-47EC-AE04-654B8576E6F0.webp?v=1737068130&width=533",
  },
];

export const categories = ["Todos", ...Array.from(new Set(products.map((p) => p.category)))];
