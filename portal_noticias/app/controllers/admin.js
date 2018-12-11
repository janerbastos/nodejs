module.exports.form_create_noticia = function(application, req, res){
    res.render('admin/form_add_noticia', {'validacao': {}, noticia: {}});
}

module.exports.noticias_salvar = function(application, req, res){
    var noticia = req.body;

        req.assert('titulo', 'Titulo é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
        req.assert('autor', 'Autor é obrigatório').notEmpty();
        req.assert('data_noticia', 'Data da noticia é obrigatório').notEmpty();
        req.assert('noticia', 'Noticia é obrigatório').notEmpty();

        var error = req.validationErrors();

        if (error){
            res.render('admin/form_add_noticia', {'validacao': error, noticia: noticia});
            return;
        }

        var conection = application.config.dbConnection();
        var noticasModel = new application.app.models.noticiaModel(conection);
        noticasModel.salvarNoticia(noticia, function(error, result){
            res.redirect('/noticias');
        });
}