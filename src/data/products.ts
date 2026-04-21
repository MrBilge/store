type ProductItem = {
  name: string;
  price: number;
  brand: string;
  gpu?: string;
  cpu?: string;
  size?: string;
  color?: string;
  itemCategory?: string;
  category?: string;
  rating: number;
};
type BaseLeaf = {
  category: string;
  subCategory: string;
  subProduct: string;
};

type OldLeaf = BaseLeaf & {
  names: [string, string, string];
  prices: [number, number, number];
};

type NewLeaf = BaseLeaf & {
  items: ProductItem[];
};

type Leaf = OldLeaf | NewLeaf;

function isNewLeaf(leaf: Leaf): leaf is NewLeaf {
  return "items" in leaf;
}

export type Product = {
  id: number;
  name: string;
  price: number;
  src: string;
  category: string;
  subCategory: string;
  subProduct: string;
  brand: string;
  gpu?: string;
  cpu?: string;
  size?: string;
  color?: string;
  itemCategory?: string;
  rating: number;
};
const productLeaves: Leaf[] = [
  {
    category: "ev",
    subCategory: "mobilya",
    subProduct: "yatak-odasi",
    names: [
      "Modern Yatak Odası Takımı",
      "Minimal Yatak Odası Dolabı",
      "Ahşap Yatak Başlığı",
    ],
    prices: [18500, 12400, 6200],
  },
  {
    category: "ev",
    subCategory: "mobilya",
    subProduct: "yemek-odasi",
    names: [
      "6 Kişilik Yemek Masası",
      "Modern Konsol",
      "Ahşap Yemek Odası Sandalyesi",
    ],
    prices: [9800, 7600, 2450],
  },
  {
    category: "ev",
    subCategory: "mobilya",
    subProduct: "calisma-odasi",
    names: [
      "Geniş Çalışma Masası",
      "Ergonomik Çalışma Koltuğu",
      "Minimal Kitaplık",
    ],
    prices: [4200, 3500, 2900],
  },
  {
    category: "ev",
    subCategory: "mobilya",
    subProduct: "oturma-grubu",
    names: ["Modern Oturma Grubu", "Keten 3'lü Koltuk", "Köşe Koltuk Takımı"],
    prices: [13900, 8700, 16400],
  },
  {
    category: "ev",
    subCategory: "dekorasyon",
    subProduct: "vazo",
    names: ["Portakal Vazo", "Minimal Seramik Vazo", "Modern Cam Vazo"],
    prices: [500, 320, 460],
  },
  {
    category: "ev",
    subCategory: "dekorasyon",
    subProduct: "ayna",
    names: [
      "Dekoratif Duvar Aynası",
      "Gold Çerçeveli Ayna",
      "Minimal Yuvarlak Ayna",
    ],
    prices: [900, 1250, 780],
  },
  {
    category: "ev",
    subCategory: "dekorasyon",
    subProduct: "saat",
    names: ["Modern Ahşap Saat", "Retro Duvar Saati", "Metal Çerçeveli Saat"],
    prices: [780, 640, 890],
  },
  {
    category: "ev",
    subCategory: "aydinlatma",
    subProduct: "lamba",
    names: ["Vintage Masa Lambası", "LED Masa Lambası", "Şık Masa Lambası"],
    prices: [650, 420, 520],
  },
  {
    category: "ev",
    subCategory: "aydinlatma",
    subProduct: "avize",
    names: ["Modern Avize", "Kristal Avize", "Minimal Salon Avizesi"],
    prices: [1750, 3100, 1480],
  },
  {
    category: "ev",
    subCategory: "sofra",
    subProduct: "yemek-takimi",
    names: [
      "12 Parça Yemek Takımı",
      "24 Parça Seramik Yemek Takımı",
      "Mat Siyah Yemek Takımı",
    ],
    prices: [950, 1680, 1320],
  },
  {
    category: "ev",
    subCategory: "sofra",
    subProduct: "catal-kasik",
    names: [
      "Çatal Kaşık Seti",
      "Paslanmaz Çatal Kaşık Takımı",
      "Gold Detaylı Sofra Seti",
    ],
    prices: [300, 540, 890],
  },
  {
    category: "ev",
    subCategory: "sofra",
    subProduct: "bardak",
    names: ["Cam Bardak Seti", "Kristal Bardak", "Minimal Su Bardağı"],
    prices: [150, 260, 120],
  },
  {
    category: "ev",
    subCategory: "sofra",
    subProduct: "tabak",
    names: ["Seramik Tabak", "Sunum Tabağı", "Mat Beyaz Tabak Seti"],
    prices: [140, 190, 330],
  },
  {
    category: "ev",
    subCategory: "sofra",
    subProduct: "kase",
    names: ["Seramik Kase", "Çorba Kasesi", "Minimal Kase Seti"],
    prices: [95, 130, 240],
  },

  {
    category: "elektronik",
    subCategory: "bilgisayar",
    subProduct: "laptop",
    items: [
      {
        name: "Asus Gaming Laptop",
        price: 32999,
        brand: "asus",
        gpu: "rtx3050",
        cpu: "i7",
        rating: 4.5,
      },
      {
        name: "Apple i5 İnce Hafif Laptop",
        price: 21999,
        brand: "apple",
        gpu: "mx450",
        cpu: "i5",
        rating: 2,
      },
      {
        name: "Profesyonel İş Laptopu",
        price: 28499,
        brand: "dell",
        gpu: "rtx3060",
        cpu: "i7",
        rating: 4.7,
      },
    ],
  },
  {
    category: "elektronik",
    subCategory: "bilgisayar",
    subProduct: "masaustu",
    names: ["Masaüstü Ofis PC", "Gaming Masaüstü Bilgisayar", "Mini PC"],
    prices: [15499, 28750, 11200],
  },
  {
    category: "elektronik",
    subCategory: "bilgisayar",
    subProduct: "monitor",
    names: ["27 İnç Monitör", "4K Monitör", "Gaming Monitör 165Hz"],
    prices: [5200, 8990, 11250],
  },
  {
    category: "elektronik",
    subCategory: "telefon",
    subProduct: "cep-telefonu",
    names: [
      "Amiral Gemisi Telefon",
      "Orta Segment Telefon",
      "Kompakt Akıllı Telefon",
    ],
    prices: [41999, 18999, 14999],
  },
  {
    category: "elektronik",
    subCategory: "telefon",
    subProduct: "tablet",
    names: ["10 İnç Tablet", "Kalem Destekli Tablet", "Mini Tablet"],
    prices: [12499, 17999, 9990],
  },
  {
    category: "elektronik",
    subCategory: "telefon",
    subProduct: "akilli-saat",
    names: ["Akıllı Saat", "Spor Takip Saat", "Premium Akıllı Saat"],
    prices: [4299, 2899, 6999],
  },
  {
    category: "elektronik",
    subCategory: "tv",
    subProduct: "televizyon",
    names: ["50 İnç Smart TV", "55 İnç 4K TV", "65 İnç QLED TV"],
    prices: [17499, 22999, 38999],
  },
  {
    category: "elektronik",
    subCategory: "tv",
    subProduct: "projeksiyon",
    names: [
      "Ev Tipi Projeksiyon",
      "Mini Projeksiyon",
      "1080p Akıllı Projeksiyon",
    ],
    prices: [7499, 5299, 11890],
  },

  {
    category: "erkek",
    subCategory: "giyim",
    subProduct: "tshirt",
    names: ["Basic T-Shirt", "Oversize T-Shirt", "Premium Pamuklu T-Shirt"],
    prices: [220, 280, 390],
  },
  {
    category: "erkek",
    subCategory: "giyim",
    subProduct: "gomlek",
    names: ["Slim Fit Gömlek", "Klasik Beyaz Gömlek", "Çizgili Gömlek"],
    prices: [420, 510, 460],
  },
  {
    category: "erkek",
    subCategory: "giyim",
    subProduct: "pantolon",
    names: ["Kumaş Pantolon", "Slim Fit Pantolon", "Günlük Pantolon"],
    prices: [620, 690, 540],
  },
  {
    category: "erkek",
    subCategory: "giyim",
    subProduct: "jean",
    names: ["Mavi Jean", "Siyah Jean", "Dar Kesim Jean"],
    prices: [780, 820, 760],
  },
  {
    category: "erkek",
    subCategory: "dis-giyim",
    subProduct: "mont",
    names: ["Şişme Mont", "Kapüşonlu Mont", "Su Geçirmez Mont"],
    prices: [1450, 1720, 1980],
  },
  {
    category: "erkek",
    subCategory: "dis-giyim",
    subProduct: "kaban",
    names: ["Kaşe Kaban", "Uzun Kaban", "Düğmeli Siyah Kaban"],
    prices: [1890, 2250, 2480],
  },
  {
    category: "erkek",
    subCategory: "ayakkabi",
    subProduct: "sneaker",
    items: [
      {
        name: "Beyaz Sneaker",
        price: 990,
        brand: "nike",
        size: "42",
        color: "beyaz",
        rating: 4.3,
        itemCategory: "casual",
      },
      {
        name: "Koşu Sneaker",
        price: 1340,
        brand: "adidas",
        size: "43",
        color: "siyah",
        rating: 4.5,
        itemCategory: "spor",
      },
      {
        name: "Günlük Sneaker",
        price: 1180,
        brand: "puma",
        size: "41",
        color: "gri",
        rating: 4.2,
        itemCategory: " spor",
      },
    ],
  },
  {
    category: "erkek",
    subCategory: "ayakkabi",
    subProduct: "klasik",
    items: [
      {
        name: "Klasik Deri Ayakkabı",
        price: 1540,
        brand: "derimod",
        size: "42",
        color: "siyah",
        rating: 4.4,
        itemCategory: "klasik",
      },
      {
        name: "Bağcıklı Klasik Ayakkabı",
        price: 1760,
        brand: "hotic",
        size: "43",
        color: "kahverengi",
        rating: 4.6,
        category: "casual",
      },
      {
        name: "Kösele Ayakkabı",
        price: 1890,
        brand: "kemal tanca",
        size: "42",
        color: "siyah",
        rating: 4.7,
        category: "klasik",
      },
    ],
  },

  {
    category: "kadin",
    subCategory: "giyim",
    subProduct: "elbise",
    names: ["Yazlık Elbise", "Şık Siyah Elbise", "Midi Elbise"],
    prices: [720, 1180, 940],
  },
  {
    category: "kadin",
    subCategory: "giyim",
    subProduct: "bluz",
    names: ["Şifon Bluz", "Minimal Bluz", "Crop Bluz"],
    prices: [390, 320, 360],
  },
  {
    category: "kadin",
    subCategory: "giyim",
    subProduct: "etek",
    names: ["Pileli Etek", "Saten Etek", "Mini Etek"],
    prices: [480, 620, 540],
  },
  {
    category: "kadin",
    subCategory: "giyim",
    subProduct: "pantolon",
    names: ["Yüksek Bel Pantolon", "Bol Paça Pantolon", "Kumaş Pantolon"],
    prices: [690, 760, 720],
  },
  {
    category: "kadin",
    subCategory: "dis-giyim",
    subProduct: "ceket",
    names: ["Keten Ceket", "Blazer Ceket", "Kısa Ceket"],
    prices: [1180, 1460, 990],
  },
  {
    category: "kadin",
    subCategory: "dis-giyim",
    subProduct: "kaban",
    names: ["Uzun Kaban", "Kaşe Kaban", "Düğmeli Kaban"],
    prices: [1890, 2240, 1990],
  },
  {
    category: "kadin",
    subCategory: "ayakkabi",
    subProduct: "topuklu",
    items: [
      {
        name: "Topuklu Ayakkabı",
        price: 1290,
        brand: "zara",
        size: "38",
        color: "siyah",
        rating: 2.3,
        itemCategory: "casual",
      },
      {
        name: "İnce Topuklu Ayakkabı",
        price: 1490,
        brand: "bershka",
        size: "39",
        color: "red",
        rating: 1.5,
        itemCategory: "casual",
      },
      {
        name: "Şık Gece Ayakkabısı dsjfhsdjfhsdf",
        price: 1680,
        brand: "hm",
        size: "37",
        color: "siyah",
        rating: 3.7,
        itemCategory: "klasik",
      },
    ],
  },
  {
    category: "kadin",
    subCategory: "ayakkabi",
    subProduct: "sneaker",
    items: [
      {
        name: "Kadın Sneaker",
        price: 1120,
        brand: "nike",
        size: "40",
        color: "beyaz",
        rating: 1.5,
        itemCategory: "casual",
      },
      {
        name: "Günlük Sneaker",
        price: 980,
        brand: "adidas",
        size: "39",
        color: "siyah",
        rating: 4.2,
        itemCategory: "spor",
      },
      {
        name: "Kalın Taban Sneaker",
        price: 1260,
        brand: "puma",
        size: "41",
        color: "mavi",
        rating: 4.6,
      },
    ],
  },
  {
    category: "kadin",
    subCategory: "canta",
    subProduct: "canta",
    names: ["Omuz Çantası", "Mini Çanta", "Günlük Çanta"],
    prices: [980, 860, 1100],
  },

  {
    category: "market",
    subCategory: "gida yiyecek icecek",
    subProduct: "makarna",
    items: [
      {
        name: "Spagetti Makarna",
        price: 32,
        brand: "barilla",
        rating: 4.2,
        itemCategory: "temel-gida",
      },

      {
        name: "Kalem Makarna",
        price: 28,
        brand: "filiz",
        rating: 4.0,
        itemCategory: "temel-gida",
      },
      {
        name: "Tam Buğday Makarna",
        price: 45,
        brand: "barilla",
        rating: 4.5,
        itemCategory: "saglikli",
      },
    ],
  },
];

let currentId = 1;

export const products: Product[] = productLeaves.flatMap((leaf) => {
  if (isNewLeaf(leaf)) {
    return leaf.items.map((item) => ({
      id: currentId++,
      name: item.name,
      price: item.price,
      size: item.size,
      color: item.color,
      itemCategory: item.itemCategory,
      brand: item.brand,
      gpu: item.gpu,
      cpu: item.cpu,
      rating: item.rating,
      src: "/assets/dekoratif.jpg",
      category: leaf.category,
      subCategory: leaf.subCategory,
      subProduct: leaf.subProduct,
    }));
  }

  // oldLeaf
  return leaf.names.map((name, index) => ({
    id: currentId++,
    name,
    price: leaf.prices[index],
    brand: "generic",
    gpu: "none",
    cpu: "none",
    size: undefined,
    color: undefined,
    itemCategory: undefined,
    rating: 3.5,
    src: "/assets/dekoratif.jpg",
    category: leaf.category,
    subCategory: leaf.subCategory,
    subProduct: leaf.subProduct,
  }));
});
