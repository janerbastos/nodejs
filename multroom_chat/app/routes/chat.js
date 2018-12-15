
module.exports = function(application){
    application.post('/chat', function(req, res){
        application.app.controllers.chat.iniciaChat(application, req, res);
    });
}