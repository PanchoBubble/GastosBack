const express = require("express");
// app seria el '/' de la app el root
const app = express();
// morgan => logs en consola de los requests
const morgan = require('morgan');
app.use(morgan('dev'))

const gastosRoutes = require("./api/routes/gastos");
const personasRoutes = require("./api/routes/personas");

app.use("/gastos", gastosRoutes);
app.use("/personas", personasRoutes);
// cuando se encuentra una url de estas se corta la ejecucion
// por ende si se llega hasta aca es que no pusieron una url correcta

app.use((req,res,next) => {
    const error = new Error('File Not found');
    error.status=404;
    next(error);
})

app.use((error, req, res, next)=> {
    res.status(error.status || 500);
    res.json({
        error: {
            message : error.message
        }
    })
})


module.exports = app;