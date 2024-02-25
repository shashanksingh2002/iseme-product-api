const Joi = require('joi')

const isValidForList = (body) => {
    const schema = Joi.object({
       
    })
    return schema.validateAsync(body)
}

const isValidForCreate = (body) => {
    const schema = Joi.object({
       
    })
    return schema.validateAsync(body)
}

const isValidForUpsert = (body) => {
    const schema = Joi.object({
       
    })
    return schema.validateAsync(body)
}

const isValidForArchive = (body) => {
    const schema = Joi.object({
       
    })
    return schema.validateAsync(body)
}

module.exports = {
    isValidForArchive,
    isValidForList,
    isValidForUpsert,
    isValidForCreate,
}