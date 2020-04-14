const error = document.querySelector(".error")
const alerta = document.querySelector(".alerta")
const confirmacion = document.querySelector(".confirmacion")
document.addEventListener('DOMContentLoaded', function() {
    if (error.innerHTML.match('Ese usuario no existe')) {
        error.style.padding = "22px 600px 20px 570px";
        error.style.color = "#b33636";
        error.style.borderRadius = "15px";
        error.style.backgroundColor = "#ffdbdb";
        error.style.border = "1px solid #b33636";


    }
    if (alerta.innerHTML.match('Debe de llenar todos los campos')) {
        alerta.style.padding = "22px 570px 20px 540px";
        alerta.style.color = "#b33636";
        alerta.style.borderRadius = "15px";
        alerta.style.backgroundColor = "#ffdbdb";
        alerta.style.border = "1px solid #b33636";
    }
    if (confirmacion.innerHTML.match('Se ha cambiado la contraseña')) {
        confirmacion.style.padding = "22px 600px 20px 500px";
        confirmacion.style.color = "#57b336";
        confirmacion.style.borderRadius = "15px";
        confirmacion.style.backgroundColor = "#a9ff8a";
        confirmacion.style.border = "1px solid #57b336";
    }
}, false);