/**
 * Class
 */
export interface Class <T, A extends readonly any[] = any> {
	new (...args :A) :T
	prototype        :T
}

/**
 * AbstractClass
 */
export type AbstractClass <T, A extends readonly any[] = any> =
		& (abstract new (...args :A) => T)
		& { prototype :T }
