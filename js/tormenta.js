
var azulPrimeraBola = "#2A7CA3";
var azulSegundaBola = "#277aa1";
var azulTerceraBola = "#4085A6";
var azulCuartaBola = "#60BED6";
var azulQuintaBola = ["#94D4E2", "#9ED5E4", "#BFE4EC", "#F3FBFC", "white"];

var posX = 0;
var posX2 = 0;
var posXX = 0;
var posXX2 = 0;

var posChunga = 1000;

var direccion = 0;
var direccion2 = 0;
var delay = 0;
var vete = 0;

// var vel1 = 0.00905
// var vel2 =  0.009

var vel1 = 0.0905
var vel2 = 0.09

var ySeMarcho, paraLluvia, boleadora;

function tormenta() {

    // txell
    // tendremos que ajustar de donde vienen para que no se haga muy lento... 
    /* posX = -80 * unit;
    posX2 = -80 * unit;
    posXX = 80 * unit;
    posXX2 = 80 * unit; */

    posX = limit - 120 * unit;
    posX2 = limit - 120 * unit;
    posXX = limit - 82 * unit;
    posXX2 = limit - 82 * unit;

    // txell
    posChunga = posFINAL
    // posChunga = 1000

    // alert("tormenta")

    let lluvia = setInterval(() => {
        //posX2 += 0.00905 * unit;
        //posXX2 -= 0.009 * unit;
        posX2 += vel1 * unit;
        posXX2 -= vel2 * unit;

        /* console.log("posX " + posX)
        console.log("posX2 " + posX2)
        console.log("posXX " + posXX)
        console.log("posXX2 " + posXX2)*/

        delay++;
        if (posX2 + posChunga >= -3 * unit + posChunga && posXX2 + posChunga <= 3 * unit + posChunga) {
            // txell
            // en lugar de llover tinenen que aparecer los rayos
            rayos();

            stoping = setInterval(function () {
                tiempoRayos++;
                // console.log(tiempoRayos)
            }, 1000);

            clearInterval(lluvia);
            clearInterval(boleadora);
        }
    })
    boleadora = setInterval(bolaBoleadora, 1, false, "linea 74");
}

function rectangulo() {
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.moveTo(0, 0 * unit);
    ctx.lineTo(canvas.width, 0 * unit);
    ctx.lineTo(canvas.width, 20 * unit);
    ctx.lineTo(0 * unit, 20 * unit);
    ctx.lineTo(0, 0 * unit);
    ctx.fill();
    ctx.closePath();
}

//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
function bolaBoleadora(fija, llamada) {
    // console.log("BOLABOLEADORA " + fija + " " + llamada)
    // rectangulo();
    fondo()

    ctx.save();

    if (!fija) {
        // txell
        // if (direccion == 0) posX += (0.00905 * unit);
        if (direccion == 0) posX += (vel1 * unit);
        // if (posX >= -4 * unit) direccion = 1;
        // if (vete == 1) posX -= (0.00925 * unit);
        if (vete == 1) posX -= (vel2 * unit);

        // txell
        // if (direccion2 == 0) posXX -= (0.009 * unit);
        if (direccion2 == 0) posXX -= (vel2 * unit);
        // if (posXX <= 4 * unit) direccion2 = 1;
        // if (vete == 1) posXX += (0.00925 * unit);
        if (vete == 1) posXX += (vel2 * unit);


// FALTARÁ PARAR LAS NUBES
        if(vete==1 && posX < limit - 120 * unit) {
            // console.log("VEEETEEE " + posX)
            clearInterval(ySeMarcho)
            // drawHearts(posChunga - 12*unit)
            setInterval(drawHeart, 1000, posChunga - 12*unit)
        }

        // console.log(posXX - posX)
        if (posXX - posX < 10 * unit) {
            direccion = 1;
            direccion2 = 1;
        }
    } else {
        // console.log("bolaBoleadora FIIJAAAA " + posX)
    }

    // BOLA A LA IZQUIERDA DEL TODO
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = azulCuartaBola;
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(2.5 * unit + posX + posChunga, 14.8 * unit - (10 * unit), 1.5 * unit, 1.3 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = azulSegundaBola;
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(2.55 * unit + posX + posChunga, 14.75 * unit - (10 * unit), 1.45 * unit, 1.25 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = azulTerceraBola;
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(2.55 * unit + posX + posChunga, 14.55 * unit - (10 * unit), 1.45 * unit, 1.05 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = azulCuartaBola;
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(2.55 * unit + posX + posChunga, 14.45 * unit - (10 * unit), 1.4 * unit, 0.95 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    grad3 = ctx.createRadialGradient(2.5 * unit + posX + posChunga, 14.5 * unit - (10 * unit), 1.3 * unit, 3 * unit + posX + posChunga, 15.8 * unit - (10 * unit), 1.1 * unit); //gradiente2
    grad3.addColorStop(1, "#94D4E2");
    grad3.addColorStop(0.75, "#9ED5E4");
    grad3.addColorStop(0.5, "#BFE4EC");
    grad3.addColorStop(0.25, "#F3FBFC");
    grad3.addColorStop(0, "white");
    ctx.lineWidth = 1;
    ctx.fillStyle = grad3; // color=gradiente
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(2.5 * unit + posX + posChunga, 14.5 * unit - (10 * unit), 1.3 * unit, 0.9 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    // BOLA ARRIBA DEL TODO
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = azulCuartaBola;
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(8.3 * unit + posX + posChunga, 12.7 * unit - (10 * unit), 2.25 * unit, 1.85 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();


    ctx.beginPath();
    grad3 = ctx.createRadialGradient(8.15 * unit + posX + posChunga, 12.5 * unit - (10 * unit), 1.7 * unit, 9 * unit + posX + posChunga, 12.5 * unit - (10 * unit), 1.5 * unit); //gradiente2
    grad3.addColorStop(1, "#94D4E2");
    grad3.addColorStop(0.75, "#9ED5E4");
    grad3.addColorStop(0.5, "#BFE4EC");
    grad3.addColorStop(0.25, "#F3FBFC");
    grad3.addColorStop(0, "white");
    ctx.lineWidth = 1;
    ctx.fillStyle = grad3; // color=gradiente
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(8.15 * unit + posX + posChunga, 12.8 * unit - (10 * unit), 2.1 * unit, 1.85 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    // BOLA A LA IZQUIERDA ARRIBA
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = azulCuartaBola;
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(5.55 * unit + posX + posChunga, 13.7 * unit - (10 * unit), 2.15 * unit, 1.85 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    grad3 = ctx.createRadialGradient(5.7 * unit + posX + posChunga, 13.8 * unit - (10 * unit), 2 * unit, 6.5 * unit + posX + posChunga, 13.5 * unit - (10 * unit), 1.5 * unit); //gradiente2
    grad3.addColorStop(1, "#94D4E2");
    grad3.addColorStop(0.75, "#9ED5E4");
    grad3.addColorStop(0.5, "#BFE4EC");
    grad3.addColorStop(0.25, "#F3FBFC");
    grad3.addColorStop(0, "white");
    ctx.lineWidth = 1;
    ctx.fillStyle = grad3; // color=gradiente
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(5.5 * unit + posX + posChunga, 13.8 * unit - (10 * unit), 2 * unit, 1.85 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    // BOLA PEQUEÑA A LA IZQUIERDA
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = azulCuartaBola;
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(5.6 * unit + posX + posChunga, 14.05 * unit - (10 * unit), 0.9 * unit, 0.9 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    grad3 = ctx.createRadialGradient(5.45 * unit + posX + posChunga, 14.07 * unit - (10 * unit), 0.9 * unit, 6.5 * unit + posX + posChunga, 13.5 * unit - (10 * unit), 0.5 * unit); //gradiente2
    grad3.addColorStop(1, "#94D4E2");
    grad3.addColorStop(0.75, "#9ED5E4");
    grad3.addColorStop(0.5, "#BFE4EC");
    grad3.addColorStop(0.25, "#F3FBFC");
    grad3.addColorStop(0, "white");
    ctx.lineWidth = 1;
    ctx.fillStyle = grad3; // color=gradiente
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(5.45 * unit + posX + posChunga, 14.07 * unit - (10 * unit), 0.75 * unit, 0.9 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    // BOLA GORDA DEL FINAL
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = "#76CCDF";
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(11 * unit + posX + posChunga, 14.8 * unit - (10 * unit), 3 * unit, 2.6 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = azulSegundaBola;
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(10.95 * unit + posX + posChunga, 14.8 * unit - (10 * unit), 2.95 * unit, 2.45 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = azulTerceraBola;
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(10.85 * unit + posX + posChunga, 14.65 * unit - (10 * unit), 2.85 * unit, 2.35 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = "#3284AB";
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(10.85 * unit + posX + posChunga, 14.5 * unit - (10 * unit), 2.7 * unit, 2.2 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = "#73AEC8";
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(10.75 * unit + posX + posChunga, 14.3 * unit - (10 * unit), 2.6 * unit, 2 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    grad3 = ctx.createRadialGradient(10.75 * unit + posX + posChunga, 14 * unit - (10 * unit), 1.8 * unit, 12 * unit + posX + posChunga, 14.4 * unit - (10 * unit), 1.7 * unit); //gradiente2
    grad3.addColorStop(1, "#94D4E2");
    grad3.addColorStop(0.75, "#9ED5E4");
    grad3.addColorStop(0.5, "#BFE4EC");
    grad3.addColorStop(0.25, "#F3FBFC");
    grad3.addColorStop(0, "white");
    ctx.lineWidth = 1;
    ctx.fillStyle = grad3; // color=gradiente
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(10.7 * unit + posX + posChunga, 14 * unit - (10 * unit), 2.4 * unit, 1.7 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    // BOLA DOS A LA IZQUIERDA DE LA PRINCIPAL
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = azulCuartaBola;
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(4.38 * unit + posX + posChunga, 15.65 * unit - (10 * unit), 2.2 * unit, 1.9 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = azulSegundaBola;
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(4.40 * unit + posX + posChunga, 15.6 * unit - (10 * unit), 2.17 * unit, 1.8 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = azulTerceraBola;
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(4.42 * unit + posX + posChunga, 15.4 * unit - (10 * unit), 2 * unit, 1.6 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = azulCuartaBola;
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(4.33 * unit + posX + posChunga, 15.25 * unit - (10 * unit), 1.9 * unit, 1.5 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    grad3 = ctx.createRadialGradient(4.38 * unit + posX + posChunga, 15.1 * unit - (10 * unit), 1.85 * unit, 5 * unit + posX + posChunga, 17.5 * unit - (10 * unit), 1.75 * unit); //gradiente2
    grad3.addColorStop(1, "#94D4E2");
    grad3.addColorStop(0.75, "#9ED5E4");
    grad3.addColorStop(0.5, "#BFE4EC");
    grad3.addColorStop(0.25, "white");
    grad3.addColorStop(0, "white");
    ctx.lineWidth = 1;
    ctx.fillStyle = grad3; // color=gradiente
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(4.38 * unit + posX + posChunga, 15.1 * unit - (10 * unit), 1.85 * unit, 1.3 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    // BOLA DELANTERA JUSTO ARRIBA DE LA PRINCIPAL
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = "#4ABED9";
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(8.3 * unit + posX + posChunga, 15 * unit - (10 * unit), 2.7 * unit, 2.55 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = "#9BD8E3";
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(8.2 * unit + posX + posChunga, 15 * unit - (10 * unit), 2.6 * unit, 2.45 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = "#6BBACE";
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(8.1 * unit + posX + posChunga, 15 * unit - (10 * unit), 2.5 * unit, 2.45 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = azulCuartaBola;
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(8 * unit + posX + posChunga, 15 * unit - (10 * unit), 2.35 * unit, 2.5 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    grad3 = ctx.createRadialGradient(8 * unit + posX + posChunga, 14.5 * unit - (10 * unit), 2 * unit, 9.5 * unit + posX + posChunga, 15 * unit - (10 * unit), 2.5 * unit); //gradiente2
    grad3.addColorStop(1, "#94D4E2");
    grad3.addColorStop(0.75, "#9ED5E4");
    grad3.addColorStop(0.5, "#BFE4EC");
    grad3.addColorStop(0.25, "#F3FBFC");
    grad3.addColorStop(0, "white");
    ctx.lineWidth = 1;
    ctx.fillStyle = grad3; // color=gradiente
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(8.05 * unit + posX + posChunga, 15 * unit - (10 * unit), 2.35 * unit, 2.5 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    // BOLA DELANTERA IZQUIERDA
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = azulCuartaBola;
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(6.45 * unit + posX + posChunga, 16.3 * unit - (10 * unit), 1.7 * unit, 1.55 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = azulSegundaBola;
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(6.45 * unit + posX + posChunga, 16.26 * unit - (10 * unit), 1.7 * unit, 1.47 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = azulTerceraBola;
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(6.5 * unit + posX + posChunga, 16.1 * unit - (10 * unit), 1.6 * unit, 1.3 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = azulCuartaBola;
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(6.5 * unit + posX + posChunga, 15.94 * unit - (10 * unit), 1.6 * unit, 1.1 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    grad3 = ctx.createRadialGradient(6.5 * unit + posX + posChunga, 15.85 * unit - (10 * unit), 1.45 * unit, 7 * unit + posX + posChunga, 17 * unit - (10 * unit), 1.2 * unit); //gradiente2
    grad3.addColorStop(1, "#94D4E2");
    grad3.addColorStop(0.75, "#9ED5E4");
    grad3.addColorStop(0.5, "#BFE4EC");
    grad3.addColorStop(0.25, "white");
    grad3.addColorStop(0, "white");
    ctx.lineWidth = 1;
    ctx.fillStyle = grad3; // color=gradiente
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(6.5 * unit + posX + posChunga, 15.85 * unit - (10 * unit), 1.45 * unit, 1.05 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    // BOLA DELANTERA DERECHA
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = "#56C0D9";
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(10.8 * unit + posX + posChunga, 15.2 * unit - (10 * unit), 0.9 * unit, 0.8 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = azulSegundaBola;
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(10.9 * unit + posX + posChunga, 15.25 * unit - (10 * unit), 0.7 * unit, 0.75 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = azulTerceraBola;
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(10.8 * unit + posX + posChunga, 15.25 * unit - (10 * unit), 0.6 * unit, 0.75 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = azulCuartaBola;
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(10.8 * unit + posX + posChunga, 15.15 * unit - (10 * unit), 0.6 * unit, 0.65 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    grad3 = ctx.createRadialGradient(10.8 * unit + posX + posChunga, 15 * unit - (10 * unit), 0.6 * unit, 11.2 * unit + posX + posChunga, 15.05 * unit - (10 * unit), 0.5 * unit); //gradiente2
    grad3.addColorStop(1, "#94D4E2");
    grad3.addColorStop(0.75, "#9ED5E4");
    grad3.addColorStop(0.5, "#BFE4EC");
    grad3.addColorStop(0.25, "#F3FBFC");
    grad3.addColorStop(0, "white");
    ctx.lineWidth = 1;
    ctx.fillStyle = grad3; // color=gradiente
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(10.8 * unit + posX + posChunga, 15 * unit - (10 * unit), 0.6 * unit, 0.6 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    // BOLA PRINCIPAL DELANTE
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = azulCuartaBola;
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(9.05 * unit + posX + posChunga, 16.11 * unit - (10 * unit), 2.1 * unit, 1.86 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = azulSegundaBola;
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(9.05 * unit + posX + posChunga, 16.13 * unit - (10 * unit), 2.1 * unit, 1.73 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = azulTerceraBola;
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(9 * unit + posX + posChunga, 15.95 * unit - (10 * unit), 2 * unit, 1.6 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = azulCuartaBola;
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(8.87 * unit + posX + posChunga, 15.8 * unit - (10 * unit), 1.85 * unit, 1.4 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    grad3 = ctx.createRadialGradient(8.9 * unit + posX + posChunga, 15.58 * unit - (10 * unit), 1.7 * unit, 9.5 * unit + posX + posChunga, 16.7 * unit - (10 * unit), 1.9 * unit); //gradiente2
    grad3.addColorStop(1, "#94D4E2");
    grad3.addColorStop(0.75, "#9ED5E4");
    grad3.addColorStop(0.5, "#F3FBFC");
    grad3.addColorStop(0, "#F4FBFC");
    ctx.lineWidth = 1;
    ctx.fillStyle = grad3; // color=gradiente
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(8.9 * unit + posX + posChunga, 15.58 * unit - (10 * unit), 1.7 * unit, 1.3 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    //SEGUNDA NUBE 

    // BOLA A LA IZQUIERDA DEL TODO
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = azulCuartaBola;
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(2.5 * unit + posXX + posChunga, 14.8 * unit - (10 * unit), 1.5 * unit, 1.3 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = azulSegundaBola;
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(2.55 * unit + posXX + posChunga, 14.75 * unit - (10 * unit), 1.45 * unit, 1.25 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = azulTerceraBola;
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(2.55 * unit + posXX + posChunga, 14.55 * unit - (10 * unit), 1.45 * unit, 1.05 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = azulCuartaBola;
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(2.55 * unit + posXX + posChunga, 14.45 * unit - (10 * unit), 1.4 * unit, 0.95 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    grad3 = ctx.createRadialGradient(2.5 * unit + posXX + posChunga, 14.5 * unit - (10 * unit), 1.3 * unit, 3 * unit + posXX + posChunga, 15.8 * unit - (10 * unit), 1.1 * unit); //gradiente2
    grad3.addColorStop(1, "#94D4E2");
    grad3.addColorStop(0.75, "#9ED5E4");
    grad3.addColorStop(0.5, "#BFE4EC");
    grad3.addColorStop(0.25, "#F3FBFC");
    grad3.addColorStop(0, "white");
    ctx.lineWidth = 1;
    ctx.fillStyle = grad3; // color=gradiente
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(2.5 * unit + posXX + posChunga, 14.5 * unit - (10 * unit), 1.3 * unit, 0.9 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    // BOLA ARRIBA DEL TODO
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = azulCuartaBola;
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(8.3 * unit + posXX + posChunga, 12.7 * unit - (10 * unit), 2.25 * unit, 1.85 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();


    ctx.beginPath();
    grad3 = ctx.createRadialGradient(8.15 * unit + posXX + posChunga, 12.5 * unit - (10 * unit), 1.7 * unit, 9 * unit + posXX + posChunga, 12.5 * unit - (10 * unit), 1.5 * unit); //gradiente2
    grad3.addColorStop(1, "#94D4E2");
    grad3.addColorStop(0.75, "#9ED5E4");
    grad3.addColorStop(0.5, "#BFE4EC");
    grad3.addColorStop(0.25, "#F3FBFC");
    grad3.addColorStop(0, "white");
    ctx.lineWidth = 1;
    ctx.fillStyle = grad3; // color=gradiente
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(8.15 * unit + posXX + posChunga, 12.8 * unit - (10 * unit), 2.1 * unit, 1.85 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    // BOLA A LA IZQUIERDA ARRIBA
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = azulCuartaBola;
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(5.55 * unit + posXX + posChunga, 13.7 * unit - (10 * unit), 2.15 * unit, 1.85 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    grad3 = ctx.createRadialGradient(5.7 * unit + posXX + posChunga, 13.8 * unit - (10 * unit), 2 * unit, 6.5 * unit + posXX + posChunga, 13.5 * unit - (10 * unit), 1.5 * unit); //gradiente2
    grad3.addColorStop(1, "#94D4E2");
    grad3.addColorStop(0.75, "#9ED5E4");
    grad3.addColorStop(0.5, "#BFE4EC");
    grad3.addColorStop(0.25, "#F3FBFC");
    grad3.addColorStop(0, "white");
    ctx.lineWidth = 1;
    ctx.fillStyle = grad3; // color=gradiente
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(5.5 * unit + posXX + posChunga, 13.8 * unit - (10 * unit), 2 * unit, 1.85 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    // BOLA PEQUEÑA A LA IZQUIERDA
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = azulCuartaBola;
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(5.6 * unit + posXX + posChunga, 14.05 * unit - (10 * unit), 0.9 * unit, 0.9 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    grad3 = ctx.createRadialGradient(5.45 * unit + posXX + posChunga, 14.07 * unit - (10 * unit), 0.9 * unit, 6.5 * unit + posXX + posChunga, 13.5 * unit - (10 * unit), 0.5 * unit); //gradiente2
    grad3.addColorStop(1, "#94D4E2");
    grad3.addColorStop(0.75, "#9ED5E4");
    grad3.addColorStop(0.5, "#BFE4EC");
    grad3.addColorStop(0.25, "#F3FBFC");
    grad3.addColorStop(0, "white");
    ctx.lineWidth = 1;
    ctx.fillStyle = grad3; // color=gradiente
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(5.45 * unit + posXX + posChunga, 14.07 * unit - (10 * unit), 0.75 * unit, 0.9 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    // BOLA GORDA DEL FINAL
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = "#76CCDF";
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(11 * unit + posXX + posChunga, 14.8 * unit - (10 * unit), 3 * unit, 2.6 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = azulSegundaBola;
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(10.95 * unit + posXX + posChunga, 14.8 * unit - (10 * unit), 2.95 * unit, 2.45 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = azulTerceraBola;
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(10.85 * unit + posXX + posChunga, 14.65 * unit - (10 * unit), 2.85 * unit, 2.35 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = "#3284AB";
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(10.85 * unit + posXX + posChunga, 14.5 * unit - (10 * unit), 2.7 * unit, 2.2 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = "#73AEC8";
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(10.75 * unit + posXX + posChunga, 14.3 * unit - (10 * unit), 2.6 * unit, 2 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    grad3 = ctx.createRadialGradient(10.75 * unit + posXX + posChunga, 14 * unit - (10 * unit), 1.8 * unit, 12 * unit + posXX + posChunga, 14.4 * unit - (10 * unit), 1.7 * unit); //gradiente2
    grad3.addColorStop(1, "#94D4E2");
    grad3.addColorStop(0.75, "#9ED5E4");
    grad3.addColorStop(0.5, "#BFE4EC");
    grad3.addColorStop(0.25, "#F3FBFC");
    grad3.addColorStop(0, "white");
    ctx.lineWidth = 1;
    ctx.fillStyle = grad3; // color=gradiente
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(10.7 * unit + posXX + posChunga, 14 * unit - (10 * unit), 2.4 * unit, 1.7 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    // BOLA DOS A LA IZQUIERDA DE LA PRINCIPAL
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = azulCuartaBola;
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(4.38 * unit + posXX + posChunga, 15.65 * unit - (10 * unit), 2.2 * unit, 1.9 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = azulSegundaBola;
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(4.40 * unit + posXX + posChunga, 15.6 * unit - (10 * unit), 2.17 * unit, 1.8 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = azulTerceraBola;
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(4.42 * unit + posXX + posChunga, 15.4 * unit - (10 * unit), 2 * unit, 1.6 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = azulCuartaBola;
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(4.33 * unit + posXX + posChunga, 15.25 * unit - (10 * unit), 1.9 * unit, 1.5 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    grad3 = ctx.createRadialGradient(4.38 * unit + posXX + posChunga, 15.1 * unit - (10 * unit), 1.85 * unit, 5 * unit + posXX + posChunga, 17.5 * unit - (10 * unit), 1.75 * unit); //gradiente2
    grad3.addColorStop(1, "#94D4E2");
    grad3.addColorStop(0.75, "#9ED5E4");
    grad3.addColorStop(0.5, "#BFE4EC");
    grad3.addColorStop(0.25, "white");
    grad3.addColorStop(0, "white");
    ctx.lineWidth = 1;
    ctx.fillStyle = grad3; // color=gradiente
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(4.38 * unit + posXX + posChunga, 15.1 * unit - (10 * unit), 1.85 * unit, 1.3 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    // BOLA DELANTERA JUSTO ARRIBA DE LA PRINCIPAL
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = "#4ABED9";
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(8.3 * unit + posXX + posChunga, 15 * unit - (10 * unit), 2.7 * unit, 2.55 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = "#9BD8E3";
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(8.2 * unit + posXX + posChunga, 15 * unit - (10 * unit), 2.6 * unit, 2.45 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = "#6BBACE";
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(8.1 * unit + posXX + posChunga, 15 * unit - (10 * unit), 2.5 * unit, 2.45 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = azulCuartaBola;
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(8 * unit + posXX + posChunga, 15 * unit - (10 * unit), 2.35 * unit, 2.5 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    grad3 = ctx.createRadialGradient(8 * unit + posXX + posChunga, 14.5 * unit - (10 * unit), 2 * unit, 9.5 * unit + posXX + posChunga, 15 * unit - (10 * unit), 2.5 * unit); //gradiente2
    grad3.addColorStop(1, "#94D4E2");
    grad3.addColorStop(0.75, "#9ED5E4");
    grad3.addColorStop(0.5, "#BFE4EC");
    grad3.addColorStop(0.25, "#F3FBFC");
    grad3.addColorStop(0, "white");
    ctx.lineWidth = 1;
    ctx.fillStyle = grad3; // color=gradiente
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(8.05 * unit + posXX + posChunga, 15 * unit - (10 * unit), 2.35 * unit, 2.5 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    // BOLA DELANTERA IZQUIERDA
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = azulCuartaBola;
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(6.45 * unit + posXX + posChunga, 16.3 * unit - (10 * unit), 1.7 * unit, 1.55 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = azulSegundaBola;
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(6.45 * unit + posXX + posChunga, 16.26 * unit - (10 * unit), 1.7 * unit, 1.47 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = azulTerceraBola;
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(6.5 * unit + posXX + posChunga, 16.1 * unit - (10 * unit), 1.6 * unit, 1.3 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = azulCuartaBola;
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(6.5 * unit + posXX + posChunga, 15.94 * unit - (10 * unit), 1.6 * unit, 1.1 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    grad3 = ctx.createRadialGradient(6.5 * unit + posXX + posChunga, 15.85 * unit - (10 * unit), 1.45 * unit, 7 * unit + posXX + posChunga, 17 * unit - (10 * unit), 1.2 * unit); //gradiente2
    grad3.addColorStop(1, "#94D4E2");
    grad3.addColorStop(0.75, "#9ED5E4");
    grad3.addColorStop(0.5, "#BFE4EC");
    grad3.addColorStop(0.25, "white");
    grad3.addColorStop(0, "white");
    ctx.lineWidth = 1;
    ctx.fillStyle = grad3; // color=gradiente
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(6.5 * unit + posXX + posChunga, 15.85 * unit - (10 * unit), 1.45 * unit, 1.05 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    // BOLA DELANTERA DERECHA
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = "#56C0D9";
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(10.8 * unit + posXX + posChunga, 15.2 * unit - (10 * unit), 0.9 * unit, 0.8 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = azulSegundaBola;
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(10.9 * unit + posXX + posChunga, 15.25 * unit - (10 * unit), 0.7 * unit, 0.75 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = azulTerceraBola;
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(10.8 * unit + posXX + posChunga, 15.25 * unit - (10 * unit), 0.6 * unit, 0.75 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = azulCuartaBola;
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(10.8 * unit + posXX + posChunga, 15.15 * unit - (10 * unit), 0.6 * unit, 0.65 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    grad3 = ctx.createRadialGradient(10.8 * unit + posXX + posChunga, 15 * unit - (10 * unit), 0.6 * unit, 11.2 * unit + posXX + posChunga, 15.05 * unit - (10 * unit), 0.5 * unit); //gradiente2
    grad3.addColorStop(1, "#94D4E2");
    grad3.addColorStop(0.75, "#9ED5E4");
    grad3.addColorStop(0.5, "#BFE4EC");
    grad3.addColorStop(0.25, "#F3FBFC");
    grad3.addColorStop(0, "white");
    ctx.lineWidth = 1;
    ctx.fillStyle = grad3; // color=gradiente
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(10.8 * unit + posXX + posChunga, 15 * unit - (10 * unit), 0.6 * unit, 0.6 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    // BOLA PRINCIPAL DELANTE
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = azulCuartaBola;
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(9.05 * unit + posXX + posChunga, 16.11 * unit - (10 * unit), 2.1 * unit, 1.86 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = azulSegundaBola;
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(9.05 * unit + posXX + posChunga, 16.13 * unit - (10 * unit), 2.1 * unit, 1.73 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = azulTerceraBola;
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(9 * unit + posXX + posChunga, 15.95 * unit - (10 * unit), 2 * unit, 1.6 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = azulCuartaBola;
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(8.87 * unit + posXX + posChunga, 15.8 * unit - (10 * unit), 1.85 * unit, 1.4 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    grad3 = ctx.createRadialGradient(8.9 * unit + posXX + posChunga, 15.58 * unit - (10 * unit), 1.7 * unit, 9.5 * unit + posXX + posChunga, 16.7 * unit - (10 * unit), 1.9 * unit); //gradiente2
    grad3.addColorStop(1, "#94D4E2");
    grad3.addColorStop(0.75, "#9ED5E4");
    grad3.addColorStop(0.5, "#F3FBFC");
    grad3.addColorStop(0, "#F4FBFC");
    ctx.lineWidth = 1;
    ctx.fillStyle = grad3; // color=gradiente
    // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
    ctx.ellipse(8.9 * unit + posXX + posChunga, 15.58 * unit - (10 * unit), 1.7 * unit, 1.3 * unit, 0, (-0.5) * Math.PI, Math.PI * 1.5);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.closePath();

    ctx.restore();
}


function rain() {
    // canvas.style.top = 0;
    // canvas.style.zIndex = 1000;
    
    var num = 0;

    const getRandomNumber = (min, max) =>
        Math.floor(Math.random() * ((max) - min)) + min;

    class Heart {
        constructor() {
            this.scale = 0.2;
            this.x = getRandomNumber(0 * unit + posChunga - 10 * unit, 15 * unit + posChunga);
            this.y = getRandomNumber(5 * unit, 7.4 * unit);
            this.speedX = getRandomNumber(-4, 4) / 5;
            this.speedY = getRandomNumber(1, 5);
            this.cont = 5;
            num++;
        }
        reset = () => {
            if (this.y > canvas.height) {
                this.y = 7.4 * unit;
                this.x = getRandomNumber(1 * unit + posChunga - 10 * unit, 14 * unit + posChunga);
                this.speedY = getRandomNumber(1, 5);
                this.cont--;
                num++;
            }
        };
        move = () => {
            this.y += this.speedY;
            this.speedX += 0.02;
            this.x += Math.cos(this.speedX);
        };
        draw = () => {
            if (this.cont > 0) {
                this.move();
                this.reset();
                ctx.fillStyle = "rgba(0, 0, 0, 0)";
                if (this.y >= 7.5 * unit) {
                    ctx.fillStyle = "red";
                }
                ctx.beginPath();

                ctx.moveTo(75 * this.scale + this.x, 40 * this.scale + this.y);
                ctx.bezierCurveTo(75 * this.scale + this.x, 37 * this.scale + this.y, 70 * this.scale + this.x, 25 * this.scale + this.y, 50 * this.scale + this.x, 25 * this.scale + this.y);
                ctx.bezierCurveTo(20 * this.scale + this.x, 25 * this.scale + this.y, 20 * this.scale + this.x, 62.5 * this.scale + this.y, 20 * this.scale + this.x, 62.5 * this.scale + this.y);
                ctx.bezierCurveTo(20 * this.scale + this.x, 80 * this.scale + this.y, 40 * this.scale + this.x, 102 * this.scale + this.y, 75 * this.scale + this.x, 120 * this.scale + this.y);
                ctx.bezierCurveTo(110 * this.scale + this.x, 102 * this.scale + this.y, 130 * this.scale + this.x, 80 * this.scale + this.y, 130 * this.scale + this.x, 62.5 * this.scale + this.y);
                ctx.bezierCurveTo(130 * this.scale + this.x, 62.5 * this.scale + this.y, 130 * this.scale + this.x, 25 * this.scale + this.y, 100 * this.scale + this.x, 25 * this.scale + this.y);
                ctx.bezierCurveTo(85 * this.scale + this.x, 25 * this.scale + this.y, 75 * this.scale + this.x, 37 * this.scale + this.y, 75 * this.scale + this.x, 40 * this.scale + this.y);

                ctx.fill();
                ctx.closePath();
            }
            if (num == 300) {
                vete = 1;
                clearInterval(paraLluvia)
            } 
        };
    }

    const generateHearts = () => Array.from({ length: 50 }, () => new Heart());
    const hearts = generateHearts();

    const rainHearts = () => {
        bolaBoleadora(true, "rainHearts")
        hearts.forEach((heart) => heart.draw());
    };

    paraLluvia = setInterval(rainHearts, 10)

/* 
    const update = () => {
        ctx.fillStyle = "#323232";
        rainHearts();
        requestAnimationFrame(update);
    };

    update();
*/
}

setTimeout(() => {
    // console.log("Y SE MARCHOOOOOOOOOOO")
    ySeMarcho = setInterval(bolaBoleadora, 1, false, "MARCHO")
}, 60 * 1000)

