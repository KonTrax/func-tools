export function isAsyncIterable     (v :unknown) :v is AsyncIterableIterator<any>
export function isAsyncIterable <T> (v :unknown) :v is AsyncIterableIterator<T>
export function isAsyncIterable     (v :unknown) :v is AsyncIterableIterator<any> {
	return (v != null)
			&& (typeof (v as AsyncIterableIterator<unknown>)[Symbol.asyncIterator] === 'function')
}
