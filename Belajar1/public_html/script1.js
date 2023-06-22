document.addEventListener("DOMContentLoaded", function() {
  var parent = document.getElementById("parent");
  var isPressed = false;
  
  document.addEventListener("mousedown",function(event){
      isPressed = true;
  });
  
  document.addEventListener("mouseup",function(event){
      isPressed = false;
  });

  document.addEventListener("mousemove", function(event) {
    if (isPressed) {
        var ball = document.createElement("div");
        ball.id = "ball";
        ball.classList.add("ball");
        ball.style.left = event.clientX-5+"px";
        ball.style.top = event.clientY-5+"px";

        parent.appendChild(ball);
    }
  });
  
  document.addEventListener("keydown", function(event) {
    removeAllBalls();
  });

  function removeAllBalls() {
    var balls = parent.querySelectorAll(".ball");
    balls.forEach(function(ball) {
      ball.remove();
    });
  }
});
