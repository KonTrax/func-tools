export function assert (x :unknown, message ?:string) :asserts x {
	return x as never
}
