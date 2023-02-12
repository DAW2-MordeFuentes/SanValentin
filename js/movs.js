let xTractor = -100;
let dxTractor = 5;
let yTractor = -50;
let vTractor = 5;// 50 - es inversamente proporcional

let yGlobo;
let xGlobo = 0;
let dyGlobo = 10;
let dxGlobo = 17;
let vGlobo = 50;

let timeGlobo, timeFondo, lluviaGaytan, lluvia2Gaytan;

function drawTractor() {
    // txell... si no, si la pantalla es muy alta se ve como medio volando...
    yTractor = - unit;
    fondo();
    balloon(xTractor - unit * 13, yGlobo);
    remolque(xTractor, yTractor);
    tractor(xTractor, yTractor);
    xTractor += dxTractor;

    if (xTractor > unit * 10) {
        clearInterval(timeTractor);
        timeGlobo = setInterval(drawBalloon, vGlobo);
    }
}

let timeTractor;

setTimeout(() => {
    // timeTractor = setInterval(drawTractor, vTractor);
}, 50)


let vFondo = 50;

function drawBalloon() {
    fondo();
    balloon(xTractor - unit * 13, yGlobo);
    remolque(xTractor, yTractor);
    tractor(xTractor, yTractor);
    yGlobo -= dyGlobo;

    if (yGlobo < -unit * 9) {
        clearInterval(timeGlobo);
        xGlobo = xTractor - unit * 13;
        timeFondo = setInterval(drawFondo, vFondo);
    }
}

function drawFondo() {
    ctx.beginPath()
    fondo()
    remolque(xTractor, yTractor);
    tractor(xTractor, yTractor);
    balloon(xGlobo, yGlobo);

    if (xGlobo -200 > posFINAL) {
        // console.log("LIMIT " + limit)
        // console.log(posFINAL)

        clearInterval(timeFondo)
        tormenta()
    }
    else {
        xGlobo += dxGlobo
        limit += 10;
        ctx.translate(-15, 0)
        // console.log("LIMIT " + limit)
    }
}