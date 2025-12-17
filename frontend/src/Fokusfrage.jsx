import "./Fokusfrage.css";
import { useVegaEmbed } from "react-vega";
import { useEffect, useRef, useState } from "react";
import spec from "./assets/fokusfrage.json";

export function Fokusfrage() {
  // verwenden der in der spec vorhandenen Daten als initialer Wert
  const [data, setData] = useState(spec.datasets.values);
  const [state, setState] = useState("");
  const [answer, setAnswer] = useState(null);
  useEffect(() => {
    // Nutzer informieren, dass Daten geladen werden
    setState("loading");
    // Auch Antwort zurücksetzen
    setAnswer(null);
    // Laden der Daten für die Fokusfrage:
    // Endpunkt "/standorte/kinder-anteil" mit April 2024 als Datumsbereich aufrufen
    fetch(
      "http://localhost:8000/standorte/kinder-anteil?datum_von=2024-04-01&datum_bis=2024-04-30"
    )
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
    <div className="fokusfrage">
      <h2>Die Fokusfrage</h2>
      <p>
        An welchem der vier Standorte waren im gesamten April 2024 anteilsmässig
        die meisten Kinder unterwegs?
      </p>
      {answer !== null && (
        <p>
          <b>Antwort:</b> {answer["Standort"]} mit{" "}
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
    </div>
  );
}
