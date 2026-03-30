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
          { title: "Vazo", path: "/products/ev/dekorasyon/vazo" },
          { title: "Ayna", path: "/products/ev/dekorasyon/ayna" },
          { title: "Duvar Saati", path: "/products/ev/dekorasyon/saat" },
        ],
      },
      {
        title: "Aydınlatma",
        items: [
          { title: "Lamba", path: "/products/ev/aydinlatma/lamba" },
          { title: "Avize", path: "/products/ev/aydinlatma/avize" },
        ],
      },
      {
        title: "Sofra",
        items: [
          { title: "Yemek Takımı", path: "/products/ev/sofra/yemek-takimi" },
          { title: "Çatal Kaşık", path: "/products/ev/sofra/catal-kasik" },
          { title: "Bardak", path: "/products/ev/sofra/bardak" },
          { title: "Tabak", path: "/products/ev/sofra/tabak" },
          { title: "Kase", path: "/products/ev/sofra/kase" },
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
          {
            title: "Cep Telefonu",
            path: "/products/elektronik/telefon/cep-telefonu",
          },
          { title: "Tablet", path: "/products/elektronik/telefon/tablet" },
          {
            title: "Akıllı Saat",
            path: "/products/elektronik/telefon/akilli-saat",
          },
        ],
      },
      {
        title: "TV & Görüntü",
        items: [
          { title: "Televizyon", path: "/products/elektronik/tv/televizyon" },
          { title: "Projeksiyon", path: "/products/elektronik/tv/projeksiyon" },
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
          { title: "T-Shirt", path: "/products/erkek/giyim/tshirt" },
          { title: "Gömlek", path: "/products/erkek/giyim/gomlek" },
          { title: "Pantolon", path: "/products/erkek/giyim/pantolon" },
          { title: "Jean", path: "/products/erkek/giyim/jean" },
        ],
      },
      {
        title: "Dış Giyim",
        items: [
          { title: "Mont", path: "/products/erkek/dis-giyim/mont" },
          { title: "Kaban", path: "/products/erkek/dis-giyim/kaban" },
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
          { title: "Elbise", path: "/products/kadin/giyim/elbise" },
          { title: "Bluz", path: "/products/kadin/giyim/bluz" },
          { title: "Etek", path: "/products/kadin/giyim/etek" },
          { title: "Pantolon", path: "/products/kadin/giyim/pantolon" },
        ],
      },
      {
        title: "Dış Giyim",
        items: [
          { title: "Ceket", path: "/products/kadin/dis-giyim/ceket" },
          { title: "Kaban", path: "/products/kadin/dis-giyim/kaban" },
        ],
      },
      {
        title: "Ayakkabı & Çanta",
        items: [
          {
            title: "Topuklu Ayakkabı",
            path: "/products/kadin/ayakkabi/topuklu",
          },
          { title: "Sneaker", path: "/products/kadin/ayakkabi/sneaker" },
          { title: "Çanta", path: "/products/kadin/canta/canta" },
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
          { title: "Makarna", path: "/products/market/gida/makarna" },
          { title: "Pirinç", path: "/products/market/gida/pirinc" },
          { title: "Yağ", path: "/products/market/gida/yag" },
        ],
      },
      {
        title: "Atıştırmalık",
        items: [
          { title: "Cips", path: "/products/market/atistirmalik/cips" },
          { title: "Çikolata", path: "/products/market/atistirmalik/cikolata" },
        ],
      },
      {
        title: "İçecek",
        items: [
          { title: "Kahve", path: "/products/market/icecek/kahve" },
          { title: "Çay", path: "/products/market/icecek/cay" },
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
          { title: "Erkek Saat", path: "/products/saat/saat/erkek" },
          { title: "Kadın Saat", path: "/products/saat/saat/kadin" },
        ],
      },
      {
        title: "Takı",
        items: [
          { title: "Kolye", path: "/products/aksesuar/taki/kolye" },
          { title: "Bileklik", path: "/products/aksesuar/taki/bileklik" },
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
          { title: "Sneaker", path: "/products/ayakkabi/ayakkabi/sneaker" },
          { title: "Bot", path: "/products/ayakkabi/ayakkabi/bot" },
        ],
      },
      {
        title: "Çanta",
        items: [
          { title: "Sırt Çantası", path: "/products/canta/canta/sirt" },
          { title: "El Çantası", path: "/products/canta/canta/el-cantasi" },
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
          { title: "Fondöten", path: "/products/kozmetik/makyaj/fondoten" },
          { title: "Ruj", path: "/products/kozmetik/makyaj/ruj" },
        ],
      },
      {
        title: "Cilt Bakım",
        items: [
          {
            title: "Nemlendirici",
            path: "/products/kozmetik/cilt/nemlendirici",
          },
          { title: "Temizleyici", path: "/products/kozmetik/cilt/temizleyici" },
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
          { title: "Eşofman", path: "/products/spor/giyim/esofman" },
          { title: "Tayt", path: "/products/spor/giyim/tayt" },
        ],
      },
      {
        title: "Outdoor",
        items: [
          { title: "Çadır", path: "/products/outdoor/outdoor/cadir" },
          {
            title: "Uyku Tulumu",
            path: "/products/outdoor/outdoor/uyku-tulumu",
          },
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
          {
            title: "En Çok Satanlar",
            path: "/products/cok-satanlar/populer/en-cok-satanlar",
          },
          {
            title: "Favoriler",
            path: "/products/cok-satanlar/populer/favoriler",
          },
        ],
      },
    ],
  },
];
