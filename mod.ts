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
  constructor(public value: number, public symbol: string) {}
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

export function roman(number: number): string {
  assertNumberInRomanLimits(number);

  let result = "";

  for (const { value, symbol } of romanNumerals) {
    while (number >= value) {
      result += symbol;
      number -= value;
    }
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
 *
 * @public
 */
export function assertNumberInRomanLimits(number: number) {
  if (number > 3999) {
    throw new RangeError(
      "The biggest number we can form in Roman numerals is MMMCMXCIX (3999).",
    );
  }

  if (1 > number) {
    throw new RangeError(
      "There is no concept of 0 or negatives in Roman numerals.",
    );
  }
}
