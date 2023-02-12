// inicia el canvas
let cx, cy;
let scale = 0;


// el algoritmo del corazón
function corazon(r, paso) {
    let puntos = [];
    for (var a = 0; a < 2 * Math.PI; a += paso) {
        let p = {};
        p.x = cx + 16 * r * (Math.sin(a) * Math.sin(a) * Math.sin(a));
        p.y =
            cy -
            13 * r * Math.cos(a) +
            5 * r * Math.cos(2 * a) +
            2 * r * Math.cos(3 * a) +
            1 * r * Math.cos(4 * a);
        puntos.push(p);
    }
    return puntos;
}

function final() {
    scale += 1;

    cx = posFINAL;
    cy = h / 2;

    ctx.lineWidth = 4/40*unit;
    ctx.strokeStyle = black;
    ctx.fillStyle = red;

    // crea un array vacío para guardar los puntos
    let puntos = corazon(scale, 0.05);

    ctx.beginPath();
    ctx.moveTo(puntos[0].x, puntos[0].y);

    puntos.forEach(p => {
        ctx.lineTo(p.x, p.y);
    });
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    ctx.fillStyle = 'white'
    ctx.textAlign = 'center'
    ctx.font = "bold " + (scale * 0.01 * unit) + "px 'Century Gothic'"
    ctx.fillText("FELIZ", posFINAL, h/2)
    ctx.fillText("SAN VALENTÍN", posFINAL, h/2+unit*2)

    if(scale>2*unit)
        clearInterval(lastInterval)
}


