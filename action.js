
var time = setInterval(function(){
    var second=document.getElementById("second");
    var minute=document.getElementById("minute");
    var hour=document.getElementById("hour");
    
    var dt = new Date();
    var hr = dt.getHours();
    var min = dt.getMinutes();
    var sec = dt.getSeconds();
    
    var secDeg = 6 * sec;
    var minDeg = (6 * min) + (sec/10);
    var hrDeg = (30 * hr) + (min/2);
    second.style.webkitTransform = "rotate("+ secDeg + "deg)";
    minute.style.webkitTransform = "rotate("+ minDeg + "deg)";
    hour.style.webkitTransform = "rotate("+ hrDeg + "deg)";
    
    // console.log(hr, min, sec);
    console.log(minDeg);
}, 1000);


