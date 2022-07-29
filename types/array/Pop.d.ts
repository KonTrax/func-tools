export type Pop <T extends readonly any[]> =
		T extends (readonly [...infer R, any] | readonly [...infer R, any?])
			? R
			: T
