var canvas = document.getElementById("starfield");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");
var stars = 500;
var starArray = [];

for (var i = 0; i < stars; i++) {
  starArray.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.2,
    o: Math.random()
  });
}

var frameNumber = 0;
const button = document.getElementById("valentinesButton");

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  starArray.forEach(s => {
    context.beginPath();
    context.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    context.fillStyle = `rgba(255,255,255,${s.o})`;
    context.fill();
  });

  if (frameNumber > 300) {
    context.font = "28px Comic Sans MS";
    context.textAlign = "center";
    context.fillText("Will You Be Mine?", canvas.width / 2, canvas.height / 2);
    button.style.display = "block";
  }

  frameNumber++;
  requestAnimationFrame(draw);
}

draw();