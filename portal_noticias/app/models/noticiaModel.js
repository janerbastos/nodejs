function Noticias(conection){
    this._conection = conection
}

Noticias.prototype.getNoticias  = function(callback){
    this._conection.query('select * from noticia order by data_criacao desc', callback);
}

Noticias.prototype.getNoticia =  function(noticia, callback){
    this._conection.query('select * from noticia where id_noticia='+noticia.id, callback);
}

Noticias.prototype.salvarNoticia =  function(noticia, callback){
    this._conection.query('insert into noticia set ? ', noticia, callback);
}

Noticias.prototype.get5UltimasNoticias =  function(callback){
    this._conection.query('select * from noticia order by data_criacao desc limit 5', callback);
}

module.exports = function(){
    return Noticias;
}