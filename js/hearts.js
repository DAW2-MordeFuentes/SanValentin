//Aureliano Antonio Macra
///3 de febrero 2023
////Diseño de Interfaces Web

function corazones(heartScale, colour, posX, x, y, phrase) {
    //'Ramas'
    ctx.beginPath()
    ctx.strokeStyle = "brown"
    ctx.moveTo(((heartScale * (unit * 5) + x) + posX), (heartScale * (h - unit * 0)) + y)
    ctx.lineTo(((heartScale * (unit * 5) + x) + posX), (heartScale * (h - unit * 10)) + y)
    ctx.lineWidth = (heartScale * (unit * 0.25))
    ctx.stroke()
    ctx.closePath()

    //Rombo
    ctx.fillStyle = colour
    ctx.strokeStyle = colour
    ctx.beginPath()

    ctx.moveTo(((heartScale * (unit * 4) + x) + posX), (heartScale * (h - unit * 10)) + y)
    ctx.lineTo(((heartScale * (unit * 5) + x) + posX), (heartScale * (h - unit * 11)) + y)
    ctx.lineTo(((heartScale * (unit * 6) + x) + posX), (heartScale * (h - unit * 10)) + y)
    ctx.lineTo(((heartScale * (unit * 5) + x) + posX), (heartScale * (h - unit * 9)) + y)
    ctx.lineTo(((heartScale * (unit * 4) + x) + posX), (heartScale * (h - unit * 10)) + y)

    ctx.fill()
    ctx.closePath()

    //Líneas redondeadas
    ctx.lineCap = "round"
    ctx.lineWidth = (heartScale * (unit * 1.5))

    ///Línea 1
    ctx.beginPath()

    ctx.moveTo(((heartScale * (unit * 5) + x) + posX), (heartScale * (h - unit * 10)) + y)
    ctx.lineTo(((heartScale * (unit * 4) + x) + posX), (heartScale * (h - unit * 11)) + y)

    ctx.stroke()
    ctx.closePath()

    ///Línea 2
    ctx.beginPath()

    ctx.moveTo(((heartScale * (unit * 5) + x) + posX), (heartScale * (h - unit * 10)) + y)
    ctx.lineTo(((heartScale * (unit * 6) + x) + posX), (heartScale * (h - unit * 11)) + y)

    ctx.stroke()
    ctx.closePath()

    //Escribir frase
    ctx.beginPath()
    var canvasId = document.getElementById("canvas")
    var innerText = ""
    innerText = canvasId.innerHTML = phrase
    ctx.fillStyle = "white"
    ctx.font = "bold " + (heartScale * 20/40 * unit) + "px 'Century Gothic'"
    ctx.fillText(innerText, ((heartScale * (unit * 4.25) + x) + posX), ((heartScale * (h - unit * 10.25)) + y))
    ctx.closePath()

    //grow()
}

function drawHearts(posicionCorazones) {
    var positionX = posicionCorazones
    // Todas las llamadas...
    for (let i = 0; i < 8; i++) {
        var scale = Math.random() * 2 + 0.75
        var x = Math.random() * (70 - 200)
        var y = Math.random() * (300 - 700)
        var randomColour = Math.round(Math.random() * 5)
        var randomPhrase = Math.round(Math.random() * 2)
        corazones(scale, colors[randomColour], positionX, x, y, phrases[i])
    }
}



/*
Esto va en "valentin.js"
var canvas = null
var ctx = null
const phrases = ['Que te deje crear un server de minecraft', 'Amor = ESPAÑA', 'Amistad', 'Cariño ', 'El amor es confianza y respeto', 'Lealtad ', ' Preocupación', 'Amarse', 'Sentirse comod@ con la otra persona', 'Quererse con el corazón', 'Que no sea toxic@']
function dibujar() {
    // recuperamos el lienzo del canvas y su ctxo... 
    canvas = document.getElementById("canvas")
    ctx = canvas.getContext("2d")
    ctx.globalAlpha = 0.5
    w = canvas.clientWidth
    h = canvas.clientHeight
    unit = h * 0.05
    canvas.width = w
    canvas.height = h
    var positionX = 0
    /*var cat = document.getElementById("sourceCat")
    // ctx.drawImage(cat, 45, 650, 150, 150);*/

    // Todas las llamadas...
    /*for (let i = 0; i < 4; i++) {
        var scale = Math.random() * 2 + 0.75
        var x = Math.random() * (70 - 200)
        var y = Math.random() * (300 - 700)
        var randomColour = Math.round(Math.random() * 5)
        var randomPhrase = Math.round(Math.random() * 2)
        corazones(scale, colors[randomColour], positionX, x, y, phrases[i])
    }
    rejilla()
}
window.onload = dibujar
*/