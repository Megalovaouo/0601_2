var inputElement
var txts=[]
var vx,vy
var colors = "064789-427aa1-ebf2fa-679436-a5be00".split("-").map(a=>"#"+a)

function setup() {
		background(0)
	createCanvas(windowWidth, windowHeight);
	background(100);
	inputElement =createInput("")
	inputElement.position(50,50)
	inputElement.input(userInput)
	inputElement.style("font-size",'25px')
	
	// btnElement.style("border-color",'green')

}
function userInput(){
	
	txts.push({
		text: this.value(),
		x: width/2,
		y: 50,
		vx:random(-1,1),
		vy:1,

	})
	 this.value('')
	

}

function draw(){
	background(0)
	fill(colors)
	text(50)
	textSize(50)
	
	for(var i=0;i<txts.length;i++){
		fill(colors)
		let txt=txts[i]
		text(txt.text,txt.x,txt.y)
		txt.x=txt.x+txt.vx
		txt.y=txt.y+txt.vy
		txt.vy=txt.vy+0.1
		txt.vx=txt.vx*+0.999//產生X軸的摩擦力
		txt.vy=txt.vy*+0.999//產生y軸的摩擦力
		if(txt.y>height){
			txt.vy=-abs(txt.vy)//abs取絕對值
		
		
	
}
}
	function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

}
