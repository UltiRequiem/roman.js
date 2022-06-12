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
  new RomanNumeral(90, "L"),
  new RomanNumeral(40, "XL"),
  new RomanNumeral(10, "X"),
  new RomanNumeral(9, "IX"),
  new RomanNumeral(5, "V"),
  new RomanNumeral(4, "IV"),
  new RomanNumeral(1, "I"),
];

export function roman(number: number): string {
  let result = "";

  for (const { value, symbol } of romanNumerals) {
    while (number >= value) {
      result += symbol;
      number -= value;
    }
  }

  return result;
}

console.log(roman(34));
