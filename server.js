const express = require('express')
const app = express()
const gerar = require("./assets/main")
app.use(express.static("views"));
app.set('view engine', 'ejs')
const port = process.env.PORT || 8080




app.get("/", (req,res) => {
    res.render("home")
})
app.get("/gerar", (req,res) => {
    res.render("gerar")
})

app.get("/generate/:partido", async(req, res) => {
    const partido = req.params.partido
    const nome = req.query.nome
    const modelo = req.query.modelo

    gerar({
        modelo,
        partido,
        nome
    }).then(data => {
        res.status(200).send(data)

    })
    


})

app.listen(port, () => {
	console.log(`app listening on ${port}`)
})
