import type { Obj } from '../core/Obj'

/**
 * Make properties `K` in `T` optional. Inverse of `RequiredByKey<T>`
 *
 * - Distributes
 *
 * @see {Partial}
 *
 * @param T -
 * @param K -
 */
export type OptionalByKey <T, K extends keyof T = keyof T> = Obj<
	| { [P in keyof T as P extends K ? P : never] +?:T[P] }
	& { [P in keyof T as P extends K ? never : P]   :T[P] }
>
