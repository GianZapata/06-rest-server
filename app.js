const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Template engine handlebars
app.set('view engine', 'hbs');

// Partials
hbs.registerPartials( __dirname + '/views/partials' );

// Servir contenido estático
app.use( express.static('public') ); // El directorio public es el directorio donde se encuentran los archivos estáticos

// app.get('/', (req,res) => {
// 	res.render('home', {
// 		name: 'Gian Zapata',
// 		title: 'Curso de Node'
// 	});
// });

// app.get('/generic', (req,res) => {
// 	res.render('generic', {
// 		name: 'Gian Zapata',
// 		title: 'Curso de Node',
// 		alt: 'alt'
// 	});
// });

// app.get('/elements', (req,res) => {
// 	res.render('elements', {
// 		name: 'Gian Zapata',
// 		title: 'Curso de Node',
// 		alt: 'alt'
// 	});
// });

app.get('*', (req,res) => {
	res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});