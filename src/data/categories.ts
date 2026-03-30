import {
  Squares2X2Icon,
  HomeIcon,
  ComputerDesktopIcon,
  UserIcon,
  UserGroupIcon,
  ShoppingCartIcon,
  ClockIcon,
  ShoppingBagIcon,
  SparklesIcon,
  FireIcon,
  TrophyIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

export const categories = [
  {
    title: "Tümü",
    path: "/products",
    bg: "",
    icon: Squares2X2Icon,
  },

  {
    title: "Ev",
    icon: HomeIcon,
    megaMenu: [
      {
        title: "Mobilya",
        items: [
          { title: "Yatak Odası", path: "/products/ev/mobilya/yatak-odasi" },
          { title: "Yemek Odası", path: "/products/ev/mobilya/yemek-odasi" },
          {
            title: "Çalışma Odası",
            path: "/products/ev/mobilya/calisma-odasi",
          },
          { title: "Oturma Grubu", path: "/products/ev/mobilya/oturma-grubu" },
        ],
      },
      {
        title: "Dekorasyon",
        items: [
          { title: "Tablo", path: "/products/ev/dekorasyon/tablo" },
          { title: "Ayna", path: "/products/ev/dekorasyon/ayna" },
          { title: "Duvar Saati", path: "/products/ev/dekorasyon/duvar-saati" },
          { title: "Aydınlatma", path: "/products/ev/dekorasyon/aydinlatma" },
        ],
      },
      {
        title: "Sofra",
        items: [
          { title: "Yemek Takımı", path: "/products/ev/sofra/yemek-takimi" },
          { title: "Çatal Kaşık", path: "/products/ev/sofra/catal-kasik" },
          { title: "Bardak", path: "/products/ev/sofra/bardak" },
        ],
      },
    ],
  },

  {
    title: "Elektronik",
    icon: ComputerDesktopIcon,
    megaMenu: [
      {
        title: "Bilgisayar",
        items: [
          { title: "Laptop", path: "/products/elektronik/bilgisayar/laptop" },
          {
            title: "Masaüstü",
            path: "/products/elektronik/bilgisayar/masaustu",
          },
          { title: "Monitör", path: "/products/elektronik/bilgisayar/monitor" },
        ],
      },
      {
        title: "Telefon & Tablet",
        items: [
          { title: "Cep Telefonu", path: "/products/elektronik/telefon" },
          {
            title: "/products/elektronik/tablet",
            path: "/products/elektronik/tablet",
          },
          { title: "Akıllı Saat", path: "/products/elektronik/akilli-saat" },
        ],
      },
      {
        title: "TV & Görüntü",
        items: [
          { title: "Televizyon", path: "/products/elektronik/tv" },
          { title: "Projeksiyon", path: "/products/elektronik/projeksiyon" },
        ],
      },
    ],
  },

  {
    title: "Erkek",
    icon: UserIcon,
    megaMenu: [
      {
        title: "Giyim",
        items: [
          { title: "T-Shirt", path: "/products/erkek/tshirt" },
          { title: "Gömlek", path: "/products/erkek/gomlek" },
          { title: "Pantolon", path: "/products/erkek/pantolon" },
          { title: "Jean", path: "/products/erkek/jean" },
        ],
      },
      {
        title: "Dış Giyim",
        items: [
          { title: "Mont", path: "/products/erkek/mont" },
          { title: "Kaban", path: "/products/erkek/kaban" },
        ],
      },
      {
        title: "Ayakkabı",
        items: [
          { title: "Sneaker", path: "/products/erkek/ayakkabi/sneaker" },
          { title: "Klasik", path: "/products/erkek/ayakkabi/klasik" },
        ],
      },
    ],
  },

  {
    title: "Kadın",
    icon: UserGroupIcon,
    megaMenu: [
      {
        title: "Giyim",
        items: [
          { title: "Elbise", path: "/products/kadin/elbise" },
          { title: "Bluz", path: "/products/kadin/bluz" },
          { title: "Etek", path: "/products/kadin/etek" },
          { title: "Pantolon", path: "/products/kadin/pantolon" },
        ],
      },
      {
        title: "Dış Giyim",
        items: [
          { title: "Ceket", path: "/products/kadin/ceket" },
          { title: "Kaban", path: "/products/kadin/kaban" },
        ],
      },
      {
        title: "Ayakkabı & Çanta",
        items: [
          { title: "Topuklu Ayakkabı", path: "/products/kadin/topuklu" },
          { title: "Sneaker", path: "/products/kadin/sneaker" },
          { title: "Çanta", path: "/products/kadin/canta" },
        ],
      },
    ],
  },

  {
    title: "Süper Market",
    icon: ShoppingCartIcon,
    megaMenu: [
      {
        title: "Temel Gıda",
        items: [
          { title: "Makarna", path: "/products/market/makarna" },
          { title: "Pirinç", path: "/products/market/pirinc" },
          { title: "Yağ", path: "/products/market/yag" },
        ],
      },
      {
        title: "Atıştırmalık",
        items: [
          { title: "Cips", path: "/products/market/cips" },
          { title: "Çikolata", path: "/products/market/cikolata" },
        ],
      },
      {
        title: "İçecek",
        items: [
          { title: "Kahve", path: "/products/market/kahve" },
          { title: "Çay", path: "/products/market/cay" },
        ],
      },
    ],
  },

  {
    title: "Saat & Aksesuar",
    icon: ClockIcon,
    megaMenu: [
      {
        title: "Saat",
        items: [
          { title: "Erkek Saat", path: "/products/saat/erkek" },
          { title: "Kadın Saat", path: "/products/saat/kadin" },
        ],
      },
      {
        title: "Takı",
        items: [
          { title: "Kolye", path: "/products/aksesuar/kolye" },
          { title: "Bileklik", path: "/products/aksesuar/bileklik" },
        ],
      },
    ],
  },

  {
    title: "Ayakkabı & Çanta",
    icon: ShoppingBagIcon,
    megaMenu: [
      {
        title: "Ayakkabı",
        items: [
          { title: "Sneaker", path: "/products/ayakkabi/sneaker" },
          { title: "Bot", path: "/products/ayakkabi/bot" },
        ],
      },
      {
        title: "Çanta",
        items: [
          { title: "Sırt Çantası", path: "/products/canta/sirt" },
          { title: "El Çantası", path: "/products/canta/el-cantasi" },
        ],
      },
    ],
  },

  {
    title: "Kozmetik",
    icon: SparklesIcon,
    megaMenu: [
      {
        title: "Makyaj",
        items: [
          { title: "Fondöten", path: "/products/kozmetik/fondoten" },
          { title: "Ruj", path: "/products/kozmetik/ruj" },
        ],
      },
      {
        title: "Cilt Bakım",
        items: [
          { title: "Nemlendirici", path: "/products/kozmetik/nemlendirici" },
          { title: "Temizleyici", path: "/products/kozmetik/temizleyici" },
        ],
      },
    ],
  },

  {
    title: "Spor & Outdoor",
    icon: FireIcon,
    megaMenu: [
      {
        title: "Spor Giyim",
        items: [
          { title: "Eşofman", path: "/products/spor/esofman" },
          { title: "Tayt", path: "/products/spor/tayt" },
        ],
      },
      {
        title: "Outdoor",
        items: [
          { title: "Çadır", path: "/products/outdoor/cadir" },
          { title: "Uyku Tulumu", path: "/products/outdoor/uyku-tulumu" },
        ],
      },
    ],
  },

  {
    title: "Çok Satanlar",
    icon: TrophyIcon,
    megaMenu: [
      {
        title: "Popüler Ürünler",
        items: [
          { title: "En Çok Satanlar", path: "/products/cok-satanlar" },
          { title: "En Çok Favorilenenler", path: "/products/favoriler" },
        ],
      },
    ],
  },
];
