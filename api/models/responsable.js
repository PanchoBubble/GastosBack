
const moongose = require('mongoose');

const responsableSchema = moongose.Schema({
    _id : moongose.Schema.Types.ObjectId,
    fistName : String,
    lastName : String,
    
});

module.exports = moongose.model('Responsable', responsableSchema)