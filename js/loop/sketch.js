
var animation=0;
function setup(){
 createCanvas(1920,1080); 
}


function draw(){
background(200);

for(var x=0; x<animation ; x=x+20 ){
   
for(var y=0; y<animation; y=y+20){
  fill(random(250),random(250),random(250));
  ellipse(x,y,20,20);
}
}
 animation=animation+5;
}