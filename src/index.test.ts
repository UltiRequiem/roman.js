import { describe, expect, it } from "vitest";
import { parseRoman, roman } from "./index.js";

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

describe("Convert to Roman Numeral from number.", () => {
  for (const [number, numeral] of cases) {
    it(`${number} converts to ${numeral}.`, () => {
      expect(roman(number)).toEqual(numeral);
    });
  }

  it("Number lower than 1 throws.", () => {
    expect(() => {
      roman(0);
    }).toThrow(RangeError);

    expect(() => {
      roman(-34);
    }).toThrow(RangeError);
  });

  it("Number greater than 3999 throws.", () => {
    expect(() => {
      roman(4000);
    }).toThrow(RangeError);
  });
});

describe("Convert from number to Roman Numeral.", () => {
  for (const [number, numeral] of cases) {
    it(`${numeral} converts to ${number}.`, () => {
      expect(parseRoman(numeral)).toEqual(number);
    });
  }

  it("Invalid Roman Numeral throws.", () => {
    expect(() => {
      parseRoman("XXXX");
    }).toThrow(SyntaxError);
  });
});
