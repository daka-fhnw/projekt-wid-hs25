import { useState, useEffect } from "react";
import "./Erkundung.css";


export function Erkundung() {

  const[anfangsdatum, setAnfangsdatum]=useState("2024-01-01")
  const[enddatum, setEnddatum]=useState("2024-01-01")
  const[anfangszeit, setAnfangszeit]=useState("5")
  const[endzeit, setEndzeit]=useState("10")
  const[mintemp, setMintemp]=useState("10")
  const[maxtemp, setMaxtemp]=useState("20")
 
useEffect(() => {
  console.log(
    `http://localhost:8000/standorte/passanten-anzahl` +
    `?datum_von=${anfangsdatum}` +
    `&datum_bis=${enddatum}` +
    `&stunde_von=${anfangszeit}` +
    `&stunde_bis=${endzeit}` +
    `&temperatur_von=${mintemp}` +
    `&temperatur_bis=${maxtemp}`)
}, [anfangsdatum, enddatum, anfangszeit, endzeit, mintemp, maxtemp]);


  return (
    <div className="erkundung">
      <h2>Die Erkundung</h2>
      <menu>
        <h3>Parameter</h3>
        <main>Anfangsdatum</main>
        <input type="date" value={anfangsdatum}
          onChange={(x) => setAnfangsdatum(x.target.value)}/>
        <main>Enddatum</main>
        <input type="date" value={enddatum}
          onChange={(x) => setEnddatum(x.target.value)}/>
        <main>Anfangszeit</main>
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
        <main>Endzeit</main>
        <select         
        value={endzeit}
        onChange={(x) => setEndzeit(x.target.value)}>
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
        <main>Min Temperatur</main>
        <input type="number" step="1" value={mintemp}
        onChange={(x) => setMintemp(x.target.value)}/>
        <main>Max Temperatur</main>
        <input type="number" step="1" value={maxtemp}
        onChange={(x) => setMaxtemp(x.target.value)}/>
      </menu>

      <main>Platz für Visualisierung</main>

    </div>
  );
}




// http://localhost:8000/standorte/passanten-anzahl?datum_von=2024-01-01&datum_bis=2024-12-31&stunde_von=16&stunde_bis=18&temperatur_von=20&temperatur_bis=25
