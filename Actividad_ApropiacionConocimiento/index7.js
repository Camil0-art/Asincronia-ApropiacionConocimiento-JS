/* 7. Uso de Async/Await
Ejercicio:
Crear una función async que espere una promesa de 2 segundos y luego muestre el resultado.
Meta: comprender cómo await pausa la ejecución sin bloquear el hilo. */

console.log("==== Inicio del programa ===");

async function esperar() { // funcion con async //
    return new Promise((resolve) => { // retorna una promesa //
        setTimeout(() => {
            resolve("Proceso Completado");
        }, 2000);
    });
}

async function ejecutar() {
    const Resultado = await esperar(); // se espera a que la promesa se cumpla //
    console.log(Resultado); // se imprime el resultado de la promesa cumplida //
}

ejecutar().then(() => { 
    console.log("==== Fin del programa ===");
});