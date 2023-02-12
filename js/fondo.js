

function suelo0(posX) {
    ctx.fillStyle = "#8ec416";
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 3/40*unit;
    ctx.beginPath();
    ctx.moveTo(posX + 0, h - unit * 5);
    for (posX = 0; posX < posFINAL + unit * 15; posX += 20 * unit) {
        ctx.quadraticCurveTo(posX + unit * 4, unit * 13, posX + unit * 10, h - unit * 5);
        ctx.quadraticCurveTo(posX + unit * 16, unit * 17, posX + unit * 20, h - unit * 5);
    }
    ctx.lineTo(posX + unit * 20, h);
    ctx.lineTo(0, h);
    ctx.lineTo(0, h - unit * 5);

    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}


function suelo1(posX) {
    ctx.fillStyle = "#518000";
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2/40*unit;
    ctx.beginPath();
    ctx.moveTo(posX + 0, h - unit * 3);
    for (posX = 0; posX < posFINAL + unit * 10; posX += 29 * unit) {
        ctx.quadraticCurveTo(posX + unit * 5, unit * 15.5, posX + unit * 10, h - unit * 3);
        ctx.quadraticCurveTo(posX + unit * 19, unit * 19.5, posX + unit * 29, h - unit * 3);
    }
    ctx.lineTo(posX + unit * 20, h);
    ctx.lineTo(0, h);
    ctx.lineTo(0, h - unit * 5);

    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

function suelo2(posX) {
    ctx.fillStyle = "#9eba00";
    ctx.beginPath();
    ctx.moveTo(posX + 0, h - unit * 3);
    for (posX = 0; posX < posFINAL + unit * 10; posX += 44 * unit) {
        ctx.quadraticCurveTo(posX + unit * 2, unit * 16.5, posX + unit * 5, h - unit * 3);
        ctx.quadraticCurveTo(posX + unit * 24, unit * 20.5, posX + unit * 44, h - unit * 3);
    }
    ctx.lineTo(posX + unit * 20, h);
    ctx.lineTo(0, h);
    ctx.lineTo(0, h - unit * 5);

    ctx.fill();
    // ctx.stroke();
    ctx.closePath();
}

function suelo3(posX) {
    let desp = 10/40*unit;
    ctx.strokeStyle = "white";
    ctx.lineWidth = 5/40*unit
    ctx.beginPath();
    ctx.moveTo(posX + desp, h - unit * 3);
    for (posX = 0; posX < posFINAL + unit * 10; posX += 44 * unit) {
        ctx.quadraticCurveTo(posX + desp + unit * 2, unit * 16.5,
            posX + desp + unit * 5, h - unit * 3);
        ctx.quadraticCurveTo(posX + desp + unit * 24, unit * 20.5,
            posX + desp + unit * 44, h - unit * 3);
    }
    // ctx.lineTo(posX + 10 + unit * 20, h);
    // ctx.lineTo(0, h);
    // ctx.lineTo(0, h - unit *5);

    ctx.stroke();
    ctx.closePath();
}

function nubes() {
    ctx.fillStyle = "#fafafa";
    for (i = 0; i < posFINAL + unit * 10; i += 20 * unit) {
        let random = Math.floor(Math.random() * 120);
        ctx.beginPath();
        ctx.arc(10 + i, random, 80, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(88 + i, random + 20, 46, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(142 + i, random - 1, 30, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(200 + i, random + 10, 62, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(142 + i, random + 40, 25, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(265 + i, random, 44, 0, Math.PI * 2, true);
    }
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "#fafafa";
    for (i = 10 * unit; i < posFINAL + unit * 10; i += 20 * unit) {
        let random = Math.floor(Math.random() * 500);
        ctx.beginPath();
        ctx.arc(10 + i, random, 80, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(88 + i, random + 20, 46, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(142 + i, random - 1, 30, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(200 + i, random + 10, 62, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(142 + i, random + 40, 25, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(265 + i, random, 44, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(265 + i, random, 44, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(315 + i, random, 23, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(380 + i, random, 50, 0, Math.PI * 2, true);
    }
    ctx.fill();
    ctx.closePath();
}

function tree1(posX) {

    for (posX = 0; posX < posFINAL + unit * 10; posX += 29 * unit) {
        //TREE 2
        ctx.fillStyle = brown;
        ctx.lineWidth = 10/40*unit;
        ctx.fillRect(posX + unit * 3.45, h - unit * 4.33, 20 / 40 * unit, 25 / 40 * unit);
        ctx.beginPath();
        ctx.fillStyle = green6;
        ctx.ellipse(posX + unit * 3.7, h - unit * 5.1, unit * 0.7, unit * 1, 0, Math.PI * 0.5, Math.PI * 1.5);
        ctx.lineTo(posX + unit * 3.7, h - unit * 5.1)
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = green7;
        ctx.ellipse(posX + unit * 3.7, h - unit * 5.1, unit * 0.7, unit * 1, 0, Math.PI * 1.5, Math.PI * 0.5);
        ctx.lineTo(posX + unit * 3.7, h - unit * 5.1)

        ctx.fill();

        //TREE 3
        ctx.fillStyle = brown;
        ctx.lineWidth = 10/40*unit;
        ctx.fillRect(posX + unit * 5, h - unit * 4.28, 20 / 40 * unit, 20 / 40 * unit);
        ctx.beginPath();
        ctx.fillStyle = green8;
        ctx.ellipse(posX + unit * 5.3, h - unit * 4.3, unit * 0.8, unit * 4, 0, Math.PI * 1, Math.PI * 1.5);
        ctx.lineTo(posX + unit * 5.3, h - unit * 4.3)
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = green9;
        ctx.ellipse(posX + unit * 5.3, h - unit * 4.3, unit * 0.8, unit * 4, 0, Math.PI * 1.5, Math.PI * 2);
        ctx.lineTo(posX + unit * 5.3, h - unit * 4.3)

        ctx.fill();
    }
    for (posX = 0; posX < posFINAL + unit * 10; posX += 44 * unit) {
        //TREE1
        ctx.fillStyle = brown;
        // Y el grueso de la línea
        ctx.lineWidth = 10/40*unit;
        ctx.fillRect(posX + unit * 1.9, h - unit * 4.7, 35 / 40 * unit, 55 / 40 * unit);
        // ctx.strokeRect(x, y, width, height);
        // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
        // Donde:
        //HOJAS
        ctx.beginPath();
        ctx.fillStyle = green4;
        ctx.ellipse(posX + unit * 2.25, h - unit * 4.7, unit * 1.5, unit * 7, 0, Math.PI * 1.5, Math.PI * 2);
        ctx.lineTo(posX + unit * 2.25, h - unit * 4.7)
        // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
        ctx.fill();

        ctx.beginPath();

        ctx.fillStyle = green5;
        ctx.ellipse(posX + unit * 2.25, h - unit * 4.7, unit * 1.5, unit * 7, 0, Math.PI * 1, Math.PI * 1.5);
        ctx.lineTo(posX + unit * 2.25, h - unit * 4.7)
        // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
        ctx.fill();
    }
}

function tree1(posX) {
    // Pararemos antes los arbolitos, para no tener que redibujarlos en la tormenta

    // for (posX = 0; posX < posFINAL + unit * 10; posX += 29 * unit) {
    for (posX = 0; posX < posFINAL - unit*10; posX += 29 * unit) {
        //TREE 2
        ctx.fillStyle = brown;
        ctx.lineWidth = 10/40*unit;
        ctx.fillRect(posX + unit * 3.45, h - unit * 4.3, 20 / 40 * unit, 25 / 40 * unit);
        ctx.beginPath();
        ctx.fillStyle = green6;
        ctx.ellipse(posX + unit * 3.7, h - unit * 5.1, unit * 0.7, unit * 1, 0, Math.PI * 0.5, Math.PI * 1.5);
        ctx.lineTo(posX + unit * 3.7, h - unit * 5.1)
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = green7;
        ctx.ellipse(posX + unit * 3.7, h - unit * 5.1, unit * 0.7, unit * 1, 0, Math.PI * 1.5, Math.PI * 0.5);
        ctx.lineTo(posX + unit * 3.7, h - unit * 5.1)

        ctx.fill();

        //TREE 3
        ctx.fillStyle = brown;
        ctx.lineWidth = 10/40*unit;
        ctx.fillRect(posX + unit * 5, h - unit * 4.4, 20 / 40 * unit, 40 / 40 * unit);
        ctx.beginPath();
        ctx.fillStyle = green8;
        ctx.ellipse(posX + unit * 5.3, h - unit * 4.3, unit * 0.8, unit * 4, 0, Math.PI * 1, Math.PI * 1.5);
        ctx.lineTo(posX + unit * 5.3, h - unit * 4.3)
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = green9;
        ctx.ellipse(posX + unit * 5.3, h - unit * 4.3, unit * 0.8, unit * 4, 0, Math.PI * 1.5, Math.PI * 2);
        ctx.lineTo(posX + unit * 5.3, h - unit * 4.3)

        ctx.fill();
    }
}

function tree0(posX){
    for (posX = 0; posX < posFINAL + unit * 10; posX += 44 * unit) {
        //TREE1
        ctx.fillStyle = brown;
        // Y el grueso de la línea
        ctx.lineWidth = 10/40*unit;
        ctx.fillRect(posX + unit * 1.9, h - unit * 4.75, 35 / 40 * unit, 70 / 40 * unit);
        // ctx.strokeRect(x, y, width, height);
        // ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
        // Donde:
        //HOJAS
        ctx.beginPath();
        ctx.fillStyle = green4;
        ctx.ellipse(posX + unit * 2.25, h - unit * 4.7, unit * 1.5, unit * 7, 0, Math.PI * 1.5, Math.PI * 2);
        ctx.lineTo(posX + unit * 2.25, h - unit * 4.7)
        // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
        ctx.fill();

        ctx.beginPath();

        ctx.fillStyle = green5;
        ctx.ellipse(posX + unit * 2.25, h - unit * 4.7, unit * 1.5, unit * 7, 0, Math.PI * 1, Math.PI * 1.5);
        ctx.lineTo(posX + unit * 2.25, h - unit * 4.7)
        // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
        ctx.fill();
    }
}


function fondo() {

    ctx.fillStyle = grdSky
    ctx.fillRect(0, 0, posFINAL + 20*unit, h); // Si no, en el teléfono se ve mal

    suelo0(0)
    tree1();    
    suelo1(0)
    tree0();
    suelo3(0)
    suelo2(0)

    // nubes()


    drawCarteles()
    drawFlowers()
}

function fondoFINAL() {
    // Para no estar ejecutando las nubes, las flores y los carteles sin parar

    ctx.fillStyle = grdSky
    ctx.fillRect(0, 0, posFINAL + 20*unit, h); // Si no, en el teléfono se ve mal

    suelo0(0)
    // tree1();    
    suelo1(0)
    // tree0();
    suelo3(0)
    suelo2(0)

    // nubes()
    // drawCarteles()
    // drawFlowers()
}