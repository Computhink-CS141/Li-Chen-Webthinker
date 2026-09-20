// write your codes here
function setup() {
    createCanvas(400, 400);
    background(220);
}

function draw() {
    background(220);

    let hh = hour();
    let sec = 0;
    fill(0);
    textSize(72);
    text(nf(hh,2)+":"+":"+sec)
}