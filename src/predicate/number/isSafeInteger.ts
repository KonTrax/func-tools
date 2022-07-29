export function isSafeInteger (x :unknown) :x is number
export function isSafeInteger (x :unknown) :boolean {
	return Number.isSafeInteger(x)
}
