var lastST = 0;
var autoplay = true;

function scrollScript() {
	document.getElementById("scrollhint").style.display = "none";
	
	var navlinks = document.getElementById('hidenav');
	var st = window.pageYOffset || document.documentElement.scrollTop;
	
	if (menuopen) {
		openMenu();
	}
	
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
	
	var width = window.innerWidth || document.documentElement.clientWidth;
	
	if (autoplay && width > 872)
		checkAutoplay(st);
	
	lastST = st;
	
}

function navHide(navlinks, offset) {
	navlinks.style.top = offset+'px';
}

function navShow(navlinks, offset) {
	navlinks.style.top = offset+'px';
}

function navMouse() {
	navShow(document.getElementById('hidenav'), 0);
	
}

var menuopen = false;

function openMenu() {
	var touchnav = document.getElementById("touchnav");
	
	if (menuopen) {
		touchnav.style.width = '0px';
		menuopen = false;
	}
	else {
		touchnav.style.width = '150px';
		menuopen = true;
	}
}

function checkAutoplay(st) {
	var height = window.innerHeight || document.documentElement.clientHeight;
	
	var vid = document.getElementById("pagevid");
	var vidHeight = $('#videosection').height();
	var vidRect = vid.getBoundingClientRect();
	var target = vidHeight / 2 + vidRect.top + st;
	
	if ((st + height) > target) {
		vid.autoplay = true;
		vid.src += "?autoplay=1";
		autoplay = false;
	}
	
}