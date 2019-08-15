const express = require("express");
// app seria el '/' de la app el root
const app = express();
// morgan => logs en consola de los requests
const morgan = require('morgan');
// para podoer manejar el body de la request y si tambien mandan json
const bodyParser = require('body-parser');
// moongose
const moongose = require('mongoose');

moongose.connect('mongodb+srv://panchopure:' + "conectar+1" + '@gastos-kjjmi.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser : true
}); //process.env.MONGO_ATLAS_PW

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extend:false,}))
app.use(bodyParser.json())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method == 'OPTIONS'){
        req.header('Acces-Control-Allow-Methods', 'PUT, PATCH, POST, DELETE, GET');
        return res.status(200).json({});
    }
    next();
})

const gastosRoutes = require("./api/routes/gastos");
const monedaRoutes = require("./api/routes/moneda");
const responsableRoutes = require("./api/routes/responsable");

app.use("/gastos", gastosRoutes);
app.use("/moneda", monedaRoutes);
app.use("/responsable", responsableRoutes);
// cuando se encuentra una url de estas se corta la ejecucion
// por ende si se llega hasta aca es que no pusieron una url correcta

app.use((req,res,next) => {
    const error = new Error('File Not found');
    error.status=404;
    next(error);
})

app.use((error, req, res, next)=> {
    res.status(error.status || 500)
        .json({ message : error.message })
})


module.exports = app;