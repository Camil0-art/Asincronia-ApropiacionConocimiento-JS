/* 5. Transformando Callbacks en Promesas
Ejercicio:
Convertir el ejercicio anterior en una estructura basada en Promesas con .then().
Meta: visualizar cómo mejora la legibilidad. */

console.log("==== Inicio del programa ===");

function tomarDatos() {
    return new Promise((resolve) => { // declaracion de la promesa cumplida // 
    console.log("Tomando datos...");
    setTimeout(() => {
    console.log("Datos tomados");
    resolve();
    }, 2000);
    });
}


function procesarDatos() {
    return new Promise((resolve) => {
    console.log("Procesando datos...");
    setTimeout(() => {
        console.log("Datos procesados"); 
// el siguiente mensaje no se muestra despues de los 2 segundos //
    resolve();
    }, 2000);
    });
}

// creacion de la funcion mostrarResultado //
function mostrarResultado() {
    return new Promise((resolve) => {
    console.log("Mostrando resultado...");
    setTimeout(() => {
    console.log("Resultado mostrado");
    resolve();
    }, 2000);
    });
}

tomarDatos().then(() => {
    return procesarDatos();
}).then(() => { // se ejecuta cuando la promesa es verdadera //
    return mostrarResultado();
}).then(() => { // . se relaciona con la promesa //
    console.log("==== Fin del programa ===");
}); // cadena de promesas //












