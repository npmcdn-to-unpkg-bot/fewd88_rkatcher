
$(document).ready (function () {

  

    $('#burger').click( function() {
  $('#hiddendiv').slideToggle();

  });

 


    $('.row').click(function () {

      $('.row').find('.wrapper').removeClass('clicked');
      $(this).find('.wrapper').addClass('clicked');
      $('.clicked').slideToggle();
    

  });
    
      });
  
