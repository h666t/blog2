import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class CreateBlog1648297883395 implements MigrationInterface {


    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(new Table({
            name: 'blog',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true
                },
                {
                    name: 'title',
                    type: 'varchar',
                    isNullable: true,
                    default: null,
                },
                {
                    name: 'content',
                    type: 'text',
                    isNullable: true,
                    default: null
                },
                {
                    name: 'author_id',
                    type: 'int',
                },
                {
                    name: 'create_at',
                    type: 'timestamp',
                    default: 'now()'
                },
                {
                    name: 'update_at',
                    type: 'timestamp',
                    default: 'now()'
                },
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('blogs');
    }


}
