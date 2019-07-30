const express = require("express");
const app = express();

const gastosRoutes = require("./api/routes/gastos");

app.use("/gastos", gastosRoutes);

module.exports = app;