//DOM to get objects for functions
let topb = document.getElementById("topbutton");
let sections = document.querySelectorAll('.sectionbox');
let navitems = document.querySelectorAll('.navitem');

// global listen instead of addind addEventListener
window.onscroll = () => {
	scroll()
	changenav()
};

// function to show which active state is in view and change style
function changenav(){
	sections.forEach((section) => {
		sec=section.getBoundingClientRect();
		if (sec.top <= 150 && sec.bottom > 200 ){
			section.classList.add("activesec");		
			section.classList.remove("notactivesec");
		} else {
			section.classList.remove("activesec");
			section.classList.add("notactivesec");
		} // to ensure smooth transiation betwwen active states
	});
}

// function to show the button when goin down
function scroll() {
	document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? topb.style.display = "block" : topb.style.display = "none";
}

//function to scrollup
function topFunction() {
	document.documentElement.scrollTop = 0;
}
