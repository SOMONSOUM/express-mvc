import * as Knex from 'knex';
import { references, addDefaultColumns } from '@Databases/helpers';
import { tableNames } from '@Databases/helpers/tableNames';

export async function up(knex: Knex): Promise<any> {
  if (!(await knex.schema.hasTable(tableNames.roles))) {
    return await knex.schema.createTable(tableNames.roles, (table) => {
      table.increments('id').primary();
      table.string('role_name', 225).notNullable();
      references(table, 'user');
      addDefaultColumns(table);
    });
  }
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable(tableNames.roles);
}
