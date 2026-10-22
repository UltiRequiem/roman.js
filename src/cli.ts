#!/usr/bin/env node
import { roman } from "./index.js";

const [input] = process.argv.slice(2);
const number = Number(input);

if (input === undefined || Number.isNaN(number)) {
  console.error("Usage: roman <number>\nConvert numbers to Roman numerals.");
  process.exit(1);
}

try {
  console.log(roman(number));
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
