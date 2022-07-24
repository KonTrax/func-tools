export function isPropertyKey (x :unknown) :x is PropertyKey {
	if (x != null)
	switch (typeof x) {
		case 'string':
		case 'number':
		case 'symbol':
			return true
	} return false
}

export function isPropertyKeyStrict (x :unknown) :x is PropertyKey {
	if (x != null)
	switch (typeof x) {
		case 'string': return (x.length !== 0)
		case 'number': return (x >= 0) && Number.isSafeInteger(x)
		case 'symbol': return true
	} return false
}
