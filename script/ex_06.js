// import {Hero} from 'player.js';
// "use strict";

var footer = document.getElementsByTagName("footer")[0];
var div = footer.getElementsByTagName("div")[0];

// var heroName = "";
// var heroType = "";
// var heroIntell = 0;
// var heroStrength = 0;
var str = "";

 function Hero(name, type, intell, strength) {

	this.heroName = name;
	this.heroType = type;
	this.heroIntell = intell;
	this.heroStrength = strength;

	//Si impossible d'avoir des stats de perso négatives:
	// if (this.heroStrength < 0) {
	// 	this.heroStrength = 0;
	// }
	// if (this.heroIntell < 0) {
	// 	this.heroIntell = 0;
	// }

	var ptIntell = "point";
	var ptStrength = "point";

	var Nameis = ucFirst(this.heroName);

	if (this.heroIntell > 1) {
		ptIntell = "points";
	}

	if (this.heroStrength > 1) {
		ptStrength = "points";
	}

	str = str + "I am "+Nameis+" the "+this.heroType+", I have "+this.heroIntell+" intelligence "+ptIntell+" and "+this.heroStrength+" strength "+ptStrength+"<br />";

	div.innerHTML = str;

}



var mage = new Hero("amadeus", "mage", 10, 3);
var warrior = new Hero("pontius", "warrior", 1, 8);

window.onload = function() {
	
	mage.toString();
	warrior.toString();
	
}

function ucFirst(string) {
    return string.charAt().toUpperCase() + string.slice(1);
}