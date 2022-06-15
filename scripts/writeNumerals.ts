import { roman } from "../mod.ts";

await Deno.writeTextFile(
  "numerals.ts",
  `// DO NOT MANUALLY MODIFY THIS FILE, CHECK scripts/writeNumerals.ts

import { RomanNumeral } from "./mod.ts";

export const numerals = [
${
    Array.from({ length: 3999 }, (_value, index) => {
      return `  new RomanNumeral(${index + 1}, "${roman(index + 1)}"),`;
    }).join("\n")
  }
];
`,
);
