
var img;
var layer1;


var imageX = 0;
var colorBlack = "#000";

function preload() { 
	img = loadImage("Backlayer.jpg"); 
    layer1 = loadImage("Toplayer.png");
}

function setup() {

	createCanvas(1200,800);
    
    background(colorBlack);

}

function draw() {
    // removing it makes cool effect
    image(img, 0, 0);

	image(layer1, mouseX, mouseY -10);
	textFont('Arial')
	text('Photos by Sadaf Azadehfar',48,773)

 }   
