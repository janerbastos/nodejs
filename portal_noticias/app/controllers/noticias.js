module.exports.noticia = function (qpplication, req, res) {
    noticia = req.query
    var conection = qpplication.config.dbConnection();
    var modelNoticias = new qpplication.app.models.noticiaModel(conection)
    modelNoticias.getNoticia(noticia, function (error, result) {
        res.render('noticias/noticia', { noticia: result });
    });
}

module.exports.noticias = function (qpplication, req, res) {
    var conection = qpplication.config.dbConnection();
    var noticasModel = new qpplication.app.models.noticiaModel(conection);
    noticasModel.getNoticias(function (error, result) {
        res.render('noticias/noticias', { noticias: result });
    });
}