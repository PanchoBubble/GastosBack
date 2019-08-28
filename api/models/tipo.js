const moongose = require('mongoose');

const tipoSchema = moongose.Schema({
    _id : moongose.Schema.Types.ObjectId,
    nombre : String,
    customAttr : String,
});

module.exports = moongose.model('Tipo', tipoSchema);