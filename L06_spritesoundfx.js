// write your codes here
let bgm;
let pico;
let xpos, ypos;
let bgm, sfx;

function preload() {
    // any media, image or sound must load here
    pico = loadImage("assets/pico-a.png")
    bgm = loadSound("assets/")
}

function setup() {
    createCanvas(350, 350);
    background("lightblue");
    xpos = 0;

    bgm.loop(); //play non-stop
}

function draw() {
    background("lightblue")
    //          x  y   w    h
    image(pico, 0, 0, 110, 133);
    if (keyIsDown(RIGHT_ARROW)) {
        xpos = xpos + 2;
    }
}

function keyPressed() {

}