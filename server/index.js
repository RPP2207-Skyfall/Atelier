require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000

app.use(express.json());

app.use(express.static(path.join(__dirname, '/../client/dist')));

// app.listen(process.env.PORT);
// console.log(`Server listening at http://localhost:${process.env.PORT}`);


app.listen(port, () => {
  console.log(`app listening on http://localhost:${port}`)
})