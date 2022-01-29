const restful = require('node-restful')
const mongoose = restful.mongoose

const creditSchema = new mongoose.Schema({
    descricao: { type: String, required: true },
    valor: { type: Number, min: 0, required: true },
    data: { type: Date, required: [true, 'Informe a data!'] }
})

module.exports = restful.model('Credit', creditSchema)