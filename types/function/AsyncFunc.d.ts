/**
 * Function returning a promise
 *
 * - Compatible with `async`
 *
 * @param {any[]} A - Arguments expected
 * @param {any}   R - Return type
 */
export type AsyncFunc <A extends readonly any[] = any, R = any> =
		(...args: A) => Promise<R>
