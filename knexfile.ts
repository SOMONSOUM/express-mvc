import { config } from 'dotenv';
config();

module.exports = {
  development: {
    client: 'mysql2',
    connection: process.env.DATABASE,
    migrations: {
      extension: 'ts',
      tableName: 'knex_migrations',
      directory: `${__dirname}/Databases/migrations`,
    },
    seeds: {
      extension: 'ts',
      directory: `${__dirname}/Databases/seeds`,
    },
    useNullAsDefault: true,
  },
};
