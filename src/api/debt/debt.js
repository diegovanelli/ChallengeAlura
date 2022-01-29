const restful = require('node-restful')
const mongoose = restful.mongoose

const debtSchema = new mongoose.Schema({
    descricao: { type: String, required: true },
    valor: { type: Number, min: 0, required: [true, 'Informe o valor do débito!'] },
    data: { type: Date, required: [true, 'Informe a data!'] },
    key: {
        type: String,
        unique: [true, 'Registro já inserido nesse mês!'],
        index: true,
        required: true
    }
})

module.exports = restful.model('Debt', debtSchema)