var result=document.querySelector("#result");
var reload=document.querySelector("#reload");
var easy=document.querySelector("#EASY");
var hard=document.querySelector("#HARD");

var colors = colorList(6);
var winColor=randomColor();
var goal=document.querySelector("#goal");
goal.textContent=winColor;

var h1=document.querySelector("h1");


var squares=document.querySelectorAll(".square");
for(var i=0;i<squares.length;i++)
{
	squares[i].style.background = colors[i];

	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.background;
		console.log(clickedColor,winColor);
		if(clickedColor==winColor)
		{
			result.textContent="WIN!!!";
			for(var i=0;i<squares.length;i++)
				squares[i].style.background=winColor;
			h1.style.background=winColor;
		}

		else
		{
			result.textContent="TRY AGAIN";
			this.style.background="black";
		}
	});
}



reload.addEventListener("click",function(){
	location.reload();
});


easy.addEventListener("click",function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	colors=colorList(3);
	winColor=randomColor();
	goal.textContent=winColor;
	for(var i=0;i<3;i++)
		squares[i].style.background=colors[i];
	for(var i=3;i<6;i++)
		squares[i].style.background="black";



});

hard.addEventListener("click",function(){
	location.reload();
})


function colorList(num){
	var arr=[];
	for(var i=0;i<num;i++)
		arr.push(randomColorList());
	return arr;
}
function randomColorList(){
	var r=Math.floor(Math.random()*225);
	var b=Math.floor(Math.random()*225);	
	var g=Math.floor(Math.random()*225);
	color="rgb("+r+", "+g+", "+b+")";
	return color;
}
function randomColor(){
	return colors[Math.floor(Math.random()*colors.length)];
}