class Polygon {
    constructor(x, y, width) {
      var options = {
          'isStatic': false,
          'restitution':0,
          'friction':1,
          'density':2,
      }

      this.body = Bodies.circle(x,y,width,options);
      this.width = width;

      
      World.add(world, this.body);
    }
    
    display(){

      var pos =this.body.position;
      var angle = this.body.angle;

      push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(0,0, this.width*3, this.width*3);
      pop();
    }
  };