// write your codes here

let countdown = 5;
let objectId;
let bgColor = "gray";

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
    text(countdown, width/2, height/2+75);
    textSize(16);
    text("click here to start countdown", width/2, height/2+105);
}

function mousePressed() {
    console.log("i got mouse clicked!")
    objectId = setInterval(updateCountdown, 1000);
}

function updateCountdown() {
    if (countdown === 0) {
        clearInterval(objectId);
    }
    else {
        countdown = countdown - 1;
    }
}