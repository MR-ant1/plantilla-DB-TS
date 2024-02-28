import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"
import { Book } from "./Book"

@Entity('favourite_books')
export class FavouriteBook extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number
    @ManyToOne(() => User, (users) => users.favourite_books)
    @JoinColumn({ name: "user_id" })
    users!: User
    @ManyToOne(() => Book, (books) => books.favourite_books)
    @JoinColumn({ name: "favourite_book_id" })
    books!: Book
}
