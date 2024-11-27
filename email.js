function sendMail(){
    let parms={
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,

    }
    emailjs.send("service_8gka9pd","template_s675ar3",parms)
}

function sendMailonly(){
    let parms={
        email: document.getElementById("onlymail").value,
    }
    emailjs.send("service_8gka9pd","template_s675ar3",parms)
}