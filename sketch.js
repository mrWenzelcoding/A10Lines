let clickNum =20

function setup() {
  createCanvas(500,500);
}

function draw() {
}

function mousePressed(){
  background(0);
  let x1,x2,y1,y2
  let r,g,b
  let r2,g2,b2
  let check = false;

  for(let i = 0; i<clickNum; i++){

    
    r = 150
    g = random(255)
    b = random(255)

    if(check===false){
      r2 = r
      g2 = g
      b2 = b
      check = true;
      x1 = random(0,500);
      x2 = random(0,500);
      y1 = random(0,500);
      y2 = random(0,500);
    }
    


    if(r2 > r*0.75 && r2 < r*1.25 && g2 > g*0.75 && g2 < g*1.25 && b2 > b*0.75 && b2 < b*1.25){
      stroke(r,g,b);
      x1 = x2
      y1 = y2
      x2 = random(500)
      y2 = random(500)
      r2 = r
      g2 = g
      b2 = b
        //if(dist(x1,y1,x2,y2)>400){
          //if()
          line(x1,y1,x2,y2);
    // }
    }

    strokeWeight(3);

  }
  clickNum+=50;
}
