function remolque(posX, posY) {
   
    //Parte de abajo
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 17/40*unit
    ctx.moveTo(150/40 * unit + posX, 750 /40 * unit + posY);
    ctx.lineTo(100/40 * unit + posX, 750/40 * unit + posY);
    ctx.stroke();
    ctx.closePath()

    ctx.beginPath();
    ctx.lineWidth = 8/40*unit
    ctx.moveTo(101/40 * unit + posX, 750/40 * unit + posY);
    ctx.lineTo(50/40 * unit + posX, 750/40 * unit + posY);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 40/40*unit
    ctx.moveTo(51/40 * unit + posX, 750/40 * unit + posY);
    ctx.lineTo(-30/40 * unit + posX, 750/40 * unit + posY);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 30/40*unit
    ctx.moveTo(-29/40 * unit + posX, 745/40 * unit + posY);
    ctx.lineTo(-150/40 * unit + posX, 745/40 * unit + posY);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 40/40*unit
    ctx.moveTo(-149/40 * unit + posX, 750/40 * unit + posY);
    ctx.lineTo(-225/40 * unit + posX, 750/40 * unit + posY);
    ctx.stroke();

    //Ruedas
    ctx.beginPath();
    ctx.fillStyle = "#d9d9d9";
    ctx.strokeStyle = "#262626";
    ctx.lineWidth = 18/40*unit
    ctx.arc(23/40 * unit + posX, 780/40 * unit + posY, 25/40*unit, 0, Math.PI * 2, true);

    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "#737373";
    ctx.arc(23/40 * unit + posX, 780/40 * unit + posY, 10/40*unit, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();

    //
    ctx.beginPath();
    ctx.fillStyle = "#d9d9d9";
    ctx.strokeStyle = "#262626";
    ctx.lineWidth = 18/40*unit
    ctx.arc(-200/40 * unit + posX, 780/40 * unit + posY, 25/40*unit, 0, Math.PI * 2, true);

    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "#737373";
    ctx.arc(-200/40 * unit + posX, 780/40 * unit + posY, 10/40*unit, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();

    //Parte de arriba

    //Barras medio pequeñas
    ctx.beginPath();
    ctx.strokeStyle = "#c98169";
    ctx.lineWidth = 6/40*unit
    ctx.moveTo(-220/40 * unit + posX, 670/40 * unit + posY);
    ctx.lineTo(50/40 * unit + posX, 670/40 * unit + posY);

    ctx.moveTo(-190/40 * unit + posX, 670/40 * unit + posY);
    ctx.lineTo(-190/40 * unit + posX, 735/40 * unit + posY);
    ctx.moveTo(-160/40 * unit + posX, 670/40 * unit + posY);
    ctx.lineTo(-160/40 * unit + posX, 735/40 * unit + posY);
    ctx.moveTo(-130/40 * unit + posX, 670/40 * unit + posY);
    ctx.lineTo(-130/40 * unit + posX, 735/40 * unit + posY);
    ctx.moveTo(-100/40 * unit + posX, 670/40 * unit + posY);
    ctx.lineTo(-100/40 * unit + posX, 735/40 * unit + posY);
    ctx.moveTo(-70/40 * unit + posX, 670/40 * unit + posY);
    ctx.lineTo(-70/40 * unit + posX, 735/40 * unit + posY);
    ctx.moveTo(-40/40 * unit + posX, 670/40 * unit + posY);
    ctx.lineTo(-40/40 * unit + posX, 735/40 * unit + posY);
    ctx.moveTo(-10/40 * unit + posX, 670/40 * unit + posY);
    ctx.lineTo(-10/40 * unit + posX, 735/40 * unit + posY);
    ctx.moveTo(20/40 * unit + posX, 670/40 * unit + posY);
    ctx.lineTo(20/40 * unit + posX, 735/40 * unit + posY);


    ctx.moveTo(-220/40 * unit + posX, 700/40 * unit + posY);
    ctx.lineTo(50/40 * unit + posX, 700/40 * unit + posY);
    ctx.stroke();

    //Barras grandes
    ctx.beginPath();
    ctx.strokeStyle = "#8a4d39";
    ctx.lineWidth = 13/40*unit
    ctx.moveTo(-226/40 * unit + posX, 730/40 * unit + posY);
    ctx.lineTo(45/40 * unit + posX, 730/40 * unit + posY);
    ctx.lineTo(45/40 * unit + posX, 650/40 * unit + posY);
    ctx.moveTo(-220/40 * unit + posX, 730/40 * unit + posY);
    ctx.lineTo(-220/40 * unit + posX, 650/40 * unit + posY);

    ctx.stroke();
    ctx.closePath();

}

function tractor(posX, posY) {

    //Tubo de escape
    ctx.beginPath();
    ctx.strokeStyle = "#1a1a1a";
    ctx.lineWidth = 20/40*unit
    ctx.moveTo(315/40 * unit + posX, 700/40 * unit + posY);
    ctx.lineTo(315/40 * unit + posX, 670/40 * unit + posY);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle = "#666666"
    ctx.lineWidth = 10/40*unit
    ctx.moveTo(315/40 * unit + posX, 670/40 * unit + posY);
    ctx.lineTo(315/40 * unit + posX, 630/40 * unit + posY);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "#cccccc";
    ctx.lineWidth = 20/40*unit
    ctx.moveTo(315/40 * unit + posX, 630/40 * unit + posY);
    ctx.lineTo(315/40 * unit + posX, 620/40 * unit + posY);
    ctx.stroke();

    //Volante
    ctx.beginPath();
    ctx.strokeStyle = "#1a1a1a";
    ctx.lineWidth = 6/40*unit
    ctx.moveTo(250/40 * unit + posX, 710/40 * unit + posY);
    ctx.lineTo(230/40 * unit + posX, 670/40 * unit + posY);
    ctx.moveTo(220/40 * unit + posX, 675/40 * unit + posY);
    ctx.lineTo(240/40 * unit + posX, 665/40 * unit + posY);
    ctx.stroke();

    //Estructura 
    ctx.beginPath();
    ctx.strokeStyle = "#cc0000";
    ctx.lineWidth = 22/40*unit
    ctx.moveTo(155/40 * unit + posX, 780/40 * unit + posY);
    ctx.lineTo(155/40 * unit + posX, 610/40 * unit + posY);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 10/40*unit
    ctx.strokeStyle = "#cc0000";
    ctx.fillStyle = "#cc0000";
    ctx.moveTo(240/40 * unit + posX, 610/40 * unit + posY);
    ctx.lineTo(260/40 * unit + posX, 690/40 * unit + posY);
    ctx.lineTo(260/40 * unit + posX, 710/40 * unit + posY);
    ctx.lineTo(160/40 * unit + posX, 710/40 * unit + posY);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle = "#cc0000";
    ctx.fillStyle = "#cc0000";
    ctx.moveTo(260/40 * unit + posX, 690/40 * unit + posY);
    ctx.quadraticCurveTo(400/40 * unit + posX, 700/40 * unit + posY, 380/40 * unit + posX, 770/40 * unit + posY);
    ctx.lineTo(140/40 * unit + posX, 770/40 * unit + posY);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle = "#cc0000";
    ctx.fillStyle = "#cc0000";
    ctx.lineWidth = 50/40*unit
    ctx.moveTo(150/40 * unit + posX, 730/40 * unit + posY);
    ctx.lineTo(300/40 * unit + posX, 730/40 * unit + posY);
    ctx.stroke();

    ctx.closePath();

    //Lineas pequeñas 
    ctx.beginPath();
    ctx.strokeStyle = "#821717";
    ctx.lineWidth = 4/40*unit
    ctx.moveTo(260/40 * unit + posX, 750/40 * unit + posY);
    ctx.lineTo(260/40 * unit + posX, 720/40 * unit + posY);
    ctx.moveTo(268/40 * unit + posX, 750/40 * unit+ posY);
    ctx.lineTo(268/40 * unit + posX, 720/40 * unit + posY);
    ctx.moveTo(276/40 * unit + posX, 750/40 * unit + posY);
    ctx.lineTo(276/40 * unit + posX, 720/40 * unit+ posY);
    ctx.stroke();

    ctx.closePath();
    //Parte de abajo
    ctx.beginPath();
    ctx.strokeStyle = "#4d0000";
    ctx.lineWidth = 20/40*unit
    ctx.moveTo(130/40 * unit + posX, 775/40 * unit + posY);
    ctx.lineTo(390/40 * unit + posX, 775/40 * unit + posY);
    ctx.stroke();
    ctx.closePath();

    //Asiento
    ctx.beginPath();
    ctx.strokeStyle = "#262626";
    ctx.lineWidth = 14/40*unit
    ctx.moveTo(180/40 * unit + posX, 650/40 * unit + posY);
    ctx.lineTo(190/40 * unit + posX, 700/40 * unit + posY);
    ctx.lineTo(220/40 * unit + posX, 700/40 * unit + posY);
    ctx.stroke();

    //Cubre ruedas
    ctx.beginPath();
    ctx.strokeStyle = "#ff0000";
    ctx.lineWidth = 15/40*unit
    ctx.arc(188/40 * unit + posX, 760/40 * unit + posY, 55/40*unit, 0, Math.PI, true);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(333/40 * unit + posX, 768/40 * unit + posY, 40/40*unit, -0.8, Math.PI, true);
    ctx.stroke();
    ctx.closePath();

    //Techo
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 13/40*unit
    ctx.moveTo(135/40 * unit + posX, 610/40 * unit + posY);
    ctx.lineTo(270/40 * unit + posX, 610/40 * unit + posY);
    ctx.stroke();
    ctx.closePath();


    //Ruedas Atras
    ctx.beginPath();
    ctx.fillStyle = "#d9d9d9";
    ctx.strokeStyle = "#262626";
    ctx.lineWidth = 18/40*unit
    ctx.arc(188/40 * unit + posX, 760/40 * unit + posY, 45/40*unit, 0, Math.PI * 2, true);

    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "#737373";
    ctx.arc(188/40 * unit + posX, 760/40 * unit + posY, 33/40*unit, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();

    //Ruedas delante
    ctx.beginPath();
    ctx.fillStyle = "#d9d9d9";
    ctx.strokeStyle = "#262626";
    ctx.lineWidth = 18/40*unit
    ctx.arc(335/40 * unit + posX, 770/40 * unit + posY, 35/40*unit, 0, Math.PI * 2, true);

    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "#737373";
    ctx.arc(335/40 * unit + posX, 770/40 * unit + posY, 23/40*unit, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
}
