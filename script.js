// Canvas setup
var canvas = document.getElementById("starfield");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");

// Stars
var stars = 500;
var colorrange = [0, 60, 240];
var starArray = [];

// Random helper
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Create stars
for (var i = 0; i < stars; i++) {
  starArray.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.2,
    hue: colorrange[getRandom(0, colorrange.length - 1)],
    sat: getRandom(50, 100),
    opacity: Math.random(),
  });
}

// Animation variables
var frameNumber = 0;
var opacity = 0;
var secondOpacity = 0;
var thirdOpacity = 0;
var animationStopped = false;

// Button
const button = document.getElementById("valentinesButton");

// Draw stars
function drawStars() {
  for (var i = 0; i < stars; i++) {
    var star = starArray[i];
    context.beginPath();
    context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    context.fillStyle =
      "hsla(" + star.hue + ", " + star.sat + "%, 88%, " + star.opacity + ")";
    context.fill();
  }
}

// Twinkle stars
function updateStars() {
  for (var i = 0; i < stars; i++) {
    if (Math.random() > 0.99) {
      starArray[i].opacity = Math.random();
    }
  }
}

// Helper for mobile line breaks
function drawTextWithLineBreaks(lines, x, y, fontSize, lineHeight) {
  lines.forEach((line, index) => {
    context.fillText(line, x, y + index * (fontSize + lineHeight));
  });
}

// Draw love story text
function drawText() {
  var fontSize = Math.min(30, window.innerWidth / 25);
  var lineHeight = 8;

  context.font = fontSize + "px Comic Sans MS";
  context.textAlign = "center";

  if (frameNumber < 300) {
    context.fillStyle = `rgba(255,255,255,${opacity})`;
    context.fillText(
      "Every day I cannot believe how lucky I am",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity += 0.01;
  }

  if (frameNumber >= 300 && frameNumber < 600) {
    opacity -= 0.01;
  }

  if (frameNumber === 600) opacity = 0;

  if (frameNumber > 600 && frameNumber < 1200) {
    context.fillStyle = `rgba(255,255,255,${opacity})`;
    context.fillText(
      "Amongst trillions of stars, over billions of years",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity += 0.01;
  }

  if (frameNumber === 1200) opacity = 0;

  if (frameNumber > 1200 && frameNumber < 1800) {
    context.fillStyle = `rgba(255,255,255,${opacity})`;
    context.fillText(
      "To be alive, and to share this life with you",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity += 0.01;
  }

  if (frameNumber === 1800) opacity = 0;

  if (frameNumber > 1800 && frameNumber < 2400) {
    context.fillStyle = `rgba(255,255,255,${opacity})`;
    context.fillText(
      "Is so incredibly, unbelievably rare",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity += 0.01;
  }

  if (frameNumber === 2400) opacity = 0;

  if (frameNumber > 2400 && frameNumber < 3000) {
    context.fillStyle = `rgba(255,255,255,${opacity})`;
    context.fillText(
      "And yet here we are… together",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity += 0.01;
  }

  if (frameNumber > 3000) {
    context.fillStyle = `rgba(255,255,255,${secondOpacity})`;
    context.fillText(
      "I love you more than time and space can contain",
      canvas.width / 2,
      canvas.height / 2
    );
    secondOpacity += 0.01;
  }

  if (frameNumber > 3400) {
    context.fillStyle = `rgba(255,255,255,${thirdOpacity})`;
    context.fillText(
      "Will You Be Mine?",
      canvas.width / 2,
      canvas.height / 2 + 60
    );
    thirdOpacity += 0.01;
    button.style.display = "block";
  }
}

// YES button action 💍
button.addEventListener("click", function () {
  animationStopped = true;

  context.clearRect(0, 0, canvas.width, canvas.height);

  context.font = "36px Comic Sans MS";
  context.fillStyle = "white";
  context.textAlign = "center";
  context.fillText(
    "She said YES 💍❤️",
    canvas.width / 2,
    canvas.height / 2 - 20
  );

  context.font = "24px Comic Sans MS";
  context.fillText(
    ", even miles can’t stop us ✨",
    canvas.width / 2,
    canvas.height / 2 + 30
  );

  context.fillText(
    "This is just the beginning 💖",
    canvas.width / 2,
    canvas.height / 2 + 70
  );

  button.style.display = "none";
});

// Main animation loop
function draw() {
  if (!animationStopped) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawStars();
    updateStars();
    drawText();
    frameNumber++;
    requestAnimationFrame(draw);
  }
}

// Resize handling
window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Start animation
draw();
