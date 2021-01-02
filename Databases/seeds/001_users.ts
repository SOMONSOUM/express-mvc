import * as Knex from 'knex';
import hash from 'password-hash';

export async function seed(knex: Knex): Promise<any> {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'Sok Dara',
          email: 'sokdara@gmail.com',
          phone_number: '099965943',
          password: hash.generate('123123'),
        },
        {
          username: 'Yan Samreach',
          email: 'samreachyan@gmail.com',
          phone_number: '099965944',
          password: hash.generate('123123'),
        },
      ]);
    });
}
