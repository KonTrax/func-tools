/* export */ type     Compact <T> = { [K in keyof T]: T[K] }
/* export */ type SafeCompact <T> =
		T extends Function           ? T :
		T extends readonly unknown[] ? T :
		Compact<T>

//==============================================================================

/**
 * Strict type equality comparison
 *
 * Wraps `A` & `B` in [] for comparison
 *
 * Useful for writing tests for types
 *
 * **Features**:
 * - `never`   only equals `never`
 * - `any`     only equals `any`
 * - `unknown` only equals `unknown`
 * - `{}`      only equals `{}`
 */
export type StrictEquals <A, B, THEN = A, ELSE = never> =
(
	(<C> () => C extends A ? 1 : 0) extends
	(<C> () => C extends B ? 1 : 0)
		? [A, B] extends [B, A] ? THEN : ELSE :

	[unknown] extends [A | B]
		? ELSE :

	(<C> () => C extends SafeCompact<A> ? 1 : 0) extends
	(<C> () => C extends SafeCompact<B> ? 1 : 0)
		// ? THEN
		? [A, B] extends [B, A] ? THEN : ELSE
		: ELSE
)
