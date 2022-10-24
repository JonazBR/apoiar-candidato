const modelos = require("./Js/index")

const gerarImagem = async(config={
    modelo: Number,
    partido: String,
    nome: String
}) => {
    const { modelo, partido, nome } = config
    if(!modelos?.[partido]) return
    return modelos[partido][modelo](nome)

}
module.exports = gerarImagem