//DOM to get objects for functions
let topb = document.getElementById("topbutton");
let sections = document.querySelectorAll('.sectionbox');
let navitems = document.querySelectorAll('.navitem');
let sidenavbar = document.getElementById('sidenavbar');
let navfromsec = document.querySelectorAll('#title');

//listen and execute specific functions instead of adding addEventListener to each seperate function
window.onscroll = () => {
	scroll()
	changenav()
};

// function to show the button when goin down
function scroll() {
	document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? topb.style.display = "block" : topb.style.display = "none";
}

//function to scrollup with smooth behavior
function topFunction() {
	onclick = scrollTo({ top: 0, behavior: 'smooth' })
}

// function to show which active state is in view and change style
function changenav() {
	sections.forEach((section) => {
		secname = section.querySelector('h2')
		sec = section.getBoundingClientRect();
		if (sec.top <= 150 && sec.bottom > 300) {
			let navsecs = document.querySelectorAll('a');
			navsecs.forEach(navsec => {
				if (section.classList.contains('activesec')) {
					if (navsec.innerHTML == secname.innerHTML) {
						navsecs.forEach(navsec => { navsec.classList.remove('activenav'); })
						navsec.classList.add('activenav');
					}
				};
			});
			section.classList.add("activesec");
			section.classList.remove("notactivesec");
		} else {
			section.classList.remove("activesec");
			section.classList.add("notactivesec");
		} // to ensure smooth transiation betwwen active states and because the css have 3 classes instead of 2
	});
}

//listen to DOM content loaded and excute these functions
window.addEventListener('DOMContentLoaded', () => {
	addnav()
	navbutton()
});


//Populating the nav bar with items according to what sections we have
function addnav() {
	navfromsec.forEach((navitem) => {
		item = navitem.innerHTML;
		bar = document.getElementById('sidenavbar');
		line = document.createElement("li");
		a = document.createElement('a');
		a.append(item);
		line.appendChild(a);
		line.classList.add('navitem');
		bar.appendChild(line);
	});
}

//Adding button like functionlity to added items in navbar
function navbutton() {
	let navsecs = document.querySelectorAll('a');
	navsecs.forEach((navsec) => {
		navsec.addEventListener('click', () => {
			navsecs.forEach(navsec => {
				if (navsec.classList.contains('activenav')) {
					navsec.classList.remove('activenav');
				};
			});
			navsec.classList.add('activenav');
			seclocs = document.querySelectorAll('h2');
			seclocs.forEach(secloc => {
				if (navsec.innerHTML == secloc.innerHTML) {
					console.log(secloc);
					secloc.scrollIntoView({ behavior: 'smooth' });
				}
			})
		})
	});
};