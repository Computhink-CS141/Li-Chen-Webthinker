// write your codes here
let ypos = 0;

function setup() {
    createCanvas(400, 600);
    ypos = height;
}

function draw() {
    background(220); //erase canvas
    textSize(18);
    //                       x    y
    text("hello everybody", 100, ypos);
    text("second line",     100, ypos + 18);
    text("third line",      100, ypos +36)
    ypos = 0.67;
}