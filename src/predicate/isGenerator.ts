import { isIterable } from './isIterable'

export function isGenerator     (v :unknown) :v is Generator<any>
export function isGenerator <T> (v :unknown) :v is Generator<T>
export function isGenerator     (v :unknown) :v is Generator<any> {
	return (v != null) && isIterable(v)
			&& (typeof (v as Generator<unknown>).next  === 'function')
			&& (typeof (v as Generator<unknown>).throw === 'function')
}
