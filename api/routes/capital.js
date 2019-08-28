const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const Capital = require('../models/capital');

router.get("/", (req, res, next) =>{
    Capital.find()
            .exec()
            .then(docs => {
                res.status(200).json({data : docs})
            })
            .catch(err => res.status(500).json({error:err}));
})

router.post("/", (req, res, next) =>{
    const nuevoGasto = new Capital({
        _id : new mongoose.Types.ObjectId(),
        monto : req.body.monto,
        responsable : req.body.responsable,
        moneda : req.body.moneda,
    });
    nuevoGasto.save()
        .then(_capital => res.status(201).json(_capital))      
        .catch(err =>   res.status(500).json({error:err}))
})

router.get("/:idCapital", (req, res, next) =>{
    const idCapital = req.params.idGastos;
    Capital.findById(idCapital)
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

router.patch("/:idCapital", (req, res, next) =>{
    const idCapital = req.params.idCapital;
    const updateProps = {};
    for (const prop of req.body){
        updateProps[prop.propName] = prop.value
    }
    Capital.updateOne({ _id: idCapital},{$set:updateProps})
                    .exec()
                    .then(response =>{
                        res.status(200).json(response)
                    })
                    .catch(err => {
                        res.status(500).json({error:err})
                    })
})

router.delete("/:idCapital", (req, res, next) =>{
    const idCapital = req.params.idCapital;
    Capital.remove({ _id: idCapital}).exec()
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(500).json({error:err})
        })
})


module.exports = router;

