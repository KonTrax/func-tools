export interface List <T = any, L extends number = number> {
	[index :number] :T
	length          :L
}
