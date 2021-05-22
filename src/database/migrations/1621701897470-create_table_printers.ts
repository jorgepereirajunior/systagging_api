import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTablePrinters1621701897470 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: 'printers',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isNullable: false,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment'
          },
          {
            name: 'manufacturer',
            type: 'varchar(20)',
            isNullable: false
          },
          {
            name: 'model',
            type: 'varchar(20)',
            isNullable: false
          }
        ]
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('printers')
    }

}
