var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle="Blue";
ctx.lineWidth=3;
ctx.arc(100,100,70,0,360);
ctx.stroke();
canvas.addEventListener("mousedown", mymousedown);
function mymousedown(e){
mousex=e.clientX-canvas.offsetLeft;
mousey=e.clientY-canvas.offsetTop;
circle(mousex,mousey);
}
function circle(mousex,mousey){
    ctx.beginPath();
    ctx.strokeStyle="Blue";
    ctx.lineWidth=3;
    ctx.arc(mousex,mousey,70,0,360);
    ctx.stroke();  
}
