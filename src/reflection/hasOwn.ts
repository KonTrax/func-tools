const _proto_hasOwn = Object.prototype.hasOwnProperty

//==============================================================================

export const hasOwn :HasOwnFunction =
		(typeof (Object as any).hasOwn === 'function')
			? (Object as any).hasOwn
			: _create_alternative()

//==============================================================================

function _create_alternative () :HasOwnFunction
{
	function hasOwn (target :unknown, key :PropertyKey) :boolean {
		return _proto_hasOwn.call(target as any, key)
	}
	return hasOwn as HasOwnFunction
}

//==============================================================================

interface HasOwnFunction
{

	/**
	 * Determines whether an object has a property with the specified name.
	 *
	 * @param target
	 * @param key    Property name
	 */
	<T, K extends PropertyKey> (target :T, key :K | keyof T) :key is keyof typeof target

	/**
	 * Determines whether an object has a property with the specified name.
	 *
	 * @param target
	 * @param key    Property name
	 */
	<K extends PropertyKey> (target :unknown, key :K) :target is { [P in K] :unknown }

	/**
	 * Determines whether an object has a property with the specified name.
	 *
	 * @param target
	 * @param key    Property name
	 */
	(target :any, key :PropertyKey) :boolean

}
