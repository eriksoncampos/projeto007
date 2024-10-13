const express = require('express');
const app = express();
const estados = require('./dados/estados');

console.log(estados.retornaEstado("MG"));

app.get('/',(requisao,resposta) => {
    let sigla = requisao.query.sigla;

    let retornoEstados = estados.retornaEstado(sigla);
    
    resposta.json({estado: retornoEstados});
});

app.listen('8080',() => {
    console.log("Servidor iniciado.");
});


