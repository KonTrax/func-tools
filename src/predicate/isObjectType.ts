import { objectType } from '../reflection/objectType'

//=== Signatures ===

export function isObjectType <T> (x :unknown, type :string) :x is T
export function isObjectType     (x :unknown, type :string) :boolean

//=== Implementation ===

export function isObjectType (x :unknown, type :string) :boolean {
	return objectType(x) === type
}
