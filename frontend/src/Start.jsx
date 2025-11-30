import foto_laserscanner from "./assets/Laserscanner.png";
import foto_bahnhofsstrasse_mitte from "./assets/Bahnhofsstrasse_Mitte.png";
import foto_bahnhofsstrasse_nord from "./assets/Bahnhofsstrasse_Nord.png";
import foto_bahnhofsstrasse_sued from "./assets/Bahnhofsstrasse_Sued.png";
import foto_lintheschergasse from "./assets/Lintheschergasse.png";

import { Uebersichtsplan } from "./Uebersichtsplan.jsx";

export function Start() {
  return (
    <>
      <h2>Das Projekt</h2>
      <p>
        Seit 2021 erhebt die Stadt Zürich mit Hilfe von Laserscannern die
        Passantenfrequenzen an vier Standorten entlang der Bahnhofsstrasse in
        Zürich.
      </p>
      <img
        src={foto_laserscanner}
        alt="Laserscanner für die Erfassung der Passantenfrequenz."
        width="500"
      />
      <div className="bildquelle">Foto: hystreet.com</div>
      <div className="bildtext">
        Laserscanner für die Erfassung der Passantenfrequenz.
      </div>
      <p>
        Die Beteiligten erhoffen sich Erkenntnisse über das Konsum- und
        Shoppingverhalten. Mithilfe der Daten können zukünftig Entscheidungen
        für die Stadtentwicklung, den Einzelhandel und die Immobilienwirtschaft
        getroffen werden. Die Passantenfrequenz ist beispielsweise ein
        zuverlässiger Indikator für mögliche Umsätze im Einzelhandel und somit
        auch für die Miete der Verkaufsflächen. Mieten an Standorten, an denen
        eine doppelt so hohe Passantenfrequenz im Vergleich zum Mittelwert
        festgestellt wird, fallen ebenfalls doppelt so hoch aus. Neben der
        Bahnhofsstrasse in Zürich werden auch in anderen Städten, hauptsächlich
        in hochpreisigen Einkaufsstrassen, Passantenfrequenzen erhoben, zum
        Beispiel in der Via Monte Napoleone in Mailand oder in der Avenue des
        Champs-Élysées in Paris. Im Projekt werden die Anzahl der Personen pro
        Stunde, ihre Laufrichtung, die Wetterverhältnisse sowie die
        Lufttemperatur erfasst. Zusätzlich zur Anzahl der Personen pro Stunde
        wird auch die Zugehörigkeit der Personen als Erwachsene oder Kinder
        bestimmt. Die Daten sind frei verfügbar über das{" "}
        <a
          href="https://data.stadt-zuerich.ch/dataset/hystreet_fussgaengerfrequenzen"
          target="_blank"
        >
          Open Data Portal der Stadt Zürich
        </a>
        . Das Projekt ist ein Gemeinschaftsprojekt zwischen der Stadtentwicklung
        Zürich, der Vereinigung Zürcher Bahnhofsstrasse, Swiss Life Asset
        Managers sowie den Unternehmen CBRE und Hystreet.
      </p>

      <h3>Die Messgebiete</h3>
      <p>
        Insgesamt gibt es vier Messgebiete, in denen die Daten erhoben werden:
      </p>

      <h4 className="bildueberschrift">Bahnhofsstrasse Nord</h4>
      <img
        src={foto_bahnhofsstrasse_nord}
        alt="Nördliches Messgebiet der Bahnhofsstrasse, Blick von der Kreuzung
        Bahnhofsstrasse/Uraniastrasse in Richtung Norden."
        width="500"
      />
      <div className="bildquelle">Foto: Google Maps.</div>
      <div className="bildtext">
        Nördliches Messgebiet der Bahnhofsstrasse, Blick von der Kreuzung
        Bahnhofsstrasse/Uraniastrasse in Richtung Norden.
      </div>

      <h4 className="bildueberschrift">Bahnhofstrasse Mitte</h4>
      <img
        src={foto_bahnhofsstrasse_mitte}
        alt="Mittiges Messgebiet der Bahnhofsstrasse, Blick von der Kreuzung
        Bahnhofsstrasse/Bärengasse in Richtung Norden."
        width="500"
      />
      <div className="bildquelle">Foto: Google Maps.</div>
      <div className="bildtext">
        Mittiges Messgebiet der Bahnhofsstrasse, Blick von der Kreuzung
        Bahnhofsstrasse/Bärengasse in Richtung Norden.
      </div>

      <h4 className="bildueberschrift">Bahnhofsstrasse Süd</h4>
      <img
        src={foto_bahnhofsstrasse_sued}
        alt="Südliches Messgebiet der Bahnhofsstrasse, Blick vom Paradeplatz in
        Richtung Süden."
        width="500"
      />
      <div className="bildquelle">Foto: Google Maps.</div>
      <div className="bildtext">
        Südliches Messgebiet der Bahnhofsstrasse, Blick vom Paradeplatz in
        Richtung Süden.
      </div>

      <h4 className="bildueberschrift">Lintheschergasse</h4>
      <img
        src={foto_lintheschergasse}
        alt="Messgebiet Lintheschergasse, Blick von der Kreuzung
        Uraniastrasse/Lintheschergasse in Richtung Norden."
        width="500"
        height="300"
      />
      <div className="bildquelle">Foto: Google Maps.</div>
      <div className="bildtext">
        Messgebiet Lintheschergasse, Blick von der Kreuzung
        Uraniastrasse/Lintheschergasse in Richtung Norden.
      </div>

      <h4 className="bildueberschrift">Übersichtsplan der Messgebiete</h4>
      <Uebersichtsplan />
    </>
  );
}
