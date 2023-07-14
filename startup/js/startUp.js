$(function () {

    /*fixed header*/

    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();;
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    checkScroll(scrollPos, introH);

    $(window).on("scroll resize", function () {

        scrollPos = $(this).scrollTop();
        introH = intro.innerHeight();
        checkScroll(scrollPos, introH);
    });

    function checkScroll(scrollPos, introH) {

        if (scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /*smooth scroll*/

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffSet = $(elementId).offset().top;

        nav.removeClass("show");
        $("html, body").animate({

            scrollTop: elementOffSet - 50

        }, 600);
    });

    /*nav Toggle*/


    navToggle.on("click", function (event) {
        event.preventDefault();

        nav.toggleClass("show");

    });



    /*clients: slick slider https://kenwheeler.github.io/slick*/

    let slider = $("#clientsSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows:false,
        dots:true
    });


});
