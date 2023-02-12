// define Flower constructor
class Flower {
    
    constructor(centerX, centerY, radius, numPetals, color) {
        this.centerX = centerX;
        this.centerY = centerY;
        this.radius = radius;
        this.numPetals = numPetals;
        this.color = color;
    }
    
    // Define Flower draw method
    draw() {
        // draw petals
        ctx.beginPath();
        for (var n = 0; n < this.numPetals; n++) {
            var theta1 = ((Math.PI * 2) / this.numPetals) * (n + 1);
            var theta2 = ((Math.PI * 2) / this.numPetals) * (n);

            var x1 = (this.radius * Math.sin(theta1)) + this.centerX;
            var y1 = (this.radius * Math.cos(theta1)) + this.centerY;
            var x2 = (this.radius * Math.sin(theta2)) + this.centerX;
            var y2 = (this.radius * Math.cos(theta2)) + this.centerY;

            ctx.moveTo(this.centerX, this.centerY);
            ctx.bezierCurveTo(x1, y1, x2, y2, this.centerX, this.centerY);
        }

        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();

        // draw yellow center
        ctx.beginPath();
        ctx.arc(this.centerX, this.centerY, this.radius / 5, 0, 2 * Math.PI, false);
        ctx.fillStyle = "yellow";
        ctx.fill();
        ctx.closePath();
    }
}


// function drawFlowers(centerX, centerY, radius, numPetals, colorArray, numFlowers) {
function drawFlowers() {
    var colorArray = ["white","red", "blueviolet", "blue", "coral", "goldenrod", "greenyellow", "purple", "darkorange", "hotpink",
        "maroon", "salmon"];
    for (var i = 0; i < numFlowers; i++) {
        var thisPedicel = new Pedicel(acX[i], acY[i], aRadius[i], "green");
        thisPedicel.draw();
        var thisFlower = new Flower(acX[i], acY[i], aRadius[i], aNumP[i], colorArray[acI[i]]);
        thisFlower.draw();
    }
}

class Pedicel {
    constructor(centerX, centerY, radius, color) {
        this.centerX = centerX;
        this.centerY = centerY;
        this.radius = radius;
        this.color = color;
    }
    // Define Pedicel draw method
    draw() {
        // drew tallo
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 5;
        ctx.moveTo(this.centerX, this.centerY);
        ctx.lineTo(this.centerX, this.centerY + this.radius * 2);
        ctx.stroke();
        ctx.closePath();

        //draw hoja 1
        ctx.beginPath();
        ctx.moveTo(this.centerX, this.centerY + this.radius*1.5);
        ctx.bezierCurveTo(this.centerX, this.centerY + this.radius/1.25, 
            this.centerX + this.radius/2, this.centerY + this.radius/2,
            this.centerX + this.radius/1.5, this.centerY + this.radius*1.25);
        ctx.bezierCurveTo(this.centerX, this.centerY + this.radius/1.25, 
            this.centerX, this.centerY + this.radius * 1.5, 
            this.centerX, this.centerY + this.radius * 1.5);
        ctx.fillStyle = this.color;
        ctx.fill();

        //draw hoja 2
        ctx.beginPath();
        ctx.moveTo(this.centerX, this.centerY + this.radius*1.5);
        ctx.bezierCurveTo(this.centerX, this.centerY + this.radius/1.25, 
            this.centerX - this.radius/2, this.centerY + this.radius/2, 
            this.centerX - this.radius/1.5, this.centerY + this.radius*1.25);
        ctx.bezierCurveTo(this.centerX, this.centerY + this.radius / 1.25, 
            this.centerX, this.centerY + this.radius * 1.5, 
            this.centerX, this.centerY + this.radius * 1.5);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}
