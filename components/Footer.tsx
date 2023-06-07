import { navigation } from "@/data/navigation";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="center flex w-screen py-4">
      <div className="container grid grid-flow-row grid-cols-3 md:grid-flow-col">
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
            <Link href={"oferta/strony-internetowe"}>Strony internetowe</Link>
            <Link href={"oferta/ecommerce"}>E-commerce</Link>
            <Link href={"oferta/seo"}>Pozycjnonowanie</Link>
            <Link href={"oferta/google-ads"}>Kampanie GoogleAds</Link>
          </section>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
