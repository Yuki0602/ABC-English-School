jQuery(function($) {
    let winHeight, winScroll, scrollPos;
    $(window).on('load scroll', function() {
        winScroll = $(window).scrollTop();
        winHeight = $(window).height();
        scrollPos = winHeight * 0.9 + winScroll
        /*
        slideIn
        */
        $(".slideIn").each(function() {
            if($(this).offset().top <= scrollPos) {
                $(this).addClass("show");
            } else {
                $(this).removeClass("show");
            }
        });

        /*
        fadeIn
        */
        $(".fadeIn-left, .fadeIn-right").each(function() {
            if($(this).offset().top <= scrollPos) {
                $(this).addClass("animated");
            } else {
                $(this).removeClass("animated");
            }
        });
    });

    $('#burger').click(function() {
        $('.p-hamburger').toggleClass('is-active');
        $('.p-menu').toggleClass('is-active');
    });
});