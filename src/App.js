import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Notes } from "./pages/Notes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notas/:algumaCoisa" element={<Notes />} />
      </Routes>
    </>
  );
}

export default App;
