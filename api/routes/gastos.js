const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const Gasto = require('../models/gasto');

router.get("/", (req, res, next) =>{
    res.status(200).json({
        message: "get request"
    })
})

router.post("/", (req, res, next) =>{
    const nuevoGasto = new Gasto({
        _id : new mongoose.Types.ObjectId(),
        costo : req.body.costo,
        fecha : req.body.fecha,
        responsable : req.body.responsable,
        moneda : req.body.moneda,
    });
    nuevoGasto.save()
        .then(r => console.log(r))      
        .catch(err => console.log(err));
    res.status(201).json({
        message: "Gasto Creado",
        gasto : nuevoGasto,
    })
})

router.get("/:idGasto", (req, res, next) =>{
    const idGasto = req.params.idGasto;
    res.status(200).json({
        message: "get request " + idGasto
    })
})

router.post("/idGasto", (req, res, next) =>{
    const idGasto = req.params.idGasto;
    res.status(200).json({
        message: "post request " + idGasto
    })
})


module.exports = router;

