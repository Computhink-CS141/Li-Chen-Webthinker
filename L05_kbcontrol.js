// write your codes here
function setup() {
    createCanvas(500, 500);
    background(220);
    noLoop();
    noStroke();
}

function draw() {
    circle(300/2, 300/2, 200);
}

function mousePressed() {
    shapeColor = color(random(0,255));
}