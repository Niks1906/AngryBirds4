class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
       
        this.Sling1 = loadImage("./sprites/sling1.png");
        this.Sling2 = loadImage("./sprites/sling2.png");
        this.Sling3 = loadImage("./sprites/sling3.png");

        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            if (pointA.x<210) {
                strokeWeight(7);
                stroke("#52260F");
                line(pointA.x-20, pointA.y, pointB.x-20, pointB.y);
                line(pointA.x-20, pointA.y, pointB.x+20, pointB.y);
                image(this.Sling3, pointA.x-30, pointA.y-10, 15, 30);   
            } else {
                strokeWeight(7);
                stroke("#52260F");
                line(pointA.x+20, pointA.y, pointB.x-20, pointB.y);
                line(pointA.x+20, pointA.y, pointB.x+20, pointB.y);
                image(this.Sling3, pointA.x+25, pointA.y-10, 15, 30);
            }
            
        }

        image(this.Sling1, 200, 20);
        image(this.Sling2, 170, 20);
        
    }
    
}