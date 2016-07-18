$(document).ready(function() {
	
	$('.box').css('background-color','red');

	$('.box').text('Hi');

	$('#box1').click(function(){
		$('#box1').height('500px');
	});
$('#box2').click(function(){
$('#box2').height('500px');
});

$('#box1').click(function(){

/*var mythis= $('#box1').css('height');
console.log(mythis);
var nowthis = parseInt(mythis) + 100;
$('#box1').css('height',nowthis);
*/

$('.box').css({ 'min-height' : '+=100px' });

});

});