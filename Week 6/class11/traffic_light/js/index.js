//Implement the red light using jQuery. Don't forget to add the script tags.

$(document).ready(function () {

	$('#stopButton').click( function () {
		$('#stopLight').css('background-color', 'red');
		$('#slowLight').css('background-color', '#111');
		$('#goLight').css('background-color', '#111');
	});

	$('#slowButton').click (function () {
		$('#slowLight').css('background-color', 'yellow');
		$('#stopLight').css('background-color', '#111');
		$('#goLight').css('background-color', '#111');
	});

	$('#goButton').click (function () {
		$('#goLight').css('background-color', 'green');
		$('#slowLight').css('background-color', '#111');
		$('#stopLight').css('background-color', '#111');
	});

	});


	