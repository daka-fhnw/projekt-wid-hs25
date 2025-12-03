import { VegaEmbed } from "react-vega";
import fokusfrage from "./assets/fokusfrage.json";

export function Fokusfrage() {
  return (
    <>
      <h2>Die Fokusfrage</h2>
      <p>Wo waren im April 2024 anteilsmässig die meisten Kinder unterwegs?</p>

      <VegaEmbed spec={fokusfrage} />
    </>
  );
}
