import Link from "next/link";

const Hero = () => {
  return (
    <section className="center flex min-h-[75vh] w-11/12 flex-col border-2">
      <div className="items-left flex w-4/6 flex-col justify-center text-left md:ml-20">
        <h2 className="pb-4 text-5xl md:text-7xl">Twój</h2>
        <h2 className="pb-4 text-5xl md:text-7xl">partner w</h2>
        <h2 className="pb-4 text-5xl md:text-7xl">sukcesie</h2>
        <button className="button">
          <span className="absolute bottom-10 left-5 ">^</span>
          <Link href={"/kontakt"}>Darmowa wycena</Link>
          <span className="absolute right-5 top-10">^</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
