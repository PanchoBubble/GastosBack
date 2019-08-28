const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const Tipo = require('../models/tipo');

router.get("/", (req, res, next) =>{
    Tipo.find()
            .exec()
            .then(docs => {
                res.status(200).json({data : docs})
            })
            .catch(err => res.status(500).json({error:err}));
})

router.post("/", (req, res, next) =>{
    console.log(req);
    const nuevoGasto = new Tipo({
        _id : new mongoose.Types.ObjectId(),
        nombre : req.body.nombre,
        customAttr : req.body.customAttr,
    });
    nuevoGasto.save()
        .then(_tipo => res.status(201).json(_tipo))      
        .catch(err =>   res.status(500).json({error:err}))
})

router.get("/:idTipo", (req, res, next) =>{
    const idTipo = req.params.idGastos;
    Tipo.findById(idTipo)
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

router.patch("/:idTipo", (req, res, next) =>{
    const idTipo = req.params.idTipo;
    const updateProps = {};
    for (const prop of req.body){
        updateProps[prop.propName] = prop.value
    }
    Tipo.updateOne({ _id: idTipo},{$set:updateProps})
                    .exec()
                    .then(response =>{
                        res.status(200).json(response)
                    })
                    .catch(err => {
                        res.status(500).json({error:err})
                    })
})

router.delete("/:idTipo", (req, res, next) =>{
    const idTipo = req.params.idTipo;
    Tipo.remove({ _id: idTipo}).exec()
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(500).json({error:err})
        })
})


module.exports = router;

