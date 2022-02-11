# Some brief notes about the changes in this fork

This module is fantastic! However I had some problems when using it with webpack (in the context of a sapper application).

These changes were motivated to have better output for browsers. The following problems were detected and corrected:

- the rollup output format for browsers was changed from `format: 'iife'` to the more generic `format: 'umd'` (to avoid problems when using it with webpack);
- the rollup output for browsers still had references to `require('fs')` (which would cause problems when using that output with webpack); this was corrected by having 2 specific entry points (one for each output): `src/main-node.js` and `src/main-umd.js`;
- the `dist/node/package.json` and `dist/node/README.md` files were moved to `dist`;
- the `browser` field was added `dist/package.json`, so that webpack (and similar tools) can choose the more appropriate output; the `main` field was updated accordingly;

Hopefully these changes will be merged in the original repository at https://github.com/Gin-Quin/fast-toml. Until then, the workaround is to install directly from github, as such:

`npm install paulovieira/fast-toml#umd`

and then use with webpack (or similar tools) using the directory where the actual package is located, that is:

```js
import TOML from 'fast-toml/dist';  // if using the original package it would be "import TOML from 'fast-toml'"

let obj = TOML.parse(inputInTOMLFormat);
```

or 

```js
let TOML = require('fast-toml/dist');  // is usinf the original package it would be "let TOML = require('fast-toml')"

let obj = TOML.parse(inputInTOMLFormat);
```

The contents below are the original `README.md`.

# Fast TOML Parser for Node.js

`fast-toml` is the fastest and lightest Javascript parser for TOML files (see [benchmarks](https://www.npmjs.com/package/fast-toml#benchmarks)).

TOML stands for **T**om's **O**bvious and **M**inimal **L**anguage and it is an awesome language for your configuration files, better than JSON and YAML on many aspects. [Learn here](https://github.com/toml-lang/toml) what is TOML and how to use it (it's definitely worth the ten minutes learning).

This part is dedicated to development. See [installation and usage](https://www.npmjs.com/package/fast-toml).


## Development
You need to install globally `rollup` (the bundler) and `rollup-plugin-terser` (the minifier) :

```
npm i -g rollup
npm i -g rollup-plugin-terser
```

Then you need to make sure your global installations are requirable from the rollup.config.js. That means your NODE_PATH environment variable must be set to your global `node_modules` folder.

On my Ubuntu environment it is set to :

```shell
export NODE_PATH=~/.npm-global/lib/node_modules
```

Then run `rollup -c` to compile the bundle.

Or `rollup -c -w` to recompile live on every file change.


## Tests
First, make sure you installed the development dependencies by running : `npm install`.

Then to run the tests execute : `node test`.
