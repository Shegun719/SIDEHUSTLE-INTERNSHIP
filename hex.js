const hex = [ "#EE799F", "#EE3A8C", "#800080", "#7A378B", "#551A8B", "#191970", "#E6E6FA", "#FFAEB9", "#00CD66", "#00EE00", "#030303", "#696969","#C2C2C2", "#F2F2F2", "#7D9EC0", "#8B2323", "#CD9B9B", "#FF4500", "#292421", "#8B4500", "#808000", "#87CEFA", "#87CEFA", "#CDC1C5", "#CD69C9", "#FFFF00" ];

let text = document.querySelector(".color");

const btn = document.querySelector(".btn");
btn.addEventListener("click", function (){
document.body.style.background = hex[ Math.floor( Math.random()*hex.length ) ];

 text.textContent=document.body.style.backgroundColor=hex[Math.floor(Math.random()*hex.length)];
});

