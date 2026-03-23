const Express = require('express')
const Path = require('node:path');
const Routerapp = Express()
const messages = [
  {
    text: "Hi there !",
    user: "Morgan Freeman",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles Kirk",
    added: new Date()
  }
];

Routerapp.use(Express.urlencoded({ extended: true }));

Routerapp.get("/" , (req , res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages })
})

Routerapp.get("/new" , (req , res) => {
  res.render("form")
})

Routerapp.post("/new" , (req , res) => {
  messages.push({ text: req.body.message, user: req.body.AuthorName, added: new Date() });
  res.redirect('/')
})

module.exports = Routerapp