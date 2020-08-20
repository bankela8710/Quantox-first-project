$(document).ready(function(){
    
 
    
    
    //FOR PROGRES BAR
    
  $(function() {

  $(".progress").each(function() {

    var value = $(this).attr('data-value');
    var left = $(this).find('.progress-left .progress-bar');
    var right = $(this).find('.progress-right .progress-bar');

    if (value > 0) {
      if (value <= 50) {
        right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)');
      } else {
        right.css('transform', 'rotate(180deg)');
        left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)');
      }
    }

  });

  function percentageToDegrees(percentage) {

    return percentage / 100 * 360;

  }

});






   //for scroll
   $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
      });
    
    
    
    //OWL CAROUSEL
    
    if ($('.member-slider').length > 0) {
    $('.member-slider').owlCarousel({
        autoplay: true,
        //loop: true,
        items: 1,
        responsive:{
            768:{
                items:2
            },
            992:{
                items:4
            }
        }
         

    });
}

   if ($('.clients-slider').length > 0) {
    $('.clients-slider').owlCarousel({
        autoplay: true,
        //loop: true,
        items: 1,
        responsive:{
            576:{
                items:2
            },
            768:{
                items:4
            }
        }
         

    });
}

   
   

  $('.clients .owl-dot span').addClass('bi bi-caret-left-fill');
   
   
 
   
   
});


