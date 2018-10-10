jQuery(document).ready(function() {
    "use strict"
    $('.slider').ripples({
        dropRadius: 10,
        perturbance: 0.01,
}); 
    $("#text").typed({
        strings: ["<strong class='orange'>Photographer . . . </strong> ", "<strong class='lightyellow'>Web launcher . . . </strong> ", "<strong class='lightred'>web Designer . . . </strong> ", "<strong class='darkblue'>Web Developer . . . </strong> "],
        typeSpeed: 110, // typing speed
        backDelay: 500, // pause before backspacing
        loop: true,
    });
    $(window).scroll(function(){
        let top = $(window).scrollTop();
        if (top >= 60) {
            $(".navbar").addClass('navbar-bg');
        }else if($(".navbar").hasClass('navbar-bg')){
            $(".navbar").removeClass('navbar-bg');
        }
    });
    $('.works').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    $('#team-members').owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 1
            },
            480:{
                items: 2
            },
            786:{
                items: 3
            }
        }
    });
    $('.counter').counterUp({
        delay: 10,
        time: 4000
    });
    $('a').smoothScroll();
});