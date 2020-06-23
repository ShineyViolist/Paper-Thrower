class Paper{
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var radius1 = this.radius;
        //push();
        //var angle = this.body.angle;
        //translate(pos.x, pos.y);
        //translate(radius1);
        //rotate(angle);
        fill("white");
        ellipse(pos.x,pos.y, radius1*2);
        //pop();
    }
}