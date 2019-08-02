
const moongose = require('mongoose');

const responsableSchema = moongose.Schema({
    _id : moongose.Schema.Types.ObjectId,
    nombre : String,
    apellido : String,
    email : String,
});

module.exports = moongose.model('Responsable', responsableSchema)