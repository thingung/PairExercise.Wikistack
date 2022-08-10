const express = require('express')
const morgan = require('morgan')

const app = express()
const { db } = require('./models');

app.use(express.urlencoded({extended: false}))
app.use(morgan("dev"));

const layout = require('./views/layout')

app.use(express.static(__dirname + "/public"));

const PORT = 8080

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

app.get('/', (req, res) => {
  res.send(layout('hello this should work'))
})

