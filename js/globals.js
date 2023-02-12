var duracionRayosGato = 5

var posFINAL = 0
var limit = 0

var black = 'black'
var white = 'white'

// VAN
var greyVan = '#a7bcbf'
var orangeVan = '#f4c700'
var greenVan = '#00b4b3'

var blue = '#61b8ee'

var green1 = '#8ec416'
var green2 = '#518000'
var green3 = '#9eba00'

var green4 = '#385006'
var green5 = '#526a0c'

var green6 = '#5e810d'
var green7 = '#779e11'

var green8 = '#446409'
var green9 = '#63840f'

var brown = '#694C41'

var red = '#96213e'

var rosa = '#c23256'

// Globo
var gBlue1 = '#1f356f'
var gBlue2 = '#0392d7'
var gBlue3 = '#85bedc'
var gBlue4 = '#dcecf9'
var gBrown = '#b0673c'

var sOrange = '#d744e0'

// UNITS
var w = 1000
var h = 700
var unit = 10

//Acuña-rayo
var azultormenta = '#102c54';
//let minRayo=unit*10;
var minRayo = 0;
var maxRayo = 0;
var finalNube = unit * 2;

//artalMiau
var michoNegroCola = "#392524";
var michoPastelGato = "#DDD0C0";
var michoMarronBordes = "#594137";
var michoMarronOjos = "#8F7D73";
var michoMarronInteriorOrejas = "#7B645C";
var michoRojoValentin = "#ED4224";
var michoRosaHocico = "#C98584";
var michoAzulOjos = "#A4D5D9";
var michoNegroPupila = "#000000";
var michoRojoParaguas1 = "#a5240d";
var michoRojoParaguas2 = "#470f06";

// REJILLA
function rejilla() {
    ctx.strokeStyle = black
    ctx.lineWidth = 1
    let cond = 0;

    for (var y = 0; y <= h; y = y + unit) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(w, y)
        ctx.stroke();
    }

    for (var x = 0; x <= w; x = x + unit) {
        if (cond < 10)
            ctx.strokeStyle = black
        else
            ctx.strokeStyle = 'yellow'
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, h)
        ctx.stroke();
        cond++;
        if (cond == 20)
            cond = 0

    }

}

// const colors = ["#f33e75", "#f294ae", "#b8439b", "#ef582e", "#47c0c8", "#f12b33"]
const colors = ["#B9F3E4", "#EA8FEA", "#D61355", "#F94A29", "#30E3DF", "#FD8A8A", "#9EA1D4", 
                "#FF9E9E", "#FF6D28", "#00F5FF", "#F94892", "#89CFFD", "#B2A4FF", "#F94C66", 
                "#53BF9D", "#BD4291", "#293462", "#F24C4C", "#FF6FB5", "#AB46D2", "#B4FF9F", 
                "#FF6B6B", "#9ADCFF", "#95DAC1", "#6F69AC", "#FF4848", "#AA2EE6", "#890596"]

const phrases = ['Que te deje crear un server de minecraft', 'Amor = ESPAÑA', 'Amistad', 'Cariño ', 
                'El amor es confianza y respeto', 'Lealtad ', ' Preocupación', 'Amarse', 'Sentirse comod@ con la otra persona', 
                'Quererse con el corazón', 'Que no sea toxic@']

var acX = new Array();
var acY = new Array();
var aRadius = new Array();
var aNumP = new Array();
var acI = new Array();

var aPaArriba = new Array();
var aAlturaCartel = new Array();
var aLadoDerecho = new Array();

