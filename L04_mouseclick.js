// write your codes here
function setup() {
    //            w    h
    createCanvas(500, 500);
    background(220);
    noLoop();
}

function draw() {
    for (let num = 0; num < 5; num++){
        fill(220);
        circle(100, 100, 50);
    }
}