module.exports.noticia = function(app, req, res){

		var connection = app.config.dbConnection();

		var noticiasModel = new app.app.models.NoticiasDAO(connection);

		noticiasModel.getNoticia( function(error,result){
			res.render('noticias/noticia',{noticias:result});
		})
}


module.exports.noticias = function(app, req, res){

		var connection = app.config.dbConnection();

		var noticiasModel = new app.app.models.NoticiasDAO(connection);

		noticiasModel.getNoticias( function(error,result){
			if(error){
				res.send(error)
			}else{
				res.render('noticias/noticias',{noticias : result});
			}
			
		});
}