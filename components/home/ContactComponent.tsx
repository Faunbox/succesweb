import Link from "next/link";

const ContactComponent = () => {
  return (
    <section className="center component h-fit w-screen flex-col bg-slate-200/50">
      <h3 className="mb-4 text-xl md:text-2xl">
        Zainteresowala Cie nasza oferta?
      </h3>
      <div className="center my-6 flex w-3/6 flex-col justify-around gap-5 md:flex-row">
        <button className="button">
          <Link href={"/kontakt"}>Skontaktuj się z nami</Link>
        </button>
        <button className="button">
          <Link href={"/oferta"}>Więcej szczegółów</Link>
        </button>
      </div>
    </section>
  );
};

export default ContactComponent;
