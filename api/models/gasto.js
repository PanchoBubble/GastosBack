const moongose = require('mongoose');
const Schema = moongose.Schema;

const gastosSchema = moongose.Schema({
    _id : moongose.Schema.Types.ObjectId,
    costo : Number,
    fecha : Date,
    moneda : {type: Schema.Types.ObjectId, ref: 'Moneda'},
    responsable : {type: Schema.Types.ObjectId, ref: 'Responsable'},
});

module.exports = moongose.model("Gasto", gastosSchema);