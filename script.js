window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    document.getElementById("inicio").style.height = "70px";
    document.getElementById("mainHeader").style.margin = "8px";
  } else {
    document.getElementById("inicio").style.height = "120px";
    document.getElementById("mainHeader").style.margin = "30px";
  }
}
