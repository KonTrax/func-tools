export function isIterator     (v :unknown) :v is Iterator<any>
export function isIterator <T> (v :unknown) :v is Iterator<T>
export function isIterator     (v :unknown) :v is Iterator<any> {
	return (v != null)
			&& (typeof (v as Iterator<unknown>)       === 'object')
			&& (typeof (v as Iterator<unknown>).next  === 'function')
}
