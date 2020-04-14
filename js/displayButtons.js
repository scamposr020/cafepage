/* Botones grupales*/

const reservaBotones = document.querySelector(".reserva");
const clientesBotones = document.querySelector(".clientes");
const combosBotones = document.querySelector(".combos");

/*Botones singulares*/
let verReserva = document.querySelector("#verReserva");
let borrarReserva = document.querySelector("#borrarReserva");
let verClientes = document.querySelector("#verClientes");
let verComentarios = document.querySelector("#verComentarios");
let editarCombo = document.querySelector("#editarCombo");
let verCombo = document.querySelector("#verCombo");

/* LABELS */
let labelReserva = document.querySelector("#labelReserva");
let labelClientes = document.querySelector("#labelClientes");
let labelCombo = document.querySelector("#labelCombo");

/* INPUTS*/
let inputReserva = document.querySelector(".inputReserva")
let inputClientes = document.querySelector(".inputClientes")
let inputCombos = document.querySelector(".inputCombos")

/* BOTON DE QUERY*/

let verReservaQuery = document.querySelector("#verReservaQuery");
let BorrarReservaQuery = document.querySelector("#BorrarReservaQuery");
let verClientesQuery = document.querySelector("#verClientesQuery");
let verComentariosQuery = document.querySelector("#verComentariosQuery");
let editarComboQuery = document.querySelector("#editarComboQuery");
let verComboQuery = document.querySelector("#verComboQuery");

verReserva.addEventListener('click', () => {
    verReserva.style.display = "none";
    verReservaQuery.style.display = "inline-block";
    borrarReserva.style.display = "none";
    labelReserva.innerHTML = "Inserte el numero reserva que quiere ver"
    inputReserva.style.display = "block";

})

borrarReserva.addEventListener('click', () => {
    verReserva.style.display = "none";
    BorrarReservaQuery.style.display = "inline-block";
    borrarReserva.style.display = "none";
    labelReserva.innerHTML = "Inserte el numero de 'ID' de reserva para borrar"
    inputReserva.style.display = "block";
})

verClientes.addEventListener('click', () => {
    verClientes.style.display = "none";
    verComentarios.style.display = "none";
    labelClientes.innerHTML = "Inserte el nombre del cliente para mostrar detalle del cliente"
    inputClientes.style.display = "block";
    verClientesQuery.style.display = "inline-block";

})

verComentarios.addEventListener('click', () => {
    verClientes.style.display = "none";
    verComentarios.style.display = "none";
    labelClientes.innerHTML = "Inserte el nombre del cliente para mostrar el comentario"
    inputClientes.style.display = "block";
    verComentariosQuery.style.display = "inline-block";
})

editarCombo.addEventListener('click', () => {
    verCombo.style.display = "none";
    editarCombo.style.display = "none";
    labelCombo.innerHTML = "Inserte el nombre del combo para editar"
    inputCombos.style.display = "block";
    editarComboQuery.style.display = "inline-block";
})

verCombo.addEventListener('click', () => {
    verCombo.style.display = "none";
    editarCombo.style.display = "none";
    labelCombo.innerHTML = "Inserte el nombre del combo para mostrar detalle de combo"
    inputCombos.style.display = "block";
    verComboQuery.style.display = "inline-block";
})

const cerrarsesion = document.querySelector("#cerrarsesionBtn").addEventListener("click", () => {

    /*Poner aqui codigo cuando se cierra sesion*/
});

const reservaBotton = document.querySelector("#reservaBtn").addEventListener("click", () => {
    if (clientesBotones.style.display = "block") {
        clientesBotones.style.display = "none";
    }
    if (combosBotones.style.display = "block") {
        combosBotones.style.display = "none";
    }
    verReserva.style.display = "inline-block";
    borrarReserva.style.display = "inline-block";
    reservaBotones.style.display = "block";
    labelReserva.innerHTML = "";
    inputReserva.style.display = "none";
    verReservaQuery.style.display = "none";
    BorrarReservaQuery.style.display = "none";
});

const clientesBotton = document.querySelector("#clientesBtn").addEventListener("click", () => {
    if (reservaBotones.style.display = "block") {
        reservaBotones.style.display = "none";
    }
    if (combosBotones.style.display = "block") {
        combosBotones.style.display = "none";
    }
    verClientes.style.display = "inline-block";
    verComentarios.style.display = "inline-block";
    clientesBotones.style.display = "block";
    labelClientes.innerHTML = "";
    inputClientes.style.display = "none";
    verClientesQuery.style.display = "none";
    verComentariosQuery.style.display = "none";
});

const combosBotton = document.querySelector("#combosBtn").addEventListener("click", () => {
    if (reservaBotones.style.display = "block") {
        reservaBotones.style.display = "none";
    }
    if (clientesBotones.style.display = "block") {
        clientesBotones.style.display = "none";
    }
    editarCombo.style.display = "inline-block";
    verCombo.style.display = "inline-block";
    combosBotones.style.display = "block";
    labelCombo.innerHTML = "";
    inputCombos.style.display = "none";
    editarComboQuery.style.display = "none";
    verComboQuery.style.display = "none";
});