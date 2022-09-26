
function sendEmail(){
    Email.send({
        SecureToken : "6145f219-cabf-48ba-8669-3a8569aab0c7 ",
  
        To : "abdallahmaf@icloud.com",
        From : document.getElementById("email").value,
        Subject : "New Contact From Enquiry",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}


// "Nom: " + document.getElementById("lastname").value 
//             + "<br> Prenom: " + document.getElementById("firstname").value
//             + "<br> Email: " + document.getElementById("email").value
//             + "<br> Telephone: " + document.getElementById("phone").value
//             + "<br> Objet: " + document.getElementById("objet").value
//             + "<br> Message: " + document.getElementById("message").value