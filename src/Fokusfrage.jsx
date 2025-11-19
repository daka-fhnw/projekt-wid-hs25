import { VegaEmbed } from "react-vega";
import fragestellung from "./assets/fragestellung.json";

export function Fokusfrage() {
  return (
    <>
      <VegaEmbed spec={fragestellung} />
    </>
  );
}
