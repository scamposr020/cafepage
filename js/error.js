const error = document.querySelector(".error")
document.addEventListener('DOMContentLoaded', function() {
    console.log(error.innerHTML);
    if (error.innerHTML.match('Ya existe esa reserva')) {
        console.log("entra");
        error.style.padding = "22px 596px 20px 600px";
        error.style.color = "#b33636";
        error.style.borderRadius = "15px";
        error.style.border = "1px solid #b33636"
    } else {
        error.style.padding = "0px 0px 0px 0px"
    }
}, false);