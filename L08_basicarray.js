// write your codes here
let ypos = 0;
let lineY = 0;
let storyText = [];

function setup() {
    createCanvas(400, 600);
    ypos = height;

    storyText[0] = "long long long long long time ago.................";
    storyText[1] = "i was told a grandmother story";
    storyText[2] = "the end."
    print(storyText); //check js console
}

function draw() {
    background(220); //erase canvas
    textSize(18);
    fill("blue");
    lineY = 0
    textAlign(CEN)
    for (let count=0; count < storyText.length ; count++) {
        //                      x    y
        text(storyText[count], 100, ypos + lineY);
        lineY = lineY + 20; // skip and puch lower
    }
    // //                       x    y
    // text("hello everybody", 100, ypos);
    // text("second line",     100, ypos + 18);
    // text("third line",      100, ypos +36)
    ypos = ypos - 0.67;
}