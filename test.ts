import { roman } from "./mod.ts";
import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.135.0/testing/asserts.ts";

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
  [3999, "MMMCMXCIX"],
] as const;

Deno.test("Convert to Roman from Number.", async (t) => {
  for (const [number, numeral] of cases) {
    await t.step(`${number} converts to ${numeral}.`, () => {
      assertEquals(roman(number), numeral);
    });
  }
});

Deno.test("Errors", async (t) => {
  await t.step("Number lower than 1 throws.", () => {
    assertThrows(() => {
      roman(0);
    }, RangeError);

    assertThrows(() => {
      roman(-34);
    }, RangeError);
  });

  await t.step("Number greater than 3999 throws.", () => {
    assertThrows(() => {
      roman(4000);
    }, RangeError);
  });
});
