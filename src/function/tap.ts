export function tap <T> (effect :(x :T) => void)
{
	return (x :T) :T => (effect(x), x)
}
