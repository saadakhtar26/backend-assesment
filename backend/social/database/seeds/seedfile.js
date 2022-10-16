/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex.raw('TRUNCATE TABLE "Tenant_Profile" CASCADE');
  await knex.raw('TRUNCATE TABLE "User_Profile" CASCADE');

  await knex('Tenant_Profile').insert([
    {tenant_id: 1, tenant_name: 'Saad'},
    {tenant_id: 2, tenant_name: 'Akhtar'},
  ]);

  return knex('User_Profile').insert([
    {user_id: 1, fist_name: 'Sid', last_name: 'Rajpoot', tenant_id: 1},
    {user_id: 2, fist_name: 'Ahmed', last_name: 'Bilal', tenant_id: 2},
  ]);
};
