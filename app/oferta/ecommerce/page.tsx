const Ecommerce = () => {
  return (
    <div className="center min-w-screen flex ">
      <div className="container mx-auto flex w-screen flex-col">
        <h2 className="title">Sklepy e-commerce</h2>
        <p className="p-4">
          Jeśli chcesz wejść na rynek e-commerce i osiągnąć sukces w sprzedaży
          online, możemy Ci w tym pomóc. Projektujemy i tworzymy sklepy
          internetowe, które są nie tylko atrakcyjne wizualnie, ale także
          funkcjonalne i intuicyjne w obsłudze. Nasze sklepy są wyposażone w
          zaawansowane narzędzia do zarządzania produktem, płatnościami,
          koszykiem zakupowym i logistyką. Pomagamy Ci zbudować profesjonalną
          platformę e-commerce, która zapewni Ci wzrost sprzedaży i zadowolenie
          klientów.
        </p>
        <h3 className="p-4 text-xl font-bold">W jaki sposób działamy?</h3>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
        </ul>
        <h3 className="m-4 text-xl font-bold">Ceny</h3>
        <div className="m-4 flex w-full flex-col justify-around md:flex-row">
          <div className="w-full md:w-2/6 ">Sklep z gotowego szablonu</div>
          <div className="w-full md:w-2/6">
            Sklep z indywidualnym szablonem graficznym
          </div>
          <div className="w-full md:w-2/6   ">
            Dedykowane rozwiązania e-commerce
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
