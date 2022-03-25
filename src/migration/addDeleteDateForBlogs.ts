import {MigrationInterface, QueryRunner, TableColumn} from 'typeorm';

export class addDeleteDateForBlogs1648218390189 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        let table = await queryRunner.getTable('blogs') || ''
        // // console.log(table);
        await queryRunner.addColumn(table, new TableColumn({
            name: 'delete_date',
            type: 'timestamp',
            isNullable: true,
            default: null
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }
}
