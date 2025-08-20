export const products = [
  {
    id: 1,
    name: "Vestido de Gala Primavera",
    price: 2500,
    category: "vestidos",
    season: "primavera",
    description: "Elegante vestido de gala con detalles florales bordados a mano. Fabricado en seda italiana de la más alta calidad.",
    image: "/images/dress-1.jpg",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Blanco", "Rosa pálido", "Azul cielo"],
    inStock: true,
    featured: true,
    materials: ["Seda italiana", "Encaje francés", "Cristales Swarovski"],
    care: "Limpieza en seco únicamente"
  },
  {
    id: 2,
    name: "Traje de Noche Otoñal",
    price: 3200,
    category: "trajes",
    season: "otoño",
    description: "Traje de noche sofisticado con chaqueta estructurada y falda plisada. Perfecto para eventos de gala.",
    image: "/images/suit-1.jpg",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Negro", "Burgundy", "Verde bosque"],
    inStock: true,
    featured: true,
    materials: ["Lana merino", "Seda", "Botones de nácar"],
    care: "Limpieza profesional recomendada"
  },
  {
    id: 3,
    name: "Blazer de Colección Limitada",
    price: 1800,
    category: "blazers",
    season: "invierno",
    description: "Blazer de edición limitada con bordados artesanales. Solo 50 piezas disponibles en el mundo.",
    image: "/images/blazer-1.jpg",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Negro", "Blanco", "Rojo carmesí"],
    inStock: true,
    featured: false,
    materials: ["Lana cashmere", "Seda", "Bordados a mano"],
    care: "Limpieza en seco"
  },
  {
    id: 4,
    name: "Falda de Alta Costura",
    price: 1200,
    category: "faldas",
    season: "primavera",
    description: "Falda de alta costura con pliegues perfectos y acabados de lujo. Diseño exclusivo de la casa.",
    image: "/images/skirt-1.jpg",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Beige", "Rosa", "Azul marino"],
    inStock: true,
    featured: false,
    materials: ["Crepe de seda", "Forro de seda"],
    care: "Limpieza en seco"
  },
  {
    id: 5,
    name: "Vestido de Novia Ostara",
    price: 8500,
    category: "vestidos",
    season: "primavera",
    description: "Vestido de novia de la colección signature de Ostara. Bordado con hilos de oro y cristales.",
    image: "/images/wedding-dress-1.jpg",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Blanco marfil", "Blanco puro"],
    inStock: true,
    featured: true,
    materials: ["Seda duchesse", "Encaje de Chantilly", "Hilos de oro"],
    care: "Limpieza especializada"
  },
  {
    id: 6,
    name: "Chaleco de Seda Artesanal",
    price: 950,
    category: "chalecos",
    season: "verano",
    description: "Chaleco de seda pintada a mano por artistas locales. Cada pieza es única.",
    image: "/images/vest-1.jpg",
    sizes: ["S", "M", "L"],
    colors: ["Multicolor", "Azul índigo", "Verde esmeralda"],
    inStock: true,
    featured: false,
    materials: ["Seda natural", "Pintura artesanal"],
    care: "Limpieza manual suave"
  }
];

export const collections = [
  {
    id: "primavera-2025",
    name: "Colección Primavera 2025",
    description: "Inspirada en los jardines de Versalles, esta colección celebra la renovación y la elegancia natural.",
    season: "primavera",
    year: 2025,
    products: [1, 4, 5]
  },
  {
    id: "otoño-2025",
    name: "Colección Otoño 2025",
    description: "Tonos cálidos y texturas ricas que evocan la sofisticación del otoño parisino.",
    season: "otoño",
    year: 2025,
    products: [2, 3]
  },
  {
    id: "verano-2025",
    name: "Colección Verano 2025",
    description: "Ligereza y elegancia para los días más cálidos del año.",
    season: "verano",
    year: 2025,
    products: [6]
  }
];

export const categories = [
  { id: "vestidos", name: "Vestidos", icon: "👗" },
  { id: "trajes", name: "Trajes", icon: "👔" },
  { id: "blazers", name: "Blazers", icon: "🧥" },
  { id: "faldas", name: "Faldas", icon: "👘" },
  { id: "chalecos", name: "Chalecos", icon: "🦺" }
];

export const seasons = [
  { id: "primavera", name: "Primavera", icon: "🌸" },
  { id: "verano", name: "Verano", icon: "☀️" },
  { id: "otoño", name: "Otoño", icon: "🍂" },
  { id: "invierno", name: "Invierno", icon: "❄️" }
]; 