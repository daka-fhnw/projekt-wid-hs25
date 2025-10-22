import { Header } from "./Header.jsx";
import "./App.css";
import { useState } from "react";

function App() {
  const [page, setPage] = useState(0);
  return (
    <>
      <Header setPage={setPage} />
      <main>
        {page === 0 && <div>Page 1</div>}
        {page === 1 && <div>Page 2</div>}
        {page === 2 && <div>Page 3</div>}
      </main>
    </>
  );
}

export default App;
