
$(document).ready (function () {

  

	// Activate Carousel
    $(".carousel").carousel({interval: 2200, pause: false});

    $('.left').click (function() {
        $(".carousel").carousel("prev");
    });

    $('.right').click (function() {
        $(".carousel").carousel("next");

    });

    $(".item active").click(function() {
        $(".carousel").carousel(0);
    });

    $(".item2").click(function() {
        $(".carousel").carousel(1);

    });

    $(".item3").click(function() {
        $(".carousel").carousel(2);
    });

  });


