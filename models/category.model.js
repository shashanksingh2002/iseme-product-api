const { v4: uuidv4 } = require('uuid')
const BaseModel = require('./basemodel')

class Category extends BaseModel {
    static get tableName () {
        return 'category'
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
            required: ['slug', 'name', 'metadata'],
            properties: {
                slug: { type: 'string' },
                name: { type: 'string' },
                metadata: { type: 'object' },
                archived_at: { type: 'string'},
            },
        }
    }

    static create (category) {
        return Category.query().insert(category).returning('*')
    }
}

module.exports = Category