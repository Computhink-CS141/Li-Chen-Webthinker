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
    textAlign(CENTER, CENTER);
    for (let count=0; count < storyText.length ; count++) {
        //                        x      y
        text(storyText[count], width/2, ypos + lineY);
        lineY = lineY + 25; // skip and puch lower
    }
    ypos = ypos - 1;

    if (ypos < 0) {
        ypos = height;
    }
}