//Tatiana Lavratti 5V 
module.exports = function(app){
	app.get('/noticia',function(req,res){
		app.app.controllers.noticias.noticia(app, req, res);
	});
	app.get('/noticias',function(req,res){
		app.app.controllers.noticias.noticias(app, req, res);
	});
}