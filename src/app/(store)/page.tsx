import Card from "@/components/Card";

export default function Home() {
  const data = [
    { id: 1, name: "Portakal Vazo", price: 500, src: "/assets/dekoratif.jpg" },
    { id: 2, name: "Portakal Vazo", price: 300, src: "/assets/dekoratif.jpg" },
    { id: 3, name: "Portakal Vazo", price: 400, src: "/assets/dekoratif.jpg" },
    { id: 4, name: "Portakal Vazo", price: 200, src: "/assets/dekoratif.jpg" },
    { id: 5, name: "Portakal Vazo", price: 500, src: "/assets/dekoratif.jpg" },
    { id: 6, name: "Portakal Vazo", price: 300, src: "/assets/dekoratif.jpg" },
    { id: 7, name: "Portakal Vazo", price: 400, src: "/assets/dekoratif.jpg" },
    { id: 8, name: "Portakal Vazo", price: 200, src: "/assets/dekoratif.jpg" },
  ];

  return (
    <div className="grid lg:grid-cols-6  xl:grid-cols-6 gap-5 ">
      <Card data={data} />
    </div>
  );
}
