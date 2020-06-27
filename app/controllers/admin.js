module.exports.formulario_inclusao_noticia = function(app, req, res){
		res.render('admin/form_add_noticia',{validacao:{},retorno:{}});
}

module.exports.salvarNoticia = function(app, req, res){
		var noticia = req.body;
		req.assert('titulo', 'Título é obrigatório').notEmpty();
		req.assert('resumo', 'Resumo deve ter entre 10 e 100 caracteres').len(10,100);
		req.assert('autor', 'Autor é obrigatório').notEmpty();
		req.assert('data_noticia', 'Data é obrigatória').notEmpty();
		req.assert('noticia', 'Notícia é obrigatória').notEmpty();
		var erros = req.validationErrors();

		//console.log(erros);
		if(erros){
			res.render("admin/form_add_noticia",{validacao:erros,retorno:noticia});
			return;//não continua o processo seguinte
		}
		var connection = app.config.dbConnection();
		var noticiasModel = new app.app.models.NoticiasDAO(connection);

		noticiasModel.salvarNoticia(noticia, function(error,result){
			if(error){
				res.send(error)
			}else{
				res.redirect('/noticias');
			}
		});
}
//Tatiana Lavratti 5V