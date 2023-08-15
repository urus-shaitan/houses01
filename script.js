function main() {
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

  ctx.canvas.width = 300;
  ctx.canvas.height = 300;
  // Start a new Path
  drawHouse(canvas);

  //drawCircle(70);
}

function drawHouse(canvas) {
    const ctx = canvas.getContext("2d");
    ctx.translate(150,150);
    //wall
    ctx.beginPath();
    ctx.moveTo(-50, 50);
    ctx.lineTo(50, 50);
    ctx.lineTo(50, -20);
    ctx.lineTo(-50, -20);
    ctx.lineTo(-50, 50);
    ctx.fillStyle = "rgb(0,0,255)";
    ctx.fill();
    ctx.stroke();
  
    //roof 
    ctx.beginPath();
    ctx.moveTo(-50, -20);
    ctx.lineTo(50, -20);
    ctx.lineTo(0, -60);
    ctx.lineTo(-50, -20)
    ctx.fillStyle = "#FF0000";
   ctx.fill();
   // ctx.stroke();

    //door
    ctx.beginPath();
    ctx.moveTo(-30, 50);
    ctx.lineTo(-10, 50);
    ctx.lineTo(-10, 10);
    ctx.lineTo(-30, 10);
    ctx.lineTo(-30, 50);
    ctx.fillStyle = "brown";
    ctx.fill();
    //ctx.stroke();
    
    //window
    ctx.beginPath();
    ctx.moveTo(10, 20);
    ctx.lineTo(40, 20);
    ctx.lineTo(40, -10);
    ctx.lineTo(10, -10);
    ctx.lineTo(10, 20);
    ctx.fillStyle = "lightblue";
    ctx.fill();
    ctx.stroke();
    

    ctx.translate(-150, -150);
}

function drawCircle(radius) {
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");
  // Start a new Path
  ctx.beginPath();

  ctx.arc(100, 75, 50, 0, 2 * Math.PI);
  ctx.stroke();
  
  for (var i = 0; i < 3.14 * 2 + 0.3; i += Math.PI/4) {
    var x = 150 + Math.cos(i) * radius;
    var y = 150 + Math.sin(i) * radius;
    if (i == 0) {
      ctx.moveTo(x, y);
    }
    else {
      ctx.lineTo(x, y);
    }
  }
  
  for (var i = 0; i < 3.14 * 2 + 0.3; i += Math.PI/2) {
    var x = 150 + Math.cos(i) * radius;
    var y = 150 + Math.sin(i) * radius;
    if (i == 0) {
      ctx.moveTo(x, y);
    }
    else {
      ctx.lineTo(x, y);
    }
  }

  ctx.stroke();
}