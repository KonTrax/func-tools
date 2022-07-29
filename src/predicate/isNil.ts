export function isNil (x :unknown) :x is undefined | null {
	return typeof x === 'undefined' || x === null
}
