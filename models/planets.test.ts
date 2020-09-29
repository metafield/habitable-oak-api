import {
  assertEquals,
  assertNotEquals,
} from "https://deno.land/std@0.69.0/testing/asserts.ts";

import { filterHabitablePlanets } from "./Planets.ts";

const HABITABLE_PLANET = {
  koi_disposition: "CONFIRMED",
  koi_prad: "1",
  koi_srad: "1",
  koi_smass: "1",
};

const INHABITABLE_PLANET = {
  koi_disposition: "FALSE POSITIVE",
};

const TOO_LARGE_PLANETARY_RADIUS = {
  koi_prad: "1.5",
};

const TOO_LARGE_SOLAR_RADIUS = {
  koi_srad: "1.01",
};

const TOO_LARGE_SOLAR_MASS = {
  koi_smass: "1.04",
};

Deno.test("filter only habitable planets", () => {
  const filtered = filterHabitablePlanets([
    HABITABLE_PLANET,
    INHABITABLE_PLANET,
    TOO_LARGE_PLANETARY_RADIUS,
    TOO_LARGE_SOLAR_MASS,
    TOO_LARGE_SOLAR_RADIUS,
  ]);

  assertEquals(filtered, [HABITABLE_PLANET]);
});

Deno.test({
  name: "example test",
  fn() {
    assertEquals("deno", "deno");
    assertNotEquals({
      runtime: "deno",
    }, {
      runtime: "node",
    });
  },
});

Deno.test("short Example", () => {
  assertEquals("deno", "deno");
  assertNotEquals({
    runtime: "deno",
  }, {
    runtime: "node",
  });
});
