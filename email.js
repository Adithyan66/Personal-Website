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

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");

    form.addEventListener("submit", function (event) {
      if (!form.checkValidity()) {
        // If the form is invalid, prevent submission
        event.preventDefault();
        event.stopPropagation();
      } else {
        // If the form is valid, call your function
        event.preventDefault(); // Prevent actual form submission
        myCustomFunction();
      }

      // Add Bootstrap's validation styles
      form.classList.add("was-validated");
    });
  });

  function myCustomFunction() {
    alert("Succesfully sented to Adhi");
    // Your custom JS code here
    sendMail();
  }

  

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("mailOnly");

    form.addEventListener("submit", function (event) {
      if (!form.checkValidity()) {
        // If the form is invalid, prevent submission
        event.preventDefault();
        event.stopPropagation();
      } else {
        // If the form is valid, call your function
        event.preventDefault(); // Prevent actual form submission
        myCustomFunction();
      }

      // Add Bootstrap's validation styles
      form.classList.add("was-validated");
    });
  });

  function myCustomFunction() {
    alert("Succesfully sented to Adhi");
    // Your custom JS code here
    sendMailonly();
  }
