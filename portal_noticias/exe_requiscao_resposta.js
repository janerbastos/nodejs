var http = require('http');


var server = http.createServer(function(req, res){
    var categoria = req.url;

    if(categoria == '/tecnologia'){
        res.end('<html><body>Tecnologia.</body></html>')
    } else if(categoria == '/moda'){
        res.end('<html><body>Moda.</body></html>')
    } else{
        res.end('<html><body>Site de noticias</body></html>')
    }
});

server.listen(3000);