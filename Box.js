class Box{
  constructor(x, y) {
    var options = {
        'isStatic': false,
        'restitution':0.3,
        'friction':0.3,
        'density':0.06,
    }

    this.body = Bodies.rectangle(x, y, 50, 30, options);
    this.width = 50;
    this.height = 30;
    
    World.add(world, this.body);
  }
  
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;

    push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER); 
      rect(0,0,this.width,this.height);
    pop();
  }
};