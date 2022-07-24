const _has_own = Object.prototype.hasOwnProperty

export function setEnumerable <T, K extends keyof T> (target :T,   key :K,           value ?:boolean) :T
export function setEnumerable                        (target :any, key :PropertyKey, value ?:boolean) :typeof target
export function setEnumerable                        (target :any, key :PropertyKey, value  :boolean = true)
{
	if (target && key && _has_own.call(target, key))
	{
		const descr = Object.getOwnPropertyDescriptor(target, key) || {}
		if (descr.enumerable !== value) {
			descr.enumerable = value
			Object.defineProperty(target, key, descr)
		}
	}
	return target
}
