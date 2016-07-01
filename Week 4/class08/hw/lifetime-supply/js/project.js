var click = document.getElementById("click-me");

click.onclick = function () {

var age = parseInt(document.getElementById("age").value);
var maxage= parseInt(document.getElementById("max-age").value);
var item = document.getElementById("item").value;
var perday = parseInt(document.getElementById("num-per-day").value);


	
var solution = (maxage - age) * perday * 365;
var drink = item;
document.getElementById("answer").innerHTML = "You will drink "  + solution + " more " + drink + " in your lifetime.";


}

