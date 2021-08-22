class Gopika
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.gopikaWidth=200;
		this.gopikaHeight=50;
		this.gopikaThickness=20;
		
		this.image=loadImage("images/krishna.png")
        var options={
            restitution:0
        }
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.gopikaWidth, this.gopikaThickness,options)
       

		World.add(world, this.bottomBody)

	}
	
	display()
	{
			var posBottom=this.bottomBody.position;
			push()
           
			translate(posBottom.x, posBottom.y+10);
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-this.gopikaHeight/2,this.gopikaWidth, this.gopikaHeight)
			pop()

			
			
	}

	

}