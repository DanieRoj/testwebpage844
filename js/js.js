$(function () {

    'use strict';



    function hoverImgCursor() {

        $('.move_img-cursor').each(function () {
            $(this).on('mousemove', function (e) {
                let x = e.offsetX;
                let y = e.offsetY;

                $(this).children('.move-img').css({ top: y + 'px', left: x + 'px' });
            });

            let dataHoverLink = $(this).data('link-img');
            $(this).children('.move-img').css({ 'background': 'url(img/link-hover/' + dataHoverLink + ')', 'background-size': 'cover', 'background-repeat': 'no-repeat', 'background-position': 'center center' });
        });

    }
    if ($(window).width() > 1054) {
        hoverImgCursor();
    }


    // ---- Split text plagin ---- //
    Splitting();


    // ---- AOS plagin ---- //
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });


    //add all link => <a target='_blank']></a> attr => rel="noopener", draggable="false"
    $("a[target='_blank']").attr({ "rel": "noopener", "draggable": "false" });



    // ---- anim blink text ---- //
    // ---- 1 ---- //
    function animBlinkletter() {
        let letter_one = $(".letter_one").text().split('');
        $(".letter_one").text('');
        $.each(letter_one, function () {
            $(".letter_one").append('<span class="header_blink">' + this + '</span>');
        });

        // ---- 2 ---- //
        let letter_two = $(".letter_two").text().split('');
        $(".letter_two").text('');
        $.each(letter_two, function () {
            $(".letter_two").append('<span class="header_blink">' + this + '</span>');
        });
        // ---- 3 ---- //
        let letter_three = $(".letter_three").text().split('');
        $(".letter_three").text('');
        $.each(letter_three, function () {
            $(".letter_three").append('<span class="header_blink">' + this + '</span>');
        });
    }
    animBlinkletter();




    // ---- scroll dovn on click button_go ---- //
    function dovnClickButton() {
        $('.header__scroll').click(function (e) {
            e.preventDefault();
            let scroll = $('.work').offset().top;
            $('html, body').animate({ scrollTop: scroll + 80 }, 350);
        });
    }
    dovnClickButton();




    // ---- button up ---- //
    function buttonUp() {
        $('.up').click(function () {
            var up = $('.header').offset().top;
            $('html, body').animate({ scrollTop: up }, 350);
        });

        $(window).scroll(function () {
            let scrollDock = $(document).scrollTop();
            let scrollWork = $('.work').offset().top;

            if (scrollDock + 80 >= scrollWork) {
                $('.up').fadeIn();
            } else {
                $('.up').fadeOut();
            }
        });
    }
    buttonUp();





    // ---- settings ackordion ---- //
    function settingsAckordion() {
        $('.steps__item').on('click', function () {
            let timeAnim = 250;
            $(this).find('.steps__head').toggleClass('active').next().slideToggle(timeAnim);
            $(this).css({ 'pointer-events': 'none' });
            setTimeout(function () {
                $(this).css({ 'pointer-events': 'auto' });
            }.bind(this), timeAnim);
        });
    }
    if ($('#home_page').length === 1) {
        settingsAckordion();
    }


    // ---- settings price hover ---- //
    function settingsPriceHover() {
        $(window).on('load resize', function () {
            let offset = $('.services__wrapp').offset().left;
            $('.services__bg').css({ 'left': - offset });
        });
    }
    if ($('#home_page').length === 1) {
        settingsPriceHover();
    }


});


// ---- form ---- //
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector("body").classList.add("loaded");
    }, 30)
});