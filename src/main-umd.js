'use strict'

import parse from './parser'

/**
* Use this function to parse javascript template strings :
* let obj = TOML `foo = 12`
*/
function TOML() {
	let result = ''
	for (let arg of arguments)
		result += typeof arg == 'string'? arg : arg[0]
	return parse(result)
}

TOML.parse = parse

export default TOML
