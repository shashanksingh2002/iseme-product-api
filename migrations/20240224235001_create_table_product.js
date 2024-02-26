const { addAuditTrails } = require('../helpers/migrationAudit.js')
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
    await knex.schema.createTable('product', async (table) => {
        table.uuid('id').notNullable().index().primary()
        table.string('slug').notNullable().index()
        table.string('category_slug').notNullable().index()
        table.string('name').notNullable().index()
        table.jsonb('metadata').notNullable().index()
        table.unique(['slug', 'category_slug', 'name'])
        addAuditTrails(table)
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
    await knex.schema.dropTable('product')
};
