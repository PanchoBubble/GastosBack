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

