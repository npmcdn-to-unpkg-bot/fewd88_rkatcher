
$(document).ready (function () {

  

	// Activate Carousel
    $(".carousel").carousel({interval: false});

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
        $('#li').css('color','white');

    });

    $(".item3").click(function() {
        $(".carousel").carousel(2);
    });



    $('.row').click(function () {
    $(this).find('.wrapper').slideToggle();
    ('.wrapper').hide();
    });






  

        /*$('.menu-link').bigSlide();

   
        

      window.initMap = function initMap() {
      var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 38.033554, lng: -78.507980},
          scrollwheel: false,
          scaleControl: false,
          zoom: 9

        });

      var slaughtermarker= new google.maps.Marker ({

        position: {lat: 38.034858, lng: -78.517841 },
        map:map,
        title: 'Slaughter Recreation Center'

      });

      var cabinmarker= new google.maps.Marker ({

        position: {lat: 38.2506857, lng: -78.6816871 },
        map:map,
        title: 'Cabin'

      });

      var shenandoahmarker= new google.maps.Marker ({

      position: {lat: 38.2470746, lng: -78.6936321 },
      map:map,
      title: 'Hike'

      });



      var cornermarker= new google.maps.Marker ({

      position: {lat: 38.033823, lng: -78.498478 },
      map:map,
      title: 'UVA Corner'

      });

    google.maps.event.addListener(marker, "mouseover", function() {
    marker.setIcon(gicons["yellow"]);

      
    } */

   
   

 



   
    
  });
    
    
  
