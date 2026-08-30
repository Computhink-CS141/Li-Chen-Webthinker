// write your codes here
let ypos = 0;
let lineY = 0;
let storyText = [];

function setup() {
    createCanvas(400, 600);
    ypos = height;

    storyText[0] = "long long long long long long long long time ago.................";
    storyText[1] = "i was told a grandmother story";
    storyText[2] = "the end."
    print
}

function draw() {
    background(220); //erase canvas
    textSize(18);
    //                       x    y
    text("hello everybody", 100, ypos);
    text("second line",     100, ypos + 18);
    text("third line",      100, ypos +36)
    ypos = ypos - 0.67;
}