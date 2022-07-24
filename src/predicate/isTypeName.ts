import type { TypeName } from '../../types/core/TypeName'

export function isTypeName (x :unknown) :x is TypeName {
	if (typeof x === 'string')
	switch (x) {
		case 'string': case 'number':
		case 'bigint': case 'boolean':
		case 'object': case 'function':
		case 'symbol': case 'undefined':
			return true
	} return false
}
