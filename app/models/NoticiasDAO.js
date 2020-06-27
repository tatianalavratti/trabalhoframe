	function NoticiasDAO(connection){
		conn = connection;

	this.getNoticias = function(callback){
		conn.query('select * from noticias' , callback);
	}
	this.getNoticia = function(callback){
		conn.query('select * from noticias where id_noticia = 1' , callback);
	}
	this.salvarNoticia = function(noticia, callback){
		conn.query('insert into noticias set ?', noticia, callback)
	}
	this.get5UltimasNoticias = function(callback){
		conn.query('select * from noticias order by data_criacao desc limit 5', callback);
	}

}	
module.exports = function(){

	return NoticiasDAO;
}
