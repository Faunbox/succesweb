import ContactComponent from "@/components/home/ContactComponent";

const Graphics = () => {
  return (
    <div className="center container gap-2">
      <h2 className="title">Grafika</h2>
      <p>
        Jesteśmy kreatywną agencją zajmującą się projektowaniem grafik,
        oferującą szeroki zakres usług, takich jak projektowanie wizytówek,
        banerów reklamowych, ulotek, logotypów oraz kompleksowych identyfikacji
        wizualnych. Nasza misja polega na tworzeniu unikalnych i przyciągających
        wzrok projektów, które pomogą Twojej firmie wyróżnić się i skutecznie
        komunikować z klientami.
      </p>
      <p>Nasza oferta składa się z następujących usług</p>
      <ul>
        <li>
          Projektowanie wizytówek: Tworzymy wizytówki, które w pełni oddają
          charakter Twojej firmy. Wykorzystujemy atrakcyjne wzornictwo,
          dopasowane kolory, czcionki i grafiki, aby stworzyć profesjonalne
          wizytówki, które zapadną w pamięć Twoim klientom.
        </li>
        <li>
          Banery reklamowe: Projektujemy kreatywne i efektywne banery reklamowe,
          które przyciągają uwagę i skutecznie promują Twoje produkty lub
          usługi. Dopasowujemy banery do różnych platform reklamowych, takich
          jak strony internetowe, media społecznościowe czy reklamy displayowe,
          aby maksymalizować ich skuteczność.
        </li>
        <li>
          Ulotki: Stworzymy dla Ciebie atrakcyjne ulotki, które skutecznie
          przekazują informacje o Twojej firmie lub promowanej ofercie. Nasze
          ulotki są zaprojektowane w sposób, który wzbudza zainteresowanie,
          zachęca do działania i przyciąga uwagę odbiorców.
        </li>
        <li>
          Logotypy: Jesteśmy w stanie stworzyć unikalne logotypy, które będą
          reprezentować tożsamość Twojej marki. Dbałość o detale, analiza rynku
          oraz kreatywność naszych projektantów pozwoli stworzyć logotyp, który
          będzie wyróżniał Twoją firmę i łatwo zapadnie w pamięć klientów.
        </li>
        <li>
          Identyfikacje wizualne: Tworzymy kompleksowe identyfikacje wizualne,
          które obejmują logotypy, kolorystykę, typografię i inne elementy,
          które budują spójny wizerunek Twojej marki. Zapewniamy, że Twoja firma
          będzie rozpoznawalna i konsekwentnie prezentować się w każdym
          kontakcie z klientami.
        </li>
      </ul>
      <p>
        Nasze projekty są tworzone z pasją i dbałością o detale. Stawiamy na
        innowacyjne podejście, indywidualne podejście do każdego projektu i
        wysoką jakość wykonan
      </p>
      <p>
        Jeśli poszukujesz kreatywnych i profesjonalnych rozwiązań graficznych
        dla swojej firmy, jesteśmy gotowi pomóc. Skontaktuj się z nami, aby
        omówić swoje potrzeby i rozpocząć współpracę. Razem stworzymy wizerunek,
        który przyciągnie uwagę i wyróżni Twoją firmę na tle konkurencji.
      </p>
      <p className="my-2 font-bold">
        Cena każdego projektu ustalana jest indywidualnie!
      </p>
      <ContactComponent />
    </div>
  );
};

export default Graphics;
