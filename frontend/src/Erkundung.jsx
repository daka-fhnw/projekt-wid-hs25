import "./Erkundung.css";
import { useVegaEmbed } from "react-vega";
import { useEffect, useRef, useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import Slider from "@mui/material/Slider";
import dayjs from "dayjs";
import spec from "./assets/erkundung.json";

function formatDateParam(date) {
  return date.format("YYYY-MM-DD");
}

export function Erkundung() {
  // verwenden der in der spec vorhandenen Daten als initialer Wert
  const [data, setData] = useState(spec.datasets.values);
  const [state, setState] = useState("");
  const [anfangsdatum, setAnfangsdatum] = useState(dayjs("2020-01-01"));
  const [enddatum, setEnddatum] = useState(dayjs("2025-12-31"));
  const [zeiten, setZeiten] = useState([0, 23]);
  const [temperaturen, setTemperaturen] = useState([-20, 40]);

  useEffect(() => {
    // Nutzer informieren, dass Daten geladen werden
    setState("loading");
    // Laden der Daten für die Erkundung
    // Endpunkt "/standorte/passanten-anzahl" mit Suchparameter aufrufen
    fetch(
      "http://localhost:8000/standorte/passanten-anzahl" +
        `?datum_von=${formatDateParam(anfangsdatum)}` +
        `&datum_bis=${formatDateParam(enddatum)}` +
        `&stunde_von=${zeiten[0]}` +
        `&stunde_bis=${zeiten[1]}` +
        `&temperatur_von=${temperaturen[0]}` +
        `&temperatur_bis=${temperaturen[1]}`
    )
      .then((response) => response.json())
      .then((json) => {
        // Geladene Daten im useState speichern
        setData(json);
        // Nutzer informieren, dass Daten erfolgreich geladen wurden
        setState("success");
      })
      .catch(() => {
        // Nutzer informieren, dass Daten nicht geladen werden konnten
        setState("failed");
      });
  }, [anfangsdatum, enddatum, zeiten, temperaturen]);

  // Für dynamische Daten zweiten Ansatz von react-vega mit useVegaEmbed nutzen
  // (gemäss README auf https://github.com/vega/react-vega)
  const ref = useRef(null);
  const embed = useVegaEmbed({ ref, spec });
  useEffect(() => {
    embed?.view.data("values", data).runAsync();
  }, [embed, data]);

  return (
    <div className="erkundung">
      <div className="diagramm">
        <h2>Die Erkundung</h2>
        {state === "loading" && (
          <div className="meldung info">Daten werden geladen...</div>
        )}
        {state === "failed" && (
          <div className="meldung fehler">Laden der Daten fehlgeschlagen!</div>
        )}
        {state === "success" && (
          <div className="meldung info">Erfolgreich aktualisiert.</div>
        )}
        <div ref={ref} />
      </div>

      <div className="menu">
        <h3>Parameter</h3>

        <h4>Anfangsdatum</h4>
        <DatePicker
          value={anfangsdatum}
          onChange={(newValue) => setAnfangsdatum(newValue)}
          sx={{ backgroundColor: "white" }}
        />

        <h4>Enddatum</h4>
        <DatePicker
          value={enddatum}
          onChange={(newValue) => setEnddatum(newValue)}
          sx={{ backgroundColor: "white" }}
        />

        <h4>Stundenbereich</h4>
        <Slider
          value={zeiten}
          onChange={(_event, value) => setZeiten(value)}
          valueLabelDisplay="auto"
          sx={{ width: "100%" }}
          min={0}
          max={23}
        />

        <h4>Temperaturbereich</h4>
        <Slider
          value={temperaturen}
          onChange={(_event, value) => setTemperaturen(value)}
          valueLabelDisplay="auto"
          sx={{ width: "100%" }}
          min={-20}
          max={40}
        />
      </div>
    </div>
  );
}
