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
        document.getElementById('usname').setAttribute('style', 'border:1px solid red');
        document.getElementById('invalid-name').innerText = 'Please enter your name';

    } else if (userName.length < 5 || userName.length > 20) {
        document.getElementById('usname').setAttribute('style', 'border:1px solid red');
        document.getElementById('invalid-name').innerText = 'Name must have between 5 and 20 characters';
    }else{
        document.getElementById('usname').setAttribute('style', 'border:1px solid black');
        document.getElementById('invalid-name').innerText =" ";
    }






//    if (userName.length < 5 || userName > 20) {
//        //errorName +='Name must have between 5 and 20 characters \n';
//        document.getElementById('usname').setAttribute('style', 'border:1px solid red');
//        document.getElementById('invalid-name').innerText = 'Name must have between 5 and 20 characters';
//       
//    } 




    //check email

    let userEmail = getValue('usemail');
    let errorEmail = " ";

    if (userEmail.length === 0) {
        document.getElementById('usemail').setAttribute('style', 'border:1px solid red');
        document.getElementById('invalid-email').innerText = 'Please enter your email';
       
    } else if (userEmail.length < 5)  {
        document.getElementById('usemail').setAttribute('style', 'border:1px soli red');
        document.getElementById('invalid-email').innerText = "Email must have more than 5 characters";
    }else if(userEmail.search('@') < 2){
        document.getElementById('usemail').setAttribute('style', 'border:1px soli red');
        document.getElementById('invalid-email').innerText = 'Enter valid email';
    }else{
        document.getElementById('usemail').setAttribute('style', 'border:1px soli black');
        document.getElementById('invalid-email').innerText = " ";
    }

    
    
    




    //check textarea

    var textArea = getValue('ustextarea');
    var errorText = " ";

    if (textArea.length === 0) {
        //errorText += 'Please enter your message\n';
         document.getElementById('ustextarea').setAttribute('style', 'border:1px solid red');
        document.getElementById('invalid-textarea').innerText = 'Please enter your message';
    }else if(textArea.length < 5 || textArea.length > 250){
        document.getElementById('ustextarea').setAttribute('style', 'border:1px solid red');
        document.getElementById('invalid-textarea').innerText = 'Message must have between 5 and 250 characters';
    }else{
        document.getElementById('ustextarea').setAttribute('style', 'border:1px solid black');
        document.getElementById('invalid-textarea').innerText =" ";
    }
    
    
   
}


function getValue(id) {
    return document.getElementById(id).value.trim();
}






  