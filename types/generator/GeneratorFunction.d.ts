import type { Yield } from './Yield'

/**
 * Function compatible with the `yield` statement
 *
 * - Compatible with `yield`
 *
 * @param {any[]} A - Arguments expected
 * @param {any}   R - Return/yield type
 */
export type GeneratorFunc <A extends readonly any[] = any, R = any> =
		(...args: A) => Yield<R>
