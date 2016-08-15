
$(document).ready (function () {

  

    $('#burger').click( function() {
  $('#hiddendiv').slideToggle();

  });

 


    $('.row').click(function () {

      $(this).addClass('clicked');
      $("wrapper:not(.'clicked')").removeClass('clicked');
      $('clicked').slideToggle();

    /*$('.wrapper').css('display','none');
    $(this).find('.wrapper').slideToggle();
    }); */






   
    
  });
    
    
  
