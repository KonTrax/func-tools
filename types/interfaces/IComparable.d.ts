import type { ComparisonVector } from '../constants/ComparisonVector'

export type Comparable = string | number | boolean | IComparable<any>

export interface IComparable <T> {
	compareTo (other :T) :number
}

export interface IComparableStrict <T, R extends ComparisonVector = ComparisonVector> {
	compareTo (other :T) :R
}
