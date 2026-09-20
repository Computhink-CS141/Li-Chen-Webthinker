// write your codes here

let countdown = 5;

function setup() {
    createCanvas(400, 400);
    background(220);
    textAlign(CENTER, CENTER);
}

function draw() {
    background(220);

    let hh = hour();
    let min = minute();
    let sec = second();
    fill(0);
    textSize(72);
    text(nf(hh,2)+ ":"+(nf(min, 2)) + ":"+(nf(sec,2)), width/2, height/2);

    fill("red");
    textSize(32);
    text(countdown, width/2, height/2+50)
}