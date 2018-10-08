var express = require('express');

var app = express();

app.use(express.json());

app.post('/', function(request, response){
    //console.log(request.body);

    let aloca= require('./aloca_maquina')(request.body);

    response.writeHead(200, {'Content-Type': 'text'});

    response.end(aloca);


});



app.listen(5000);

/*
const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/mensagem', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
*/