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