// write your codes here
let ypos = 0;

function setup() {
    createCanvas(400, 600);
    
}

function draw() {
    background(220); //erase canvas
    textSize(18);
    //                       x      y
    text("hello everybody", 175, ypos);
    text("second line",     175, ypos + 18);
}