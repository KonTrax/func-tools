export type Any        = Primitive | ObjectLike | void
export type ObjectLike = object    | Function   | Array<any>
export type Nil        = undefined | null
export type Primitive  = Literal   | Nil
export type Literal    = boolean   | string | number | bigint | symbol
export type BuiltIn    = Primitive | Date | RegExp | Error

export type TRU = 1
export type FAL = 0
export type BOL = TRU | FAL
