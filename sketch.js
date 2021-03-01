function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  

  angleMode (DEGREES)
}

function draw() {
  background(0);  
  drawSprites();

  translate (400, 200)
  rotate (-90)

  hr = hour()
  mn = minute()
  sc = second()

  scAngle = map(sc, 0, 60, 0, 360)
  hrAngle = map(hr%12, 0, 12, 0, 360)
  mnAngle = map(mn, 0, 60, 0, 360)

  push()
  stroke (255, 0,0)
  strokeWeight (7)
  rotate (hrAngle)
  line (0,0,100,0)
  translate(hr.x, hr.y);
  noFill()
  arc (0,0,300,300,0,hrAngle)
  pop()

  push()
  stroke ("blue")
  strokeWeight (7)
  rotate (scAngle)
  line (0,0,100,0)
  translate(sc.x, sc.y);
  noFill()
  arc (0,0,250,250,0,scAngle)
  pop()

  push()
  stroke ("green")
  strokeWeight (7)
  rotate (mnAngle)
  line (0,0,100,0)
  translate(mn.x, mn.y);
  noFill()
  arc (0,0,300,300,0,mnAngle)
  pop()



}