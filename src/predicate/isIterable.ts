export function isIterable     (v :unknown) :v is Iterable<any>
export function isIterable <T> (v :unknown) :v is Iterable<T>
export function isIterable     (v :unknown) :v is Iterable<any> {
	return (v != null)
			&& (typeof (v as Iterable<unknown>)[Symbol.iterator] === 'function')
}
