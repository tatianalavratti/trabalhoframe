var mysql = require('mysql');

var connMySQL = function(){
	console.log('Conexão com o BD foi estabelecida')
	return mysql.createConnection({
		host:'localhost',
		user: 'root',
		password: 'password',
		database: 'portal_noticias',
	});
}
module.exports = function(){
		console.log('o autoload carregou o dbConnetion')
		return connMySQL;
}