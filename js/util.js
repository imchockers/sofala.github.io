var lastST = 0;

function scrollScript() {
	var navlinks = document.getElementById('navlinks');
	var st = window.pageYOffset || document.documentElement.scrollTop;
	
	if((window.innerWidth
		|| document.documentElement.clientWidth
		|| document.body.clientWidth) > 768) {
		
		if (st > lastST) {
			navHide(navlinks, -70);
		}
		else {
			navShow(navlinks, 0);
		}
		
	} else {
		if (st > lastST) {
			navHide(navlinks, -75);
		}
		else {
			navShow(navlinks, 15);
		}
	}
	
	lastST = st;
	
}

function navHide(navlinks, offset) {
	navlinks.style.top = offset+'px';
}

function navShow(navlinks, offset) {
	navlinks.style.top = offset+'px';
}

function navMouse() {
	navShow(document.getElementById('navlinks'));
	
}

var menuopen = false;

function openMenu() {
	var touchnav = document.getElementById("touchnav");
	
	if (menuopen) {
		touchnav.style.display = 'none';
		menuopen = false;
	}
	else {
		touchnav.style.display = 'block';
		menuopen = true;
	}
}