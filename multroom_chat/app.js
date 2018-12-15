var app = require('./config/server');

/**Parametrização da porta de escuta sorvidor web quanto do web soquet. */
var server = app.listen(3000, function(){
    console.log('Servidor Online');
})

var io = require('socket.io').listen(server);

app.set('io', io);

/**Criar conexão com websocket */
io.on('connection', function(socket){
    console.log('Usuário conectou!');

    socket.on('disconnect', function(){
        console.log('Usuário saiu!');
    })

    socket.on('msg_para_servidor', function(data){
        socket.emit('msg_para_client', 
            {apelido: 'Eu', messagem: data.messagem}
        );

        socket.broadcast.emit('msg_para_client', 
            {apelido: data.apelido, messagem: data.messagem}
        );
    })
});