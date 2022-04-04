const email = document.getElementById("email");
const errorIcon = document.querySelector(".error_icon");
const errorMessage = document.querySelector(".error_message");
const inputSection = document.getElementById("input_section");


inputSection.addEventListener('submit', (e) => {
  e.preventDefault();
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value === "" || email.value == "null")
    {
        email.style.borderColor = "hsl(0, 93%, 68%)";
        errorIcon.classList.add("active");
          errorMessage.classList.add("active");
          return false;
    }
 if (!email.value.match(mailformat) )
 {
    email.style.borderColor = "hsl(0, 93%, 68%)";
    errorIcon.classList.add("active");
      errorMessage.classList.add("active");
      return false;
 }
 else
 {
    email.style.borderColor = "hsl(0, 36%, 70%)";
    errorIcon.classList.remove("active");
      errorMessage.classList.remove("active");
      return true;
 }
 
    })
