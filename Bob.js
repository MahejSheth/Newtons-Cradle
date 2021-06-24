class Bob{
    constructor(x,y,radius) {
        var options={
            isStatic:false,
            restitution:1,
            friction:0, 
            density:0.8 
        }
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.body=Bodies.circle(this.x,this.y,this.radius,options); 
      
        World.add(world,this.body)    
    }
    display(){
        ellipseMode(CENTER)
        fill ("purple")
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
       
    }
 }