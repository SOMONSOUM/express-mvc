import * as Knex from 'knex';
import { tableNames } from '@Databases/helpers/tableNames';

export async function up(knex: Knex): Promise<any> {
  if (!(await knex.schema.hasTable(tableNames.users))) {
    return await knex.schema.createTable(tableNames.users, (table) => {
      table.increments('id').primary();
      table.string('username', 225).notNullable();
      table.string('email', 254).unique().notNullable();
      table.string('password', 225).notNullable();
      table.string('phone_number', 22).unique().notNullable();
      table
        .string('avatar')
        .defaultTo(
          'https://www.shareicon.net/data/512x512/2015/09/18/103160_man_512x512.png'
        );
      table.timestamps(true, true);
    });
  }
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable(tableNames.users);
}
