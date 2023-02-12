var canvas = null
var ctx = null

var numFlowers = 100;
var nCarteles = 8;

var grdSky;

var tiempoRayos = 0;
var stoping;

var lastInterval;


function dibujar() {

    // recuperamos el lienzo del canvas y su ctxo... 
    canvas = document.getElementById("canvas")
    ctx = canvas.getContext("2d")
    ctx.globalAlpha = 0.5

    if (screen.width < 700) {
        canvas.style.width = "40vh"
        canvas.style.height = "40vh"
        // alert("changed")
    }

    w = canvas.clientWidth
    h = canvas.clientHeight
    unit = h * 0.05

    canvas.width = w
    canvas.height = h

    // alert(screen.width)
    // alert(h)


    posFINAL = 150 * unit

    yGlobo = -unit * 1.2

    grdSky = ctx.createLinearGradient(0, 0, 0, unit * 20)
    grdSky.addColorStop(0, blue)
    grdSky.addColorStop(1, white)

    inicializarFlores()

    xTractor = -10 * unit;

    // michoPsPs(200, h-(h/30));
    // staringCat(200, h-(h/30));
    // rayos();
    rejilla()
    fondo()

    // ctx.translate(-1000, 0)
    // rayos()

    // for (let i = 0; i < 5; i++) {
        intervalCorazones = setInterval(drawHeart, 1000, 0)
    // }

    // lastInterval = setInterval(final, 50)
}

function inicializarFlores() {

    let maxX = 110 * unit
    let minX = unit * 20
    let maxY = h - unit * 4
    let minY = h - unit * 5

    // define an array of colors
    // var colorArray = ["red", "blueviolet", "blue", "coral", "goldenrod", "greenyellow", "purple", "darkorange", "hotpink",
    // "maroon", "salmon", "white"];


    for (let i = 0; i < numFlowers; i++) {
        var centerX = Math.random() * maxX + minX
        var centerY = Math.random() * maxY + minY
        var radius = Math.random() * 2 * unit + unit / 2
        var numPetals = Math.random() * 6 + 3
        var colorIndex = Math.floor(Math.random() * colors.length);

        acX.push(centerX)
        acY.push(centerY)
        aRadius.push(radius)
        aNumP.push(numPetals)
        acI.push(colorIndex)
    }

    // CARTELES
    maxAltura = 400 / 40 * unit
    minAltura = 300 / 40 * unit
    maxLado = 650 / 40 * unit
    minLado = 540 / 40 * unit

    for (let i = 0; i < nCarteles; i++) {
        let paArriba = Math.floor(Math.random() * (400 / 40 * unit - 260 / 40 * unit + 1) + 260 / 40 * unit);
        let alturaCartel = Math.floor(Math.random() * ((maxAltura + paArriba) - (minAltura + paArriba) + 1) + minAltura);
        let ladoDerecho = Math.floor(Math.random() * ((maxLado + paArriba) - (minLado + paArriba) + 1) + minLado);

        aPaArriba.push(paArriba)
        aAlturaCartel.push(alturaCartel)
        aLadoDerecho.push(ladoDerecho)
    }
}

window.onload = dibujar;
