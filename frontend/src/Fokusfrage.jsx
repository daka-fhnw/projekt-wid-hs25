import { VegaEmbed } from "react-vega";
import fokusfrage from "./assets/fokusfrage.json";

export function Fokusfrage() {
  return (
    <>
      <h2>Die Fokusfrage</h2>
      <p>Wo waren im April 2024 die meisten Kinder unterwegs?</p>

      <VegaEmbed spec={fokusfrage} />

      <h3>Analysevorgang</h3>
      <ol>
        <li>
          Filtern des gesamten Datensatzes und Auswahl der Daten im Zeitraum vom
          1. bis 30. April 2024.
        </li>
        <li>
          Erstellung einer Pivot-Tabelle, die für jede Kombination der
          Messgebiete aggregierte Daten zu den Fussgängerzahlen enthält.
        </li>
        <li>
          Berechnung des Anteils von Kindern und Erwachsenen an der Gesamtzahl
          der Fussgänger für jeden dieser Standorte.
        </li>
      </ol>
    </>
  );
}
