
$(document).ready(function () {

 
  function move() {
    var elem = document.getElementById("myProgress");  
    var countdown =  document.getElementById("counting");
    var width = 100;
    var id = setInterval(frame, 100);
    function frame() {
      if (width <= 220) {
            width--; 
        elem.style.width = width + '%'; 
        // elem.innerHTML = 100 - width  + '%';        
      } 
      if (width <= 0) {
    clearInterval(id);
      }
    }


    var seconds = document.getElementById("countdown").textContent;
    var countdown = setInterval(function() {
        seconds--;
        // (seconds == 1) ? document.getElementById("plural").textContent = "": document.getElementById("plural").textContent = "s";
        document.getElementById("countdown").textContent = seconds;
        if (seconds <= 0) clearInterval(countdown);
    }, 1000);

  }

  $("#start").on("click", function() {
    move();
  })

  
  // function move() {
  //   var elem = document.getElementById("myProgress");   
  //   var width = 100;
  //   var id = setInterval(frame, 100);
  //   function frame() {
  //     if (width <= 100) {
  //           width--; 
  //       elem.style.width = width + '%'; 
  //       elem.innerHTML = 100 - width  + '%';        
  //     } 
  //     if (width <= 0) {
  //   clearInterval(id);
  //     }
  //   }
  // }

  // $("#start").on("click", function() {
  //   move();
  // })





  // $("#start").on("click", function () {

  //   $(".progress-bar").animate({
  //     width: "100%"
  //   }, 10000);

  //   var timeleft = 10;
  //   var downloadTimer = setInterval(function () {
  //     document.getElementById("counting").innerHTML = timeleft + " seconds remaining";
  //     timeleft -= 1;
  //     if (timeleft <= 0) {
  //       clearInterval(downloadTimer);
  //       document.getElementById("counting").innerHTML = "Finished"
  //     }
  //   }, 1000);

  // })





})