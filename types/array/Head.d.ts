export type Head <T extends ArrayLike<any>> =
		T['length'] extends 0 ? never : T[0]
