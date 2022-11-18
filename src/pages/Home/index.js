import { Link } from "react-router-dom";
import toast from "react-hot-toast";

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
      await axios.post("https://ironrest.cyclic.app/blocoDeNotas", form);

      toast.success("Nota criada com sucesso!");
    } catch (err) {
      console.log(err);
      toast.error("Ops! Algo deu errado ...");
    }
  }

  return (
    <>
      <h1>Bloco de Notas</h1>
      <Link to="/notas">Notas</Link>

      <form onSubmit={handleSubmit}>
        <label htmlFor="input-title">Titulo: </label>

        <input
          id="input-title"
          type="text"
          name="title"
          onChange={handleChange}
          value={form.title}
          placeholder="ex: Tirar o lixo"
          required
          // pattern={/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm}
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
