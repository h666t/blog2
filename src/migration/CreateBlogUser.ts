import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class CreateUser1648297892959 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'blog_user',
            columns: [
                {name: 'id', isPrimary: true, type: 'int', isGenerated: true},
                {name: 'username', type: 'varchar'},
                {name: 'password_digest', type: 'varchar'},
                {name: 'create_at',type: 'timestamp',default: 'now()'},
                {name: 'update_at',type: 'timestamp',default: 'now()'},
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
