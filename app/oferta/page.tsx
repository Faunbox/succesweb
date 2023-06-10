import ContactComponent from "@/components/home/ContactComponent";
import ServicesComponent from "@/components/offert/ServicesComponent";

const Offert = () => {
  return (
    <main className="center container flex flex-col">
      <h2 className="title">Oferta</h2>
      <p className="component p-4">
        Jesteśmy ekspertami w tworzeniu profesjonalnych stron internetowych,
        które spełniają najwyższe standardy jakości - bez względu na to, czy
        potrzebujesz prostej wizytówki online, czy zaawansowanego portalu
        internetowego, możesz polegać na naszej wiedzy i doświadczeniu. Nasze
        strony są zaprojektowane z myślą o użyteczności (UI/UX),
        responsywności(RWD) i estetyce, aby przyciągać i angażować
        odwiedzających. Dążymy do tego, aby Twoja strona była wyjątkowa i
        odzwierciedlała charakter Twojej marki. Do każdego klienta podchodzimy
        indywidaulnie dlatego możesz być pewny, że z nami osiągniesz sukces.
      </p>
      <p className="component p-4 text-xl font-bold">
        Poniżej znajdziesz informacje o naszym zakresie usług.
      </p>
      <ServicesComponent border={false} />
      <ContactComponent />
    </main>
  );
};

export default Offert;
