import { buildPackage } from "https://deno.land/x/ultirequiem@0.0.17/node.ts";

buildPackage(
  {
    repoName: "roman.js",
    name: "@ultirequiem/roman",
    description: "Convert numbers to Roman numerals",
    homepage: "https://ulti.js.org/roman.js",
    keywords: ["roman", "number"],
    license: "MIT",
    version: "1.1.0",
  },
);
