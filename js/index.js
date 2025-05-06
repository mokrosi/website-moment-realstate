$(document).ready(function(){

    $(window).scroll(function () { 
        if ($(this).scrollTop() > 250 ) {
            $("#GoUp").fadeIn();
        } else {
            $("#GoUp").fadeOut();
        }





        // .our-services .card
        if ($(this).scrollTop() > 900 ) {
            $(".our-services .our-services-sc").fadeIn(700);
        }

        if ($(this).scrollTop() > 1500 ) {
            $(".available-properties .available-properties-sc").fadeIn(700);
        }

        if ($(this).scrollTop() > 2100 ) {
            $("#contact-us-Container").fadeIn(700);
        }
    });


    $('#GoUp').click(function () {
        $('html').animate({ scrollTop: 0 }, 0);

    });



});

