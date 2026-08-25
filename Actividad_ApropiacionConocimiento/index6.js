/* 6. Manejo de errores con Promesas
Ejercicio:
Crear una promesa que simule un proceso que puede fallar 50% de las veces usando resolve y
reject.
Meta: entender .catch() y la importancia del manejo de errores. */

console.log("==== Inicio del programa ===");

function procesoConError() {
    return new Promise((resolve, reject) => {
        console.log("Iniciando proceso...");
        setTimeout(() => {
            const exito = Math.random() > 0.5; // genera un numero aleatorio //
            if (exito) {
                console.log("Proceso exitoso");
                resolve(); // promesa completada //
            } else {
                console.log("Proceso fallido");
                reject("Error: El proceso ha fallado"); // promesa rechazada //
            }
        }, 2000);
    });
}

procesoConError()
    .then(() => { // se imprime cuando la promesa se cumplio //
        console.log("Continuando con el siguiente paso...");
    })
    .catch((error) => { // se imprime cuando la promesa es rechazada //
        console.error(error);
    }) // . se relaciona con la promesa //
    .final(() => {
        console.log("==== Fin del programa ===");
    });

