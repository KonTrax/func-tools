export function always <T> (x :T) :() => T {
	return () => x
}
