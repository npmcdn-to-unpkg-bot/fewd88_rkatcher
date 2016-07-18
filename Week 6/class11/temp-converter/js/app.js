$(document).ready( function () {

$('#button').click( function() {

number = parseInt($('#number').val());
console.log(number);

if ( $('.choose').val()==='Celsius to Fahrenheit' )

{


fahrenheit = number * 1.8 + 32;
$('.output').text(fahrenheit);
console.log(fahrenheit);

}

else if ( $('.choose').val()==='Fahrenheit to Celsius' )
{


celsius = (number - 32) /1.8;
$('.output').text(celsius);
console.log(celsius);
}

});


});