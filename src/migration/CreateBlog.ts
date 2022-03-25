import {MigrationInterface, QueryRunner, Table, TableColumn} from 'typeorm';

export class CreateBlog1648204631095 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {

    await queryRunner.createTable(new Table({
      name: 'blogs',
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
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('blogs');
  }

}
