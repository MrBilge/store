export type FilterItem =
  | {
      type: "checkbox";
      key: string;
      title: string;
      options: { value: string; label: string }[];
    }
  | {
      type: "price";
      key: "price";
      title: string;
    }
  | {
      type: "rating";
      key: "rating";
      title: string;
      options: number[];
    };

export const foodFilters: FilterItem[] = [
  {
    type: "checkbox",
    key: "brand",
    title: "Marka",
    options: [
      { value: "ulker", label: "Ülker" },
      { value: "eti", label: "Eti" },
    ],
  },
  {
    type: "checkbox",
    key: "category",
    title: "Kategori",
    options: [
      { value: "makarna", label: "Makarna" },
      { value: "cips", label: "Cips" },
    ],
  },
  {
    type: "price",
    key: "price",
    title: "Fiyat",
  },
  {
    type: "rating",
    key: "rating",
    title: "Değerlendirme",
    options: [4, 3, 2],
  },
];

export const tvFilters: FilterItem[] = [
  {
    type: "checkbox",
    key: "brand",
    title: "Marka",
    options: [
      { value: "samsung", label: "Samsung" },
      { value: "lg", label: "LG" },
    ],
  },
  {
    type: "checkbox",
    key: "size",
    title: "Ekran Boyutu",
    options: [
      { value: "55", label: "55 inch" },
      { value: "65", label: "65 inch" },
    ],
  },
  {
    type: "price",
    key: "price",
    title: "Fiyat",
  },
];

export const laptopFilters: FilterItem[] = [
  {
    type: "checkbox",
    key: "brand",
    title: "Marka",
    options: [
      { value: "apple", label: "Apple" },
      { value: "dell", label: "Dell" },
      { value: "lenovo", label: "Lenovo" },
      { value: "asus", label: "Asus" },
      { value: "hp", label: "HP" },
    ],
  },
  {
    type: "checkbox",
    key: "gpu",
    title: "Ekran Kartı",
    options: [
      { value: "rtx3050", label: "RTX 3050" },
      { value: "rtx3060", label: "RTX 3060" },
      { value: "mx450", label: "MX 450" },
    ],
  },
  {
    type: "checkbox",
    key: "cpu",
    title: "İşlemci",
    options: [
      { value: "i5", label: "Intel i5" },
      { value: "i7", label: "Intel i7" },
      { value: "ryzen5", label: "Ryzen 5" },
      { value: "ryzen7", label: "Ryzen 7" },
    ],
  },
  {
    type: "price",
    key: "price",
    title: "Fiyat",
  },
  {
    type: "rating",
    key: "rating",
    title: "Değerlendirme",
    options: [4, 3, 2],
  },
];

export const shoeFilters: FilterItem[] = [
  {
    type: "checkbox",
    key: "brand",
    title: "Marka",
    options: [
      { value: "nike", label: "Nike" },
      { value: "adidas", label: "Adidas" },
      { value: "puma", label: "Puma" },
      { value: "newbalance", label: "New Balance" },
    ],
  },
  {
    type: "checkbox",
    key: "size",
    title: "Numara",
    options: [
      { value: "38", label: "38" },
      { value: "39", label: "39" },
      { value: "40", label: "40" },
      { value: "41", label: "41" },
      { value: "42", label: "42" },
      { value: "43", label: "43" },
    ],
  },
  {
    type: "checkbox",
    key: "color",
    title: "Renk",
    options: [
      { value: "siyah", label: "Siyah" },
      { value: "beyaz", label: "Beyaz" },
      { value: "kirmizi", label: "Kırmızı" },
      { value: "mavi", label: "Mavi" },
    ],
  },
  {
    type: "checkbox",
    key: "category",
    title: "Kategori",
    options: [
      { value: "spor", label: "Spor" },
      { value: "klasik", label: "Klasik" },
      { value: "casual", label: "Casual" },
    ],
  },
  {
    type: "price",
    key: "price",
    title: "Fiyat",
  },
  {
    type: "rating",
    key: "rating",
    title: "Değerlendirme",
    options: [4, 3, 2],
  },
];

export const watchFilters: FilterItem[] = [
  {
    type: "checkbox",
    key: "brand",
    title: "Marka",
    options: [
      { value: "apple", label: "Apple" },
      { value: "samsung", label: "Samsung" },
      { value: "xiaomi", label: "Xiaomi" },
      { value: "huawei", label: "Huawei" },
    ],
  },
  {
    type: "checkbox",
    key: "color",
    title: "Renk",
    options: [
      { value: "black", label: "Black" },
      { value: "silver", label: "Silver" },
      { value: "gold", label: "Gold" },
    ],
  },
  {
    type: "price",
    key: "price",
    title: "Fiyat",
  },
  {
    type: "rating",
    key: "rating",
    title: "Değerlendirme",
    options: [4, 3, 2],
  },
];
