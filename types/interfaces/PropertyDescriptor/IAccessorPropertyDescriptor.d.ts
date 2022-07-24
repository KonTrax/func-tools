export interface IAccessorPropertyDescriptor <T = any>
{
	/**
	 * Default: undefined
	 */
	get ?() :T

	/**
	 * Default: undefined
	 */
	set ?(value :T) :void

	/**
	 * Default: false
	 */
	configurable ?:boolean

	/**
	 * Default: false
	 */
	enumerable   ?:boolean
}
