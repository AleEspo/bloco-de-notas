import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Notes } from "./pages/Notes";
import { Toaster } from "react-hot-toast";
import { NotePage } from "./pages/NotePage";

function App() {
  return (
    <>
      <Toaster />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notas" element={<Notes />} />
        <Route path="/nota/:id" element={<NotePage />} />
      </Routes>
    </>
  );
}

export default App;
