var second=document.getElementById("second");
var minute=document.getElementById("minute");
var hour=document.getElementById("hour");

var dt = new Date();
var hr = dt.getHours();
var min = dt.getMinutes();
var sec = dt.getSeconds();

console.log(hr, min, sec);

var secDeg = 6*sec;
var minDeg = 6*min;
var hrDeg = 30*hr;

setInterval(updateTime);

function updateTime() {
    second.style.webkitTransform = "rotate("+ secDeg + "deg)";
    minute.style.webkitTransform = "rotate("+ minDeg + "deg)";
    hour.style.webkitTransform = "rotate("+ hrDeg + "deg)";
}