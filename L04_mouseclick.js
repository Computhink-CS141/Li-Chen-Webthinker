// write your codes here
function setup() {
    //            w    h
    createCanvas(500, 500);
    background(220);
    noLoop();
}

// function draw() {
//     let ypos = 50;
//     let xpos = 50;
//     let ggColour = 0;
//     for (let num = 0; num < 6; num++){
//         fill(0, ggColour, 0);
//         circle(xpos, ypos, 50);
//         xpos = xpos+50;
//         ypos = ypos+50;
//         ggColour = ggColour+50;
//     }
// }

function draw() {
    fill(shapeColour);
    circle(width/2, height/2, 200);
}

function mousePressed() {
    shapeColour = colour(random(0, 225));
}

function mouseReleased() {
    shapeColour = "white"
}