const express = require('express')
const app = express()

const { db, Page, User } = require('./models');

const users_router = require("./routes/users");
const wiki_router = require("./routes/wiki");
const layout = require('./views/layout');

app.use(express.urlencoded({extended: false}));

app.use(express.static(__dirname + "/public"));

// We are assigning / as /wiki
app.use('/wiki', wiki_router);

app.get("/", (req, res) => {
  res.redirect("/wiki/");
});


const PORT = 8080

const init = async () => {
  await db.sync({force: true});

  app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
  });
}

init();

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

// app.get('/', (req, res) => {
//   res.send(layout('hello this should work'))
// })

