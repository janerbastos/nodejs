/** Inportação dos modulos */
var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

/* Iniciar o objeto express */


var app = express();
/** setando as variaveis 'view engine' e views do express */
app.set('view engine', 'ejs');
app.set('views', './app/views');

/** configurar middleware */
/** express static */
app.use(express.static('./app/public'));

/** body-parser */
app.use(bodyParser.urlencoded({extended: true}));

/** express-validator */
app.use(expressValidator());

/**configurando o consign, que efetua o auto load de models e dos controllers do objeto app */
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app)

module.exports = app;