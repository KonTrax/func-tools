export interface IDataPropertyDescriptor <T = any>
{
	/**
	 * Default: undefined
	 */
	value ?:T

	/**
	 * Default: false
	 */
	writable ?:boolean

	/**
	 * Default: false
	 */
	enumerable ?:boolean

	/**
	 * Default: false
	 */
	configurable ?:boolean
}
