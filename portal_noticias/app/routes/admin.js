module.exports = function(application){
    application.get('/noticias/create', function(req, res){
        application.app.controllers.admin.form_create_noticia(application, req, res);
    });

    application.post('/noticias/salvar', function(req, res){
        application.app.controllers.admin.noticias_salvar(application, req, res);
    });
}