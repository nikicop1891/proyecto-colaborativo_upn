const boton = document.getElementById("btnAccion");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {

    mensaje.textContent =
        "¡JavaScript está funcionando correctamente!";

});
