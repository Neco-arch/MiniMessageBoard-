const Express = require('express')
const Path = require('node:path')
const app = Express()
const IndexRouter = require('./Router/IndexRouter')
const port = 3000
const assetsPath = Path.join(__dirname, "public");


app.use(Express.static(assetsPath));

app.set('views' , Path.join(__dirname , "views"))
app.set("view engine" , "ejs")

app.use("/" , IndexRouter)
app.use("/new" , IndexRouter)

app.listen(port , () => {
    console.log("server is running")
})

