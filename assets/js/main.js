


// circle


let circle= document.getElementsByClassName("circle")[0];
let scroe= document.getElementsByClassName("scroe")[0];
let win= document.getElementsByClassName("win")[0];
let loss= document.getElementsByClassName("loss")[0];

let i=0;
var w = window.innerWidth;
var h = window.innerHeight;

let timeout=setInterval("random()",900)

function random(){
	let left=Math.floor(Math.random()*w-250)+100+"px";
	let top=Math.floor(Math.random()*h-250)+100+"px";
	circle.style.display="block";
	circle.style.left=left;
	circle.style.top=top;
}

circle.addEventListener('click',function(){
	i++;
	circle.style.display="none";
	scroe.innerHTML="scroe: "+i;
});

setTimeout(function(){
clearTimeout(timeout);

if(i>10){
	win.classList.add("d-block");
	circle.style.display="none";
}else{
	loss.classList.add("d-block");
	circle.style.display="none";
}

},20000)