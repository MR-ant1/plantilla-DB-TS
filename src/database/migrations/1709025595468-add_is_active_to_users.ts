import { Column, MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddIsActiveToUsers1709025595468 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('users', 
        new TableColumn({
                name: "is_active",
                        type: "boolean",
                        default: true
                    },
                    ))}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("users", "is_active")
    }

    }
