import { services } from "@/data/services";
import Image from "next/image";

const Offert = () => {
  return (
    <main className="center container flex flex-col">
      <h2 className="title">Oferta</h2>
      <p className="component">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt eius
        debitis ea consequatur doloribus ab ad facilis est nobis consectetur?
        Sapiente cum eveniet ipsum? Fugiat, officiis. Tenetur, sunt amet.
        Ducimus.
      </p>
      <div className="flex flex-row flex-wrap items-top justify-center border-t m-4 py-4">
        {services.map((obj, index) => (
          <li
            className="center m-4 flex max-w-[290px] flex-col items-center border p-4"
            key={index}
          >
            <p className="my-2">{obj.title}</p>
            <Image
              src={obj.icon}
              width={100}
              height={50}
              alt="ikona google ads"
            />
            <p className="my-2">{obj.desc}</p>
          </li>
        ))}
      </div>
    </main>
  );
};

export default Offert;
