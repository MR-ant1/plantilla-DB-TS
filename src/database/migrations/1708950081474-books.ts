import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Books1708950081474 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "books",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "title",
                        type: "varchar",
                        length: "255",
                    },
                    {
                        name: "genre",
                        type: "int",
                    },
                    {
                        name: "author_id",
                        type: "int",
                        isNullable: true,
                    }
                ],
                foreignKeys: [
                    {
                        columnNames: ["author_id"],
                        referencedTableName: "authors",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE"
                    }]
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("books");

    }

}
