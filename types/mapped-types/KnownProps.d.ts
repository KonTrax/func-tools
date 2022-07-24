/**
 * Get known properties of `T`
 *
 * - Distributes
 *
 * @param T -
 */
export type KnownProps <T> =
	[T] extends [never] ? T :
	{ [K in keyof T as {} extends Record<K, unknown>
			? never
			: K
		] : T[K]
	}

/**
 * Get known string properties of `T`
 *
 * - Distributes
 *
 * @param T -
 */
export type KnownStrProps <T> =
	[T] extends [never] ? T :
	{ [K in keyof T as {} extends Record<K & string, unknown>
			? never
			: K
		] : T[K]
	}

/**
 * Get known number properties of `T`
 *
 * - Distributes
 *
 * @param T -
 */
export type KnownNumProps <T> =
	[T] extends [never] ? T :
	{ [K in keyof T as {} extends Record<K & number, unknown>
			? never
			: K
		] : T[K]
	}

/**
 * Get known symbol properties of `T`
 *
 * - Distributes
 *
 * @param T -
 */
export type KnownSymProps <T> =
	[T] extends [never] ? T :
	{ [K in keyof T as {} extends Record<K & symbol, unknown>
			? never
			: K
		] : T[K]
	}
