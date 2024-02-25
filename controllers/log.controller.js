const logService = require('../services/log.service')
const { listTransformer } = require('../transformers/log.transformer')

const list = async (req, res) => {
    try{
        const serviceResponse = logService.list()
        return res.send(listTransformer.transform(serviceResponse))
    } catch (err) {
        return res.send(err.message)
    }
}

module.exports = {
    list,
}
