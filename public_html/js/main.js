$(document).ready(function () {




    //FOR PROGRES BAR

    $(function () {

        $(".progress").each(function () {

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
            responsive: {
                768: {
                    items: 2
                },
                992: {
                    items: 4
                }
            }


        });
    }

    if ($('.clients-slider').length > 0) {
        $('.clients-slider').owlCarousel({
            //autoplay: true,
            //loop: true,
            items: 1,
            responsive: {
                576: {
                    items: 2
                },
                768: {
                    items: 4
                }
            }


        });
    }




    $('.clients .owl-dot span').addClass('bi bi-caret-left-fill');

   









});

function checkForm() {



    //check name
    let userName = getValue('usname');
    let errorName = " ";

    if (userName.length === 0) {

        errorName +='Please enter your name \n';

    }

    if (userName.length < 3 || userName > 20) {
       errorName +='Name must have between 5 and 20 characters \n';
    }
     
     if(errorName.length > 0){
         document.getElementById('usname').setAttribute('style','border:1px solid red');
         document.getElementById('invalid-name').innerText= errorName;
     }else{
         document.getElementById('usname').setAttribute('style','border:1px solid #000');
         document.getElementById('invalid-name').innerText=" ";
     }
    
    
    //check email
    
    let userEmail = getValue('usemail');
    let errorEmail = " ";
    
    if(userEmail.length === 0){
        errorEmail += 'Please enter your email \n';
        
    }
    if(userEmail.length < 5){
        errorEmail += 'Email must have more than 5 characters \n';
    }
    if(userEmail.search('@') < 2){
        errorEmail += 'Enter valid email';
    }
    
     if(errorEmail.length > 0){
         document.getElementById('usemail').setAttribute('style','border:1px solid red');
         document.getElementById('invalid-email').innerText= errorEmail;
     }else{
         document.getElementById('usemail').setAttribute('style','border:1px solid #000');
         document.getElementById('invalid-email').innerText=" ";
     }
    
    
    
    //check textarea
    
    var textArea = getValue('ustextarea');
    var errorText = " ";
    
    if(textArea.length === 0){
        errorText += 'Please enter your message\n';
    }
    if(textArea.length < 5 || textArea.length > 250){
        errorText += 'Message must have between 5 and 250 characters';
    }
    
     if(errorText.length > 0){
         document.getElementById('ustextarea').setAttribute('style','border:1px solid red');
         document.getElementById('invalid-textarea').innerText= errorText;
     }else{
         document.getElementById('ustextarea').setAttribute('style','border:1px solid #000');
         document.getElementById('invalid-textarea').innerText=" ";
     }
}


function getValue(id){
    return document.getElementById(id).value.trim();
}






  