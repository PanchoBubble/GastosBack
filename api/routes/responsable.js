const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const Responsable = require('../models/responsable');

router.get("/", (req,res,next)=>{
    Responsable.find()
               .exec()
               .then(docs => {
                   res.status(200).json({data : docs})
               })
               .catch(err => res.status(500).json({error:err}))
})

router.post("/", (req, res, next) =>{
    const nuevoResponsable = new Responsable({
        _id : new mongoose.Types.ObjectId(),
        nombre : req.body.nombre,
        apellido : req.body.apellido,
        email : req.body.email,
    })
    nuevoResponsable.save()
        .then(_responsable => res.status(201).json(_responsable))
        .catch(err => res.status(500).json({error:err}))
})

router.get("/:idResponsable", (req, res, next) =>{
    const idResponsable = req.params.idResponsable;
    Responsable.findById(idResponsable)
        .exec()
        .then(doc => {
            if(doc){
                res.status(200).json(doc)
            } else {
                res.status(404).json({error : "Not Found"})
            }
        })
        .catch(err => {
            res.status(500).json({error:err})
        })
})

router.post("/:idResponsable", (req,res,next) =>{
    const idResponsable = req.params.idResponsable;
    res.status(200).json({
        message: "post request: " + idResponsable
    })
})  

module.exports = router;