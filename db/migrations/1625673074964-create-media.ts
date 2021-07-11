import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createMedia1625673074964 implements MigrationInterface {
  private table = new Table({
    name: 'media',
    columns: [
      {
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'path',
        type: 'varchar',
        length: '255',
        isUnique: true,
        isNullable: false,
      },
      {
        name: 'name',
        type: 'varchar',
        length: '255',
        isUnique: false,
        isNullable: false,
      },
      {
        name: 'subtype',
        type: 'varchar',
        length: '255',
        isUnique: false,
        isNullable: false,
      },
      {
        name: 'type',
        type: 'varchar',
        length: '255',
        isUnique: true,
        isNullable: false,
      },
    ],
  });
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table);
  }
}
