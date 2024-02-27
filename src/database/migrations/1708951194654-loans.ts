import { MigrationInterface, QueryRunner, Table, TableUnique } from "typeorm";

export class Loans1708951194654 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "loans",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "book_id",
                        type: "int",
                    },
                    {
                        name: "user_id",
                        type: "int"
                    },
                    {
                        name: "loan_date",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "due_date",
                        type: "timestamp"
                    },
                    {
                        name: "retun_date",
                        type: "timestamp"
                    }
                ],
                foreignKeys: [
                    {
                        columnNames: ["user_id"],
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE"
                    },

                    {
                        columnNames: ["book_id"],
                        referencedTableName: "books",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE"
                    }],
                uniques: [
                    new TableUnique({
                        name: "user_book_unique",
                        columnNames: ["user_id", "book_id"],
                    })],
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("loans");

    }

}
