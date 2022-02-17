$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY >20){
            $('.navbar').addClass("sticky");
            //$('.middle').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
            //$('.middle').removeClass("sticky");
        }
    });

    //toggle menu-navbar
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active")
    });

    //owl-carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            800:{
                items: 3,
                nav: false
            },
            1000:{
                items: 4,
                nav: false
            },
        }
    })
});