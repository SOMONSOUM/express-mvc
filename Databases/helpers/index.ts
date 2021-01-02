export function references(table: any, tableName: string) {
  return table
    .integer(`${tableName}_id`)
    .unsigned()
    .references('id')
    .inTable(tableName)
    .onDelete('cascade');
}

export function addDefaultColumns(table: any) {
  table.timestamps(true, true);
  table.datetime('deleted_at');
}
