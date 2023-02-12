let posFINAL = 0
let limit = 0


let black = 'black'
let white = 'white'


// VAN
let greyVan = '#a7bcbf'
let orangeVan = '#f4c700'
let greenVan = '#00b4b3'

let blue = '#61b8ee'

let green1 = '#8ec416'
let green2 = '#518000'
let green3 = '#9eba00'

let green4 = '#385006'
let green5 = '#526a0c'

let green6 = '#5e810d'
let green7 = '#779e11'

let green8 = '#446409'
let green9 = '#63840f'

let brown = '#694C41'

let red = '#96213e'

let rosa = '#c23256'

// Globo
let gBlue1 = '#1f356f'
let gBlue2 = '#0392d7'
let gBlue3 = '#85bedc'
let gBlue4 = '#dcecf9'
let gBrown = '#b0673c'

let sOrange = '#d744e0'



// UNITS
let w = 1000
let h = 700
let unit = 10

//Acuña-rayo
let azultormenta = '#102c54';
//let minRayo=unit*10;
let minRayo = 0;
let maxRayo = 0;
let finalNube = unit * 2;

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

let colors = ["#f33e75", "#f294ae", "#b8439b", "#ef582e", "#47c0c8", "#f12b33"]