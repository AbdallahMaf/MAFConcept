// Box Modal QJS Me contacter pour voir CV
bg = document.getElementsByClassName("bg");

document.querySelectorAll(".contact-link").forEach(item =>{
    item.addEventListener("click", event =>{

        id = item.getAttribute("data-productid");

        contactCV = document.getElementById( id );
        bg[0].style.display = "block";

        //contactCV.style.top = "155%"
        contactCV.style.visibility = "visible"
    })
})

document.querySelectorAll(".bg").forEach(item =>{
    item.addEventListener("click", event =>{
    
       bg[0].style.display = "none";
    
        document.querySelectorAll(".contactqjs").forEach(contactCV =>{
            //contactCV.style.top = "-100%";
            contactCV.style.visibility = "hidden"
        })
    })
})

// Box Modal Description Projet
bg = document.getElementsByClassName("bg");

document.querySelectorAll(".projetModalDesc-link").forEach(item =>{
    item.addEventListener("click", event =>{

        id = item.getAttribute("data-productid");

        contactCV = document.getElementById( id );
        bg[0].style.display = "block";

        //contactCV.style.top = "155%"
        contactCV.style.visibility = "visible"
    })
})

document.querySelectorAll(".bg").forEach(item =>{
    item.addEventListener("click", event =>{
    
       bg[0].style.display = "none";
    
        document.querySelectorAll(".projetModalDesc").forEach(contactCV =>{
            //contactCV.style.top = "-100%";
            contactCV.style.visibility = "hidden"
        })
    })
})