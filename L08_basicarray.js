// write your codes here
let ypos = 0;

function setup() {
    createCanvas(400, 600);
    ypos = height/2
}

function draw() {
    background(220); //erase canvas
    textSize(18);
    //                       x    y
    text("hello everybody", 100, ypos);
    text("second line",     100, ypos + 18);
    text("third line",      100 , )
    ypos -= 0.67;
}