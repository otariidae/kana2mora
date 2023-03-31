# kana2mora

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/otariidae/kana2mora/deno.yml)
![npm](https://img.shields.io/npm/v/kana2mora)

Divide a string of Japanese Kana into mora

## Installation

```
$ npm i kana2mora
```

## Usage

You can use ECMAScript modules.

```ts
import { katakana2mora } import "kana2mora"

katakana2mora("チョコレート") // ["チョ", "コ", "レ", "ー", "ト"]
```

You can also use CommonJS modules.

```ts
const { katakana2mora } = require("kana2mora")

katakana2mora("チョコレート") // ["チョ", "コ", "レ", "ー", "ト"]
```

## License

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png "CC0")](http://creativecommons.org/publicdomain/zero/1.0/)
