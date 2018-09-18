var footer = document.getElementsByTagName("footer")[0];
var div = footer.getElementsByTagName("div")[0];

window.onload = function text() {
	div.innerHTML = "Number of click(s) : 0";
};


var button = div;
var click = 0;

button.onclick = function count() {
  click += 1;
  button.innerHTML = "Number of click(s) : " + click;
};
