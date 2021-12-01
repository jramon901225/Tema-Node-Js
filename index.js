//Servidor con modulo HTTP

// const http = require('http');

// const handlerServer = function (req, res) {
//     res.writeHead(200, {'content-Type':  'text/html'})
//     res.write('<h1>Hola Mundo </h1>');
//     res.end();
// }

// const server = http.createServer(handlerServer);

// server.listen(3000, function() {
//     console.log('Server on Port 3000');
// })


//Servidor con Express

const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.send('<h1>Hola desde Express</h1>')
})

server.listen(3000, () => {
    console.log('Server on port 3000')
})