export function isConcatSpreadable (x :any) :boolean
{
	if (x == null
		|| typeof x        === 'function'
		|| typeof x.length !== 'number'
	) return false

	const val = x[Symbol.isConcatSpreadable]
	return typeof val === 'boolean' ? val : Array.isArray(x)
}
