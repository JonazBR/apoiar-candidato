const canvas = require('canvas')

module.exports = modelo1 = async (name) => {
    return new Promise(async(resolve) => {

    await canvas.registerFont("./assets/Fonts/lula/BebasNeue-Regular.ttf", { family: "BebasNeue" })
    const template = await canvas.loadImage("./assets/Images/lula/1.jpg")

    const image = canvas.createCanvas(template.width, template.height)
    const ctx = image.getContext('2d')
    ctx.drawImage(template, 0, 0)

    let values = {
        name_x: 460,
        back_x: 336,
        back_w: 380
    }

    if (name.length > 5) {
        values.back_w = values.back_w + (name.length - 5) * 70 // mudar o tamanho do fundo do nome
        values.back_x = values.back_x - (name.length - 5) * 30 // mudar a posição do fundo do nome
    }

    ctx.fillStyle = "rgb(30,189,78)"
    ctx.rotate(-2 * Math.PI / 180);
    ctx.roundRect(values.back_x, 261, values.back_w, 207, 10)
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fill()


    ctx.rotate(-2 * Math.PI / 180);
    ctx.font = '190px BebasNeue';
    ctx.fillStyle = "white"

    values.name_x = values.name_x - name.length * 25 // mudar a posição do nome

    ctx.fillText(name, values.name_x, 430)
    resolve(image.toDataURL())
})
}