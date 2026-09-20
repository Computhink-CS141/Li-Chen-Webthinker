// write your codes here
function setup() {
    createCanvas(400, 400);
    background(220);
}

function draw() {
    background(220);

    let hh = hour();
    let min = minute();
    let sec = second();
    fill(0);
    textSize(72);
    text(nf(hh,2)+ ":"+(nf(min, 2)) + ":"+(nf(sec,2)), width/2, height/2);
}