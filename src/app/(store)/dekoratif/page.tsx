
import Card from "@/components/Card";

export default function () {

  const data = [
    { id : 1 ,
      name: "Portakal Vazo",
      price: 500,
      src: "/assets/dekoratif.jpg",
    },
    {id : 2 ,
      name: "Portakal Vazo",
      price: 300,
      src: "/assets/dekoratif.jpg",
    },
    {id : 3 ,
      name: "Portakal Vazo",
      price: 400,
      src: "/assets/dekoratif.jpg",
    },
    {id : 4 ,
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
