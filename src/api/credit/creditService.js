const Credit = require('./credit')
const errorHandler = require('../common/errorHandler')

Credit.methods(['get', 'post', 'put', 'delete'])
Credit.updateOptions({new: true, runValidators: true})
Credit.after('post', errorHandler).after('put', errorHandler)


module.exports = Credit