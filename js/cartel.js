
var frases = ['Que te deje crear un server de minecraft', 'Amistad', 'Cariño ', 
            'El amor es confianza y respeto', 'Lealtad ',' Preocupación', 'Amarse', 
            'Sentirse cómod@ con la otra persona', 'Quererse con el corazón', 
            'Que no sea tóxic@', 'Mientras estés al lado mío soy feliz', 
            'Mirarte era soplar velas teniendo el deseo enfrente',
            'El amor es querer a alguien con el corazón', 
            'Sí es amor cuando te apoya y te da libertad', 
            'Me he enamorado cientos de veces, ¡Todas de mi!', 
            'Respetarl@ y quererl@ '];

frases = frases.sort(function () { return Math.random() - 0.5 });

var colorFuera = '#515A5A';
var colorPalo = '#773525'; // perú
var colorDentro = '#D0D3D4';

var maxAltura = 400
var minAltura = 300
var maxLado = 650
var minLado = 540

function drawCarteles() {
    let losLaos = 0;
    for (let index = 0; index <= nCarteles; index++) {
        losLaos += 550/40*unit;
        cartel(losLaos, aPaArriba[index], 1, frases[index], aAlturaCartel[index], aLadoDerecho[index]);
    }
}

function cartel(posX, posY, escala, probarFrase, alturaCartel, ladoDerecho) {

    // var alturaCartel = Math.floor(Math.random() * ((maxAltura + posY) - (minAltura + posY) + 1) + minAltura);
    // var ladoDerecho = Math.floor(Math.random() * ((maxLado + posY) - (minLado + posY) + 1) + minLado);

    // txell
    // var ladoIzquierdo = ladoDerecho - 550;
    var ladoIzquierdo = ladoDerecho - 550/40 * unit;
    //  posX=Math.floor(Math.random() * ((400 + posY) - (300 + posY) + 1) + 300);

    //palo 
    ctx.beginPath();
    ctx.fillStyle = colorPalo;
    ctx.strokeStyle = colorPalo;
    ctx.lineWidth = 5/40*unit
    ctx.moveTo(445/40*unit + posX, 300/40*unit + posY);
    ctx.lineTo(465/40*unit + posX, 300/40*unit + posY);
    ctx.lineTo(465/40*unit + posX, 490/40*unit + posY);
    ctx.lineTo(445/40*unit + posX, 490/40*unit + posY);
    ctx.fill()
    ctx.stroke()
    ctx.closePath();

    //cuadrao
    ctx.beginPath();
    ctx.fillStyle = colorFuera;
    ctx.strokeStyle = colorFuera;
    ctx.lineWidth = 10/40*unit;
    let posX0 = 356/40*unit - ladoIzquierdo + posX
    let posY0 = 200/40*unit + posY
    ctx.moveTo(posX0, posY0);
    ctx.arc(ladoDerecho + posX, 205/40*unit + posY, 5/40*unit, Math.PI * 1.5, Math.PI * 0);
    ctx.arc(ladoDerecho + posX, alturaCartel + posY, 5/40*unit, Math.PI * 0, Math.PI * 0.5);
    ctx.arc(360/40*unit - ladoIzquierdo + posX, alturaCartel + posY, 5/40*unit, Math.PI * 0.5, Math.PI * 1);
    ctx.arc(360/40*unit - ladoIzquierdo + posX, 205/40*unit + posY, 5/40*unit, Math.PI * 1, Math.PI * 1.5);
    ctx.fill()
    ctx.stroke()
    ctx.closePath();

    //relleno 1
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.strokeStyle = "white";
    ctx.lineWidth = 15/40*unit
    ctx.moveTo(356/40*unit - ladoIzquierdo + 10/40*unit + posX, 200/40*unit + 10/40*unit + posY);
    ctx.arc(ladoDerecho - 10/40*unit + posX, 205/40*unit + 10/40*unit + posY, 5/40*unit, Math.PI * 1.5, Math.PI * 0);
    ctx.arc(ladoDerecho - 10/40*unit + posX, alturaCartel - 10/40*unit + posY, 5/40*unit, Math.PI * 0, Math.PI * 0.5);
    ctx.arc(360/40*unit - ladoIzquierdo + 10/40*unit + posX, alturaCartel - 10/40*unit + posY, 5/40*unit, Math.PI * 0.5, Math.PI * 1);
    ctx.arc(360/40*unit - ladoIzquierdo + 10/40*unit + posX, 205/40*unit + 10/40*unit + posY, 5/40*unit, Math.PI * 1, Math.PI * 1.5);
    ctx.fill()
    ctx.stroke()
    ctx.closePath();

    //relleno 2
    ctx.beginPath();
    ctx.fillStyle = colorDentro;
    ctx.strokeStyle = colorDentro;
    ctx.lineWidth = 10/40*unit
    ctx.moveTo(356/40*unit - ladoIzquierdo + 15/40*unit + posX, 200/40*unit + 15/40*unit + posY);
    ctx.arc(ladoDerecho - 15/40*unit + posX, 205/40*unit + 15/40*unit + posY, 5/40*unit, Math.PI * 1.5, Math.PI * 0);
    ctx.arc(ladoDerecho - 15/40*unit + posX, alturaCartel - 15/40*unit + posY, 5/40*unit, Math.PI * 0, Math.PI * 0.5);
    ctx.arc(360/40*unit - ladoIzquierdo + 15/40*unit + posX, alturaCartel - 15/40*unit + posY, 5/40*unit, Math.PI * 0.5, Math.PI * 1);
    ctx.arc(360/40*unit - ladoIzquierdo + 15/40*unit + posX, 205/40*unit + 15/40*unit + posY, 5/40*unit, Math.PI * 1, Math.PI * 1.5);
    ctx.fill()
    ctx.stroke()
    ctx.closePath();

    //letras
    /**/
    ctx.beginPath();
    ctx.fillStyle = "#FF00FF";
    ctx.strokeStyle = "#FF00FF";
    ctx.textAlign = 'center'
    ctx.lineWidth = 5/40*unit
    ctx.font = "bold " + 20/40*unit + "px arial";
    let centroTextoX = posX0 + (ladoDerecho - posX0) / 2 + posX / 2
    let centroTextoY = posY0 + (alturaCartel - posY0) / 2 + posY / 2.2

    // function ajusteDeTexto(texto, x, y, maxWidth, alturaDeLinea) {
    ajusteDeTexto(probarFrase, centroTextoX, centroTextoY, ladoDerecho-posX0+posX-100, 20/40 * unit)

    // ctx.fillText(probarFrase, centroTextoX, centroTextoY)
    ctx.closePath();

}