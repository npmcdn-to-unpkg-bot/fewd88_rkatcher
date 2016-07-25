$(document).ready(function () {
	$('#myForm').submit(function () {
		$('#name-input').empty();
		$('#target').text($('#name-input').val());


	});

})
