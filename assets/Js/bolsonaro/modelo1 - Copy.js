const canvas = require('canvas')

module.exports = modelo1 = async (name) => {
    return new Promise(async(resolve) => {
        await canvas.registerFont("../Fonts/bolsonaro/edosz.ttf", { family: "Edo SZ" })
        const template = await canvas.loadImage("../Images/bolsonaro/1.png")
        
        const image = canvas.createCanvas(template.width, template.height)
        const ctx =  image.getContext('2d')
        ctx.drawImage(template, 0, 0)
        
        ctx.font = '130px Edo SZ';
        ctx.fillStyle = "rgb(2,102,30)"
        
        ctx.fillText(name, 50, 480)
        resolve(image.toDataURL())
})
}