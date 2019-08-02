const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const Moneda = require('../models/moneda');

router.get("/", (req, res, next) =>{
    Moneda.find()
            .exec()
            .then(docs => {
                res.status(200).json({data : docs})
            })
            .catch(err => res.status(500).json({error:err}));
})

router.post("/", (req, res, next) =>{
    const nuevaMoneda = new Moneda({
        _id : new mongoose.Types.ObjectId(),
        nombre : req.body.nombre,
        codigo : req.body.codigo,
    });
    nuevaMoneda.save()
        .then(_moneda => res.status(201).json(_moneda))      
        .catch(err =>   res.status(500).json({error:err}))
})

router.get("/:idMoneda", (req, res, next) =>{
    const idMoneda = req.params.idMoneda;
    Moneda.findById(idMoneda)
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

router.patch("/:idMoneda", (req, res, next) =>{
    const idMoneda = req.params.idMoneda;
    const updateProps = {};
    for (const prop of req.body){
        updateProps[prop.propName] = prop.value
    }
    Moneda.update({ _id: idMoneda},{$set:updateProps})
                    .exec()
                    .then(res =>{
                        res.status(200).json(res)
                    })
                    .catch(err => {
                        res.status(500).json({error:err})
                    })
})

router.delete("/:idMoneda", (req, res, next) =>{
    const idMoneda = req.params.idMoneda;
    Moneda.remove({ _id: idMoneda}).exec()
        .then(res =>{
            res.status(200).json(res)
        })
        .catch(err => {
            res.status(500).json({error:err})
        })
})

module.exports = router;