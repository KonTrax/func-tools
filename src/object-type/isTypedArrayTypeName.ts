export function isTypedArrayTypeName (name :string) :boolean {
	if (typeof name === 'string')
	switch (name) {
		case 'Int8Array':     case 'Uint8Array': case 'Uint8ClampedArray':
		case 'Int16Array':    case 'Uint16Array':
		case 'Int32Array':    case 'Uint32Array':
		case 'Float32Array':  case 'Float64Array':
		case 'BigInt64Array': case 'BigUint64Array':
			return true
	} return false
}
