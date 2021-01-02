import { Model } from 'objection';
import { knex } from '@Databases/setting';

Model.knex(knex);

export class Role extends Model {
  static get tableName() {
    return 'roles';
  }
}
