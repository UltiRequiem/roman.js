import { parseRoman, roman } from "./mod.ts";

console.log(roman(3)); //=> "III"

console.log(parseRoman("III")); //=> 3

console.log(roman(47)); //=> "XLVII"
console.log(parseRoman("XLVII")); //=> "47

console.log(roman(3990)); //=> "MMMCMXC"

console.log(roman(3999)); //=> "MMMCMXCIX"

console.log(roman(1984)); //=> "MCMLXXXIV"
