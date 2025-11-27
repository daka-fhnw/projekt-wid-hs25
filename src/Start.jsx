import foto_laserscanner from "./assets/Laserscanner.png";
import foto_bahnhofsstrasse_mitte from "./assets/Bahnhofsstrasse_Mitte.png";
import foto_bahnhofsstrasse_nord from "./assets/Bahnhofsstrasse_Nord.png";
import foto_bahnhofsstrasse_sued from "./assets/Bahnhofsstrasse_Sued.png";
import foto_lintheschergasse from "./assets/Lintheschergasse.png";
import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import geometrien_messgebiete from "./assets/hystreet_locations.json";

export function Start() {
  // Karte hinzufügen
  useEffect(() => {
    const map = L.map("map").setView([47.3721, 8.5393], 15); // Koordinaten Mittelpunkt und Zoomstufe
    L.tileLayer(
      "https://tiles.stadiamaps.com/tiles/stamen_terrain/{z}/{x}/{y}{r}.png",
      {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        ext: "png",
      }
    ).addTo(map);
    L.geoJSON(geometrien_messgebiete, {
      onEachFeature: (feature, layer) => {
        // Beschriftung Zonen beim Anklicken
        if (feature.properties && feature.properties.name) {
          layer.bindPopup(`<h3>${feature.properties.name}</h3>`);
        }
      },
    }).addTo(map);
    return () => {
      map.remove();
    };
  }, []);
  // Karte hinzufügen

  return (
    <>
      <div className="Ueberschrift">Das Projekt</div>
      <p></p>
      <div className="Text">
        Seit 2021 erhebt die Stadt Zürich mit Hilfe von Laserscannern die
        Passantenfrequenzen an vier Standorten entlang der Bahnhofsstrasse in
        Zürich.
      </div>
      <img
        src={foto_laserscanner}
        alt="Laserscanner für die Erfassung der Passantenfrequenz."
        width="500"
        height="300"
      ></img>
      <div className="Bildquelle">Foto: hystreet.com</div>
      <div className="Bildtext">
        Laserscanner für die Erfassung der Passantenfrequenz.
      </div>
      <p></p>
      <div className="Text">
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
        <a href="https://data.stadt-zuerich.ch/dataset/hystreet_fussgaengerfrequenzen">
          Open Data Portal der Stadt Zürich
        </a>
        . Das Projekt ist ein Gemeinschaftsprojekt zwischen der Stadtentwicklung
        Zürich, der Vereinigung Zürcher Bahnhofsstrasse, Swiss Life Asset
        Managers sowie den Unternehmen CBRE und Hystreet.
      </div>
      <p></p>
      <br></br>
      <div className="Ueberschrift">Die Messgebiete</div>
      <p></p>
      <div className="Text">
        Insgesamt gibt es vier Messgebiete, in denen die Daten erhoben werden:
      </div>
      <p></p>
      <div className="Bildueberschrift">Bahnhofsstrasse Nord</div>
      <img
        src={foto_bahnhofsstrasse_nord}
        alt="Nördliches Messgebiet der Bahnhofsstrasse, Blick von der Kreuzung
        Bahnhofsstrasse/Uraniastrasse in Richtung Norden."
        width="500"
        height="300"
      ></img>
      <div className="Bildquelle">Foto: Google Maps.</div>
      <div className="Bildtext">
        Nördliches Messgebiet der Bahnhofsstrasse, Blick von der Kreuzung
        Bahnhofsstrasse/Uraniastrasse in Richtung Norden.
      </div>
      <p></p>
      <div className="Bildueberschrift">Bahnhofstrasse Mitte</div>
      <img
        src={foto_bahnhofsstrasse_mitte}
        alt="Mittiges Messgebiet der Bahnhofsstrasse, Blick von der Kreuzung
        Bahnhofsstrasse/Bärengasse in Richtung Norden."
        width="500"
        height="300"
      ></img>
      <div className="Bildquelle">Foto: Google Maps.</div>
      <div className="Bildtext">
        Mittiges Messgebiet der Bahnhofsstrasse, Blick von der Kreuzung
        Bahnhofsstrasse/Bärengasse in Richtung Norden.
      </div>
      <p></p>
      <div className="Bildueberschrift">Bahnhofsstrasse Süd</div>
      <img
        src={foto_bahnhofsstrasse_sued}
        alt="Südliches Messgebiet der Bahnhofsstrasse, Blick vom Paradeplatz in
        Richtung Süden."
        width="500"
        height="300"
      ></img>
      <div className="Bildquelle">Foto: Google Maps.</div>
      <div className="Bildtext">
        Südliches Messgebiet der Bahnhofsstrasse, Blick vom Paradeplatz in
        Richtung Süden.
      </div>
      <p></p>
      <div className="Bildueberschrift">Lintheschergasse</div>
      <img
        src={foto_lintheschergasse}
        alt="Messgebiet Lintheschergasse, Blick von der Kreuzung
        Uraniastrasse/Lintheschergasse in Richtung Norden."
        width="500"
        height="300"
      ></img>
      <div className="Bildquelle">Foto: Google Maps.</div>
      <div className="Bildtext">
        Messgebiet Lintheschergasse, Blick von der Kreuzung
        Uraniastrasse/Lintheschergasse in Richtung Norden.
      </div>
      <p></p>
      <div className="Bildueberschrift">Übersichtsplan der Messgebiete</div>
      <div id="map" style={{ height: "500px", width: "800px" }}></div>
    </>
  );
}
