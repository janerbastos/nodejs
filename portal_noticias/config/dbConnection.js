var mysql = require('mysql')
var connMSQL = function(){
    return mysql.createConnection({
        host: '192.168.56.110',
        user: 'adminsite',
        password: 'linux0',
        database: 'portal_noticias',
    });
}
module.exports = function(){
    return connMSQL;
}