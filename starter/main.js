let canvas, ctx, saveButton, clearButton;
let pos = { x: 0, y: 0 };
let rawImage;
let model;
let mousePressed = false;
let lastX, lastY;

const main = async () => {};

function predict() {}

function init() {
  canvas = document.getElementById("canvas");
  rawImage = document.getElementById("canvasimg");
  ctx = canvas.getContext("2d");
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, 280, 280);

  $("#canvas").mousedown(function (e) {
    console.log(1);
    mousePressed = true;
    Draw(
      e.pageX - $(this).offset().left,
      e.pageY - $(this).offset().top,
      false
    );
  });

  $("#canvas").mousemove(function (e) {
    if (mousePressed) {
      Draw(
        e.pageX - $(this).offset().left,
        e.pageY - $(this).offset().top,
        true
      );
    }
  });

  $("#canvas").mouseup(function (e) {
    mousePressed = false;
  });
  $("#canvas").mouseleave(function (e) {
    mousePressed = false;
  });

  saveButton = document.getElementById("sb");
  saveButton.addEventListener("click", predict);
  clearButton = document.getElementById("cb");
  clearButton.addEventListener("click", erase);
}

function Draw(x, y, isDown) {
  if (isDown) {
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.lineWidth = 24;
    ctx.lineJoin = "round";
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.closePath();
    ctx.stroke();
    rawImage.src = canvas.toDataURL("image/png");
  }
  lastX = x;
  lastY = y;
}
function erase() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, 280, 280);
}

main();
