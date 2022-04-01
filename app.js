import express from 'express';
import { engine } from 'express-handlebars';
import bodyParser from "body-parser";
import fs from 'fs';

const hostname = "127.0.0.1";
const app = express()
const port = process.env.PORT || 4000

// Gebruik template engine handlebars voor DYNAMISCHE content
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// Hierdoor kan ik CSS en JS bestanden aan de client side uitlezen
app.use(express.static('public'));

// Gebruik body-parser om te lezen wat er in POST requests van de form staat
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Route. Luistert naar alle GET requests op /
app.get('/', (req, res) => {
  		res.render('home', {

  		})
})

// Route. Luistert naar alle GET requests op resultaten /
app.get('/resultaten', (req, res) => {

	fs.readFile('informatie.json', 'utf8', function (err, data) {
		if (err) throw err;
		let info = JSON.parse(data);
		console.log(info)
		res.render('resultaten', {
			antwoorddata: info
		})
	});
})

let userInput;

app.post('/', (req, res) => {
	console.log(req.body)
	userInput = JSON.stringify(req.body)
	fs.writeFile('informatie.json', userInput, 'utf8', cb => {
	});
	res.redirect('resultaten')
})




app.listen(port, () => {
	console.log(
	  `Lekker man, hij is hier te vinden: http://${hostname}:${port}/, zo niet zoek het uit.`
	);
  });
