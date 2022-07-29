/* Call Signatures */

export function isSafePositiveInteger (x :unknown) :x is number

/* Implementation */

export function isSafePositiveInteger (x :unknown) :boolean {
	return typeof x === 'number' && (x >= 0) && Number.isSafeInteger(x)
}
