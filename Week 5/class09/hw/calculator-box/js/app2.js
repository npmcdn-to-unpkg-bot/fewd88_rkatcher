// 1. Besure to write your code within the $(document).ready(...)
// 2. Add .click() event handlers for each of the boxes:
// - A) boxes #a10, #a20, and #a30 should each add 10, 20, and 30, respectively, to the value in the center box, #out


function n10 () {

	var out = parseInt(document.getElementById('out').innerHTML);
	document.getElementById('out').innerHTML = out-10;

}

function n20 () {

	var out = parseInt(document.getElementById('out').innerHTML);
	document.getElementById('out').innerHTML = out-20;

}

function n30 () {

	var out = parseInt(document.getElementById('out').innerHTML);
	document.getElementById('out').innerHTML = out-30;

}

function a10 () {

	var out = parseInt(document.getElementById('out').innerHTML);
	document.getElementById('out').innerHTML = out+10;

}


function a20 () {

	var out = parseInt(document.getElementById('out').innerHTML);
	document.getElementById('out').innerHTML = out+20;

}


function a30 () {

	var out = parseInt(document.getElementById('out').innerHTML);
	document.getElementById('out').innerHTML = out+30;


}

function clear () {

	document.getElementById('out').innerHTML = 0;

}

function red () {
	document.getElementById ('out').style.backgroundColor = "red";
}

function blue () {
	document.getElementById ('out').style.backgroundColor = "blue";
}

function white () {
	document.getElementById ('out').style.backgroundColor = "white";
}

document.getElementById ('n10').onclick = n10;
document.getElementById ('n20').onclick = n20;
document.getElementById ('n30').onclick = n30;
document.getElementById ('a10').onclick = a10;
document.getElementById ('a20').onclick = a20;
document.getElementById ('a30').onclick = a30;
document.getElementById ('out').onclick = clear;
document.getElementById ('red').onclick = red;
document.getElementById ('blue').onclick = blue;
document.getElementById ('out').onclick = white;

// - B) boxes #n10, #n20, and #n30 should each subtract 10, 20, and 30, respectively, from the value in the center box, #out
// - C) #red and #blue should change the background color of #out to red and blue, respectively
// - D) #out should change the background of #out to white, and set the value back to zero
// HINT: define a variable, var count = 0, at the top of your function; use this variable to keep track of what to display inside of #out
// Ex: when the user clicks #a10, add 10 to the var count, and then reflect this change in the HTML
//
// jQuery Methods Needed:
// - .click()
// - . text() or .html()
// - .css()
