import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Role } from "./Role"
import { FavouriteBook } from "./FavouriteBook"
import { Loan } from "./Loan"

@Entity('users')
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number
    @Column({ name: 'name' })
    name!: string
    @Column({ name: 'password' })
    password!: string
    @Column({ name: 'email' })
    email!: string
    @Column({ name: 'updated_at' })
    createdAt!: Date
    @Column({ name: 'updated_at' })
    updatedAt!: Date
    @Column({ name: 'is_active' })
    isActive!: boolean
    @ManyToOne(() => Role, (role) => role.users)
    @JoinColumn({ name: "role_id" })
    role!: Role;
    @OneToMany(() => FavouriteBook, (favourite_books) => favourite_books.users)
    favourite_books!: FavouriteBook[]
    @OneToMany(() => Loan, (loans) => loans.users)
    loans!: Loan[]
}
