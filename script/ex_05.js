var footer = document.getElementsByTagName("footer")[0];
var div = footer.getElementsByTagName("div")[0];

var plus = footer.getElementsByTagName("button")[0];
var moins = footer.getElementsByTagName("button")[1];
var select = footer.getElementsByTagName("select")[0];
var body = document.getElementsByTagName("body")[0];

var color = select.selectedIndex;
var style = window.getComputedStyle(document.body, null).getPropertyValue('font-size');
var change = parseInt(style);

plus.onclick = function () {
	change++;
	document.body.style.fontSize = change + 'px';
};

moins.onclick = function down() {
   change--;
   console.log(change);
   document.body.style.fontSize = change + 'px';
}

select.onchange = function slcbckg() {
   var clr = select.selectedIndex;
   document.body.style.background = select.options[clr].value;
}
