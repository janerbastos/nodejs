module.exports.index = function(applcation, req, res){

    var conection = applcation.config.dbConnection();
    var noticasModel = new applcation.app.models.noticiaModel(conection);
    noticasModel.get5UltimasNoticias(function (error, result) {
        res.render('home/index', { noticias: result });
    });

    
}