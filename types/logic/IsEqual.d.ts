import type { FAL, TRU } from '../core/basic'
import type { Equals } from './Equals'

export type IsEqual <A, B> = Equals<A, B, TRU, FAL>
