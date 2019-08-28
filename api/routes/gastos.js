const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const Gasto = require('../models/gasto');

router.get("/", (req, res, next) =>{
    Gasto.find()
            .populate('responsable')
            .populate('moneda')
            // .populate('tipo')
            .exec()
            .then(docs => {
                res.status(200).json(docs)
            })
            .catch(err => res.status(500).json({error:err}));
})

router.post("/", (req, res, next) =>{
    const nuevoGasto = new Gasto({
        _id : new mongoose.Types.ObjectId(),
        costo : req.body.costo,
        fecha : req.body.fecha,
        responsable : req.body.responsable,
        moneda : req.body.moneda,
        detalle : req.body.detalle,
        tipo : req.body.tipo,
    });
    nuevoGasto.save()
        .then(_gasto => res.status(201).json(_gasto))      
        .catch(err =>   res.status(500).json({error:err}))
})

router.get("/:idGasto", (req, res, next) =>{
    const idGasto = req.params.idGastos;
    Gasto.findById(idGasto)
        .populate('responsable')
        .populate('moneda')
        .populate('tipo')
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

router.patch("/:idGasto", (req, res, next) =>{
    const idGasto = req.params.idGasto;
    const updateProps = {};
    for (const prop of req.body){
        updateProps[prop.propName] = prop.value
    }
    Gasto.updateOne({ _id: idGasto},{$set:updateProps})
                    .exec()
                    .then(response =>{
                        res.status(200).json(response)
                    })
                    .catch(err => {
                        res.status(500).json({error:err})
                    })
})

router.delete("/:idGasto", (req, res, next) =>{
    const idGasto = req.params.idGasto;
    Gasto.remove({ _id: idGasto}).exec()
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(500).json({error:err})
        })
})


module.exports = router;

