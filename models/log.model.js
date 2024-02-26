const { v4: uuidv4 } = require('uuid')
const BaseModel = require('./basemodel')

class Log extends BaseModel {
    static get tableName () {
        return 'Log'
    }

    static get idColumn () {
        return 'id'
    }

    async $beforeInsert (queryContext) {
        await super.$beforeInsert(queryContext)

        this.id = this.id ? this.id : uuidv4()
    }

    static get jsonSchema () {
        return {
            type: 'object',
            required: ['action', 'table_name', 'metadata'],
            properties: {
                action: { type: 'string' },
                table_name: { type: 'string' },
                metadata: { type: 'object' },
            },
        }
    }

    static create (log) {
        return Log.query().insert(log).returning('*')
    }
}

module.exports = Category