const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

const data = require('./data');

let port = process.env.PORT || 3000;

app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', data);
});

app.listen(port, () => {
  console.log(`Your app is running on PORT ${ port }.`);
});
