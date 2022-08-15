let i = 0;
let text3 = "Web & Mobile Full-Stack Eleve Ingenieur en Informatique";
function progress(){
    if(i<text3.length) {
        document.querySelector("#text3").innerHTML += text3.charAt(i);
        i++;

        setTimeout(progress, 300);
        if(i==23){
            document.querySelector("#text3").innerHTML += "<br>";
        }
    }
}
progress();