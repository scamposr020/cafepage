const error = document.querySelector(".error")
const errorHora = document.querySelector(".errorHora")
document.addEventListener('DOMContentLoaded', function() {
    if (error.innerHTML.match('Ya existe esa reserva')) {
        console.log("entra");
        error.style.padding = "22px 596px 20px 600px";
        error.style.color = "#b33636";
        error.style.borderRadius = "15px";
        error.style.backgroundColor = "#ffdbdb";
        error.style.border = "1px solid #b33636";


    }
    if (errorHora.innerHTML.match('La reservacion minimo debe ser igual o mayor a una hora')) {
        errorHora.style.padding = "22px 450px 20px 450px";
        errorHora.style.color = "#b33636";
        errorHora.style.borderRadius = "15px";
        errorHora.style.backgroundColor = "#ffdbdb";
        errorHora.style.border = "1px solid #b33636";
    } else {
        error.style.padding = "0px 0px 0px 0px"
    }
}, false);