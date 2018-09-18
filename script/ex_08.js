var blank = document.getElementsByTagName("footer")[0];
var canvas = document.getElementsByTagName("canvas");

var canlen = canvas.length;
var nbcancol = Math.floor(parseInt(canlen) / 4);
var rest = canlen % 4;
console.log("Case(s) par couleur : "+nbcancol+" Reste : "+rest);

blank.onmouseover = function() {
	var i = 0;
	while (i < nbcancol) {
		canvas[i].style.backgroundColor = "orange";
		i++;
	}
	while (i < (nbcancol)*2) {
		canvas[i].style.backgroundColor = "purple";
		i++;
	}
	while (i < (nbcancol)*3) {
		canvas[i].style.backgroundColor = "black";
		i++;
	}
	while (i < canlen) {
		canvas[i].style.backgroundColor = "olive";
		i++;
	}
};

// blank.onmouseout = function() {
// 	var j = 0;
// 	while (j <= (canlen-1)) {
// 		canvas[j].style.backgroundColor = 'red';
// 		j++;
// 	}
// }