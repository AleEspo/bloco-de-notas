import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function NotePage() {
  const params = useParams();
  console.log(params);

  const [note, setNote] = useState({});

  useEffect(() => {
    async function fetchNote() {
      try {
        const response = await axios.get(
          `https://ironrest.cyclic.app/blocoDeNotas/${params.id}`
        );
        setNote(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchNote();
  }, []);

  return (
    <>
      <h1>{note.title}</h1>
      <p>{note.body}</p>
      <Link to="/notas" className="btn btn-outline-primary">
        Voltar
      </Link>
    </>
  );
}
