// write your codes here
let list = ["pizza", "burger", "sushi"];

function setup () {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    // textSize(20);
    // text("li chen", 50 ,50);
    // textSize(15);
    // text("12", 50, 70);
    // textSize(10);
    // text("nothing", 50, 90)



    textSize(20);
    textAlign(LEFT);
    text["My favourite foods:"]
    for(let i=0; i<list.length;i++) {
        text((i+1) + "." + list[i], 50, 1*30);
        
    }
}