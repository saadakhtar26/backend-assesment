/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('Tenant_Profile', (table) => {
        table.increments('tenant_id').unique();
        table.string('tenant_name').notNullable();
        table.json('address');
        table.string('city');
        table.string('state');
        table.string('country');
        table.string('zip_code');
        table.string('phone');
        table.string('web_url');
    })
    .createTable('User_Profile', (table) => {
        table.integer('user_id').unique();
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.string('department');
        table.string('designation');
        table.integer('tenant_id').references('tenant_id').inTable('Tenant_Profile');
        table.string('image_url');
        table.string('city');
        table.string('country');
        table.string('bio');
        table.json('social_links');
        table.integer('employee_id');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Tenant_Profile').dropTableIfExists('User_Profile');
};
