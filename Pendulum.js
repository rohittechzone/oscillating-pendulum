class Pendulum{
    constructor(x,y,w,h){
        var options = {
            restitution : 0.5,
            friction : 1.0
        }
    this.body = Bodies.rectangle(x,y,w,h,options);
    this.w = w;
    this.h = h;
    World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill("black");
        ellipse(pos.x,pos.y,this.w,this.h);
    }
}