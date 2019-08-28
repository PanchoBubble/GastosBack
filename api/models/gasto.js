const moongose = require('mongoose');
const Schema = moongose.Schema;

const gastosSchema = moongose.Schema({
    _id : moongose.Schema.Types.ObjectId,
    monto : Number,
    fecha : Date,
    detalle : String,
    pagado : Boolean,
    moneda : {type: Schema.Types.ObjectId, ref: 'Moneda'},
    responsable : {type: Schema.Types.ObjectId, ref: 'Responsable'},
    tipo : {type: Schema.Types.ObjectId, ref: 'Tipo'},
});

module.exports = moongose.model("Gasto", gastosSchema);