function balloon(posX, posY) {

    //Cesta 
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.lineWidth = 7;

    ctx.moveTo(posX + unit * 10.5, posY + unit *18.15);
    ctx.lineTo(posX + unit *11.5, posY +unit * 18.15);
    ctx.lineTo(posX +unit *11.5, posY +unit * 17.5);
    ctx.lineTo(posX + unit *10.5, posY +unit * 17.5);
    ctx.lineTo(posX +unit *10.5, posY + unit *18.23);
    ctx.stroke();
    ctx.fillStyle = "#b0673c";
    ctx.fill();
    ctx.closePath();

    
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;

    ctx.moveTo(posX +unit * 10.5,posY + unit * 17.5);
    ctx.lineTo(posX +unit * 10.5,posY + unit * 16.5);
    ctx.moveTo(posX +unit * 11,posY + unit * 17.5);
    ctx.lineTo(posX +unit * 11,posY + unit * 16.5);
    ctx.moveTo(posX +unit * 11.5,posY + unit * 17.5);
    ctx.lineTo(posX +unit * 11.5, posY +unit * 16.5);
    ctx.stroke();
    ctx.closePath();

    //Elipses 
    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.fillStyle = "#0392d7";
    ctx.strokeStyle = "white";
    ctx.ellipse(posX +unit * 10.5,posY + unit * 17.4, unit / 6,unit / 4, 0, 0, Math.PI * 2);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.save();

    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.fillStyle = "#0392d7";
    ctx.strokeStyle = "white";
    ctx.ellipse(posX +unit * 11,posY + unit * 17.4,unit / 6, unit / 4, 0, 0, Math.PI * 2);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.save();


    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.fillStyle = "#0392d7";
    ctx.strokeStyle = "white";
    ctx.ellipse(posX +unit * 11.5,posY + unit * 17.4, unit / 6, unit / 4, 0, 0, Math.PI * 2);
    // Dado que la dibujamos entera, ignoramos el parámetro del sentido de las agujas del reloj
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.save();


    //Cuerda Enlace Azul Oscuro
    ctx.beginPath();
    ctx.strokeStyle = "#1f356f";
    ctx.lineWidth = 10;

    ctx.moveTo(posX +unit * 10.4,posY + unit * 16.5);
    ctx.lineTo(posX +unit * 11.6,posY + unit * 16.5);

    ctx.stroke();
    ctx.closePath();

    //Curva de la cuerda IZQ
    ctx.beginPath();
    ctx.fillStyle = "#1f356f";
    ctx.arc(posX +unit * 10.4,posY + unit * 16.5, 5, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.closePath();
    ctx.restore();
    //Curva de la cuerda Derecha
    ctx.beginPath();
    ctx.fillStyle = "#1f356f";
    ctx.arc(posX +unit * 11.6,posY + unit * 16.5, 5, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    //Trapecio Marrón
    ctx.beginPath();
    ctx.fillStyle = "#b0673c";
    ctx.lineWidth = 5;

    ctx.moveTo(posX +unit * 11.3, posY +unit * 16.4);
    ctx.lineTo(posX +unit * 11.5,posY + unit * 16.1);
    ctx.lineTo(posX +unit * 10.5, posY +unit * 16.1);
    ctx.lineTo(posX +unit * 10.7, posY +unit * 16.4);
    ctx.lineTo(posX +unit * 11.3, posY +unit * 16.4);

    ctx.fill();
    ctx.closePath();

    //Enlace azul clarito 
    ctx.beginPath();
    ctx.strokeStyle = "#0392d7";
    ctx.lineWidth = 5;

    ctx.moveTo(posX +unit * 9.4,posY + unit * 14.9);
    ctx.lineTo(posX +unit * 12.6,posY + unit * 14.9);

    ctx.stroke();
    ctx.closePath();

    //Curva de la cuerda IZQ
    ctx.beginPath();
    ctx.fillStyle = "#0392d7";
    ctx.arc(posX +unit * 9.4,posY + unit * 14.9, 2, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.closePath();
    ctx.restore();
    //Curva de la cuerda derecha
    ctx.beginPath();
    ctx.fillStyle = "#0392d7";
    ctx.arc(posX +unit * 12.6, posY +unit * 14.9, 2, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    //Parte azul oscura 
    ctx.beginPath();
    ctx.fillStyle = "blue";

    ctx.moveTo(posX +unit * 12.55,posY+ unit * 15);
    ctx.quadraticCurveTo(posX +unit * 11.4,posY + unit * 15.8,posX + unit * 11.5,posY + unit * 16.1);
    ctx.lineTo(posX +unit * 10.5,posY + unit * 16.1);
    ctx.quadraticCurveTo(posX +unit * 10.6,posY + unit * 15.8, posX +unit * 9.45,posY + unit * 15);
    ctx.lineTo(posX +unit * 12.5,posY + unit * 15)

    ctx.fill();
    ctx.closePath();


    //GLOBO 
    ctx.beginPath();
    ctx.fillStyle = "#0392d7";
    ctx.moveTo(posX +unit * 12.5,posY + unit * 14.85);
    ctx.quadraticCurveTo(posX +unit * 15,posY + unit * 10.5,posX + unit * 11,posY + unit * 10);
    ctx.quadraticCurveTo(posX +unit * 7, posY +unit * 10.5,posX + unit * 9.5, posY +unit * 14.85);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "#85bedc";
    ctx.moveTo(posX +unit *11,posY + unit * 10);
    ctx.quadraticCurveTo(posX +unit*7.9, posY +unit * 10.5,posX + unit *9.7,posY + unit * 14.85);
    ctx.lineTo(posX +unit*10.2,posY +unit*14.85);
    ctx.quadraticCurveTo(posX +unit*8.5,posY + unit * 10.5,posX + unit *11,posY + unit * 10);
    ctx.fill();
    ctx.closePath();


    ctx.beginPath();
    ctx.fillStyle = "aqua";
    ctx.moveTo(posX +unit *11,posY + unit * 10);
    ctx.quadraticCurveTo(posX +unit*8.5,posY + unit * 10.5,posX + unit *10.2,posY + unit * 14.85);
    ctx.lineTo(posX +unit*10.5,posY +unit*14.85);
    ctx.quadraticCurveTo(posX +unit*9.2,posY + unit * 10.5,posX + unit *11, posY +unit * 10);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "aqua";
    ctx.moveTo(posX +unit *11,posY + unit * 10);
    ctx.quadraticCurveTo(posX +unit*13,posY + unit * 10.5,posX + unit *11.5,posY + unit * 14.85);
    ctx.lineTo(posX +unit*12,posY +unit*14.85);
    ctx.quadraticCurveTo(posX +unit*13.75,posY + unit * 10.5,posX + unit *11,posY + unit * 10);
    ctx.fill();
    ctx.closePath();


    ctx.beginPath();
    ctx.fillStyle = "#85bedc";
   //ctx.strokeStyle = "#85bedc";
    ctx.moveTo(posX +unit *11,posY + unit * 10);
    ctx.quadraticCurveTo(posX +unit*13.8,posY + unit * 10.5,posX + unit *11.8,posY + unit * 14.85);
    ctx.lineTo(posX +unit*12.3,posY +unit*14.85);
    ctx.quadraticCurveTo(posX +unit*14.2,posY + unit * 10.5,posX + unit *11, posY +unit * 10);

  //   ctx.stroke();
    ctx.fill();
    ctx.closePath();


  
    ctx.beginPath();
    ctx.fillStyle = "aquamarine";
   //ctx.strokeStyle = "black";
    ctx.moveTo(posX +unit *11,posY + unit * 10);
    ctx.quadraticCurveTo(posX +unit*12.7,posY + unit * 10.5,posX + unit *11.2,posY + unit * 14.85);
    ctx.lineTo(posX +unit*10.8,posY + unit*14.85);
    ctx.quadraticCurveTo(posX +unit*9.4,posY + unit * 10.5,posX + unit *11,posY + unit * 10);

    // ctx.stroke();
    ctx.fill();
    ctx.closePath();
 

}