
import Card from "@/components/Card";

export default function () {

  const data = [
    {
      name: "Portakal Vazo",
      price: 500,
      src: "/assets/dekoratif.jpg",
    },
    {
      name: "Portakal Vazo",
      price: 300,
      src: "/assets/dekoratif.jpg",
    },
    {
      name: "Portakal Vazo",
      price: 400,
      src: "/assets/dekoratif.jpg",
    },
    {
      name: "Portakal Vazo",
      price: 200,
      src: "/assets/dekoratif.jpg",
    },
  ];

  return (
    <div className="">
      <Card data={data}/>
    </div>
  );
}
