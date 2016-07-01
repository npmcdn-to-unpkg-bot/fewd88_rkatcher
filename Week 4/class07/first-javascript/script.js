alert('this is an alert');
document.write ('writing to the document');
console.log("hello");
document.write('<br/>'+(10*10)+'<br/>');
j=10;
dog=5;
document.write(j+dog);
var num1 = '</br>'+10*10;
document.write(num1);
document.getElementById('greeting').style.color="red";

var mypara=document.getElementById('mypara');
function dosomething() {
	mypara.style.color="green";
}
mypara.onclick=dosomething;