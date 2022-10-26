const intro = document.getElementById("intro_img")

let images = {
    lula: {
        1: "https://i.ibb.co/wJFgVj8/1.jpg",
        2: "https://i.ibb.co/VT2dSPm/2.png"
    },
    bolsonaro: {
        1: "https://i.ibb.co/QJSfdsw/1.png",
        2: "https://i.ibb.co/ZmkjPFq/2.png"
    }
}
let a = 

window.addEventListener("load", () => {
    let escolha  = JSON.parse(localStorage.getItem("escolha"))
    if(!escolha) {
        intro.src = 'https://pbs.twimg.com/media/Es6jE4hWMAIXxeA.jpg'
    } else {
        intro.src = images[escolha.partido][escolha.modelo]
    }
})

const escolher = (partido, modelo) => {
    localStorage.setItem("escolha", JSON.stringify({
        partido,
        modelo,
        image: images[partido][modelo]
    }))
    intro.src = images[partido][modelo]

}
document.getElementById('edit').addEventListener("click", () => {
    let escolha = localStorage.getItem("escolha")
    if(!escolha) return alert("Por favor, escolha um dos modelos abaixo")
    window.location.href = "/gerar"
})