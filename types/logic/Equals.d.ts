/**
 * Equals
 *
 * @param A -
 * @param B -
 */
export type Equals <A, B, THEN = A, ELSE = never> =
		(<T> () => T extends A ? 1 : 2) extends
		(<T> () => T extends B ? 1 : 2) ? THEN : ELSE
