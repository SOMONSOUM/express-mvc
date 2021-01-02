import { Model } from 'objection';
import { knex } from '@Databases/setting';

Model.knex(knex);

export class User extends Model {
  static get tableName() {
    return 'users';
  }
}
