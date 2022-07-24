import type { ComparisonVector } from '../constants/ComparisonVector'

export interface IComparer <T> {
	equals (a :T, b :T) :number
}

export interface IComparerStrict <T, R extends ComparisonVector = ComparisonVector> {
	equals (a :T, b :T) :R
}
