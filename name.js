//A jQuery typing animation script
let typed = new Typed("#text3", {
    strings: ["Web", "Mobile", "Logiciel", "Full-Stack", "Web et Mobile Full-Stack"],
    typeSpeed: 100,
    backSpeed: 100,
    showCursor: false,
    loop: true
});

let typedinf = new Typed("#text4", {
    strings: ["Informatique"],
    typeSpeed: 100,
    backSpeed: 100,
    showCursor: false,
    loop: true

});

let typedqsj = new Typed("#text5", {
    strings: ["Web et Mobile Full-Stack et Integrateur Systeme d'Information"],
    typeSpeed: 200,
    backSpeed: 100,
    showCursor: false,
    loop: false

});

let typedKarate = new Typed("#text6", {
    strings: ["Sportif...", "Karateka..."],
    typeSpeed: 100,
    backSpeed: 100,
    showCursor: false,
    loop: true

});


// const text1 = document.querySelector('.text-1');
// const text2 = document.querySelector('.text-2');
// const textThird = document.querySelector('.text-3');
// const sm = document.querySelector('.sm');

// window.addEventListener('load', () => {
//     const TL = gsap.timeline({paused: true});

//     TL.
//     staggerFrom(text1, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.9)
//     staggerFrom(text2, 1, {width: 0, ease: "power2.out"}, 0.3, '-=1')
//     staggerFrom(textThird, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
//     staggerFrom(sm, 1, { right: -200, opacity: 0, ease: "power2.out"}, 0.3);
//     TL.play();
// })

// let i = 0;
// let text3 = "Web & Mobile Full-Stack";
// function progress(){
//     if(i<text3.length) {
//         document.querySelector("#text3").innerHTML += text3.charAt(i);
//         i++;

//         setTimeout(progress, 300);
//         // if(i==23){
//         //     document.querySelector("#text3").innerHTML += "<br>";
//         // }
//     }
// }
// progress();

// let j = 0;
// let text4 = "</Informatique>";
// function progress2(){
//     if(j<text4.length) {
//         document.querySelector("#text4").innerHTML += text4.charAt(j);
//         j++;
//         setTimeout(progress2, 400);
//     }
// }
// progress2();

// let k = 0;
// let text5 = "Web & Mobile Full-Stack Junior et Integrateur Systeme d'Information";
// function progress3(){
//     if(k<text5.length) {
//         document.querySelector("#text5").innerHTML += text5.charAt(k);
//         k++;
        

//         setTimeout(progress3, 300);
//         if(k==23){
//             document.querySelector("#text5").innerHTML += "<br>";
//         }
//     }
// }
// progress3();

// let l = 0;
// let text6 = "sportif...";
// function progress4(){
//     if(l<text6.length) {
//         document.querySelector("#text6").innerHTML += text6.charAt(l);
//         l++;

//         setTimeout(progress4, 300);
//         if(l==23){
//             document.querySelector("#text6").innerHTML += "<br>";
//         }
//     }
// }
//progress4();
