import { VegaEmbed } from "react-vega";
import fokusfrage from "./assets/fokusfrage.json";

export function Fokusfrage() {
  return (
    <>
      <div className="Ueberschrift">
        Wo waren im April 2024 die meisten Kinder unterwegs?
      </div>
      <p></p>
      <br></br>
      <VegaEmbed spec={fokusfrage} />
      <div className="Ueberschrift">Analysevorgang</div>
      <p></p>
      <div className="Text">
        1.) Filtern des gesamten Datensatzes und Auswahl der Daten im Zeitraum
        vom 1. bis 30. April 2024.
      </div>
      <div className="Text">
        2.) Erstellung einer Pivot-Tabelle, die für jede Kombination der
        Messgebiete aggregierte Daten zu den Fussgängerzahlen enthält.
      </div>
      <div className="Text">
        3.) Berechnung des Anteils von Kindern und Erwachsenen an der Gesamtzahl
        der Fussgänger für jeden dieser Standorte.
      </div>
    </>
  );
}
