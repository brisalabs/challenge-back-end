import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class addWalletKeysForeinkeyOnWallet1619713898742
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'wallet',
      new TableColumn({
        name: 'wallet_keys_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'wallet',
      new TableForeignKey({
        name: 'wallet_keys_wallet_relationship',
        columnNames: ['wallet_keys_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'wallet_keys',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'wallet',
      'wallet_keys_wallet_relationship',
    );

    await queryRunner.dropColumn('wallet', 'wallet_keys_id');
  }
}
