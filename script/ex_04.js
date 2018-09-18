
// window.onload = function input_text() {
// 	div.innerHTML = "<input type='text' id='in' />";
// };

window.onload = function() {

	var footer = document.getElementsByTagName("footer")[0];
	var div = footer.getElementsByTagName("div")[0];
	var str = "";



	document.addEventListener('keydown', function(e) {

		str = str + (e.key);
		// console.log(str);
		
		div.innerHTML = str.slice(-42);

	});
	
};
