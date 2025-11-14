import "./App.css";
import { Header } from "./Header.jsx";
import { Home } from "./Home.jsx";
import { Chart } from "./Chart.jsx";
import { useState } from "react";

function App() {
  const [page, setPage] = useState(0);
  return (
    <>
      <Header setPage={setPage} />
      <main>
        {page === 0 && <Home />}
        {page === 1 && <Chart />}
        {page === 2 && <div>Page 3</div>}
      </main>
    </>
  );
}

export default App;
