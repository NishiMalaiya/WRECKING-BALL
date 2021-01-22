class Rope {
    constructor(bodyA,pointB){
        var option = {
            bodyA :bodyA,
            pointB :pointB,
           stiffness :1.2,
           length :250
        }
        this.Rope = Constraint.create(option);
World.add(world,this.Rope);
  this.pointB = pointB;
  
    }
    display(){
        var pointA = this.Rope.bodyA.position;
        var pointB = this.pointB;
       
        push();
        stroke(48,22,8);
        strokeWeight(3);
        line(pointB.x,pointB.y,pointA.x,pointA.y);
        pop();
    }
}