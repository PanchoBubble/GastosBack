// HTTP para poder acceder desde el navegador
const http = require("http");
// app tiene express y le pones los 'path' para cada cosa
const app = require("./app");

// el puerto toma el valor 3000, podes poner cualquier valor
// process.env.PORT => se fija si pusieron un puerto en el servidor
const port = process.env.PORT || 420;

const server = http.createServer(app);

server.listen(port);

module.exports = server
