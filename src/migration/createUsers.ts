import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class createUsers1648288059665 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'users',
      columns: [
        {name: 'id', isPrimary: true, type: 'int', isGenerated: true},
        {name: 'username', type: 'varchar'},
        {name: 'password_digest', type: 'varchar'}
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }

}
