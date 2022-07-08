import { Command } from "https://deno.land/x/cliffy@v0.24.2/command/mod.ts";
import { roman } from "./mod.ts";

const romanCli = new Command()
  .name("roman")
  .version("0.1.0")
  .description("Convert numbers to Roman numerals.")
  .arguments("<input:number>");

const {
  args: [inputNumber],
} = await romanCli.parse();

console.log(roman(inputNumber));
