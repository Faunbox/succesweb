import FormComponent from "@/components/contact/FormComponent";
import TextComponent from "@/components/contact/TextComponents";

const Contact = () => {
  return (
    <div className="center container">
      <p className="title">Kontakt</p>
      <div className="center flex min-w-full flex-col md:min-h-[80vh] md:flex-row">
        <TextComponent />
        <FormComponent />
      </div>
    </div>
  );
};

export default Contact;
