import type { Obj } from '../core/Obj'

/**
 * Make properties `K` in `T` readonly. Inverse of `WritableByKey<T>`
 *
 * - Distributes
 *
 * @see {Readonly}
 *
 * @param T -
 * @param K -
 */
export type ReadonlyByKey <T, K extends keyof T = keyof T> = Obj<
	| { +readonly [P in keyof T as P extends K ? P : never] :T[P] }
	& {           [P in keyof T as P extends K ? never : P] :T[P] }
>
