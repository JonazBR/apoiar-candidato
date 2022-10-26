const canvas = require('canvas')

const modelo2 = async (name) => {
    return new Promise(async(resolve) => {
        await canvas.registerFont("./assets/Fonts/bolsonaro/edosz.ttf", { family: "Edo SZ" })
        const template = await canvas.loadImage("./assets/Images/bolsonaro/2.png")

        const image = canvas.createCanvas(template.width, template.height)
        const ctx =  image.getContext('2d')

        ctx.drawImage(template, 0, 0)

        let values = {
            x: 150,
            letter: 160
        }
        if(name.length > 6){
            values.x = values.x - name.length * 10 // mudar a posição do nome
        } 
        if(name.length > 8) {
            values.letter = values.letter - name.length - 30 // mudar a posição do nome
        }
        ctx.rotate(-10 * Math.PI / 180);
        ctx.font = `${values.letter}px Edo SZ`;
        ctx.fillStyle = "rgb(253,213,3)"
        ctx.fillText(name, values.x, 480)

        resolve(image.toDataURL())
})

}
module.exports = modelo2

