import { MigrationInterface, QueryRunner } from "typeorm"
import {TableIndex} from 'typeorm/schema-builder/table/TableIndex';

export class CreateUniqueUsernameForBlogSystemUser1648698484886 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createIndex('blog_system_user',new TableIndex({
            name: 'username_index',
            columnNames: ['username'],
            isUnique: true
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex('blog_system_user', 'username_index')
    }

}
