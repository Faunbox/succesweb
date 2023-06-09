import IconsComponent from "./IconsComponent";

const TextComponent = () => {
  return (
    <>
      <section className="center mx-4 flex w-3/6 flex-col gap-5">
        <h3 className="text-lg font-bold md:text-xl">
          Masz pytania lub jesteś zainteresowany ofertą?
        </h3>
        <p className="my-4">
          Cieszymy się, że jesteś zainteresowany naszą ofertą. Jeśli masz
          jakiekolwiek pytania, sugestie lub chciałbyś nawiązać współpracę,
          skorzystaj z poniższego formularza kontaktowego lub z form kontaktu
          wypisanych poniżej. Jesteśmy tu, aby Ci pomóc!
        </p>
        <IconsComponent />
      </section>
    </>
  );
};

export default TextComponent;
