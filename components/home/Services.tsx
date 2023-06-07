import { services } from "@/data/services";
import Image from "next/image";

const Services = () => {
  return (
    <div className="center component my-4">
      <h2 className="text-xl md:text-2xl">Zakres naszych usług</h2>
      <section>
        <ul className="center flex flex-row flex-wrap">
          {services.map((obj, index) => (
            <li
              className="center m-4 flex max-w-[270px] flex-col items-center border p-4"
              key={index}
            >
              <p className="my-2">{obj.title}</p>
              <Image
                src={obj.icon}
                width={100}
                height={50}
                alt="ikona google ads"
                className="float-left"
              />
              <p className="my-2">{obj.desc}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Services;
