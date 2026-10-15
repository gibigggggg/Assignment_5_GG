let x, y, d, xDir, yDir;
let r,g,b;
let angle,angleSpeed; 

function setup() {
  createCanvas(windowWidth, windowHeight);

  angleMode(DEGREES);
  r = 400;
  g = 100;
  b = 100;

  x = width / 2;
  y = height / 2;

  d = 10;

  xDir = random(-2,2);
  yDir = random(-2,2);

  angle = 0;
  angleSpeed = random(3,25);

}

function draw() {
  background(485,70,180,10);

display();
update();
Keepincanvas();
}

function display() {

    for(let i = 10; i > 0; i--){

    let offSetX = mapSin(angle, -5, 5);
    let offSetY = mapSin(angle, -3, 7);
    stroke('blue');
    fill(r,g,b);
    circle(x + offSetX*i, y + offSetY*i, d*i);
}

}

 function Keepincanvas(){

if((x > width)||(x < 0)){

xDir = -yDir;

}

if((y > height) || (y < 0)){
yDir = -yDir;
}

 }


 function update(){

  x += xDir;
  y += yDir;

  angle += angleSpeed;
 }

 function mapSin(a,target1,target2){
let sinMap;

sinMap = map(sin(a),-1,1,target1,target2);
return sinMap;

 }