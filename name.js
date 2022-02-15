let i = 0;
let text3 = "Web & Mobile Full-Stack";
function progress(){
    if(i<text3.length){
        document.querySelector("#text3").innerHTML += text3.charAt(i);
        i++;

        setTimeout(progress, 300);
        // if(i==16){
        //     document.querySelector("#text3").innerHTML += "</br>";
        // }
    }
}
progress();