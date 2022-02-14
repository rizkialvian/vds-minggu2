let j;
function setup() {
  // put setup code here
  createCanvas(800,400);
  j = 0

}

function draw() {
  // put drawing code here
  background(200);

  strokeWeight(3)
  point(200,150);
  line(0,0,50,200);

  // fill(0,255,255)
  rect(140,100,20,60);

  strokeWeight(0)
  ellipse(150,100,40,40);
  strokeWeight(2)
  fill(100,150,200)
  triangle(150,150,150,170,150,110);
  //noStroke()

  // stroke(0,255,255)
  arc(300,50,40,40,radians(0),radians(270));

  strokeJoin(ROUND)
  beginShape();
  vertex(300,50)
  vertex(350,100)
  vertex(300,15)
  vertex(250,150)
  endShape(CLOSE);
  for (var i=0; i<=800;i++){
    x = i
    y = 300 + 100*Math.sin(x/20)
    point(x,y)
  }
  var y = 200 + 20*Math.sin(PI*j/20)
  var r = 200 + 20*Math.sin(PI*j/20)
  j+=1
  fill(240,192,35)
  ellipse(300,200,r,r)
}