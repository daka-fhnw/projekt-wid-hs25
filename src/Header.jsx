import logo from "./assets/FHNW_Logo.jpg";

export function Header({ setPage }) {
  return (
    <header>
      <div id="Elternelement1">
        <img
          onClick={() => setPage(0)}
          src={logo}
          alt="Beispielbild"
          width="150"
          height="100"
          title="Beispiel Tooltip"
        />
        <h1>Passantenfrequenz entlang der Bahnhofsstrasse Zürich</h1>
      </div>
      <div id="Elternelement2">
        <button onClick={() => setPage(0)}>Das Projekt</button>
        <button onClick={() => setPage(1)}>Die Fokusfrage</button>
        <button onClick={() => setPage(2)}>
          Die Erkundung des Datensatzes
        </button>
      </div>
    </header>
  );
}
