// write your codes here
let colour = "white";
let size = 50;
let showCircle = false;
let showRect = false;
let showSquare = false;

function setup() {
    createCanvas(500, 500);
    background("lightblue");
    // noStroke();
}

// function draw() {
    
// }

// function mousePressed() {
//     size = 5
//     colour = color(random(0,255), random(0, 255), random(0, 255));
// }

// function mouseDragged() {
//     fill(colour);
//     circle(mouseX, mouseY, size)
//     size = size + 0.5;
// }
// function draw() {
//     background("skyblue");
//     rect(width/2, height/2, size, size);
// }

// function keyPressed() {
//     size = 300;
// }

// function keyReleased() {
//     size = 50;
// }

function draw() {
    background("skyblue");
    if (showCircle) {
        circle(width/2, height/2, size);

    }
    if (showRect) {
        fill("red");
        rect(width/2-size, height/2-size, size, size*2);
    }
    if (showSquare) {
        fill("blue");
        rect(width/2, height/2, size, size);
    }
}

function keyPressed() {
    if (key === 'c') {
        // ! is a NOT operator
        showCircle = ! showCircle;
    }
    if (key === s) (
        showSquare = ! show
    )
    if (key === r) (
        showRect = ! showRect
    )
}