// write your codes here
let 

function setup() {
    createCanvas(500, 500);
    background(220);

    noStroke();
}

function draw() {
    circle(500/2, 500/2, 100);
}

function mousePressed() {
    shapeColor = color(random(0,255));
}