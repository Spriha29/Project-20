var bgImg;
var cat, catImg1, catImg2, catImg3;
var mouse, mouseImg1, mouseImg2, mouseImg3;

function preload() {
    bgImg = loadImage("images/garden.png");

    catImg1 = loadImage("cat1.png");
    catImg2 = loadAnimation("cat2.png, cat3.png");
    catImg3 = loadImage("cat4.png");

    mouseImg1 = loadImage("mouse1.png");
    mouseImg2 = loadImage("mouse2.png, mouse3.png");
    mouseImg3 = loadImage("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    
    cat = createSprite(600,600,50,50);
    cat.addImage(catImg1);
    cat.scale = 0.5;

    mouse = createSprite(300,600,50,50);
    mouse.addImage(mouseImg1);
    mouse.scale = 0.5;

}

function draw() {
    background(bgImg);

    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
