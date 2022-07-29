import type { FAL, TRU } from '../core/basic'
import type { StrictEquals } from './StrictEquals'

export type IsStrictEqual <A, B> = StrictEquals<A, B, TRU, FAL>
