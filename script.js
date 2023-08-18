function main() {
  const s = 1;
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");



  switch (s) {
    case 0:
      ctx.canvas.width = 300;
      ctx.canvas.height = 300;
      // Start a new Path
      ctx.beginPath();

      ctx.moveTo(0, 0);
      ctx.lineTo(300, 150);
      // Draw the Path
      ctx.stroke();

      drawCircle(70);
      break;
    case 1:
      ctx.canvas.width = window.innerWidth;
      ctx.canvas.height = window.innerHeight;
      drawIntersection(ctx) 
      break;
  }

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

function drawIntersection(ctx) {
  const A = {x:190, y:50};
  const B = {x:150, y:250};
  const C = {x:50, y:100};
  const D = {x:250, y:200};
  drawLine(ctx,  new Point(A, "A"), new Point(B, "B"));
  drawLine(ctx,  new Point(C, "C"), new Point(D, "D"));

  drawLetter(ctx, new Point(getIntersection(A,B,C,D), "M"))
}

function getIntersection(A,B,C,D) {
  /*
    Ix = Ax + (Bx-Ax)t = Cx+(Dx-Cx)u
    Iy = Ay + (By-Ay)t = Cy+(Dy-Cy)u

    (Ax-Cx) + (Bx-Ax)t = (Dx-Cx)u
    (Ay-Cy) + (By-Ay)t = (Dy-Cy)u

    u = ((Ax-Cx) + (Bx-Ax)t) / (Dx-Cx)
    (Ay-Cy) + (By-Ay)t = ((Dy-Cy) ((Ax-Cx) + (Bx-Ax)t)) / (Dx-Cx)

    (Ay-Cy)(Dx-Cx) + (By-Ay)(Dx-Cx)t = (Dy-Cy)(Ax-Cx) + (Dy-Cy)(Bx-Ax)t

    (By-Ay)(Dx-Cx)t - (Dy-Cy)(Bx-Ax)t = (Dy-Cy)(Ax-Cx) - (Ay-Cy)(Dx-Cx) 
    t = (Dy-Cy)(Ax-Cx) - (Ay-Cy)(Dx-Cx) / (By-Ay)(Dx-Cx) - (Dy-Cy)(Bx-Ax)

    top = (Dy-Cy)(Ax-Cx) - (Ay-Cy)(Dx-Cx) 
    bottom = (By-Ay)(Dx-Cx) - (Dy-Cy)(Bx-Ax)
  */

  const top= (D.y-C.y)*(A.x-C.x) - (A.y-C.y)*(D.x-C.x);
  const bottom = (B.y-A.y)*(D.x-C.x) - (D.y-C.y)*(B.x-A.x);
  const t = top/bottom;
  return {
    x: A.x + (B.x-A.x)*t,
    y: A.y + (B.y-A.y)*t 
  }
}

function drawLine(ctx, pt1, pt2) {
  ctx.beginPath();
  ctx.moveTo(pt1.point.x, pt1.point.y);
  ctx.lineTo(pt2.point.x, pt2.point.y);
  ctx.stroke();
  drawLetter(ctx, pt1);
  drawLetter(ctx, pt2);
}

function drawLetter(ctx, pt) {
  ctx.beginPath();
  ctx.fillStyle="white";
  ctx.arc(pt.point.x, pt.point.y, 10, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  ctx.fillStyle="black";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = "bold 14px Arial"
  ctx.fillText(pt.letter, pt.point.x, pt.point.y);
}




