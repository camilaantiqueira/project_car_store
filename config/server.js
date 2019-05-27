var express = require('express');
var app = express();
app.set('view engine','ejs');
app.set('views','./app/views'); // Caminho referencia a partir de app.js , onde o módulo é chamado

module.exports = app;