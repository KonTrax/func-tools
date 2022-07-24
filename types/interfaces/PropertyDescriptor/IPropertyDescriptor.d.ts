import type { IAccessorPropertyDescriptor } from './IAccessorPropertyDescriptor'
import type { IDataPropertyDescriptor } from './IDataPropertyDescriptor'

export interface IPropertyDescriptor <T = any>
extends      IDataPropertyDescriptor <T>
,        IAccessorPropertyDescriptor <T> {}
