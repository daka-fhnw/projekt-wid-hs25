import "./Erkundung.css";
import { useVegaEmbed } from "react-vega";
import { useEffect, useRef, useState } from "react";
import spec from "./assets/erkundung.json";

export function Erkundung() {
  // verwenden der in der spec vorhandenen Daten als initialer Wert
  const [data, setData] = useState(spec.datasets.values);
  const [state, setState] = useState("");

  const [anfangsdatum, setAnfangsdatum] = useState("2000-01-01");
  const [enddatum, setEnddatum] = useState("9999-12-31");
  const [anfangszeit, setAnfangszeit] = useState("0");
  const [endzeit, setEndzeit] = useState("23");
  const [mintemp, setMintemp] = useState("-20");
  const [maxtemp, setMaxtemp] = useState("40");

  useEffect(() => {
    // Nutzer informieren, dass Daten geladen werden
    setState("loading");
    // Laden der Daten für die Erkundung
    fetch(
      `http://localhost:8000/standorte/passanten-anzahl` +
        `?datum_von=${anfangsdatum}` +
        `&datum_bis=${enddatum}` +
        `&stunde_von=${anfangszeit}` +
        `&stunde_bis=${endzeit}` +
        `&temperatur_von=${mintemp}` +
        `&temperatur_bis=${maxtemp}`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
        setState("success");
      })
      .catch(() => {
        setState("failed");
      });
  }, [anfangsdatum, enddatum, anfangszeit, endzeit, mintemp, maxtemp]);

  // Für dynamische Daten zweiten Ansatz von react-vega mit useVegaEmbed nutzen
  // (gemäss README auf https://github.com/vega/react-vega)
  const ref = useRef(null);
  const embed = useVegaEmbed({ ref, spec });
  useEffect(() => {
    embed?.view.data("values", data).runAsync();
  }, [embed, data]);

  return (
    <div className="erkundung">
      <div>
        <h2>Die Erkundung</h2>
        {state === "loading" && (
          <div className="meldung info">Daten werden geladen...</div>
        )}
        {state === "failed" && (
          <div className="meldung fehler">Laden der Daten fehlgeschlagen!</div>
        )}
        <div ref={ref} />
      </div>
      <div>
        <div className="menu">
          <h3>Parameter</h3>
          <p>
            <label>Anfangsdatum</label>
            <br />
            <input
              type="date"
              value={anfangsdatum}
              onChange={(x) => setAnfangsdatum(x.target.value)}
            />
          </p>
          <p>
            <label>Enddatum</label>
            <br />
            <input
              type="date"
              value={enddatum}
              onChange={(x) => setEnddatum(x.target.value)}
            />
          </p>
          <p>
            <label>Anfangszeit</label>
            <br />
            <select
              value={anfangszeit}
              onChange={(x) => setAnfangszeit(x.target.value)}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
            </select>
          </p>
          <p>
            <label>Endzeit</label>
            <br />
            <select
              value={endzeit}
              onChange={(x) => setEndzeit(x.target.value)}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
            </select>
          </p>
          <p>
            <label>Min Temperatur</label>
            <br />
            <input
              type="number"
              step="1"
              value={mintemp}
              onChange={(x) => setMintemp(x.target.value)}
            />
          </p>
          <p>
            <label>Max Temperatur</label>
            <br />
            <input
              type="number"
              step="1"
              value={maxtemp}
              onChange={(x) => setMaxtemp(x.target.value)}
            />
          </p>
        </div>
      </div>
    </div>
  );
}
