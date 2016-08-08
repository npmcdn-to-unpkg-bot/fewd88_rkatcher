$(document).ready(function() {


	
	$(window).scroll( function() {

		if($(this).scrollTop() >1) {
			console.log($('this').scrollTop())

			$('header').addClass ('sticky');

		}
		else {
			$('header').removeClass ('sticky');
	
		}
	});

});


