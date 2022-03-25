import {MigrationInterface, QueryRunner, Table} from 'typeorm';

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
          type: 'varchar'
        },
        {
          name: 'content',
          type: 'text'
        }
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('blogs');
  }

}
