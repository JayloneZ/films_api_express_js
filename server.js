const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('client/public'));
app.use(require('./controllers/index.js'));

// app.get('/', function (req, res) {
//   res.sendFile(`${__dirname}/client/public/index.html`);
// });

app.listen(3000, function () {
  console.log(`Films app listening on port ${ this.address().port }`);
});
