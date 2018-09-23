var colors = ["#cbb7d9", "#fbb364", "#8dcfe5"];
var index = 0;
var hoveredElement;

function setFocused(object) {
	hoveredElement = object;
}

function resetLink(object) {
	object.style.color = "black";
}

function changeColor() {
	if (index >= colors.length)
		index = 0;
	
	hoveredElement.style.color = colors[index];
	index++;
}