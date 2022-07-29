import type { TypedArray } from '../../types/array/TypedArray'
import { objectType } from '../reflection/objectType'
import { isTypedArrayTypeName } from '../object-type/isTypedArrayTypeName'

export function isTypedArray (x :unknown) :x is TypedArray
export function isTypedArray (x :unknown) :boolean {
	return (x != null && typeof x === 'object')
			&& isTypedArrayTypeName(objectType(x))
}
