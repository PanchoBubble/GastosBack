const moongose = require('mongoose');

const gastosSchema = moongose.Schema({
    _id : moongose.Schema.Types.ObjectId,
    responsable : {type: Schema.Types.ObjectId, ref: 'Responsable'},
    costo : Number,
    fecha : Date,
    moneda : {type: Schema.Types.ObjectId, ref: 'Moneda'},

});