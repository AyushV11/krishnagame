class Krishna
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.krishnaWidth=750;
		this.krishnaHeight=400;
		this.krishnaThickness=10;
		
		this.image=loadImage("images/krishna.png")
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.krishnaWidth, this.krishnaThickness, {isStatic:true})
		World.add(world, this.bottomBody)

	}
	
	display()
	{
			var posBottom=this.bottomBody.position;
			push()
			translate(posBottom.x, posBottom.y+10);
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-this.krishnaHeight/2,this.krishnaWidth, this.krishnaHeight)
			pop()

			
			
	}

	

}

