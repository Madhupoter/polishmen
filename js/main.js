$(function() {

    var siteSticky = function() {
        $(".js-sticky-header").sticky({
            topSpacing: 0
        });
    };
    siteSticky();

    var siteMenuClone = function() {

        $('.js-clone-nav').each(function() {
            var $this = $(this);
            $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
        });


        setTimeout(function() {

            var counter = 0;
            $('.site-mobile-menu .has-children').each(function() {
                var $this = $(this);

                $this.prepend('<span class="arrow-collapse collapsed">');

                $this.find('.arrow-collapse').attr({
                    'data-toggle': 'collapse',
                    'data-target': '#collapseItem' + counter,
                });

                $this.find('> ul').attr({
                    'class': 'collapse',
                    'id': 'collapseItem' + counter,
                });

                counter++;

            });

        }, 1000);

        $('body').on('click', '.arrow-collapse', function(e) {
            var $this = $(this);
            if ($this.closest('li').find('.collapse').hasClass('show')) {
                $this.removeClass('active');
            } else {
                $this.addClass('active');
            }
            e.preventDefault();

        });

        $(window).resize(function() {
            var $this = $(this),
                w = $this.width();

            if (w > 768) {
                if ($('body').hasClass('offcanvas-menu')) {
                    $('body').removeClass('offcanvas-menu');
                }
            }
        })

        $('body').on('click', '.js-menu-toggle', function(e) {
            var $this = $(this);
            e.preventDefault();

            if ($('body').hasClass('offcanvas-menu')) {
                $('body').removeClass('offcanvas-menu');
                $this.removeClass('active');
            } else {
                $('body').addClass('offcanvas-menu');
                $this.addClass('active');
            }
        })

        // click outisde offcanvas
        $(document).mouseup(function(e) {
            var container = $(".site-mobile-menu");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('offcanvas-menu')) {
                    $('body').removeClass('offcanvas-menu');
                }
            }
        });
    };
    siteMenuClone();

});

// <script nonce="7492f449-cf7b-4334-9fad-50d8e76aa7a6">
// (function(w, d) {
//     ! function(dk, dl, dm, dn) {
//         dk[dm] = dk[dm] || {};
//         dk[dm].executed = [];
//         dk.zaraz = {
//             deferred: [],
//             listeners: []
//         };
//         dk.zaraz.q = [];
//         dk.zaraz._f = function(dp) {
//             return function() {
//                 var dq = Array.prototype.slice.call(arguments);
//                 dk.zaraz.q.push({
//                     m: dp,
//                     a: dq
//                 })
//             }
//         };
//         for (const dr of ["track", "set", "debug"]) dk.zaraz[dr] = dk.zaraz._f(dr);
//         dk.zaraz.init = () => {
//             var ds = dl.getElementsByTagName(dn)[0],
//                 dt = dl.createElement(dn),
//                 du = dl.getElementsByTagName("title")[0];
//             du && (dk[dm].t = dl.getElementsByTagName("title")[0].text);
//             dk[dm].x = Math.random();
//             dk[dm].w = dk.screen.width;
//             dk[dm].h = dk.screen.height;
//             dk[dm].j = dk.innerHeight;
//             dk[dm].e = dk.innerWidth;
//             dk[dm].l = dk.location.href;
//             dk[dm].r = dl.referrer;
//             dk[dm].k = dk.screen.colorDepth;
//             dk[dm].n = dl.characterSet;
//             dk[dm].o = (new Date).getTimezoneOffset();
//             if (dk.dataLayer)
//                 for (const dy of Object.entries(Object.entries(dataLayer).reduce(((dz, dA) => ({ ...dz[1],
//                         ...dA[1]
//                     }))))) zaraz.set(dy[0], dy[1], {
//                     scope: "page"
//                 });
//             dk[dm].q = [];
//             for (; dk.zaraz.q.length;) {
//                 const dB = dk.zaraz.q.shift();
//                 dk[dm].q.push(dB)
//             }
//             dt.defer = !0;
//             for (const dC of [localStorage, sessionStorage]) Object.keys(dC || {}).filter((dE => dE.startsWith("_zaraz_"))).forEach((dD => {
//                 try {
//                     dk[dm]["z_" + dD.slice(7)] = JSON.parse(dC.getItem(dD))
//                 } catch {
//                     dk[dm]["z_" + dD.slice(7)] = dC.getItem(dD)
//                 }
//             }));
//             dt.referrerPolicy = "origin";
//             dt.src = "/cdn-cgi/zaraz/s.js?z=" + btoa(encodeURIComponent(JSON.stringify(dk[dm])));
//             ds.parentNode.insertBefore(dt, ds)
//         };
//         ["complete", "interactive"].includes(dl.readyState) ? zaraz.init() : dk.addEventListener("DOMContentLoaded", zaraz.init)
//     }(w, d, "zarazData", "script");
// })(window, document);
// </script>


// dropdown

$(document).ready(function(){
    $(".dropdown").hover(            
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop( true, true ).slideDown("fast");
            $(this).toggleClass('open');        
        },
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop( true, true ).slideUp("fast");
            $(this).toggleClass('open');       
        }
    );
});


// carousel
const swiper = new Swiper(".swiper-slider", {
    // Optional parameters
    centeredSlides: true,
    slidesPerView: 2,
    grabCursor: true,
    freeMode: false,
    loop: true,
    mousewheel: false,
    keyboard: {
      enabled: true
    },
  
    // Enabled autoplay mode
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
  
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: false,
      clickable: true
    },
  
    // If we need navigation
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
  
    // Responsive breakpoints
    breakpoints: {
      640: {
        slidesPerView: 1.25,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    }
  });


// 

 
