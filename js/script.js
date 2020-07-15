menu.onclick = function myFunction() {
	var x = document.getElementById("myTopnav");

	if (x.className === "topNan") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}