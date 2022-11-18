import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import Card from "react-bootstrap/Card";

import { isUpdatedContext } from "../../context/isUpdated";

export function Notes() {
  const [notes, setNotes] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);

  const updatedContext = useContext(isUpdatedContext);

  useEffect(() => {
    if (updatedContext.updated) {
      toast.success("Nota editada!");

      updatedContext.setUpdated(false);
    }
  }, []);

  async function deleteNotes(noteId, toastId) {
    try {
      await axios.delete(`https://ironrest.cyclic.app/blocoDeNotas/${noteId}`);
      toast.dismiss(toastId);
      toast.success("Nota deletada com sucesso!");
      setIsDeleted(true);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDelete(id) {
    toast((t) => {
      return (
        <>
          <span>Tem certeza que você deseja realizar essa ação?</span>
          <button
            className="btn btn-danger m-2"
            onClick={() => {
              deleteNotes(id, t.id);
            }}
          >
            Sim
          </button>
          <button
            className="btn btn-secondary m-2"
            onClick={() => {
              toast.dismiss(t.id);
            }}
          >
            Não
          </button>
        </>
      );
    });
  }

  useEffect(() => {
    console.log("oi");
  });

  useEffect(() => {
    async function fetchNotes() {
      try {
        const response = await axios.get(
          "https://ironrest.cyclic.app/blocoDeNotas"
        );
        setNotes(response.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchNotes();
  }, [isDeleted]);

  useEffect(() => {
    setIsDeleted(false);
  }, [notes]);

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

              <button
                onClick={() => {
                  handleDelete(currentNote._id);
                }}
              >
                Deletar nota
              </button>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}
