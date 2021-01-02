import * as Knex from 'knex';

const knexfile = require('./../knexfile');
export const knex: Knex = require('knex')(knexfile.development);