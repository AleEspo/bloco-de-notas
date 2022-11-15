import { useState } from "react";
import axios from "axios";

export function Home() {
  const [form, setForm] = useState({
    title: "",
    body: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });

    // setForm((prevState) => {
    //   return { ...prevState, [e.target.name]: e.target.value };
    // });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      //GET
      //POST
      //PUT
      //PATCH
      //DELETE

      const response = await axios.post(
        "https://ironrest.cyclic.app/blocoDeNotas",
        form
      );

      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <h1>Bloco de Notas</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="input-title">Titulo: </label>
        <input
          id="input-title"
          type="text"
          name="title"
          onChange={handleChange}
          value={form.title}
        />

        <label htmlFor="input-body">Nota: </label>
        <input
          id="input-body"
          type="text"
          name="body"
          onChange={handleChange}
          value={form.body}
        />

        <button>Salvar nota</button>
      </form>
    </>
  );
}
