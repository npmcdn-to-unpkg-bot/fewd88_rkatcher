
$(document).ready (function () {

  

    $('#burger').click( function() {
  $('#hiddendiv').slideToggle();

  });




    $('.row').click(function () {
    $('.wrapper').removeClass('justclicked');
    $(this).find('.wrapper').addClass('justclicked');
    $('.justclicked').slideToggle();
    $('.wrapper:not(.justclicked)').hide();


    });






   
    
  });
    
    
  
