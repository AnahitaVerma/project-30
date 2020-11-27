class Polygan
{
    constructor(x, y) 
    {
        var options = {
           
          isStatic: false,
          restitution: 0.1,
          friction:  0.5,
          density: 0.5
            
        }

      this.body = Bodies.circle(x, y,15,options);
      
        this.x = x;
        this.y = y;
        this.radius = 15;

      World.add(world, this.body);
      
}
display()
{
    var pos = this.body.position;
    ellipseMode(RADIUS);

    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    push()

    translate (pos.x , pos.y)

    fill("orange");

    

    ellipse(0, 0, this.radius);

    pop()
  }


}