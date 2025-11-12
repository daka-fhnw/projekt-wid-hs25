import { VegaEmbed } from "react-vega";
import fragestellung from "./assets/fragestellung.json";

export function Chart() {
  return (
    <>
      <VegaEmbed spec={fragestellung} />
    </>
  );
}
