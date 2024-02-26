const { v4: uuidv4 } = require('uuid')
const BaseModel = require('./basemodel')

class Product extends BaseModel {
    static get tableName () {
        return 'product'
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
            required: ['slug', 'metadata'],
            properties: {
                slug: { type: 'string' },
                category_slug: { type: 'string' },
                name: { type: 'string' },
                metadata: { type: 'object' },
                archived_at: { type: 'string'},
            },
        }
    }

    static create (product) {
        return Product.query().insert(product).returning('*')
    }
}

module.exports = Category