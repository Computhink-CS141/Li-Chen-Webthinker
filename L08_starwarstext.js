// write your codes here
let list = ["pizza", "burger", "sushi"];

function setup () {
    createCanvas(400, 400);
}

let yPos = 400;
let lineGap = 60;

function draw() {
    background(220);
    // textSize(20);
    // text("li chen", 50 ,50);
    // textSize(15);
    // text("12", 50, 70);
    // textSize(10);
    // text("nothing", 50, 90)



    // textSize(20);
    // textAlign(LEFT);
    // text["My favourite foods:"]
    // for(let i=0; i<list.length;i++) {
    //     text((i+1) + "." + list[i], 50, 1*30);

    // }

    fill(255, 255, 0);
    textSize(24);
    textAlign(CENTER);
    for(let i = 0; i < list.length; i++) {
        text((i+1) + "." + list[1], width/2, yPos + i*30);
    }
    yPos -= 0.6;
}