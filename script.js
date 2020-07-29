window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    document.getElementById("mainHeader").style.height = "70px";
    document.getElementById("navBar").style.margin = "8px";
  } else {
    document.getElementById("mainHeader").style.height = "120px";
    document.getElementById("navBar").style.margin = "30px";
  }
}