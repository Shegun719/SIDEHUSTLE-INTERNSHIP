let randomColor = ["green", "red", "lime", "aqua", "navy", "purple", "olive", "peach", "blue", "brown", "yellow", "black", "gray", "silver", "maroon"];

let text = document.querySelector(".color");

const btn = document.querySelector("#btn");
btn.addEventListener("click", function(){
document.body.style.background=randomColor[Math.floor(Math.random()*randomColor.length)];
text.textContent=document.body.style.background;
});


