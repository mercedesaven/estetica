window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
   /*  document.getElementById("mainHeader").style.padding = "30px 10px"; */
    document.getElementById("mainHeader").style.height = "40px";
    document.getElementById("navBar").style.margin = "8px";
  } else {
   /*  document.getElementById("mainHeader").style.padding = "10px 10px"; */
    document.getElementById("mainHeader").style.height = "80px";
    document.getElementById("navBar").style.margin = "30px";
  }
}