const categoryService = require('../services/category.service')
const { listTransformer, createTransformer, upsertTransformer, archiveTransformer } = require('../transformers/category.transformer')
const { isValidForCreate, isValidForUpsert, isValidForList, isValidForArchive } = require('../validators/category.validator')

const list = async (req, res) => {
    try{
        const validatedData = await isValidForList(req.query)
        if(validatedData){
            const serviceResponse = categoryService.list(validatedData)
            return res.send(listTransformer.transform(serviceResponse))
        }
        else{
            return res.send(validatedData?.details[0]?.message)
        }
    } catch (err) {
        return res.send(err.message)
    }
}

const create = async (req, res) => {
    try{
        const validatedData = await isValidForCreate(req.body)
        if(validatedData){
            const serviceResponse = categoryService.create(validatedData)
            return res.send(createTransformer.transform(serviceResponse))
        }
        else{
            return res.send(validatedData?.details[0]?.message)
        }
    } catch (err) {
        return res.send(err.message)
    }
}

const upsert = async (req, res) => {
    try{
        const validatedData = await isValidForUpsert(req.body)
        if(validatedData){
            const serviceResponse = categoryService.upsert(validatedData)
            return res.send(upsertTransformer.transform(serviceResponse))
        }
        else{
            return res.send(validatedData?.details[0]?.message)
        }
    } catch (err) {
        return res.send(err.message)
    }
}

const archive = async (req, res) => {
    try{
        const validatedData = await isValidForArchive(req.body)
        if(validatedData){
            const serviceResponse = categoryService.archive(validatedData)
            return res.send(archiveTransformer.transform(serviceResponse))
        }
        else{
            return res.send(validatedData?.details[0]?.message)
        }
    } catch (err) {
        return res.send(err.message)
    }
}

module.exports = {
    list,
    upsert,
    create,
    archive,
}
