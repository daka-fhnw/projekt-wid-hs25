import { useState } from "react";

export function Header() {
  const [likes, setLikes] = useState(0);

  return (
    <div>
      <div id="Elternelement1">
        <img
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
        <button onClick={() => setLikes(likes + 1)}>Das Projekt</button>
        <button onClick={() => setLikes(likes - 1)}>Die Fokusfrage</button>
        <button onClick={() => setLikes(likes - 1)}>
          Die Erkundung des Datensatzes
        </button>
      </div>
    </div>
  );
}
