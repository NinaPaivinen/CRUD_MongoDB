// index.js
const express = require('express');
const routes = require("./routes")

const app = express();
app.use(express.json());
app.use('/', routes);

//MongoDB connection
const mongoose = require('mongoose');
const mongoURL = 'YOUR_CONNECTION_STRING';
mongoose.connect(mongoURL, { dbName: 'cardb', useNewUrlParser: true , useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('We are conncted'));

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});