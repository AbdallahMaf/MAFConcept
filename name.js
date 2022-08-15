let i = 0;
let text3 = "Web & Mobile Full-Stack";
function progress(){
    if(i<text3.length) {
        document.querySelector("#text3").innerHTML += text3.charAt(i);
        i++;

        setTimeout(progress, 300);
        // if(i==23){
        //     document.querySelector("#text3").innerHTML += "<br>";
        // }
    }
}
progress();

let j = 0;
let text4 = "Informatique";
function progress2(){
    if(j<text4.length) {
        document.querySelector("#text4").innerHTML += text4.charAt(j);
        j++;
        setTimeout(progress2, 400);
    }
}
progress2();

let k = 0;
let text5 = "Web & Mobile Full-Stack Junior et Integrateur Systeme d'Information";
function progress3(){
    if(i<text5.length) {
        document.querySelector("#text5").innerHTML += text5.charAt(k);
        k++;

        setTimeout(progress3, 300);
        if(k==23){
            document.querySelector("#text5").innerHTML += "<br>";
        }
    }
}
progress3();



