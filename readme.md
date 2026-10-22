# Roman

Convert Numbers to Roman numerals.

[![npm](https://img.shields.io/npm/v/@ultirequiem/roman?logo=npm&color=cb3837)](https://www.npmjs.com/package/@ultirequiem/roman)
[![npm downloads](https://img.shields.io/npm/dm/@ultirequiem/roman?color=cb3837)](https://www.npmjs.com/package/@ultirequiem/roman)
[![CI](https://github.com/UltiRequiem/roman.js/actions/workflows/ci.yaml/badge.svg)](https://github.com/UltiRequiem/roman.js/actions/workflows/ci.yaml)
[![codecov](https://codecov.io/gh/UltiRequiem/roman.js/graph/badge.svg)](https://codecov.io/gh/UltiRequiem/roman.js)

## Install

```sh
npm install @ultirequiem/roman
```

## Usage

ESM only, types included: the same import works in Node.js, Bun and browsers.

```javascript
import { parseRoman, roman } from "@ultirequiem/roman";

roman(3); //=> "III"
parseRoman("III"); //=> 3

roman(47); //=> "XLVII"
parseRoman("XLVII"); //=> 47

roman(1984); //=> "MCMLXXXIV"
parseRoman("MCMLXXXIV"); //=> 1984
```

## Support

Open an Issue, I will check it as soon as possible 👀

If you want to hurry me up a bit
[send me a tweet](https://twitter.com/UltiRequiem) 😆

Don't forget to star the repo ⭐

## Authors

[Eliaz Bobadilla](https://ultirequiem.com) - Creator and Maintainer 💪

See also the full list of
[contributors](https://github.com/UltiRequiem/roman/contributors) who
participated in this project ✨

## Versioning

We use [Semantic Versioning](http://semver.org). For the versions available, see
the [tags](https://github.com/UltiRequiem/roman/tags) 🏷️

## Licence

Licensed under the MIT License 📄
