export type Product = {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  category: string;
  tag?: string;
  description: string;
  benefits: string[];
  color: string; // gradient accent
  emoji: string;
};

export const products: Product[] = [
  {
    id: "serum-vitamina-c",
    name: "Suero Vitamina C",
    subtitle: "Iluminador & Anti-manchas",
    price: 680,
    category: "Sueros",
    tag: "Más vendido",
    description: "Concentrado de vitamina C 15% con extracto de rosa mexicana. Unifica el tono, ilumina y protege contra el fotoenvejecimiento.",
    benefits: ["Ilumina el tono", "Reduce manchas", "Efecto antioxidante"],
    color: "#C9A84C",
    emoji: "✦",
  },
  {
    id: "crema-hidratante",
    name: "Crema Hidratante",
    subtitle: "Hidratación Profunda 72h",
    price: 590,
    category: "Cremas",
    description: "Textura ligera con ácido hialurónico triple y extracto de agave. Hidrata, plumifica y calma pieles sensibles.",
    benefits: ["Hidratación 72h", "Efecto calmante", "Sin fragancia"],
    color: "#C4785A",
    emoji: "◈",
  },
  {
    id: "limpiador-facial",
    name: "Limpiador Facial",
    subtitle: "Gel Purificante Suave",
    price: 420,
    category: "Limpieza",
    tag: "Nuevo",
    description: "Gel de limpieza con salicilato natural y proteína de seda. Elimina impurezas respetando el manto lipídico.",
    benefits: ["Poros refinados", "Sin resecado", "Apto piel mixta"],
    color: "#7D2B4E",
    emoji: "◉",
  },
  {
    id: "protector-solar",
    name: "Protector Solar SPF50",
    subtitle: "Textura Invisible & Ligera",
    price: 520,
    category: "Protección",
    description: "Filtro solar de última generación. Acabado invisible, sin residuo blanco, con niacinamida para controlar el brillo.",
    benefits: ["SPF 50+ UVA/UVB", "Sin residuo blanco", "Con niacinamida"],
    color: "#9B8578",
    emoji: "◎",
  },
  {
    id: "mascarilla-arcilla",
    name: "Mascarilla de Arcilla",
    subtitle: "Detox & Poros Refinados",
    price: 460,
    category: "Mascarillas",
    tag: "Favorita",
    description: "Arcilla volcánica mexicana combinada con carbón activado. Desintoxica, reduce poros y aporta luminosidad.",
    benefits: ["Desintoxica", "Poros refinados", "Efecto luminoso"],
    color: "#5C1A34",
    emoji: "◆",
  },
  {
    id: "tonico-rosas",
    name: "Tónico de Rosas",
    subtitle: "Equilibrante & Refrescante",
    price: 380,
    category: "Tónicos",
    description: "Agua de rosas de Puebla con glicerina vegetal. Equilibra el pH, prepara la piel para los siguientes pasos.",
    benefits: ["Equilibra el pH", "Hidratación inicial", "Aroma natural"],
    color: "#C4785A",
    emoji: "⬡",
  },
  {
    id: "contorno-ojos",
    name: "Contorno de Ojos",
    subtitle: "Anti-fatiga & Anti-ojeras",
    price: 720,
    category: "Tratamientos",
    description: "Crema de contorno con cafeína y péptidos reafirmantes. Reduce ojeras, bolsas y líneas de expresión.",
    benefits: ["Reduce ojeras", "Anti-bolsas", "Péptidos reafirmantes"],
    color: "#C9A84C",
    emoji: "◇",
  },
  {
    id: "aceite-facial",
    name: "Aceite Facial Nocturno",
    subtitle: "Regenerador & Nutritivo",
    price: 640,
    category: "Tratamientos",
    description: "Blend de aceite de chía, argán y rosa mosqueta. Regenera durante la noche, aporta elasticidad y suavidad extrema.",
    benefits: ["Regeneración nocturna", "Antioxidante", "Piel terciopelo"],
    color: "#7D2B4E",
    emoji: "✧",
  },
];

export const categories = ["Todos", ...Array.from(new Set(products.map(p => p.category)))];
