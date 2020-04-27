class Pole{
    constructor(bodyA, bodyB){
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            stisffness : 0.01,
            length : 150
        }
        this.Pole = Constraint.create(options);
        World.add(world,this.Pole);
    }
    display(){
        var pointA = this.Pole.bodyA.position;
        var pointB = this.Pole.bodyB.position;
    }
}