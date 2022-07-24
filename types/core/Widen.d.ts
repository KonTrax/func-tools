/**
 * Widen type `T` to it's base type
 */
export type Widen <T> =
		// Primitive
			| T extends undefined ? undefined
			: T extends null      ? null
			: T extends string    ? string
			: T extends number    ? number
			: T extends bigint    ? bigint
			: T extends boolean   ? boolean
			: T extends symbol    ? symbol
		// Non-Primitive
			: T extends Function  ? Function
			: T extends object    ? object
			: never
