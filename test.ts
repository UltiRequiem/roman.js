import { roman } from "./mod.ts";
import { assertEquals } from "https://deno.land/std@0.135.0/testing/asserts.ts";

const cases = [
  [1, "I"],
  [2, "II"],
  [3, "III"],
  [40, "XL"],
  [47, "XLVII"],
  [50, "L"],
  [798, "DCCXCVIII"],
  [1000, "M"],
  [1006, "MVI"],
  [1984, "MCMLXXXIV"],
] as const;

Deno.test("Convert to Roman from Number.", async (t) => {
  for (const [number, numeral] of cases) {
    await t.step(`${number} converts to ${numeral}.`, () => {
      assertEquals(roman(number), numeral);
    });
  }
});
