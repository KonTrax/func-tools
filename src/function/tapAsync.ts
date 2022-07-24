export function tapAsync <T> (effect :(x :T) => Promise<void>)
{
	return async (x :T) :Promise<T> => (await effect(x), x)
}
