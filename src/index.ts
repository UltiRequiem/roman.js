/**
 * This module is browser compatible.
 *
 * Convert numbers to Roman numerals.
 *
 * https://github.com/UltiRequiem/roman.js
 *
 * https://ulti.js.org/roman.js
 *
 * Copyright (c) Eliaz Bobadilla.
 *
 * Released under the MIT License.
 *
 * @module
 */

/**
 * Represents a Roman Numeral
 */
export class RomanNumeral {
  constructor(
    public value: number,
    public symbol: string,
  ) {}
}

export const romanNumerals = [
  new RomanNumeral(1000, "M"),
  new RomanNumeral(900, "CM"),
  new RomanNumeral(500, "D"),
  new RomanNumeral(400, "CD"),
  new RomanNumeral(100, "C"),
  new RomanNumeral(90, "XC"),
  new RomanNumeral(50, "L"),
  new RomanNumeral(40, "XL"),
  new RomanNumeral(10, "X"),
  new RomanNumeral(9, "IX"),
  new RomanNumeral(5, "V"),
  new RomanNumeral(4, "IV"),
  new RomanNumeral(1, "I"),
] as const;

const ONES = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
const TENS = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
const HUNDREDS = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
const THOUSANDS = ["", "M", "MM", "MMM"];

/**
 * Every Roman numeral from 1 to 3999, indexed by the number itself, so
 * conversion is a single array lookup.
 */
const ROMAN_TABLE: string[] = [""];

for (let n = 1; n <= 3999; n++) {
  ROMAN_TABLE.push(
    THOUSANDS[(n / 1000) | 0] +
      HUNDREDS[((n / 100) | 0) % 10] +
      TENS[((n / 10) | 0) % 10] +
      ONES[n % 10],
  );
}

/**
 * Convers a number to a Roman Numeral.
 *
 * @param number - The number to convert
 *
 * @returns The Roman Numeral
 */
export function roman(number: number): string {
  assertNumberInRomanLimits(number);

  return ROMAN_TABLE[number | 0] ?? "";
}

/** Value of each Roman character, indexed by character code (0 if invalid). */
const CHAR_VALUES = new Uint16Array(128);
CHAR_VALUES[73] = 1; // I
CHAR_VALUES[86] = 5; // V
CHAR_VALUES[88] = 10; // X
CHAR_VALUES[76] = 50; // L
CHAR_VALUES[67] = 100; // C
CHAR_VALUES[68] = 500; // D
CHAR_VALUES[77] = 1000; // M

/**
 * Convers a Roman Numeral to number.
 *
 * @param romanNumeral - The Roman numeral to parse.
 *
 * @returns The number that is being represented by the Roman Numeral.
 */
export function parseRoman(romanNumeral: string): number {
  let result = 0;
  let previous = 0;
  let run = 0;

  // Walk right to left: a smaller value before a bigger one is subtracted.
  for (let i = romanNumeral.length - 1; i >= 0; i--) {
    const code = romanNumeral.charCodeAt(i);
    const value = code < 128 ? CHAR_VALUES[code]! : 0;

    if (value === 0) {
      throw new SyntaxError("Roman numeral is invalid.");
    }

    if (value === previous) {
      if (++run > 3) {
        throw new SyntaxError("Roman numeral is invalid.");
      }
    } else {
      run = 1;
    }

    result += value < previous ? -value : value;
    previous = value;
  }

  return result;
}

/**
 * Asserts a number can be represented in Roman numerals.
 *
 * @param number - The number to confirm is capable of being represented in Roman numerals
 *
 * @throws {@link RangeError}
 *
 * Thrown if the number is greater than 3999 or less than 1.
 */
export function assertNumberInRomanLimits(number: number): asserts number {
  if (number > 3999) {
    throw new RangeError(
      "The biggest number we can form in Roman numerals is MMMCMXCIX (3999).",
    );
  }

  if (number < 1) {
    throw new RangeError(
      "There is no concept of 0 or negatives in Roman numerals.",
    );
  }
}
