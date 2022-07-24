import type { Obj } from '../core/Obj'

/**
 * Make properties `K` in `T` writable. Inverse of `ReadonlyByKey<T>`
 *
 * - Distributes
 *
 * @param T -
 * @param K -
 */
export type WritableByKey <T, K extends keyof T = keyof T> = Obj<
	| { -readonly [P in keyof T as P extends K ? P : never] :T[P] }
	& {           [P in keyof T as P extends K ? never : P] :T[P] }
>
