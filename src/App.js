import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Notes } from "./pages/Notes";
import { Toaster } from "react-hot-toast";
import { NotePage } from "./pages/NotePage";
import { EditPage } from "./pages/EditPage";

import { IsUpdatedContextComponent } from "./context/isUpdated";
import { TesteGit } from "./components/TesteGit";

function App() {
  return (
    <>
      <Toaster />

      <IsUpdatedContextComponent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notas" element={<Notes />} />
          <Route path="/nota/:id" element={<NotePage />} />
          <Route path="/edit/:id" element={<EditPage />} />
          <Route path="/teste-git" element={<TesteGit />} />
        </Routes>
      </IsUpdatedContextComponent>
    </>
  );
}

export default App;
