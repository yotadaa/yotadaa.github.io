var menuIcon = document.querySelector(".topnav .icon");
var topnav = document.querySelector(".topnav a")
    var active = document.querySelector(".active");
    menuIcon.addEventListener("mouseenter", function() {
        if (menuIcon.style.color === "#A76F6F") {
            menuIcon.style.backgroundColor = "white";
        } else {
            menuIcon.style.backgroundColor = "#A76F6F";
        }
    });
    menuIcon.addEventListener("mouseleave", function() {
        menuIcon.style.backgroundColor = "#2D4356";
        menuIcon.style.color = "white";
    });
    menuIcon.addEventListener("click", function() {
        if (active.className === "active") {
            active.className += " true";
            active.animate([
                {width: '23%'},
                {width: '80%'}
            ], {
                duration: 1000,
                easing: 'ease-in-out',
                fill: 'forwards'
            });
            menuIcon.style.color = "white";
        } else {
            active.className = "active";
            active.animate([
                {width: '79%'},
                {width: '24%'}
            ], {
                duration: 1000,
                easing: 'ease-in-out',
                fill: 'forwards'
            });
            menuIcon.style.color = "white";
        };
    });
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

document.addEventListener("DOMContentLoaded", function() {
  var parent = document.getElementById("parent");
  var isPressed = false;
  
  // Get the list items
    var menuItems = document.querySelectorAll('li');

    // Add a click event listener to each menu item
    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            this.classList.toggle('active');
      });
    });

  
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
