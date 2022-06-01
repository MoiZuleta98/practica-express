const express = require('express');

const path = require('path'); //buscar la direccion del archivo donde lo guarde

const app = express(); //aplicacion de express

const amigos = [
    {
        id: 1,
        name: "Juan"
    },
    {
        id: 2,
        name: "Romina"
    },
    {
        id: 3,
        name: "Ricardo"
    },
]

//Mi ruta va a responder a get, quiero que le peges a esa tuta '/'
//req esta ruta le esta pidiendo datos al cliente, y lo envio con req
//res es lo que voy a responder algo
app.get('/', (req, res) => {  
    res.send("<h1> Hola mundo </h1>"); 
});

app.get('/amigos', (req, res) => {  
    res.send(amigos); 
});

app.get('/index', function(req, res){  
    let htmlPath = path.resolve(__dirname,'./vistas/index.html');
    res.sendFile(htmlPath); 
});

app.listen(3002, () => console.log('Servidor escuchando al puerto 3002'));

// app.use(express.static('public'));


