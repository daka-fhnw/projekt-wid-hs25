import { MapContainer, TileLayer, Polygon, Popup } from "react-leaflet";
import L from "leaflet";
import { useEffect, useState } from "react";
import geometrien_messgebiete from "./assets/hystreet_locations.json";

export function Uebersichtsplan() {
  const [data, setData] = useState([]);
  useEffect(() => {
    // Konvertierung der GeoJSON-Koordinaten in Leaflet-Positionen
    setData(
      geometrien_messgebiete.features.map((feature) => ({
        name: feature.properties.name,
        positions: L.GeoJSON.coordsToLatLngs(feature.geometry.coordinates[0]),
      }))
    );
  }, []);
  return (
    <MapContainer
      center={[47.3721, 8.5393]}
      zoom={15}
      style={{ width: "640px", height: "480px" }}
    >
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/stamen_terrain/{z}/{x}/{y}.png"
        maxZoom={19}
        attribution={
          '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> ' +
          '&copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> ' +
          '&copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> ' +
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }
      />

      {data.map((data, index) => (
        <Polygon
          key={index}
          positions={data.positions}
          pathOptions={{ color: "blue" }}
        >
          <Popup>
            <b>{data.name}</b>
          </Popup>
        </Polygon>
      ))}
    </MapContainer>
  );
}
