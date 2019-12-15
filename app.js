const canvas = document.getElementById("jsCanvas");
const context = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

context.strokeStyle = "black";
context.lineWidth = 2.5;

let painting = false;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function onMouseMove(event) {
  //console.log(event);
  const x = event.offsetX;
  const y = event.offsetY;
  console.log(x, y);
  if (!painting) {
    context.beginPath();
    context.moveTo(x, y);
  } else {
    context.lineTo(x, y);
    context.stroke();
  }
}

function onMouseDown(event) {
  painting = true;
}

// function onMouseUp(event) {
//   stopPainting();
// }

// function onMouseLeave(event) {
//   stopPainting();
// }

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}
