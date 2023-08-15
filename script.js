function main() {
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

  ctx.canvas.width = 300;
  ctx.canvas.height = 300;
  // Start a new Path
  ctx.beginPath();

  ctx.moveTo(0, 0);
  ctx.lineTo(300, 150);
  // Draw the Path
  ctx.stroke();

  drawCircle(70);
}

function drawCircle(radius) {
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");
  // Start a new Path
  ctx.beginPath();

  for (var i = 0; i < Math.PI * 2 + 0.1; i += 0.01) {
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