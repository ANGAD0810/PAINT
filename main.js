var mouseEvent = "empty";
var lpx, lpy;
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
color = "black";
widthofline = 1;
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    color = document.getElementById("color").value;
    widthofline = document.getElementById("wol").value;
    mouseEvent = "mouseDown";
}
canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}
canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    mouseEvent = "mouseUP";
}
canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {

    cpmx = e.clientX - canvas.offsetLeft;
    cpmy = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown")  {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthofline;

        console.log ("x = " + lpx +"y =" +lpy);
        ctx.moveTo(lpx,lpy);
        console.log("x =" + cpmx + "y =" + cpmy);
        ctx.lineTo(cpmx,cpmy);
        ctx.stroke();
    }
    lpx=cpmx;
    lpy= cpmy;
}
function cleararea()
{
ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}