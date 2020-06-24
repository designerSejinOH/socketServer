var socket;

function setup() {

  createCanvas(windowWidth, windowHeight);
  socket = io.connect('http://127.0.0.1:3000');
  socket.on('mouse', newDrawing);
  background(21);

}

function newDrawing(data) {
  noStroke();
  fill(255, 0, 100);
  ellipse(data.x, data.y, 10, 10);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(21);
}

function mouseDragged() {
  console.log('Sendig: ' + mouseX + ',' + mouseY);

  var data = {
    x: mouseX,
    y: mouseY
  }
  socket.emit('mouse', data);
  noStroke();
  fill(100, 0, 255);
  ellipse(mouseX, mouseY, 10, 10);
}

function draw() {}