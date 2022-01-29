const Debt = require('./debt')
const errorHandler = require('../common/errorHandler')

const createKey = (req, res, next) => {
    descricao = req.body.descricao
    descricao = descricao.toLowerCase().replaceAll(' ','').normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    mes = req.body.data.split('/')
    req.body.key = descricao + mes[1]
    next()
}

Debt.methods(['get', 'post', 'put', 'delete'])
Debt.updateOptions({new: true, runValidators: true})
Debt.before('post',createKey).after('post', errorHandler).after('put', errorHandler)

module.exports = Debt