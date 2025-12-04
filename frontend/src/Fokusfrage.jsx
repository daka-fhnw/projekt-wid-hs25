import { useVegaEmbed } from "react-vega";
import { useEffect, useRef, useState } from "react";
import spec from "./assets/fokusfrage.json";

export function Fokusfrage() {
  const [data, setData] = useState([]);
  const [state, setState] = useState("");
  const [answer, setAnswer] = useState(null);
  useEffect(() => {
    // Nutzer informieren, dass Daten geladen werden
    setState("loading");
    // Auch Antwort zurücksetzen
    setAnswer(null);
    // Laden der Standort-Polygone vom Backend als GeoJSON
    fetch("http://localhost:8000/fokusfrage")
      .then((response) => response.json())
      .then((json) => {
        // Geladene Daten im useState speichern
        setData(json);
        // Antwort auf die Frage suchen: Eintrag mit dem höchsten Anteil Kinder
        setAnswer(
          json.reduce((maximum, current) =>
            current["Anteil Kinder"] > maximum["Anteil Kinder"]
              ? current
              : maximum
          )
        );
        // Nutzer informieren, dass Daten erfolgreich geladen wurden
        setState("success");
      })
      .catch(() => {
        // Nutzer informieren, dass Daten nicht geladen werden konnten
        setState("failed");
      });
  }, []);
  // Für dynamische Daten zweiten Ansatz von react-vega mit useVegaEmbed nutzen
  // (gemäss README auf https://github.com/vega/react-vega)
  const ref = useRef(null);
  const embed = useVegaEmbed({ ref, spec });
  useEffect(() => {
    embed?.view.data("values", data).runAsync();
  }, [embed, data]);
  return (
    <>
      <h2>Die Fokusfrage</h2>
      <p>Wo waren im April 2024 anteilsmässig die meisten Kinder unterwegs?</p>
      {answer !== null && (
        <p>
          Antwort: {answer["Standorte"]} mit{" "}
          {(answer["Anteil Kinder"] * 100).toFixed(1)}%
        </p>
      )}
      {state === "loading" && (
        <div className="meldung info">Daten werden geladen...</div>
      )}
      {state === "failed" && (
        <div className="meldung fehler">Laden der Daten fehlgeschlagen!</div>
      )}
      <div ref={ref} />
    </>
  );
}
