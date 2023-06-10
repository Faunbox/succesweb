import Image from "next/image";

const About = () => {
  return (
    <section className="center component">
      <h2 className="text-xl md:text-2xl">O nas</h2>
      <div className="center article container mx-auto flex w-auto flex-col md:flex-row">
        <div className="flex flex-col justify-around">
          <p className="p-4">
            Jeśli szukasz nie tylko usług, ale także partnera, który zrozumie
            Twoje potrzeby i pomoże Ci osiągnąć cele online, to jesteśmy właśnie
            dla Ciebie. Nasze podejście opiera się na współpracy i budowaniu
            trwałych relacji z naszymi klientami. Razem możemy stworzyć silną
            obecność online i zwiększyć Twoj sukces.
          </p>
          <p className="p-4">
            Jesteśmy zespołem profesjonalistów zajmujących się tworzeniem stron
            internetowych, sklepów internetowych oraz kompleksowym wsparciem w
            obszarze SEO i marketingu internetowego. Nasza pasja i doświadczenie
            pozwoliły nam zdobyć uznanie wielu klientów, pomagając im osiągać
            sukcesy online.
          </p>
        </div>
        <Image
          src={"/images/programming.jpg"}
          alt="programowanie"
          width={400}
          height={400}
          className="m-4 drop-shadow-lg"
        />
      </div>
    </section>
  );
};

export default About;
