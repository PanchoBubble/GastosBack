const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const Ingreso = require('../models/ingreso');

router.get("/", (req, res, next) =>{
    Ingreso.find()
            .exec()
            .then(docs => {
                res.status(200).json({data : docs})
            })
            .catch(err => res.status(500).json({error:err}));
})

router.post("/", (req, res, next) =>{
    const nuevoGasto = new Ingreso({
        _id : new mongoose.Types.ObjectId(),
        monto : req.body.monto,
        fecha : req.body.fecha,
        responsable : req.body.responsable,
        moneda : req.body.moneda,
        detalle : req.body.detalle,
    });
    nuevoGasto.save()
        .then(_ingreso => res.status(201).json(_ingreso))      
        .catch(err =>   res.status(500).json({error:err}))
})

router.get("/:idIngreso", (req, res, next) =>{
    const idIngreso = req.params.idGastos;
    Ingreso.findById(idIngreso)
        .exec()
        .then(doc => {
            if (doc){
                res.status(200).json(doc)
            } else {
                res.status(404).json({error : "Not Found"})
            }
        })
        .catch(err => {
            res.status(500).json({error:err})
        });
})

router.patch("/:idIngreso", (req, res, next) =>{
    const idIngreso = req.params.idIngreso;
    const updateProps = {};
    for (const prop of req.body){
        updateProps[prop.propName] = prop.value
    }
    Ingreso.updateOne({ _id: idIngreso},{$set:updateProps})
                    .exec()
                    .then(response =>{
                        res.status(200).json(response)
                    })
                    .catch(err => {
                        res.status(500).json({error:err})
                    })
})

router.delete("/:idIngreso", (req, res, next) =>{
    const idIngreso = req.params.idIngreso;
    Ingreso.remove({ _id: idIngreso}).exec()
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(500).json({error:err})
        })
})


module.exports = router;

