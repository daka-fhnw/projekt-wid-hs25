import "./Header.css";
import logo from "./assets/FHNW_Logo.jpg";

export function Header({ page, setPage }) {
  return (
    <header>
      <div className="elternelement1">
        <img
          onClick={() => setPage(0)}
          src={logo}
          width="100"
          title="Logo FHNW"
        />
        <h1>Passantenfrequenz entlang der Bahnhofsstrasse Zürich</h1>
        <div className="leerraum"></div>
        <div className="gruppe">
          <b>Gruppe:</b>
          <br />
          Gabriel Blaas,
          <br />
          Daniel Käser
        </div>
      </div>
      <div className="elternelement2">
        <button
          onClick={() => setPage(0)}
          className={page === 0 ? "active" : ""}
        >
          Das Projekt
        </button>
        <button
          onClick={() => setPage(1)}
          className={page === 1 ? "active" : ""}
        >
          Die Fokusfrage
        </button>
        <button
          onClick={() => setPage(2)}
          className={page === 2 ? "active" : ""}
        >
          Die Erkundung
        </button>
      </div>
    </header>
  );
}
