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

router.get("/:idMoneda", (req, res, next) =>{
    const idMoneda = req.params.idMoneda;
    res.status(200).json({
        message: "get request: " + idMoneda
    })
})

router.post("/:idMoneda", (req, res, next) =>{
    const idMoneda = req.params.idMoneda;
    res.status(200).json({
        message: "post request: " +  idMoneda
    })
})

module.exports = router;