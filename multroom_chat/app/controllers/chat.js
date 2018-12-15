module.exports.iniciaChat = function(application, req, res){
    form_data = req.body;
    req.assert('apelido', 'Nome ou apelido é obrigatório.').notEmpty();
    req.assert('apelido', 'Nome ou apelido deve ter entre 3 e 15 caracteres.').len(3, 15);

    var errors = req.validationErrors();
    if (errors){
        res.render('index', {validacao: errors});
        return;
    }

    application.get('io').emit('msg_para_client', 
        {apelido: form_data.apelido, messagem: ' acabou de entrar no chat.'}
    );

    res.render('chat', {form_data: form_data});
}