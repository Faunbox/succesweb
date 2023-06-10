import { navigation } from "@/data/navigation";
import Link from "next/link";

const Footer = () => {
  interface Iobj {
    href: string;
    desc: String;
  }

  const footerOffert: Iobj[] = [
    {
      href: "/oferta/strony-internetowe",
      desc: "Strony internetowe",
    },
    {
      href: "/oferta/ecommerce",
      desc: "Sklepy internetowe",
    },
    {
      href: "/oferta/seo",
      desc: "Pozycjonowanie stron",
    },
    {
      href: "/oferta/google-ads",
      desc: "Marketing internetowy",
    },
    {
      href: "/oferta/oprogramowanie-dla-firm",
      desc: "Oprogramowanie dla firm",
    },
  ];

  return (
    <footer className="center bordet-t container flex w-screen border-gray-700 py-4">
      <div className="flex w-screen flex-col items-center justify-around sm:flex-row">
        <section className="py4 ">
          <p className="p-2 text-2xl font-bold">SuccesWeb</p>
          <div>DANE FIRMY</div>
        </section>
        <section className="p-4 ">
          <h3 className="pb-4 text-lg font-bold">Menu</h3>
          <div className="mb-2 flex flex-col">
            {navigation.map((obj) => (
              <Link href={obj.href} key={obj.name} className="p-2">
                {obj.name}
              </Link>
            ))}
          </div>
        </section>
        <section className="p-4 ">
          <h3 className="pb-4 text-lg font-bold">Oferta</h3>
          <section className="flex flex-col gap-2">
            {footerOffert.map(({ href, desc }) => {
              return (
                <Link href={href} key={href}>
                  {desc}
                </Link>
              );
            })}
          </section>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
