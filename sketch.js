var canvas;
var music;
var box1,box2,box3,box4,bird,//ground;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    //ground = new Ground(600,height,1200,20);
    bird=new Bird(100,100);

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    drawSprites();
    //create edgeSprite
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    bird.display();
   // ground.display();



    //add condition to check if box touching surface and make it box
}
