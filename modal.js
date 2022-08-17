bg= document.getElementsByClassName("bg");

document.querySelectorAll(".contact-link").forEach(item =>{
    item.addEventListener("click", event =>{

        id = item.getAttribute("data-productid");

        contactCV = document.getElementById( id );
        bg[0].style.display = "block";

        contactCV.style.top = "160%"
    })
})

document.querySelectorAll(".bg").forEach(item =>{
    item.addEventListener("click", event =>{
    
       bg[0].style.display = "none";
    
        document.querySelectorAll(".contact").forEach(contactCV =>{
            contactCV.style.top = "-50%";
        })
    })
})