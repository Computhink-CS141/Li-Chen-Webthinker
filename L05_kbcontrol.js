// write your codes here
function setup() {
    createCanvas(500, 500);
    background(220);
    // noLoop();
    noStroke();
}

function draw() {
    circle(500/2, 500/2, 200);
}

function mousePressed() {
    shapeColor = color(random(0,255));
}