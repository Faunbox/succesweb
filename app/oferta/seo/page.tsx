import ContactComponent from "@/components/home/ContactComponent";

const SEO = () => {
  return (
    <div className="center container flex flex-col">
      <h2 className="title">Pozycjonowanie stron (SEO)</h2>
      <p className="m-4">
        Jeśli szukasz profesjonalnego partnera, który pomoże Ci w osiągnięciu
        wysokiego rankingu w wynikach wyszukiwarek, trafiłeś we właściwe
        miejsce.
      </p>
      <p className="m-4">
        Nasza filozofia opiera się na spersonalizowanym podejściu do każdego
        projektu. Rozpoczynamy od gruntownej analizy Twojej witryny, konkurencji
        i rynku, aby opracować strategię SEO, która najlepiej pasuje do Twoich
        unikalnych potrzeb i celów biznesowych. Nasze działania obejmują
        optymalizację treści, budowę linków, analizę słów kluczowych,
        usprawnienie kodu strony i wiele innych skutecznych technik.
      </p>
      {/* <p className="m-4">
        Wiedza o tym, jak skutecznie pozycjonować stronę w wyszukiwarkach, może
        mieć ogromny wpływ na widoczność Twojej witryny w sieci. Nasz zespół
        specjalistów w dziedzinie SEO zna najlepsze praktyki i strategie, które
        pomogą Ci osiągnąć wysoką pozycję w wynikach wyszukiwania.
        Optymalizujemy Twoją stronę pod kątem słów kluczowych, analizujemy
        konkurencję i budujemy skuteczne linki, aby przyciągnąć więcej ruchu
        organicznego na Twoją stronę. Naszym celem jest zwiększenie widoczności
        Twojej marki i generowanie trwałego ruchu na stronie.
      </p> */}
      <p className="m-4">
        Ponadto, dbamy o pełną przejrzystość i regularną komunikację z naszymi
        klientami. Zapewniamy raporty i analizy, które pozwalają Ci śledzić
        postępy i zrozumieć skuteczność naszych działań.
      </p>
      <p className="m-4">
        Jeśli szukasz niezawodnego partnera do pozycjonowania stron
        internetowych, jesteśmy tutaj, aby Ci pomóc. Skontaktuj się z nami już
        dziś, aby omówić swoje cele i zacząć współpracę. Daj nam szansę
        udowodnienia, dlaczego jesteśmy najlepsi w branży SEO i jak możemy pomóc
        Twojej firmie osiągnąć sukces online.
      </p>
      <h3 className="m-4 text-xl font-bold">W jaki sposób działamy?</h3>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
      </ul>
      <ContactComponent />
    </div>
  );
};

export default SEO;
