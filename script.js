window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    document.getElementById("mainContainer").style.height = "70px";
    document.getElementById("navBar").style.margin = "8px";
  } else {
    document.getElementById("mainContainer").style.height = "120px";
    document.getElementById("navBar").style.margin = "30px";
  }
}

var toggleMenu = function(){
  var menu = document.getElementById('seeMore')
  menu.classList.toggle('open')
}