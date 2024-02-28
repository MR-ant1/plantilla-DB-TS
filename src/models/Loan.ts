import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"
import { Book } from "./Book"

@Entity('loans')
export class Loan extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    loan_date!: string

    @Column()
    due_date!: string

    @Column()
    return_date!: string

    @ManyToOne(() => User, (users) => users.loans)
    @JoinColumn({ name: 'user_id' })
    users!: User
    
    @ManyToOne(() => Book, (books) => books.loans)
    @JoinColumn({ name: 'book_id' })
    books!: Book
}
