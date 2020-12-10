//DOM to get tools variables for functions
let topb = document.getElementById("topbutton");
window.onscroll = function () {
	scroll()
};

// function to show the button when goin down
function scroll() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		topb.style.display = "block";
	} else {
		topb.style.display = "none";
	}
}

//function to scrollup
function topFunction() {
	document.documentElement.scrollTop = 0;
} 

