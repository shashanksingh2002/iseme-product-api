require('./envloader')()

const express = require('express')
const app = express()
const cors = require('cors')
const baseRouter = require('./router.js')
const morgan = require('morgan')
const knex = require('./knex.js')
const compression = require('compression')
const helmet = require('helmet')

// Share knex instance with objection models
const { Model } = require('objection')

Model.knex(knex)

/* Middlewares */
app.use(compression())
app.use(helmet())
app.use(express.json())
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.send({ message: 'Invalid JSON found' })
    }
    next()
})
// Log all api requests
app.use(
    morgan(
        'REQUEST [:date[clf]] ":method :url HTTP/:http-version" :status :user-agent',
        {
            immediate: true,
            skip: function (req) { return (req.path === '/api/') },
        },
    ),
)
app.use(
    express.urlencoded({
        extended: true,
        limit: '2mb',
        parameterLimit: 1000000,
    }),
)

app.use(cors())

app.use('/api/', baseRouter)

app.get('/', (req, res) => {
    return res.send('Works fine')
})

module.exports = app