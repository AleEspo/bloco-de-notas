import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { isUpdatedContext } from "../../context/isUpdated";

export function EditPage() {
  const params = useParams();
  const navigate = useNavigate();

  // const updatedContext = useContext(isUpdatedContext);

  const { setUpdated } = useContext(isUpdatedContext);

  const [form, setForm] = useState({
    title: "",
    body: "",
  });

  useEffect(() => {
    async function fetchNote() {
      try {
        const response = await axios.get(
          `https://ironrest.cyclic.app/blocoDeNotas/${params.id}`
        );

        setForm(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchNote();
  }, []);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });

    // setForm((prevState) => {
    //   return { ...prevState, [e.target.name]: e.target.value };
    // });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const infosToSendForAPI = { ...form };

      delete infosToSendForAPI._id;

      await axios.put(
        `https://ironrest.cyclic.app/blocoDeNotas/${params.id}`,
        infosToSendForAPI
      );

      setUpdated(true);

      navigate("/notas");
    } catch (err) {
      console.log(err);
      toast.error("Ops! Algo deu errado ...");
    }
  }

  return (
    <>
      <h1>Edição</h1>

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
