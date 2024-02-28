import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Author } from "./Author"
import { FavouriteBook } from "./FavouriteBook"
import { Loan } from "./Loan"

@Entity('books')
export class Book extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number
    @Column({ name: 'title' })
    title!: string
    @Column({ name: 'genre' })
    genre!: string
    @ManyToOne(() => Author, (author) => author.books)
    @JoinColumn({ name: "author_id" })
    author!: Author
    @OneToMany(() => FavouriteBook, (favourite_books) => favourite_books.books)
    favourite_books!: FavouriteBook[]
    @OneToMany(() => Loan, (loans) => loans.books)  // PORQUE AQUI SINGULAR??
    loans!: Loan[]
}