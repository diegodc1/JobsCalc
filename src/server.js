const express = require("express");
const server = express();
const routes = require("./routes");
const path = require("path");

//usando template engine
server.set("view engine", "ejs");

//mudar a localização da psta views
server.set('views', path.join(__dirname, 'views'));

//habilitar arquivos statics (images, css, etc..)
server.use(express.static("public"));

//usar o req.body
server.use(express.urlencoded({ extended: true }));

//routes
server.use(routes); //usando as rotas

server.listen(3000, () => console.log("Rodando")); //abrindo uma porta, no casso a 3000
