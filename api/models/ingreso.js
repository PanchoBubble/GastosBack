const moongose = require('mongoose');
const Schema = moongose.Schema;

const ingresoSchema = moongose.Schema({
    _id : moongose.Schema.Types.ObjectId,
    monto : Number,
    fecha : Date,
    detalle : String,
    moneda : {type: Schema.Types.ObjectId, ref: 'Moneda'},
    responsable : {type: Schema.Types.ObjectId, ref: 'Responsable'},
});

module.exports = moongose.model("Ingreso", ingresoSchema);