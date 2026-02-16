"use client";
import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
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

import AllProducts from "./TopBarAllProducts";

export const categories = [
  {
    title: "Tumu",
    path: "",
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
          { title: "Yatak Odası", path: "/ev/mobilya/yatak-odasi" },
          { title: "Yemek Odası", path: "/ev/mobilya/yemek-odasi" },
          { title: "Çalışma Odası", path: "/ev/mobilya/calisma-odasi" },
          { title: "Oturma Grubu", path: "/ev/mobilya/oturma-grubu" },
        ],
      },
      {
        title: "Dekorasyon",
        items: [
          { title: "Tablo", path: "/ev/dekorasyon/tablo" },
          { title: "Ayna", path: "/ev/dekorasyon/ayna" },
          { title: "Duvar Saati", path: "/ev/dekorasyon/duvar-saati" },
          { title: "Aydınlatma", path: "/ev/dekorasyon/aydinlatma" },
        ],
      },
      {
        title: "Sofra",
        items: [
          { title: "Yemek Takımı", path: "/ev/sofra/yemek-takimi" },
          { title: "Çatal Kaşık", path: "/ev/sofra/catal-kasik" },
          { title: "Bardak", path: "/ev/sofra/bardak" },
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
          { title: "Laptop", path: "/elektronik/laptop" },
          { title: "Masaüstü", path: "/elektronik/masaustu" },
          { title: "Monitör", path: "/elektronik/monitor" },
        ],
      },
      {
        title: "Telefon & Tablet",
        items: [
          { title: "Cep Telefonu", path: "/elektronik/telefon" },
          { title: "Tablet", path: "/elektronik/tablet" },
          { title: "Akıllı Saat", path: "/elektronik/akilli-saat" },
        ],
      },
      {
        title: "TV & Görüntü",
        items: [
          { title: "Televizyon", path: "/elektronik/tv" },
          { title: "Projeksiyon", path: "/elektronik/projeksiyon" },
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
          { title: "T-Shirt", path: "/erkek/tshirt" },
          { title: "Gömlek", path: "/erkek/gomlek" },
          { title: "Pantolon", path: "/erkek/pantolon" },
          { title: "Jean", path: "/erkek/jean" },
        ],
      },
      {
        title: "Dış Giyim",
        items: [
          { title: "Mont", path: "/erkek/mont" },
          { title: "Kaban", path: "/erkek/kaban" },
        ],
      },
      {
        title: "Ayakkabı",
        items: [
          { title: "Sneaker", path: "/erkek/sneaker" },
          { title: "Klasik", path: "/erkek/klasik-ayakkabi" },
        ],
      },
    ],
  },

  {
    title: "Kadin",
    icon: UserGroupIcon,
    megaMenu: [
      {
        title: "Giyim",
        items: [
          { title: "Elbise", path: "/kadin/elbise" },
          { title: "Bluz", path: "/kadin/bluz" },
          { title: "Etek", path: "/kadin/etek" },
          { title: "Pantolon", path: "/kadin/pantolon" },
        ],
      },
      {
        title: "Dış Giyim",
        items: [
          { title: "Ceket", path: "/kadin/ceket" },
          { title: "Kaban", path: "/kadin/kaban" },
        ],
      },
      {
        title: "Ayakkabı & Çanta",
        items: [
          { title: "Topuklu Ayakkabı", path: "/kadin/topuklu" },
          { title: "Sneaker", path: "/kadin/sneaker" },
          { title: "Çanta", path: "/kadin/canta" },
        ],
      },
    ],
  },

  {
    title: "SuperMarket",
    icon: ShoppingCartIcon,
    megaMenu: [
      {
        title: "Temel Gıda",
        items: [
          { title: "Makarna", path: "/market/makarna" },
          { title: "Pirinç", path: "/market/pirinc" },
          { title: "Yağ", path: "/market/yag" },
        ],
      },
      {
        title: "Atıştırmalık",
        items: [
          { title: "Cips", path: "/market/cips" },
          { title: "Çikolata", path: "/market/cikolata" },
        ],
      },
      {
        title: "İçecek",
        items: [
          { title: "Kahve", path: "/market/kahve" },
          { title: "Çay", path: "/market/cay" },
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
          { title: "Erkek Saat", path: "/saat/erkek" },
          { title: "Kadın Saat", path: "/saat/kadin" },
        ],
      },
      {
        title: "Takı",
        items: [
          { title: "Kolye", path: "/aksesuar/kolye" },
          { title: "Bileklik", path: "/aksesuar/bileklik" },
        ],
      },
    ],
  },

  {
    title: "Ayakkabi & Canta",
    icon: ShoppingBagIcon,
    megaMenu: [
      {
        title: "Ayakkabı",
        items: [
          { title: "Sneaker", path: "/ayakkabi/sneaker" },
          { title: "Bot", path: "/ayakkabi/bot" },
        ],
      },
      {
        title: "Çanta",
        items: [
          { title: "Sırt Çantası", path: "/canta/sirt" },
          { title: "El Çantası", path: "/canta/el-cantasi" },
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
          { title: "Fondöten", path: "/kozmetik/fondoten" },
          { title: "Ruj", path: "/kozmetik/ruj" },
        ],
      },
      {
        title: "Cilt Bakım",
        items: [
          { title: "Nemlendirici", path: "/kozmetik/nemlendirici" },
          { title: "Temizleyici", path: "/kozmetik/temizleyici" },
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
          { title: "Eşofman", path: "/spor/esofman" },
          { title: "Tayt", path: "/spor/tayt" },
        ],
      },
      {
        title: "Outdoor",
        items: [
          { title: "Çadır", path: "/outdoor/cadir" },
          { title: "Uyku Tulumu", path: "/outdoor/uyku-tulumu" },
        ],
      },
    ],
  },

  {
    title: "Cok Satanlar",
    icon: TrophyIcon,
    megaMenu: [
      {
        title: "Popüler Ürünler",
        items: [
          { title: "En Çok Satanlar", path: "/cok-satanlar" },
          { title: "En Çok Favorilenenler", path: "/favoriler" },
        ],
      },
    ],
  },
];

export const women = [
  {
    mainCategory: "Giyim",
    subCategory: [
      { title: "Elbise", path: "/kadin/elbise" },
      { title: "Etek", path: "/kadin/etek" },
      { title: "Bluz", path: "/kadin/bluz" },
      { title: "Gömlek", path: "/kadin/gomlek" },
      { title: "Pantolon", path: "/kadin/pantolon" },
      { title: "Jean", path: "/kadin/jean" },
      { title: "Ceket", path: "/kadin/ceket" },
      { title: "Kaban", path: "/kadin/kaban" },
      { title: "Triko & Kazak", path: "/kadin/triko-kazak" },
      { title: "Sweatshirt", path: "/kadin/sweatshirt" },
      { title: "T-Shirt", path: "/kadin/tshirt" },
      { title: "Şort", path: "/kadin/sort" },
      { title: "Tayt", path: "/kadin/tayt" },
    ],
  },
];
export default function () {
  const [allKategori, setAllKategori] = useState(false);

  return (
    <div className=" p-2 bg-white text-slate-900 px-60">
      <div className="flex justify-between  ">
        <Logo />
        <div className="relative flex flex-col justify-center">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />

          <input
            className="w-[800px]  h-10 bg-gray-100 rounded-2xl text-black placeholder:text-black pl-10"
            placeholder="Ara..."
          ></input>
        </div>

        <div className="flex justify-center items-center gap-2">
          <Link href="/sepetim">
            <ShoppingBagIcon className="w-6 h-6" />
          </Link>
          <div>
            <UserIcon className="w-6 h-6" />
          </div>
        </div>
      </div>
      <div className="relative flex justify-center items-center gap-10 mt-5">
        {categories.map((item, index) => {
          const allCategori = index === 0;

          return (
            <p
              onMouseEnter={() => index === 0 && setAllKategori(true)}
              onMouseLeave={() => index === 0 && setAllKategori(false)}
              className={`font-semibold ${allCategori ? "text-red-600" : "text-slate-900 "}`}
              key={index}
            >
              {item.title}
            </p>
          );
        })}
        {allKategori && <AllProducts setAllKategori={setAllKategori} />}
      </div>
    </div>
  );
}
