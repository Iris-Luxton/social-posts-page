(function () {
    'use strict'
  
    //check password
const password = document.getElementById("newpassword");
//match passwords
const confirmPassword = document.getElementById("confirmpassword");

function validatePassword(){
  confirmPassword.setCustomValidity( password.value != 
    confirmPassword.value ? "Passwords Don't Match" : '');
}

password.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;
    
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()