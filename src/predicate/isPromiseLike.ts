/**
 * Checks for a promise-like value.
 */
export function isPromiseLike (x :unknown) :x is PromiseLike<any> {
	return (x != null && typeof (x as PromiseLike<any>).then === 'function')
}
