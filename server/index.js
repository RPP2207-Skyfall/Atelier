require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000
const routes = require('./routes');
const controller = require('./controllers/');
const compression = require('compression');

const shouldCompress = (req, res) => {
  if (req.headers["x-no-compression"]) {
    // don't compress responses with this request header
    return false;
  }

  // fallback to standard filter function
  return compression.filter(req, res);
};

// Usage:
app.use(compression({ filter: shouldCompress }));

app.use(express.json());
app.use(express.static(path.join(__dirname, '/../client/dist')));
// Routes
app.use(routes);

app.listen(port, () => {
  console.log(`app listening on http://localhost:${port}`)
});