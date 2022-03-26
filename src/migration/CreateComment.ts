import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class CreateComment1648297897860 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'comment',
            columns: [
                {name: 'id', isPrimary: true, type: 'int', isGenerated: true},
                {name: 'user_id', type: 'int'},
                {name: 'blog_id', type: 'int'},
                {name: 'content', type: 'text'},
                {name: 'create_at',type: 'timestamptz',default: 'now()'},
                {name: 'update_at',type: 'timestamptz',default: 'now()'},
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('comments');
    }

}
