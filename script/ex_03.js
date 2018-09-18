var footer = document.getElementsByTagName("footer")[0];
var div = footer.getElementsByTagName("div")[0];
var button = div;

button.onclick = function question() {

	var name = window.prompt("What's your name ?");
	if (name) {
		var confirm = window.confirm("Are you sure that "+name+" is your name ?");
		if (confirm) {
			alert("Hello "+name+" !");
			div.innerHTML = "Hello "+name+" !";
		}
	}
};


