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
    <footer className="min-w-screen my-4 border-t border-gray-400">
      <div className="center container flex">
        <div className="flex w-screen flex-col items-center justify-around sm:flex-row">
          <section className="py4 w-full md:w-2/6">
            <p className="p-2 text-2xl font-bold">SuccesWeb</p>
            <div>DANE FIRMY</div>
          </section>
          <section className="w-full p-4 md:w-2/6">
            <h3 className="pb-4 text-lg font-bold">Menu</h3>
            <div className="mb-2 flex flex-col">
              {navigation.map((obj) => (
                <Link href={obj.href} key={obj.name} className="p-2">
                  {obj.name}
                </Link>
              ))}
            </div>
          </section>
          <section className="w-full p-4 md:w-2/6">
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
      </div>
    </footer>
  );
};

export default Footer;
