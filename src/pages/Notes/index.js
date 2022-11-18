import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import Card from "react-bootstrap/Card";

import { isUpdatedContext } from "../../context/isUpdated";

export function Notes() {
  const [notes, setNotes] = useState([]);

  const updatedContext = useContext(isUpdatedContext);

  useEffect(() => {
    if (updatedContext.updated) {
      toast.success("Nota editada!");

      updatedContext.setUpdated(false);
    }
  }, []);

  // useEffect(() => {
  //   console.log("Estou sendo montado/atualizado");

  //   return () => {
  //     console.log("Estou sendo desmontado");
  //   };
  // }, []);

  useEffect(() => {
    console.log("oi");
  });

  useEffect(() => {
    async function fetchNotes() {
      try {
        const response = await axios.get(
          "https://ironrest.cyclic.app/blocoDeNotas"
        );

        // Remover duplicatas

        setNotes(response.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchNotes();
  }, []);

  return (
    <>
      <h1>Notas</h1>

      {notes.map((currentNote) => {
        return (
          // <div key={currentNote._id}>
          //   <h4>{currentNote.title}</h4>
          //   <p>{currentNote.body}</p>
          // </div>

          <Card style={{ width: "18rem" }} className="m-2">
            <Card.Body>
              <Card.Title>{currentNote.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">----</Card.Subtitle>
              <Card.Text>{currentNote.body}</Card.Text>
              <Link to={`/nota/${currentNote._id}`} className="m-3">
                <Card.Link>Ver</Card.Link>
              </Link>

              <Link to={`/edit/${currentNote._id}`} className="m-3">
                <Card.Link>Editar</Card.Link>
              </Link>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}
