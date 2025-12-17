import "./App.css";
import "leaflet/dist/leaflet.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { useState } from "react";
import { Header } from "./Header.jsx";
import { Start } from "./Start.jsx";
import { Fokusfrage } from "./Fokusfrage.jsx";
import { Erkundung } from "./Erkundung.jsx";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";

function App() {
  const [page, setPage] = useState(0);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Header page={page} setPage={setPage} />
      <main>
        {page === 0 && <Start />}
        {page === 1 && <Fokusfrage />}
        {page === 2 && <Erkundung />}
      </main>
    </LocalizationProvider>
  );
}

export default App;
