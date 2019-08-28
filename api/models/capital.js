
const moongose = require('mongoose');
const Schema = moongose.Schema;

const capitalSchema = moongose.Schema({
    _id : moongose.Schema.Types.ObjectId,
    monto : Number,
    moneda : {type: Schema.Types.ObjectId, ref: 'Moneda'},
    responsable : {type: Schema.Types.ObjectId, ref: 'Responsable'},
});

module.exports = moongose.model("Capital", capitalSchema);