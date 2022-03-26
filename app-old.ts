import http from 'http';

http.createServer( (req, res) => {

	// res.writeHead(200, {'Content-Type': 'text/plain'});
	// res.writeHead(200, {'Content-Type': 'application/json'});
	// res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
	// res.writeHead(200, {'Content-Type': 'text/csv'});

	res.write('Hello World');

	res.end();
}).listen( 8080 );


console.log('Escuchando en el pueto 8080');