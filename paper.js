class Paper{
        constructor(x,y,r){
            var options={
                friction:0,
                restitution:0.3,
                isStatic:false,
                density:1
            }
    this.body=Bodies.circle(x,y,r,options)
    this.r=r;
    this.image=loadImage("paper.png")
    World.add(world,this.body)
        }
        display(){
          var  pos=this.body.position
          var angle=this.body.angle
          push()
          translate(pos.x,pos.y)
          rotate(angle)
          strokeWeight(5)
          stroke("blue")
          fill("green")
         // ellipseMode(RADIUS)
          //ellipse(0,0,this.r,this.r)    
          imageMode(CENTER)
          image(this.image,0,0,60,60)
          pop()
        }
    } 