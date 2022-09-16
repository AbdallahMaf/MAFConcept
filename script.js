//Splash Screen
let intro = document.querySelector('.intro');
let logoAc = document.querySelector('.logoAc-header');
let logoSpan = document.querySelectorAll('.logoAc');

window.addEventListener('DOMContentLoaded', ()=>{

    setTimeout(()=>{
        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');  
            }, (idx + 1) *600)
        })
    })

    setTimeout(()=>{
        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.remove('active');  
                span.classList.add('fade'); 
            }, (idx + 1) *50)      
        })
    }, 4800)

    setTimeout(()=>{
        intro.style.top = '-100%'
    }, 5200)
})

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY >20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }
        else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    //slide-up scipt
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
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