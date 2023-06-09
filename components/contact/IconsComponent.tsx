import Image from "next/image";

const IconsComponent = () => {
  return (
    <section className="my-4 md:mx-4 flex flex-col items-start justify-around gap-4 md:flex-row">
      {/* <Image src="/images/www" alt="strona www" width={50} height={50}/> */}
      {/* <p>NIP: 999-888-777</p> */}
      <a>604-181-632</a>
      <a>kontakt@successweb.pl</a>
    </section>
  );
};

export default IconsComponent;
