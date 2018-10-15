var lastST = 0;

function scrollScript() {
	var navlinks = document.getElementById('navlinks');
	var st = window.pageYOffset || document.documentElement.scrollTop;
	
	if (st > lastST) {
		navHide(navlinks);
	}
	else {
		navShow(navlinks);
	}
	
	lastST = st;
	
}

function navHide(navlinks) {
	navlinks.style.top = -70+'px';
}

function navShow(navlinks) {
	navlinks.style.top = 0+'px';
}

function navMouse() {
	navShow(document.getElementById('navlinks'));
	
}