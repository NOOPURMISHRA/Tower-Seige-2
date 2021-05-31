class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
            //isStatic:true
           
        }
        this.visiblity=225;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
       // this.image= loadImage("block.png");
        World.add(world, this.body);
      }
      display(){
        console.log(this.body.speed);
       
        if(this.body.speed<3){
          var pos= this.body.position;
          var angle=this.body.angle;
         push();
         translate(pos.x, pos.y)
         rotate(angle);
         rectMode(CENTER);
         rect(0,0,this.width,this.height);
         pop();
        }
        else{
        World.remove(world, this.body); 
        push();
        this.visiblity= this.visiblity-5;
        pop();
      }
    }
  }