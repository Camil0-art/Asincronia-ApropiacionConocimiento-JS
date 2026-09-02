/* 
4. Encadenamiento de Callbacks (Callback Hell controlado)
Ejercicio:
Crear tres procesos consecutivos (por ejemplo: tomar datos → procesar datos → mostrar
resultado), cada uno con un setTimeout, y enlazarlos mediante callbacks.
Meta: mostrar la complejidad que aparece cuando las tareas dependen unas de otras.*/

console.log("==== Inicio del programa ===");

function tomarDatos(callback) {
    console.log("Tomando datos...");
    setTimeout(() => {
        console.log("Datos tomados");
        callback();
    }, 2000);
}
// Creaccion de la funcion con el callback el cual imprime "Tomando datos"  //
// y luego de 2 segundos imprime "Datos tomados" y llama al callback. //


function procesarDatos(callback) {
    console.log("Procesando datos...");
    setTimeout(() => {
        console.log("Datos procesados");
        callback();
    }, 2000);
}


function mostrarResultado(callback) {
    console.log("Mostrando resultado...");
    setTimeout(() => {
        console.log("Resultado mostrado");
        callback();
    }, 2000);
}

tomarDatos(() => {
    procesarDatos(() => {
        mostrarResultado(() => {
            console.log("==== Fin del programa ===");
        });
    });
}); // encadenacion de las callbacks //