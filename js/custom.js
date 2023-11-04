document.addEventListener("DOMContentLoaded", function(event) {
   
    const showNavbar = (toggleId, navId, bodyId, headerId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId)
    
    // Validate that all variables exist
    if(toggle && nav && bodypd && headerpd){
    toggle.addEventListener('click', ()=>{
    // show navbar
    nav.classList.toggle('show')
    // change icon
    toggle.classList.toggle('bx-x')
    // add padding to body
    bodypd.classList.toggle('body-pd')
    // add padding to header
    headerpd.classList.toggle('body-pd')
    })
    }
    }
    
    showNavbar('header-toggle','nav-bar','body-pd','header')
    
    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.nav_link')
    
    function colorLink(){
    if(linkColor){
    linkColor.forEach(l=> l.classList.remove('active'))
    this.classList.add('active')
    }
    }
    linkColor.forEach(l=> l.addEventListener('click', colorLink))
    
     // Your code to run since DOM is loaded and ready
    });










    (function($) {

        "use strict";
    
        var fullHeight = function() {
    
            $('.js-fullheight').css('height', $(window).height());
            $(window).resize(function(){
                $('.js-fullheight').css('height', $(window).height());
            });
    
        };
        fullHeight();
    
        var burgerMenu = function() {
    
            $('.js-colorlib-nav-toggle').on('click', function(event) {
                event.preventDefault();
                var $this = $(this);
                if( $('body').hasClass('menu-show') ) {
                    $('body').removeClass('menu-show');
                    $('#colorlib-main-nav > .js-colorlib-nav-toggle').removeClass('show');
                } else {
                    $('body').addClass('menu-show');
                    setTimeout(function(){
                        $('#colorlib-main-nav > .js-colorlib-nav-toggle').addClass('show');
                    }, 900);
                }
            })
        };
        burgerMenu();
    
    
    })(jQuery);




    $(document).ready(function() {
      setTimeout(function() {
        $('#container').addClass('loaded');
        // Once the container has finished, the scroll appears
        if ($('#container').hasClass('loaded')) {
          // It is so that once the container is gone, the entire preloader section is deleted
          $('#preloader').delay(9000).queue(function() {
            $(this).remove();
          });}
      }, 3000);});

    