const express = require('express')
const app = express()
const gerar = require("./assets/main")
app.use(express.static("views"));
app.set('view engine', 'ejs')
const port = process.env.PORT || 8080


let blockIp = []

app.get("/", (req,res) => {
    res.render("home")
})
app.get("/gerar", (req,res) => {
    res.render("gerar")
})

app.get("/gen/:partido", async(req, res) => {
    const partido = req.params.partido
    const nome = req.query.nome
    const modelo = req.query.modelo
    if(nome.length > 20) return res.status(403)

    var forwardedIpsStr = req.header('x-forwarded-for');
    var IP = '';
 
    if (forwardedIpsStr) {
       IP = forwardedIps = forwardedIpsStr.split(',')[0];  
    }

    console.log(`[+] acess from ${IP}`)
    if(IP == "35.224.35.49") return 









    


    gerar({
        modelo,
        partido,
        nome
    }).then(data => {
        res.status(200).send(data)

    })
    

})
app.get("addip", (req, res) => {
    blockIp.push(req.query.ip)
})

app.listen(port, () => {
	console.log(`app listening on ${port}`)
})
