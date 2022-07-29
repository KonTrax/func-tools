const _toStr = Object.prototype.toString

//=== Signatures ===

export function objectType     (x :unknown) :string

//=== Implementation ===

export function objectType     (x :unknown) :string {
	return _toStr.call(x).slice(8, -1)
}
