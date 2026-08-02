// write your codes here
let colour = "blue";
let size = 5;

function setup() {
    createCanvas(500, 500);
    background("lightblue");
    noStroke();
}

function draw() {
    circle(500/2, 500/2, size);
}

function mousePressed() {
    size = 5
    shapeColor = color(random(0,255), random(0, 255), random(0, 255));
}

function mouseDragged() {
    fill(colour)
}