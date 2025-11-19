import "./App.css";

import { useState } from "react";
import { Header } from "./Header.jsx";
import { Start } from "./Start.jsx";
import { Fokusfrage } from "./Fokusfrage.jsx";
import { Erkundung } from "./Erkundung.jsx";

function App() {
  const [page, setPage] = useState(0);
  return (
    <>
      <Header page={page} setPage={setPage} />
      <main>
        {page === 0 && <Start />}
        {page === 1 && <Fokusfrage />}
        {page === 2 && <Erkundung />}
      </main>
    </>
  );
}

export default App;
