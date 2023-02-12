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
    timeTractor = setInterval(drawTractor, vTractor);
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
    // tractor()
    // flowers()
    // carteles()

    if (xGlobo -200 > posFINAL) {
        console.log("LIMIT " + limit)
        console.log(posFINAL)

        clearInterval(timeFondo)
        tormenta()
        /* lluviaGaytan = setInterval(() => {
            posX2 += 0.00625 * unit;
            posXX2 -= 0.0125 * unit;
            delay++;
            if (posX2 >= -1 * unit && posXX2 <= 6 * unit) {
                // bolaBoleadora();
                rain();
                clearInterval(lluviaGaytan);
                // rayos();
            }
        })
        lluvia2Gaytan = setInterval(bolaBoleadora, 1);
        // desaparece el globo
        */
    }
    else {
        xGlobo += dxGlobo
        limit += 10;
        ctx.translate(-15, 0)
        // console.log("LIMIT " + limit)
    }
}