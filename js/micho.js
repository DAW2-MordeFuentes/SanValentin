
function staringCat(x, y){
  
 


  ctx.beginPath();
  ctx.fillStyle = michoAzulOjos;
  ctx.bezierCurveTo(x + 58, y - 190, x + 62, y - 174, x + 79, y - 174);
  ctx.bezierCurveTo(x + 79, y - 174, x + 99, y - 174, x + 101, y - 188);
  ctx.closePath();
  ctx.fill();

  ctx.beginPath();
  ctx.strokeStyle = "red";
  ctx.fillStyle = michoNegroPupila;
  ctx.lineWidth = 0.5;
  ctx.bezierCurveTo(x + 70, y - 190, x + 73, y - 180, x + 79, y - 179);
  ctx.bezierCurveTo(x + 79, y - 179, x + 92, y - 177, x + 92, y - 189);
  ctx.closePath();
  //ctx.stroke();
  ctx.fill();

  ctx.beginPath();
  ctx.strokeStyle = michoNegroPupila;
  ctx.lineWidth = 2;
  ctx.bezierCurveTo(x + 58, y - 190, x + 62, y - 174, x + 79, y - 174);
  ctx.bezierCurveTo(x + 79, y - 174, x + 99, y - 174, x + 101, y - 188);
  ctx.closePath();
  ctx.stroke();


  //ojoDerecha
  


  ctx.beginPath();
  ctx.fillStyle = michoAzulOjos;
  ctx.bezierCurveTo(x + 123, y - 187, x + 123, y - 175, x + 143, y - 175);
  ctx.bezierCurveTo(x + 143, y - 175, x + 160, y - 175, x + 163, y - 192);
  ctx.closePath();
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = michoNegroPupila;
  ctx.lineWidth = 2;
  ctx.bezierCurveTo(x + 130, y - 188, x + 134, y - 181, x + 140, y - 180);
  ctx.bezierCurveTo(x + 140, y - 180, x + 148, y - 180, x + 150, y - 190);
  ctx.closePath();
  //ctx.bezierCurveTo(x+172, y-164, x+145, y-165, x+164, y-178);
  //ctx.stroke();
  ctx.fill();

  ctx.beginPath();
  ctx.strokeStyle = michoNegroPupila;
  ctx.lineWidth = 2;
  ctx.bezierCurveTo(x + 123, y - 187, x + 123, y - 175, x + 143, y - 175);
  ctx.bezierCurveTo(x + 143, y - 175, x + 160, y - 175, x + 163, y - 192);
  ctx.closePath();
  //ctx.bezierCurveTo(x+172, y-164, x+145, y-165, x+164, y-178);
  ctx.stroke();
  //ctx.fill();




}
function michoPsPs(x, y) {

  // console.log("CAT X " + x)
  // console.log("CAT Y " + y)

/*
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
*/

/*
ctx.beginPath();
ctx.fillStyle  = "green";
ctx.fillRect(0, h/2, w, h/2);
*/
//bodyUmbrella



var x1 = 125;
var x2 = 195;
var y1 = 215;
var y2 = 285;



ctx.beginPath();

grad1=ctx.createLinearGradient(x - x1 + 15,y-y1,x - x1,y - y2);
grad1.addColorStop(0,michoRojoParaguas1);
grad1.addColorStop(1,michoRojoParaguas2);
ctx.fillStyle =grad1; 
ctx.bezierCurveTo(x + x2, y - y2, x + 10, y - 430, x - x1, y - y1);
ctx.bezierCurveTo(x - x1, y - y1, x -60, y - 230, x - x1 + 106.66, y - y1+ 10);
ctx.bezierCurveTo(x - x1 + 106.66, y - y1+ 10, x -00, y - 230, x - x1 + 223.33, y - y1 - 20);
ctx.bezierCurveTo( x - x1 + 223.33, y - y1 - 20 , x + 120, y - 270, x + x2, y - y2);
ctx.closePath();
//ctx.bezierCurveTo(x - x1, y - y1, x + 50, y - 120, x + x2, y - y2);
//ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.strokeStyle = michoRojoValentin;
ctx.fillStyle = michoRojoValentin;
ctx.lineWidth = 3;
ctx.bezierCurveTo(x - x1, y - y1, x - 25, y - 470, x + x2, y - y2);
ctx.closePath();
ctx.moveTo(x + x2,  y - y2);
ctx.bezierCurveTo(x + x2, y - y2, x +  150, y - 325, x - x1+ 213.22, y - y1-90);
ctx.bezierCurveTo(x - x1+ 213.22, y - y1-90, x + 30, y - 320, x - x1+ 106.66, y - y1-70);
ctx.bezierCurveTo(x - x1+ 106.66, y - y1-70, x -60, y - 300, x - x1, y - y1);
ctx.closePath();
//ctx.bezierCurveTo(x + x2+ 106.66, y - y1-60, x + 10, y - 430, x - x1, y - y1);
//ctx.stroke();
ctx.fill();

ctx.beginPath();

ctx.bezierCurveTo(x - x1 + 106.66,y - y1-70, x - 22, y - 330, x + 23, y - 349.3);
ctx.moveTo(x + 27, y - 350);
ctx.bezierCurveTo( x + 27, y - 350, x  + 72, y - 350, x - x1+ 213.22, y - y1-90);
ctx.lineWidth = 2;
ctx.strokeStyle = "#a5240d";
ctx.stroke();


  //formagato
  ctx.beginPath();
  ctx.strokeStyle = michoMarronBordes;
  ctx.fillStyle = michoPastelGato;
  ctx.lineWidth = 7;
  ctx.bezierCurveTo(x, y, x + 60, y + 68, x + 220, y);
  ctx.bezierCurveTo(x + 220, y, x + 250, y - 50, x + 184, y - 187);
  ctx.bezierCurveTo(x + 180, y - 187, x + 186, y - 210, x + 172, y - 230);
  ctx.bezierCurveTo(x + 172, y - 230, x + 110, y - 253, x + 54, y - 230);
  ctx.bezierCurveTo(x + 54, y - 230, x + 38, y - 220, x + 36, y - 194);
  ctx.bezierCurveTo(x + 36, y - 194, x - 34, y - 35, x, y);
  ctx.stroke();
  //ctx.fill();


  //oreja derecha
  ctx.beginPath();
  ctx.strokeStyle = michoMarronBordes;
  ctx.fillStyle = michoNegroCola;
  ctx.lineWidth = 8;
  ctx.bezierCurveTo(x + 172, y - 227, x + 180, y - 247, x + 158, y - 275);
  ctx.bezierCurveTo(x + 158, y - 275, x + 147, y - 275, x + 121, y - 238);
  ctx.stroke();
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = michoMarronInteriorOrejas;
  ctx.bezierCurveTo(x + 166, y - 230, x + 170, y - 247, x + 158, y - 267);
  ctx.bezierCurveTo(x + 158, y - 267, x + 145, y - 260, x + 140, y - 238);
  ctx.fill();



  //oreja izquierda
  ctx.beginPath();
  ctx.strokeStyle = michoMarronBordes;
  ctx.fillStyle = michoNegroCola;
  ctx.lineWidth = 8;
  ctx.bezierCurveTo(x + 80, y - 238, x + 81, y - 240, x + 25, y - 258);
  ctx.bezierCurveTo(x + 25, y - 258, x + 25, y - 228, x + 42, y - 215);
  ctx.stroke();
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = michoMarronInteriorOrejas;
  ctx.bezierCurveTo(x + 60, y - 233, x + 33, y - 245, x + 32, y - 243);
  ctx.bezierCurveTo(x + 32, y - 243, x + 28, y - 238, x + 45, y - 219);
  ctx.fill();



  //formaGato
  ctx.beginPath();
  ctx.strokeStyle = michoMarronBordes;
  ctx.fillStyle = michoPastelGato;
  ctx.lineWidth = 7;
  ctx.bezierCurveTo(x, y, x + 60, y + 68, x + 220, y);
  ctx.bezierCurveTo(x + 220, y, x + 250, y - 50, x + 184, y - 187);
  ctx.bezierCurveTo(x + 180, y - 187, x + 186, y - 210, x + 172, y - 230);
  ctx.bezierCurveTo(x + 172, y - 230, x + 110, y - 253, x + 54, y - 230);
  ctx.bezierCurveTo(x + 54, y - 230, x + 38, y - 220, x + 36, y - 194);
  ctx.bezierCurveTo(x + 36, y - 194, x - 34, y - 35, x, y);
  //ctx.stroke();
  ctx.fill();

  //colaGato
  ctx.beginPath();
  //ctx.strokeStyle = "red";
  ctx.fillStyle = michoNegroCola;
  ctx.bezierCurveTo(x + 220, y - 54, x + 283, y + 18, x + 200, y + 32);
  ctx.bezierCurveTo(x + 200, y + 32, x + 150, y + 43, x + 156, y + 33);
  ctx.bezierCurveTo(x + 156, y + 33, x + 115, y + 50, x + 123, y + 35);
  ctx.bezierCurveTo(x + 123, y + 35, x + 88, y + 27, x + 123, y + 16);
  ctx.bezierCurveTo(x + 123, y + 16, x + 96, y + 3, x + 208, y - 7);
  ctx.bezierCurveTo(x + 208, y - 7, x + 220, y - 20, x + 215, y - 54);
  ctx.bezierCurveTo(x + 215, y - 54, x + 216, y - 60, x + 220, y - 54);
  //ctx.stroke();
  ctx.fill();

  //noGloba

  //ojoIzquierdo
  ctx.beginPath();
  ctx.strokeStyle = "red";
  ctx.fillStyle = michoMarronOjos;
  ctx.lineWidth = 0.5;
  ctx.bezierCurveTo(x + 43, y - 207, x + 65, y - 219, x + 75, y - 215);
  ctx.bezierCurveTo(x + 75, y - 215, x + 80, y - 212, x + 83, y - 219);
  ctx.bezierCurveTo(x + 83, y - 219, x + 103, y - 231, x + 104, y - 219);
  ctx.bezierCurveTo(x + 104, y - 219, x + 117, y - 193, x + 92, y - 190);
  ctx.lineTo(x + 77, y - 163);
  ctx.bezierCurveTo(x + 77, y - 156, x + 70, y - 167, x + 50, y - 163);
  ctx.bezierCurveTo(x + 50, y - 163, x + 35, y - 177, x + 43, y - 207);
  //ctx.stroke();
  ctx.fill();

  ctx.beginPath();
  ctx.strokeStyle = "red";
  ctx.fillStyle = michoNegroCola;
  ctx.lineWidth = 0.5;
  ctx.bezierCurveTo(x + 104, y - 219, x + 117, y - 193, x + 92, y - 190);
  ctx.lineTo(x + 57, y - 188);
  ctx.bezierCurveTo(x + 57, y - 188, x + 50, y - 180, x + 72, y - 165);
  ctx.bezierCurveTo(x + 72, y - 165, x + 58, y - 169, x + 55, y - 164);
  ctx.bezierCurveTo(x + 55, y - 164, x + 70, y - 164, x + 85, y - 155);
  ctx.bezierCurveTo(x + 85, y - 155, x + 89, y - 153, x + 93, y - 152);
  ctx.bezierCurveTo(x + 93, y - 152, x + 80, y - 160, x + 100, y - 174);
  ctx.bezierCurveTo(x + 100, y - 174, x + 102, y - 184, x + 108, y - 190);
  ctx.bezierCurveTo(x + 108, y - 190, x + 113, y - 205, x + 104, y - 219);
  //ctx.stroke();
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = michoAzulOjos;
  ctx.bezierCurveTo(x + 58, y - 190, x + 62, y - 174, x + 79, y - 174);
  ctx.bezierCurveTo(x + 79, y - 174, x + 99, y - 174, x + 101, y - 188);
  ctx.closePath();
  ctx.fill();

  ctx.beginPath();
  ctx.strokeStyle = "red";
  ctx.fillStyle = michoNegroPupila;
  ctx.lineWidth = 0.5;
  ctx.bezierCurveTo(x + 70, y - 190, x + 73, y - 180, x + 79, y - 179);
  ctx.bezierCurveTo(x + 79, y - 179, x + 92, y - 177, x + 92, y - 189);
  ctx.closePath();
  //ctx.stroke();
  ctx.fill();

  ctx.beginPath();
  ctx.strokeStyle = michoNegroPupila;
  ctx.lineWidth = 2;
  ctx.bezierCurveTo(x + 58, y - 190, x + 62, y - 174, x + 79, y - 174);
  ctx.bezierCurveTo(x + 79, y - 174, x + 99, y - 174, x + 101, y - 188);
  ctx.closePath();
  ctx.stroke();


  //ojoDerecha
  ctx.beginPath();
  ctx.strokeStyle = "red";
  ctx.fillStyle = michoMarronOjos;
  ctx.lineWidth = 0.5;
  ctx.bezierCurveTo(x + 115, y - 219, x + 113, y - 233, x + 130, y - 219);
  ctx.bezierCurveTo(x + 130, y - 219, x + 150, y - 228, x + 169, y - 213);
  ctx.bezierCurveTo(x + 169, y - 213, x + 180, y - 205, x + 178, y - 175);
  ctx.bezierCurveTo(x + 178, y - 175, x + 177, y - 165, x + 170, y - 165);
  ctx.bezierCurveTo(x + 170, y - 165, x + 105, y - 155, x + 115, y - 219);
  //ctx.stroke();
  ctx.fill();

  ctx.beginPath();
  ctx.strokeStyle = "red";
  ctx.fillStyle = michoNegroCola;
  ctx.lineWidth = 0.5;
  ctx.bezierCurveTo(x + 115, y - 219, x + 108, y - 200, x + 118, y - 182);
  ctx.bezierCurveTo(x + 118, y - 182, x + 116, y - 180, x + 122, y - 174);
  ctx.bezierCurveTo(x + 122, y - 174, x + 135, y - 160, x + 125, y - 153);
  ctx.bezierCurveTo(x + 125, y - 153, x + 131, y - 154, x + 137, y - 158);
  ctx.bezierCurveTo(x + 137, y - 158, x + 148, y - 166, x + 160, y - 163);
  ctx.bezierCurveTo(x + 160, y - 163, x + 170, y - 162, x + 172, y - 165);
  ctx.bezierCurveTo(x + 172, y - 165, x + 144, y - 162, x + 164, y - 180);
  ctx.bezierCurveTo(x + 164, y - 180, x + 170, y - 188, x + 164, y - 189);
  ctx.bezierCurveTo(x + 164, y - 189, x + 110, y - 170, x + 115, y - 219);
  //ctx.bezierCurveTo(x+172, y-164, x+145, y-165, x+164, y-178);
  //ctx.stroke();
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = michoAzulOjos;
  ctx.bezierCurveTo(x + 123, y - 187, x + 123, y - 175, x + 143, y - 175);
  ctx.bezierCurveTo(x + 143, y - 175, x + 160, y - 175, x + 163, y - 192);
  ctx.closePath();
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = michoNegroPupila;
  ctx.lineWidth = 2;
  ctx.bezierCurveTo(x + 130, y - 188, x + 134, y - 181, x + 140, y - 180);
  ctx.bezierCurveTo(x + 140, y - 180, x + 148, y - 180, x + 150, y - 190);
  ctx.closePath();
  //ctx.bezierCurveTo(x+172, y-164, x+145, y-165, x+164, y-178);
  //ctx.stroke();
  ctx.fill();

  ctx.beginPath();
  ctx.strokeStyle = michoNegroPupila;
  ctx.lineWidth = 2;
  ctx.bezierCurveTo(x + 123, y - 187, x + 123, y - 175, x + 143, y - 175);
  ctx.bezierCurveTo(x + 143, y - 175, x + 160, y - 175, x + 163, y - 192);
  ctx.closePath();
  //ctx.bezierCurveTo(x+172, y-164, x+145, y-165, x+164, y-178);
  ctx.stroke();
  //ctx.fill();



  ctx.beginPath();
  ctx.strokeStyle = michoMarronBordes;
  ctx.lineWidth = 2;
  ctx.fillStyle = michoPastelGato;
  ctx.bezierCurveTo(x + 95, y - 160, x + 109, y - 185, x + 123, y - 166);
  //ctx.bezierCurveTo(x+172, y-164, x+145, y-165, x+164, y-178);
  ctx.stroke();
  //ctx.fill();

  ctx.beginPath();
  ctx.strokeStyle = "green";
  ctx.lineWidth = 0.5;
  ctx.fillStyle = michoRosaHocico;
  ctx.bezierCurveTo(x + 100, y - 180, x + 109, y - 185, x + 118, y - 180);
  ctx.bezierCurveTo(x + 118, y - 180, x + 116, y - 175, x + 113, y - 177);
  ctx.bezierCurveTo(x + 113, y - 177, x + 110, y - 168, x + 107, y - 176);
  ctx.bezierCurveTo(x + 107, y - 176, x + 102, y - 176, x + 100, y - 180);
  //ctx.bezierCurveTo(x+172, y-164, x+145, y-165, x+164, y-178);
  //ctx.stroke();
  ctx.fill();







  //globo
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.strokeStyle = michoRojoValentin;
  ctx.bezierCurveTo(x + 142, y - 30, x + 133, y - 50, x + 142, y - 69);
  ctx.stroke();
  ctx.beginPath();
  ctx.bezierCurveTo(x + 155, y - 88, x + 155, y - 88, x + 166, y - 98);
  ctx.bezierCurveTo(x + 166, y - 98, x + 180, y - 113, x + 180, y - 126);
  ctx.bezierCurveTo(x + 180, y - 126, x + 181, y - 151, x + 206, y - 176);
  ctx.stroke();

  ctx.beginPath();
  ctx.fillStyle = michoRojoValentin;
  ctx.moveTo(x + 200, y - 175);
  ctx.lineTo(x + 208, y - 171);
  ctx.lineTo(x + 211, y - 185);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = michoRojoValentin;
  ctx.moveTo(x + 208, y - 180);
  ctx.bezierCurveTo(x + 208, y - 180, x + 160, y - 260, x + 200, y - 280);
  ctx.bezierCurveTo(x + 200, y - 280, x + 225, y - 294, x + 243, y - 251);
  ctx.bezierCurveTo(x + 243, y - 251, x + 289, y - 265, x + 292, y - 231);
  ctx.bezierCurveTo(x + 292, y - 231, x + 305, y - 190, x + 208, y - 180);
  ctx.stroke();
  ctx.fill();

  //palabra
  // :(
  /*
  ctx.save();
  ctx.rotate(Math.PI * (0.14));
  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.font = "bold 32px Arial";
  ctx.fillText("meri", x + 337, y - 531);
  ctx.restore();
  */

  //brazoDerechoStroke
  ctx.beginPath();
  ctx.strokeStyle = michoMarronBordes;
  ctx.lineWidth = 3;
  ctx.fillStyle = michoPastelGato;
  ctx.bezierCurveTo(x + 162, y - 88, x + 110, y - 95, x + 162, y - 49);
  //ctx.fill();
  ctx.stroke();


  //paraguasClueless
  ctx.beginPath();
  grad1=ctx.createLinearGradient(x + 75, y - 52,x + 36, y - 300);
  grad1.addColorStop(1,michoRojoParaguas2);
  grad1.addColorStop(0.76, michoRojoValentin);
  ctx.strokeStyle = grad1;
  ctx.lineWidth = 3.5;
  ctx.moveTo(x + 36, y - 290);
  ctx.lineTo(x + 71, y - 90);
  ctx.stroke();



  //brazoIzquierdo
  ctx.beginPath();
  ctx.strokeStyle = michoMarronBordes;
  ctx.lineWidth = 3;
  ctx.fillStyle = michoPastelGato;
  ctx.bezierCurveTo(x + 60, y - 88, x + 140, y - 95, x + 60, y - 60);
//  ctx.fill();
  ctx.stroke();


  ctx.beginPath();
  ctx.strokeStyle = michoRojoValentin;
  ctx.lineWidth = 3.5;
  ctx.bezierCurveTo(x + 76, y - 66, x + 85, y - 30, x + 82, y - 84);
  ctx.stroke();
}


