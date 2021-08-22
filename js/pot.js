class Pot
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.potWidth=750;
		this.potHeight=400;
		this.potThickness=10;
		
		this.image=loadImage("images/butterpot.png")
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.potWidth, this.potThickness, {isStatic:true})
		World.add(world, this.bottomBody)

	}
	
	display()
	{
			var posBottom=this.bottomBody.position;
			push()
			translate(posBottom.x, posBottom.y+10);
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-this.potHeight/2,this.potWidth, this.potHeight)
			pop()
			
	}

}
