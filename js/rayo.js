

//variables globales
/*let azultormenta= '#102c54';
let minRayo=unit;
let maxRayo=unit*40;
let finalNube=unit*2;*/

var pararRayos;

function rayos() {
    ctx.beginPath()
    ctx.fillStyle = "rgb(10, 10, 10)"
    ctx.fillRect(0, 0, w, h);

    // minRayo = limit + w/2
    // maxRayo = limit + 30*unit + w/2
    // maxRayo = limit + 22*unit


    // minRayo = posFINAL - 10 * unit
    // maxRayo = minRayo + 20 * unit

    minRayo = posFINAL - limit
    maxRayo = minRayo + 40*unit

    // minRayo = 0
    // maxRayo = 22 * unit

    // alert("MIN " + minRayo)
    // alert("MAX " + maxRayo)

    /*
    ctx.beginPath()
    ctx.fillStyle = "red"
    ctx.fillRect(minRayo, 0, maxRayo-minRayo, h)

    ctx.beginPath()
    ctx.fillStyle = "yellow"
    ctx.fillRect(minRayo, 0, maxRayo - minRayo, h)
    */


    fondo();
    // txell, tormenta Miguel
    bolaBoleadora(true, "rayo")
    rayo(50);
}


function rayo(fps) {
    var boltFadeDuration, boltFlashDuration, bolts, height, lastFrame,
        launchBolt, recursiveLaunchBolt, scale, setCanvasSize, totalBoltDuration, width;

    width = 0;
    height = 0;
    scale = 1;

    lastFrame = (new Date()).getTime();

    boltFlashDuration = 1.25;
    boltFadeDuration = 1.5;
    totalBoltDuration = boltFlashDuration + boltFadeDuration;

    bolts = [];

    setCanvasSize = function () {
        width = Math.ceil(w / scale);
        return height = Math.ceil(h / scale);
    };

    // EMPEZAMOS!!!
    window.addEventListener("resize", setCanvasSize);
    setCanvasSize();

    // Lanzar el rayo
    launchBolt = function (x, y, length, direction) {
            
        if (tiempoRayos > 5) {
            clearInterval(pararRayos)
            clearInterval(stoping)
            rain();
        }

        var boltCanvas, boltContext;
        boltCanvas = document.createElement("canvas");

        //cambiar tamaño de los rayos acuña
        //boltCanvas.width= unit*20;
        boltCanvas.width = window.innerWidth;
        boltCanvas.height = window.innerHeight;
        boltContext = boltCanvas.getContext("2d");
        boltContext.scale(scale, scale);

        bolts.push({
            canvas: boltCanvas,
            duration: 0
        });

        // Lanzar!!
        return recursiveLaunchBolt(x, y, length, direction, boltContext);
    };

    recursiveLaunchBolt = function (x, y, length, direction, boltContext) {
        var boltInterval, originalDirection;

        originalDirection = direction;

        // Dibujamos el rayo de forma incremental para obtener un bonito efecto animado.
        return boltInterval = setInterval((function () {
            var alpha, i, x1, y1;
            if (length <= 0) {
                clearInterval(boltInterval);
                return;
            }

            i = 0;
            while (i++ < Math.floor(45 / scale) && length > 0) {
                x1 = Math.floor(x);
                y1 = Math.floor(y);

                x += Math.cos(direction);
                y -= Math.sin(direction);
                length--;
                if (x1 !== Math.floor(x) || y1 !== Math.floor(y)) {
                    alpha = Math.min(1, length / 350);
                    boltContext.fillStyle = "white";
                    boltContext.fillRect(x1, y1, 4, 4);

                    direction = originalDirection + (-Math.PI / 8 + Math.random() * (Math.PI / 4));

                    //RAMAS DEL RAYO acuña
                    if (Math.random() > 0.98) {
                        recursiveLaunchBolt(x1, y1, length * (0.3 + Math.random() * 0.4), originalDirection + (-Math.PI / 6 + Math.random() * (Math.PI / 3)), boltContext);
                    } else if (Math.random() > 0.95) {
                        recursiveLaunchBolt(x1, y1, length, originalDirection + (-Math.PI / 6 + Math.random() * (Math.PI / 3)), boltContext);
                        length = 0;
                    }
                }
            }
            return void 0;
        }), 10);
    };

    //Esto se disparará a una velocidad de fotogramas constante.
    //Artal: pspspsppspspsps
    mediaRayo = (minRayo + maxRayo) / 2;
    var apareceGato = false;
    var catCalling = false;

    drawRayo = function () {

        // console.log("DRAW RAYO")

        var bolt, elapsed, frame, i, j, len, length, x, y;
        //Lleve un registro del tiempo del marco..
        frame = (new Date()).getTime();
        elapsed = (frame - lastFrame) / 1000;
        lastFrame = frame;

        //  Limpiar CANVAS.
        ctx.clearRect(0, 0, w, h);

        //Fondo Acuña
        fondo()
        // txell, tormenta miguel
        bolaBoleadora(true, "drawRayo")

        // Disparar RAYO.
        if (Math.random() > 0.98) {
            //Cambiar tamaño ACUÑA
            // x = Math.floor(-10 + Math.random() * (width + 20));
            x = Math.floor(Math.random() * maxRayo) + minRayo;
            // x=Math.floor(minRayo * (maxRayo + 20));

            // console.log("XXXX - " + x)
            /*  y = Math.floor(5 + Math.random() * (height / 3));
              length = Math.floor(height / 2 + Math.random() * (height / 3));*/

            y = 0;
            length = Math.floor(height / 2 + Math.random() * (height / 3));
            // acuña donde lanza el rayo

            // Mira de cuadrar la y....
            if (y == 0) {
                launchBolt(x, y, length, Math.PI * 3 / 2);
            }
        }

        // Dibujar cada.
        for (i = j = 0, len = bolts.length; j < len; i = ++j) {
            //pspspsps
            catCalling = true;
            bolt = bolts[i];
            bolt.duration += elapsed;

            if (bolt.duration >= totalBoltDuration) {
                bolts.splice(i, 1);
                i--;
                return;
            }

            document.getElementById('canvas').style.opacity = Math.max(0.1, Math.min(1, (totalBoltDuration - bolt.duration) / boltFadeDuration));
            //ctx.globalAlpha = Math.max(0, Math.min(1, (totalBoltDuration - bolt.duration) / boltFadeDuration));
            ctx.drawImage(bolt.canvas, 0, 0);

            //Artal: if aparece gato pues gato aparece
            if (apareceGato) {
                //fondo();
                //nubes();
                // michoPsPs(maxRayo / 2 - (maxRayo / 15), h - (h / 25));
                michoPsPs(minRayo + 10 * unit, h - (h / 25));
            }
        }
        /*if (apareceGato){
            ctx.beginPath();
            staringCat(maxRayo / 2 - (maxRayo / 15), h - (h / 25));
            ctx.closePath();
        }*/
        // Artal: solo si ha pasado por el rayo al menos una vez
        if (catCalling) {
            if (bolts.length == 0) {
                apareceGato = true;
            };
        }
        return void 0;
    };

    pararRayos = setInterval(drawRayo, 2000.0 / fps);
}

function fondoMario() {
    ctx.beginPath()
    ctx.fillStyle = 'azultormenta';
    ctx.fillRect(0, 0, w, h)
    ctx.fill()
}