/* 3. Manejo de asincronía con Callbacks
Ejercicio:
Crear una función llamada procesarPedido que simule un pedido de comida con un setTimeout de
3 segundos y que reciba un callback para mostrar un mensaje final, por ejemplo: “Pedido
entregado”.
Meta: comprender la ejecución diferida.*/

console.log("Inicio del programa");

function procesarPedido(callback) {
    console.log("Procesando pedido...");
    setTimeout(() => {
        console.log("Pedido listo para entregar");
        callback();
    }, 3000);
}

function mostrarMensajeFinal() {
    console.log("Pedido entregado");
}

procesarPedido(mostrarMensajeFinal);