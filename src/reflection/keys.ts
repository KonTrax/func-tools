export function keys <T> (x :T)   :(keyof T & string)[]
export function keys     (x :any) :string[]
export function keys     (x :unknown) {
	return Object.keys(x as object)
}
