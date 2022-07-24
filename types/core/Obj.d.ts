/**
 * Get simplified type of `T`
 *
 * - Distributes
 *
 * @param T - any
 */
export type Obj <T> =
		// T extends Function ? T :
		// T extends readonly unknown[] ? T :
		| ({ [K in keyof T]: T[K] })
