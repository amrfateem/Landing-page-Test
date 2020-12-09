topb=document.getElementById("topbutton");
window.onscroll = function() {scrollFunction()};
// function to show the button when goin down

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topb.style.display = "block";
  } else {
    topb.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0; 
} //function to scrollup