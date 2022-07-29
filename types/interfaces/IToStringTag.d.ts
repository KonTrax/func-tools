export interface IToStringTag <T extends string = string> {
	readonly [Symbol.toStringTag] :T
}
