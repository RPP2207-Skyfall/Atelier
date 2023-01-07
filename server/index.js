require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000
const routes = require('./routes');
const controller = require('./controllers/');
const compression = require('compression');

app.use(compression());
app.use(express.json());
app.use(express.static(path.join(__dirname, '/../client/dist')));
// Routes
app.use(routes);

app.listen(port, () => {
  console.log(`app listening on http://localhost:${port}`)
});