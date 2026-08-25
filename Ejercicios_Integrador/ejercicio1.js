/* Ejercicio integrador 1:
Simular un proceso de “consulta de usuario”, que requiere:
1. “Buscar usuario” (promesa de 1 segundo)
2. “Consultar permisos” (promesa de 2 segundos)
3. “Generar reporte final” (promesa de 1 segundo)
Realizarlo en tres versiones:
• Con callbacks
• Con promesas
• Con async/await
Meta: identificar ventajas y desventajas reales de cada técnica. */

// PRIMERA VERSION CALLBACKS //

/* creacion de la funcion con su callback de parametro //
function buscarUsuario(callback) {
    console.log("Buscando usuario...");
    setTimeout(() => {
    console.log("Usuario encontrado");
    callback();
    }, 1000);
}

function consultarPermisos(callback) {
    console.log("Consultando permisos...");
    setTimeout(() => {
    console.log("Permisos consultados");
    callback();
    }, 2000);
}

// creacion de la funcion con su callback de parametro //
function generarReporte(callback) {
    console.log("Generando reporte final...");
    setTimeout(() => {
    console.log("Reporte final generado");
    callback();
    }, 1000);
}

buscarUsuario(() => {
    consultarPermisos(() => {
        generarReporte(() => {
            console.log("==== Fin del programa con callback ===");
        });
    });
});  encadenacion de las callbacks */

// SEGUNDA VERSION PROMESAS //

function buscarUsuario() {
    return new Promise((resolve) => {
    console.log("Buscando usuario...");
    setTimeout(() => {
    console.log("Usuario encontrado");
    resolve();
    }, 1000);
    });
}


function consultarPermisos() {
    return new Promise((resolve) => {
    console.log("Consultando permisos...");
    setTimeout(() => {
    console.log("Permisos consultados");
    resolve();
    }, 2000);
    });
}

function generarReporte() {
    return new Promise((resolve) => {
    console.log("Generando reporte final...");
    setTimeout(() => {
    console.log("Reporte final generado");
    resolve();
    }, 1000);
    });
}

buscarUsuario()
.then(() => {
return consultarPermisos();
})
.then(() => {
return generarReporte();
})
.then(() => {
    console.log("==== Fin del programa con promesas ===");
});
