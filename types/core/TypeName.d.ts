/**
 * Javascript type string
 */
export type TypeName = TypeNameOf<any>

/**
 * Get JS type string of type `T`
 *
 * __NOTE__:
 *   Due to `null` being considered as an object in JS
 *   `null` will return `'object'`
 */
export type TypeNameOf <T> =
		// Primitive
			| T extends undefined ? 'undefined'
			: T extends string    ? 'string'
			: T extends number    ? 'number'
			: T extends bigint    ? 'bigint'
			: T extends boolean   ? 'boolean'
			: T extends symbol    ? 'symbol'
		// Non-Primitive
			: T extends Function  ? 'function'
			: T extends null      ? 'object'
			: T extends object    ? 'object'
			: never

/**
 * Get JS type from JS type string `T`
 *
 * __NOTE__:
 *   Due to `null` being considered as an object in JS
 *   `'object'` will return `object | null`
 */
export type TypeNameType <T extends TypeName> =
		// Primitive
			| T extends 'undefined' ? undefined
			: T extends 'string'    ? string
			: T extends 'number'    ? number
			: T extends 'bigint'    ? bigint
			: T extends 'boolean'   ? boolean
			: T extends 'symbol'    ? symbol
		// Non-Primitive
			: T extends 'function'  ? Function
			: T extends 'object'    ? object | null
			: never

// export interface TypeNameMap <T extends TypeName> {
// 	// Primitive
// 		'undefined' :undefined
// 		'string'    :string
// 		'number'    :number
// 		'bigint'    :bigint
// 		'boolean'   :boolean
// 		'symbol'    :symbol
// 	// Non-Primitive
// 		'function'  :Function
// 		'object'    :object | null
// }
