import type { Obj } from '../core/Obj'

/**
 * Make properties `K` in `T` required. Inverse of `OptionalByKey<T>`
 *
 * - Distributes
 *
 * @see {Required}
 *
 * @param T -
 * @param K -
 */
export type RequiredByKey <T, K extends keyof T = keyof T> = Obj<
	| { [P in keyof T as P extends K ? P : never] -?:T[P] }
	& { [P in keyof T as P extends K ? never : P]   :T[P] }
>
