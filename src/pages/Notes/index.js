import axios from "axios";
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

export function Notes() {
  const params = useParams();

  console.log(params); // {algumaCoisa: "oi"}
  const [notes, setNotes] = useState([]);

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
  }, []);

  return (
    <>
      <h1>Notas</h1>

      {notes.map((currentNote) => {
        return (
          <div key={currentNote._id}>
            <h4>{currentNote.title}</h4>
            <p>{currentNote.body}</p>
          </div>
        );
      })}
    </>
  );
}
