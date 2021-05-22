import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTableClients1621715279484 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: 'clients',
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
            name: 'codigo',
            type: 'varchar(10)',
            isNullable: false,
          },
          {
            name: 'name',
            type: 'varchar(100)',
            isNullable: false,
          },
          {
            name: 'flag',
            type: 'varchar(100)',
            isNullable: false,
          },
          {
            name: 'printer_id',
            type: 'integer',
            isNullable: false
          }
        ],
        foreignKeys: [
          {
            name: 'ClientToPrinter',
            columnNames: ['printer_id'],
            referencedTableName: 'printers',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE'
          }
        ]
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('clients')
    }

}
