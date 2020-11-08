class Paper {
    constructor(x,y,width) {
      var options = {
        isStatic:false,
        restitution : 0.3,
        friction : 0.5,
        density : 0.5
      }
      this.body = Bodies.circle(x,y,width ,options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      ellipseMode(CENTER);
      fill("white");
      ellipse(0,0,this.width,this.width);
      pop();
    }
  };