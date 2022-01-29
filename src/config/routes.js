const express = require('express')

module.exports = function (server) {

    /*
     * Rotas abertas
     */
    const openApi = express.Router()
    server.use('/', openApi)

    const Credit = require('../api/credit/creditService')
    Credit.register(openApi, '/receitas')

    const Debt = require('../api/debt/debtService')
    Debt.register(openApi, '/despesas')

}