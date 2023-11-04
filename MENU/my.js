(function($) {
    'use strict';

    if ($("#header").length > 0) {
        $(window).on('scroll', function() {
            if ($(window).scrollTop() >200) {
                $("#header").css("position", "fixed");
                $("#header .colorlib-logo").css("width", "280px");
                $(".kea-logo").css("width", "143px");
                $(".kea-logo").css("margin-top", "8%");
                $("#header").css("z-index", "999");
            } else {
                $("#header").css("position", "relative");
                $("#header").css("z-index", "unset");
                $("#header .colorlib-logo").css("width", "308px");
                $(".kea-logo").css("width", "152px");
                $(".kea-logo").css("margin-top", "10%");
            }
        });
    }
})(jQuery);



var elem = document.getElementById("myvideo");
if (elem.requestFullscreen) {
    elem.requestFullscreen();
} else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen();
} else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
} else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
}

;

