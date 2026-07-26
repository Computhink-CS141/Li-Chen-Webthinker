// write your codes here
function setup() {
    //            w    h
    createCanvas(500, 500);
    background(220);
    // noLoop();
}

function draw() {
    let ypos = 50;
    let xpos = 50;
    let ggColour = 0;
    for (let num = 0; num < 6; num++){
        fill(ggColour);
        circle(xpos, ypos, 50);
        xpos = xpos+50;
        ypos = ypos+50
    }
}