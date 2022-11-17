import { createContext, useState } from "react";

// Vou usar esse contexto com valor boolean basicamente para dizer se uma nota foi alterada ou não
// Eu poderia colocar as informações da nota nesse contexto por exemplo
// Ele funciona como um useState, a gente pode guardar praticamente qualquer coisa la dentro

const isUpdatedContext = createContext();

function IsUpdatedContextComponent(props) {
  const [updated, setUpdated] = useState(false);

  return (
    <isUpdatedContext.Provider value={{ updated, setUpdated }}>
      {props.children}
    </isUpdatedContext.Provider>
  );
}

export { isUpdatedContext, IsUpdatedContextComponent };
