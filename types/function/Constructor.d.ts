/**
 * Constructor (non-abstract constructor type)
 *
 * @see {AbstractConstructor}
 */
export type Constructor <T, A extends readonly any[] = any> = (
		new (...args :A) => T
)

/**
 * AbstractConstructor (abstract constructor type)
 *
 * - Non-abstract constructor types are assignable to abstract constructor
 *   types if they would otherwise be assignable.
 *
 * - Abstract constructor types are not assignable to non-abstract constructor types.
 *
 * - Values with types containing abstract constructor types cannot be
 *   instantiated via new (this previously only applied to abstract classes)
 *
 * Ref: [https://github.com/microsoft/TypeScript/pull/36392]
 */
export type AbstractConstructor <T, A extends readonly any[] = any> = (
		abstract new (...args :A) => T
)
