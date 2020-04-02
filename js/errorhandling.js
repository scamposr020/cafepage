const NombrePerso = document.querySelector("#NombrePerso")
const ApellidoPerso = document.querySelector("#ApellidoPerso")
const SegundoApellidoPerso = document.querySelector("#SegundoApellidoPerso")
const CorreoPerso = document.querySelector("#CorreoPerso")
const TelefonoPerso = document.querySelector("#TelefonoPerso")
const Hora = document.querySelector("#Hora")
const HoraEntrega = document.querySelector("#HoraEntrega")
const Fecha = document.querySelector("#Fecha")


const btn = document.querySelector(".bton");
btn.addEventListener("click", () => {

    if (NombrePerso.value == '' || ApellidoPerso.value == '' || SegundoApellidoPerso.value == '' ||
        CorreoPerso.value == '' || TelefonoPerso.value == '' || Fecha.value == '' ||
        Hora.value == '' || HoraEntrega.value == '') {
        alert('Por favor llene todo el formulario')
        btn.setAttribute("type", "button")

    }
    if (TelefonoPerso.value.length > 8 || TelefonoPerso.value.length < 8 ||
        Number.isInteger(parseInt(TelefonoPerso.value)) == false) {
        alert('Por favor agregue un numero de telefono valido')
        btn.setAttribute("type", "button")
    }
    if (Number.isInteger(parseInt(NombrePerso.value)) == true ||
        Number.isInteger(parseInt(ApellidoPerso.value)) == true ||
        Number.isInteger(parseInt(SegundoApellidoPerso.value)) == true) {
        alert('Por favor solo ingrese letras')
        btn.setAttribute("type", "button")
    } else {
        btn.setAttribute("type", "submit")
    }

})