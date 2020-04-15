const error = document.querySelector(".error")

document.addEventListener('DOMContentLoaded', function() {
    if (error.innerHTML.match('Ya existe esa reserva')) {
        error.style.padding = "20px 550px 20px 550px";
        error.style.position = "relative";
        error.style.color = "#F1A303";
        error.style.borderRadius = "15px";
        error.style.backgroundColor = "#ffe1a3";
        error.style.border = "1px solid #F1A303";


    } else {
        error.style.padding = "0px 0px 0px 0px"
    }
}, false);