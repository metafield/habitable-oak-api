import { join } from "https://deno.land/std/path/mod.ts";
import { BufReader } from "https://deno.land/std/io/bufio.ts";
import { parse } from "https://deno.land/std/encoding/csv.ts";

// type Planet = {
//   [key: string]: string;
// };

type Planet = Record<string, string>;

let planets: Planet[];

export function filterHabitablePlanets(planets: Planet[]): Planet[] {
  const result = planets.filter((planet) => {
    const planetaryRadius = Number(planet["koi_prad"]);
    const stellarMass = Number(planet["koi_smass"]);
    const stellarRadius = Number(planet["koi_srad"]);

    return planet["koi_disposition"] === "CONFIRMED" &&
      planetaryRadius > 0.5 && planetaryRadius < 1.5 &&
      stellarMass > 0.78 && stellarMass < 1.04 &&
      stellarRadius > 0.99 && stellarRadius < 1.01;
  });

  return result;
}

async function loadPlanetsData() {
  const path = join("data", "kepler_exoplanets_nasa.csv");

  const file = await Deno.open(path);
  const bufReader = new BufReader(file);
  const planets = await parse(bufReader, { header: true, comment: "#" });
  Deno.close(file.rid);

  return planets as Planet[];
}

planets = filterHabitablePlanets(await loadPlanetsData());

export function getAllPlanets() {
  return planets;
}
