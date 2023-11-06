function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var tel = document.getElementById("tel").value;

    var mensaje = document.getElementById("mensaje").value;

    // Validación de campos vacíos
    if (nombre === "" || email === "" || tel === ""|| mensaje === "") {
        alert("Todos los campos son obligatorios.");js/form.js
        return false;
    }

    // Validación de formato de email electrónico
    var emailRegExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!email.match(emailRegExp)) {
        alert("El email electrónico no es válido.");
        return false;
    }

    return true;


}