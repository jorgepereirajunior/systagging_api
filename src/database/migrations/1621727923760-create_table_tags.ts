import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTableTags1621727923760 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: 'tags',
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
            name: 'type',
            type: 'varchar(20)',
            isNullable: false
          },
          {
            name: 'height',
            type: 'decimal',
            precision: 5,
            scale: 2,
            isNullable: false
          },
          {
            name: 'width',
            type: 'decimal',
            precision: 5,
            scale: 2,
            isNullable: false
          },
          {
            name: 'items',
            type: 'text'
          },
          {
            name: 'client_code',
            type: 'varchar(10)',
            isNullable: false
          }
        ],
        foreignKeys: [
          {
            name: 'TagToClient',
            columnNames: ['client_code'],
            referencedTableName: 'clients',
            referencedColumnNames: ['code'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          }
        ]
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('tags')
    }

}
