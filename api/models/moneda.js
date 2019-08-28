const moongose = require('mongoose');

const monedaSchema = moongose.Schema({
    _id : moongose.Schema.Types.ObjectId,
    nombre : String,
    codigo : String,
});

module.exports = moongose.model('Moneda', monedaSchema);