import { services } from "@/data/services";
import Image from "next/image";
import Link from "next/link";


const ServicesComponent = ({ border }: { border?: boolean }) => {
  return (
    <div
      className={`items-top m-4 flex flex-row flex-wrap justify-center ${
        border && "border-t"
      } py-4`}
    >
      {services.map(({href, title,icon,desc}) => (
        <div
          className="center m-4 max-w-[290px] border px-4 shadow-md transition hover:scale-110"
          key={href}
        >
          <Link href={href} className="center flex flex-col">
            <p className="my-4 text-xl font-bold">{title}</p>
            <Image
              src={icon}
              width={100}
              height={50}
              className="my-2"
              alt="ikona google ads"
            />
            <p className="my-2">{desc}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ServicesComponent;
