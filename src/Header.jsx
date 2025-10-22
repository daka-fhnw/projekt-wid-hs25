export function Header({ setPage }) {
  return (
    <header>
      <div id="Elternelement1">
        <img
          onClick={() => setPage(0)}
          src="https://www.fhnw.ch/plattformen/soziale-arbeit-geschichte/wp-content/uploads/sites/266/fhnw-social-media-sharing-gelb-1920x1440-c-default.jpg"
          alt="Beispielbild"
          width="150"
          height="100"
          title="Beispiel Tooltip"
        />
        <div id="Ueberschrift">
          Passantenfrequenz entlang der Bahnhofsstrasse Zürich
        </div>
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
