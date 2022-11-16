import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";

export function Notes() {
  const [notes, setNotes] = useState([]);

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

          <Card
            style={{ width: "18rem" }}
            className="m-2"
            key={currentNote._id}
          >
            <Card.Body>
              <Card.Title>{currentNote.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">----</Card.Subtitle>
              <Card.Text>{currentNote.body}</Card.Text>
              <Link to={`/nota/${currentNote._id}`}>
                <Card.Link>Card Link</Card.Link>
              </Link>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}
