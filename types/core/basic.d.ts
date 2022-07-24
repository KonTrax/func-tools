export type Any        = Primitive | ObjectLike | void
export type ObjectLike = object    | Function   | Array<any>
export type Nil        = undefined | null
export type Primitive  = Literal   | Nil
export type Literal    = boolean   | string | number | bigint | symbol
export type BuiltIn    = Primitive | Date | RegExp | Error
