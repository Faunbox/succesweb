"use client";
const FormComponent = () => {
  const onSubmit = function (e: React.FormEvent): void {
    e.preventDefault();
    alert("Wysłano")
  };
  return (
    <form
      className="center flex h-auto w-3/6 flex-col gap-4 border-t md:border-l md:border-t-0"
      onSubmit={onSubmit}
    >
      <div className="flex flex-col">
        <label htmlFor="name">
          Imię lub nazwa firmy
          </label>
          <input
            className="min-w-0 w-full flex-auto border form-input bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            id="name"
            name="name"
            placeholder="Jan Kowalski"
            required
            type="text"
          />
      </div>

      <div className="flex flex-col">
      <label htmlFor="email">
        Adres email do kontaktu
        </label>
        <input
          className="min-w-0 flex-auto border w-full bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
          id="email"
          name="email"
          placeholder="j.kowalski@gmail.com"
          required
          type="email"
          />
          </div>

          <div className="flex flex-col">
      <label htmlFor="message">
        Twoja wiadomość
        </label>
        <textarea
          placeholder="Treść wiadomości"
          id="message"
          name="message"
          rows={5}
          cols={40}
          required
          className="min-w-0 form-textarea flex-auto w-full  border  bg-white/5 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
          />
          </div>
      <button className="border border-black mt-4 p-4">Wyślij pytanie</button>
    </form>
  );
};

export default FormComponent;
