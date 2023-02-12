//Aureliano Antonio Macra
///3 de febrero 2023
////Diseño de Interfaces Web

let intervalCorazones;

function corazones(heartScale, colour, posX, x, y, phrase) {
    //'Ramas'
    ctx.beginPath()
    ctx.strokeStyle = "brown"
    // txell, la base más corta
    // ctx.moveTo(((heartScale * (unit * 5) + x) + posX), (heartScale * (h - unit * 0)) + y)
    ctx.moveTo(((heartScale * (unit * 5) + x) + posX), (heartScale * (h - unit * 5)) + y)
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

    let cTextX = heartScale * (unit * 5) + x + posX
    let cTextY = heartScale * (h - unit * 10.5) + y


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
    ctx.textAlign = 'center'
    ctx.font = "bold " + (heartScale * 10 / 40 * unit) + "px 'Century Gothic'"
    // ctx.fillText(innerText, ((heartScale * (unit * 4.25) + x) + posX), ((heartScale * (h - unit * 10.25)) + y))

    // ctx.fillText(phrase, cTextX, cTextY)
    ajusteDeTexto(innerText, cTextX, cTextY, heartScale*unit*3, heartScale * 10 / 40 * unit)
    
    ctx.closePath()

    //grow()
}

let indexHeart = 0;
function drawHeart(posicionCorazones) {
    var positionX = posicionCorazones
    // Todas las llamadas...
    // for (let i = 0; i < 20; i++) {
    var scale = Math.random() * 2 + 0.75
    // var scale = 2.75
    // var x = Math.random() * (70 - 200)
    var y = Math.random() * (300 - 700)
    // Math.random() * (max - min) + min;
    var x = Math.random() * (unit * 7 + unit * 4) - unit * 4
    // var y = Math.random() * (-unit*4 - unit*10) - unit*10
    var randomColour = Math.round(Math.random() * colors.length)
    var randomPhrase = Math.round(Math.random() * 2)
    corazones(scale, colors[randomColour], positionX, x, y, phrases[indexHeart])
    // }
    indexHeart++;

    console.log(indexHeart + " - " + phrases.length)
    if(indexHeart>phrases.length-1){
        clearInterval(intervalCorazones)
        setTimeout(() => {
            lastInterval = setInterval(final, 50)    
        }, 3000);
    }
}

function ajusteDeTexto(texto, x, y, maxWidth, alturaDeLinea) {
    let palabras = texto.split(" ");
    let lineaDeTexto = "";
    
    for (let i = 0; i < palabras.length; i++) {
        let testTexto = lineaDeTexto + palabras[i] + " ";
        // calcula la anchura del texto textWidth 
        let textWidth = ctx.measureText(testTexto).width;
        
        if (textWidth > maxWidth && i > 0) {
            // escribe en el canvas la lineaDeTexto
            ctx.fillText(lineaDeTexto, x, y);
            // inicia otra lineaDeTexto         
            lineaDeTexto = palabras[i] + " ";
            // incrementa el valor de la variable y 
            //donde empieza la nueva lineaDeTexto
            y += alturaDeLinea;
        } else {// de lo contrario,  si textWidth <= maxWidth 
            lineaDeTexto = testTexto;
        }
    }// acaba el bucle for
    // escribe en el canvas la última lineaDeTexto
    ctx.fillText(lineaDeTexto, x, y);
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
