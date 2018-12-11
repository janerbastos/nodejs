var app = require('./config/server');

//var routeHome = require('./app/routes/home')(app);

//var routeNoticas = require('./app/routes/noticias')(app);

//var routeCreateNoticia = require('./app/routes/create_noticias')(app);

app.listen(3000, function(){
    console.log('Servidor rodando na porta 3000');
});