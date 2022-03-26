import {MigrationInterface, QueryRunner} from 'typeorm';
import {TableColumn} from 'typeorm/schema-builder/table/TableColumn';

export class addCreateAtAndUpdateAt1648289313726 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns('blogs', [
      new TableColumn({name: 'create_at', type: 'time', default: 'now()'}),
      new TableColumn({name: 'update_at', type: 'time', default: 'now()'}),
    ]);
    await queryRunner.addColumns('comments', [
      new TableColumn({name: 'create_at', type: 'time', default: 'now()'}),
      new TableColumn({name: 'update_at', type: 'time', default: 'now()'}),
    ]);
    await queryRunner.addColumns('users', [
      new TableColumn({name: 'create_at', type: 'time', default: 'now()'}),
      new TableColumn({name: 'update_at', type: 'time', default: 'now()'}),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumns('blogs', [
      new TableColumn({name: 'create_at', type: 'time', default: 'now()'}),
      new TableColumn({name: 'update_at', type: 'time', default: 'now()'}),
    ]);
    await queryRunner.dropColumns('comments', [
      new TableColumn({name: 'create_at', type: 'time', default: 'now()'}),
      new TableColumn({name: 'update_at', type: 'time', default: 'now()'}),
    ]);
    await queryRunner.dropColumns('users', [
      new TableColumn({name: 'create_at', type: 'time', default: 'now()'}),
      new TableColumn({name: 'update_at', type: 'time', default: 'now()'}),
    ]);
  }

}
