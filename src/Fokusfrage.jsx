import { VegaEmbed } from "react-vega";
import fokusfrage from "./assets/fokusfrage.json";

export function Fokusfrage() {
  return (
    <>
      <VegaEmbed spec={fokusfrage} />
    </>
  );
}
