const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) =>{
    res.status(200).json({
        message: "get request"
    })
})

router.post("/", (req, res, next) =>{
    res.status(200).json({
        message: "post request"
    })
})

router.get("/:idPersona", (req, res, next) =>{
    const idPersona = req.params.idPersona;
    res.status(200).json({
        message: "get request: " + idPersona
    })
})

router.post("/:idPersona", (req, res, next) =>{
    const idPersona = req.params.idPersona;
    res.status(200).json({
        message: "post request: " +  idPersona
    })
})

module.exports = router;