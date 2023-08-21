var strokew = document.querySelector("#strokew");
var stroke = document.querySelector("#stroke");
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext('2d')
var strokec = document.querySelector("#colorbox");





strokew.addEventListener("input", function fun() {
    stroke.innerText = strokew.value
    ctx.lineWidth = strokew.value;
})

var x = 0;
var y = 0;

var isdrawing = false;


function stopdraw() {
    isdrawing = false;
}

function startdraw(e) {
    isdrawing = true;
    x = e.offsetX;
    y = e.offsetY;
}


function draw(e) {

    if (isdrawing == true) {
        const newX = e.offsetX;
        const newY = e.offsetY;

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(newX, newY);
        ctx.stroke();

        x = newX;
        y = newY;
    }
}
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", startdraw);
canvas.addEventListener("mouseup", stopdraw);


strokec.addEventListener('input', function fun() {
    ctx.strokeStyle = strokec.value;
})