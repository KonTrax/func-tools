export function isUndefined (x :unknown) :x is undefined {
	return typeof x === 'undefined'
}
