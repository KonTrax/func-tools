import type { Literal } from '../../types/core/basic'

export function isLiteral (x :unknown) :x is Literal {
	const type = typeof x
	return (type !== 'undefined'
			&&  type !== 'function'
			&&  type !== 'object' // includes null
	)
}
