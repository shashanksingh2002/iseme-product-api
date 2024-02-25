const { addAuditTrails } = require('../helpers/migrationAudit.js')
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
    await knex.schema.createTable('log', async (table) => {
        table.uuid('id').notNullable().index().primary()
        table.string('action').notNullable().index()
        table.string('table_name').notNullable().index()
        table.jsonb('metadata').notNullable().index()
        table.unique(['id', 'action', 'table_name'])
        addAuditTrails(table)
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
    await knex.schema.dropTable('log')
};
