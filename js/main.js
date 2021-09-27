function DisplayHint(code){
 if (code === 303.5){
    //Earth and Moon
    setTimeout(function(){ document.getElementById("moonspd").style.left = "0%"; }, 1000);
    setTimeout(function(){ document.getElementById("moonspd").style.left = "-100%"; }, 6000);    
    setTimeout(function(){ document.getElementById("moontime").style.left = "0%"; }, 8000);
    setTimeout(function(){ document.getElementById("moontime").style.left = "-100%"; }, 13000);
 }
 else if (code === 304){
    //Earth and Mars
    setTimeout(function(){ document.getElementById("marsspd").style.left = "0%"; }, 1000);
    setTimeout(function(){ document.getElementById("marsspd").style.left = "-100%"; }, 6000);    
    setTimeout(function(){ document.getElementById("marstime").style.left = "0%"; }, 8000);
    setTimeout(function(){ document.getElementById("marstime").style.left = "-100%"; }, 13000);
 }
}



function doScrolling(elementY, duration, route) { 
  var startingY = window.pageYOffset;
  var diff = elementY - startingY;
  var start;

  window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp;
    var time = timestamp - start;
    var percent = Math.min(time / duration, 1);

    window.scrollTo(0, startingY + diff * percent);

    if (time < duration) {
      window.requestAnimationFrame(step);
    }
  });
  DisplayHint(route);
}

