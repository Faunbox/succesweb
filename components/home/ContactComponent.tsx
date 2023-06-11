import Link from "next/link";

const ContactComponent = () => {
  return (
    <section className="w-screen bg-slate-200/50 py-4">
      <div className="center min-w-screen container  flex-col">
        <h3 className="mb-4 text-xl md:text-2xl">
          Zainteresowala Cie nasza oferta?
        </h3>
        <div className="center my-6 flex w-3/6 flex-col justify-around gap-5 md:flex-row">
          <Link href={"/kontakt"}>
            <button className="button">Skontaktuj się z nami</button>
          </Link>
          <Link href={"/oferta"}>
            <button className="button">Więcej szczegółów</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
