class Chain{
      constructor (firstbody,secondbody){
var options = {
bodyA: firstbody,
bodyB: secondbody,
length:50,
stiffness:0.4
}
        this.chain=Constraint.create(options);
        World.add(world,this.chain)
        
      }
display(){
    var p1 = this.chain.bodyA.position;
    var p2 = this.chain.bodyB.position;
    strokeWeight (5)
    line (p1.x,p1.y,p2.x,p2.y)

}
}




