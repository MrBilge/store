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
      { value: "nestle", label: "Nestlé" },
      { value: "torku", label: "Torku" },
      { value: "pinar", label: "Pınar" },
      { value: "icim", label: "İçim" },
      { value: "danone", label: "Danone" },
      { value: "sutas", label: "Sütaş" },
      { value: "barilla", label: "Barilla" },
    ],
  },

  {
    type: "checkbox",
    key: "category",
    title: "Kategori",
    options: [
      { value: "makarna", label: "Makarna" },
      { value: "pirinc", label: "Pirinç" },
      { value: "yag", label: "Yağ" },
      { value: "cips", label: "Cips" },
      { value: "cikolata", label: "Çikolata" },
      { value: "biskuvi", label: "Bisküvi" },
      { value: "icecek", label: "İçecek" },
      { value: "sut_urunleri", label: "Süt Ürünleri" },
      { value: "kahve", label: "Kahve" },
      { value: "cay", label: "Çay" },
    ],
  },

  {
    type: "checkbox",
    key: "package",
    title: "Ambalaj Tipi",
    options: [
      { value: "kutu", label: "Kutu" },
      { value: "paket", label: "Paket" },
      { value: "sise", label: "Şişe" },
      { value: "teneke", label: "Teneke" },
    ],
  },

  {
    type: "checkbox",
    key: "subCategory",
    title: "Alt Kategori",
    options: [
      { value: "glutensiz", label: "Glutensiz" },
      { value: "seker_ilavesiz", label: "Şeker İlavesiz" },
      { value: "organik", label: "Organik" },
      { value: "vegan", label: "Vegan" },
      { value: "light", label: "Light" },
    ],
  },

  {
    type: "checkbox",
    key: "weight",
    title: "Gramaj",
    options: [
      { value: "250", label: "250 gr" },
      { value: "500", label: "500 gr" },
      { value: "1000", label: "1 kg" },
      { value: "2000", label: "2 kg" },
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
    options: [5, 4, 3, 2],
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
      { value: "sony", label: "Sony" },
      { value: "philips", label: "Philips" },
      { value: "vestel", label: "Vestel" },
      { value: "arcelik", label: "Arçelik" },
      { value: "tcl", label: "TCL" },
      { value: "hisense", label: "Hisense" },
    ],
  },

  {
    type: "checkbox",
    key: "size",
    title: "Ekran Boyutu",
    options: [
      { value: "32", label: "32 inch" },
      { value: "43", label: "43 inch" },
      { value: "50", label: "50 inch" },
      { value: "55", label: "55 inch" },
      { value: "65", label: "65 inch" },
      { value: "75", label: "75 inch" },
      { value: "85", label: "85 inch" },
    ],
  },

  {
    type: "checkbox",
    key: "resolution",
    title: "Çözünürlük",
    options: [
      { value: "hd", label: "HD" },
      { value: "fullhd", label: "Full HD" },
      { value: "4k", label: "4K Ultra HD" },
      { value: "8k", label: "8K" },
    ],
  },

  {
    type: "checkbox",
    key: "panel",
    title: "Panel Tipi",
    options: [
      { value: "led", label: "LED" },
      { value: "qled", label: "QLED" },
      { value: "oled", label: "OLED" },
      { value: "mini-led", label: "Mini LED" },
    ],
  },

  {
    type: "checkbox",
    key: "smart",
    title: "Smart TV",
    options: [
      { value: "yes", label: "Var" },
      { value: "no", label: "Yok" },
    ],
  },

  {
    type: "checkbox",
    key: "refreshRate",
    title: "Yenileme Hızı",
    options: [
      { value: "60hz", label: "60 Hz" },
      { value: "120hz", label: "120 Hz" },
      { value: "144hz", label: "144 Hz" },
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
    options: [5, 4, 3, 2],
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
