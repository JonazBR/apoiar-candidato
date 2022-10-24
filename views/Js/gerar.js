let escolha = JSON.parse(localStorage.getItem("escolha"))

window.addEventListener('load', () => {

    if(!escolha){
        alert("Escolha uma opção antes")
        window.location.href = "/"
    }

})
document.getElementById("name").addEventListener("keypress", async({key}) => {
    const nome = document.getElementById("name")
    console.log(nome.value.lenght)
    
    if(nome.lenght > 1) {
        console.log(nome)
        const data = await fetch(`/generate/${escolha.partido}?nome=${nome}&modelo=${escolha.modelo}`)
        const imageBase64 = await data.text()
        document.getElementById("imagem").src = imageBase64
    }
   


})