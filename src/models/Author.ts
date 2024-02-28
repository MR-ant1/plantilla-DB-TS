import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Book } from "./Book"


@Entity('authors')
export class Author extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number
    @Column({ name: 'name' })
    name!: string
    @Column({ name: 'nacionality' })
    nacionality!: string
    @OneToMany(() => Book, (books) => books.author)
    books!: Book[]
}
