let bubble;
let bubble2;
let obj ={
  x: 400,
  y: 500,
  bubbleSize: 30
}

function setup() {
  createCanvas(1000, 1000);
  bubble = new Bubble();
  bubble2 = new Bubble(obj);
  
}

function draw() {
  background(0);
  bubble.moveRandomly();
  bubble.show();
  
  bubble2.moveRandomly();
  bubble2.show();
  

}

class Bubble {
  constructor(object){
    if(!object){
      this.x = random(100, 500);
      this.y = random(100, 500);
      this.bubbleSize = 20;
      
    }else{
      this.x = object.x;
      this.y = object.y;
      this.bubbleSize = object.bubbleSize;
      
    }
    
  }
  
  setAllProps(object){
    this.x = object.x;
    this.y = object.y;
    this.bubbleSize = object.bubblesize;
  };
  
  moveRandomly(){
    this.x += random(-5,5);
    this.y += random(-5,5);
  }
  
  show(){
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, this.bubbleSize, this.bubbleSize)
  }
  
};

