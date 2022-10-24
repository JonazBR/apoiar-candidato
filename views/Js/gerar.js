let escolha = JSON.parse(localStorage.getItem("escolha"))

window.addEventListener('load', () => {
    if (!escolha) {
        alert("Vi aqui que você não escolheu um modelo, vou lhe redirecionar para o menu de escolha")
        window.location.href = "/"
    }
    document.getElementById('imagem').src = escolha.image
})
document.getElementById("gerar").addEventListener("click", async () => {
    const nome = document.getElementById("name").value
    if (!nome) return alert("Escreva um nome antes")
    const data = await fetch(`/generate/${escolha.partido}?nome=${nome}&modelo=${escolha.modelo}`)
    const imageBase64 = await data.text()
    document.getElementById("imagem").src = imageBase64
    document.getElementById("download").href = imageBase64
    document.getElementById("download").download = nome + ".jpg"





})